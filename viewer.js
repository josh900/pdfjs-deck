import * as pdfjsLib from './build/pdf.mjs';
import { encode, decode } from './base64.js';

// Initialize PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = './build/pdf.worker.mjs';

// Variables
let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
let scale = 1;
const canvas1 = document.createElement('canvas');
const canvas2 = document.createElement('canvas');
const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const pageCache = new Map();
let avatarIframe = null;
let avatarVisible = false;
let videoElement = null;

// DOM elements
const viewerContainer = document.getElementById('viewerContainer');
const loadingIndicator = document.getElementById('loadingIndicator');
const navigationControls = document.getElementById('navigationControls');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const slideInfo = document.getElementById('slideInfo');
const currentSlideSpan = document.getElementById('currentSlide');
const totalSlidesSpan = document.getElementById('totalSlides');
const slideSwitcher = document.getElementById('slideSwitcher');
const hamburgerButton = document.getElementById('hamburgerButton');
const thumbnailContainer = document.getElementById('thumbnailContainer');

viewerContainer.appendChild(canvas1);
viewerContainer.appendChild(canvas2);
canvas2.style.display = 'none';

function getUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const params = {};

    for (const [key, value] of urlParams.entries()) {
        try {
            const decodedKey = decode(key);
            if (decodedKey.includes('=')) {
                const [dKey, dValue] = decodedKey.split('=');
                params[dKey] = dValue;
            } else {
                params[key] = value;
            }
        } catch (e) {
            params[key] = value;
        }
    }

    return params;
}

const urlParams = getUrlParameters();

const pushTalk = urlParams['pushtalk'] === 'true';
const minimalBot = urlParams['minimalbot'] !== 'false';
const introSpeech = urlParams['introspeech'] === 'true';
const getEmail = urlParams['getemail'] !== 'false';

function showEmailForm() {
    const formHtml = `
        <div id="emailFormContainer" class="email-form-container">
            <form id="emailForm" class="email-form">
                <h2>Please enter your email to access the presentation</h2>
                <input type="email" id="emailInput" required placeholder="Your email">
                <button type="submit">Submit</button>
            </form>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', formHtml);

    document.getElementById('emailForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('emailInput').value;
        submitEmail(email);
    });
}

function submitEmail(email) {
    fetch('https://n8n.skoop.digital/webhook/d3b0dec5-d870-4d0e-b810-79df3e51fad1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('emailFormContainer').remove();
        loadPDF();

        if (typeof posthog !== 'undefined') {
            posthog.identify(email);
            posthog.people.set({ email: email });
            posthog.capture('Email Submitted', { email: email });
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}

function loadPDF() {
    loadingIndicator.classList.remove('hidden');
    pdfjsLib.getDocument('presentation.pdf').promise.then(function (pdf) {
        pdfDoc = pdf;
        totalSlidesSpan.textContent = pdf.numPages;
        loadingIndicator.classList.add('hidden');
        slideInfo.classList.remove('hidden');
        renderPage(pageNum);
        preloadPages(pageNum);
        createThumbnails();
    }).catch(function (error) {
        console.error('Error loading PDF:', error);
        loadingIndicator.textContent = 'Error loading PDF';
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function sendMessageToAvatar(message) {
    if (avatarIframe && introSpeech) {
        avatarIframe.contentWindow.postMessage({ action: 'speak', text: message }, '*');
    }
}

const debouncedPositionAvatar = debounce(() => {
    if (avatarVisible) {
        positionAvatarIframe();
    }
}, 100);

window.addEventListener('resize', () => {
    const activeCanvas = canvas1.style.display !== 'none' ? canvas1 : canvas2;
    fitCanvasToScreen(activeCanvas);
    debouncedPositionAvatar();
});

function preloadPages(currentPage) {
    const pagesToLoad = [currentPage, currentPage + 1, currentPage + 2];
    pagesToLoad.forEach(pageNumber => {
        if (pageNumber <= pdfDoc.numPages && !pageCache.has(pageNumber)) {
            pdfDoc.getPage(pageNumber).then(page => {
                const viewport = page.getViewport({ scale: scale });
                const tempCanvas = document.createElement('canvas');
                const tempCtx = tempCanvas.getContext('2d');
                tempCanvas.height = viewport.height;
                tempCanvas.width = viewport.width;

                const renderContext = {
                    canvasContext: tempCtx,
                    viewport: viewport
                };
                page.render(renderContext).promise.then(() => {
                    pageCache.set(pageNumber, tempCanvas);
                });
            });
        }
    });
}

function renderPage(num) {
    pageRendering = true;
    currentSlideSpan.textContent = num;

    showSlideInfo();

    const activeCanvas = canvas1.style.display !== 'none' ? canvas1 : canvas2;
    const inactiveCanvas = canvas1.style.display !== 'none' ? canvas2 : canvas1;
    const activeCtx = activeCanvas === canvas1 ? ctx1 : ctx2;

    if (pageCache.has(num)) {
        activeCtx.drawImage(pageCache.get(num), 0, 0);
        transitionSlides(activeCanvas, inactiveCanvas);
    } else {
        pdfDoc.getPage(num).then(function (page) {
            const viewport = page.getViewport({ scale: scale });
            activeCanvas.height = viewport.height;
            activeCanvas.width = viewport.width;

            const renderContext = {
                canvasContext: activeCtx,
                viewport: viewport
            };
            const renderTask = page.render(renderContext);

            renderTask.promise.then(function () {
                transitionSlides(activeCanvas, inactiveCanvas);
            });
        });
    }

    if (num === 3 && !avatarIframe && !videoElement) {
        if (pushTalk) {
            createAvatarIframe(activeCanvas);
        } else {
            createVideoElement(activeCanvas);
        }
    }

    if (num === 5) {
        if (pushTalk && avatarIframe) {
            avatarIframe.classList.add('visible');
            avatarVisible = true;
            positionAvatarIframe();

            if (introSpeech) {
                setTimeout(() => {
                    sendMessageToAvatar("<speak> Hello there, <break strength=\"medium\"/> feel free to ask me anything about <phoneme alphabet=\"ipa\" ph=\"skuːp\">Skoop</phoneme><break strength=\"medium\"/>, I'll try my best to answer correctly. </speak>");
                }, 5000);
            }
        } else if (!pushTalk && videoElement) {
            videoElement.classList.add('visible');
            positionVideoElement();
        }
    } else if (num > 5) {
        if (pushTalk && avatarIframe) {
            if (minimalBot) {
                avatarIframe.classList.remove('visible');
                avatarIframe.classList.remove('bottom-right');
                avatarVisible = false;
            } else {
                avatarIframe.classList.add('visible');
                avatarIframe.classList.add('bottom-right');
                avatarVisible = true;
                positionAvatarIframe();
            }
        } else if (!pushTalk && videoElement) {
            if (minimalBot) {
                videoElement.classList.remove('visible');
                videoElement.classList.remove('bottom-right');
            } else {
                videoElement.classList.add('visible');
                videoElement.classList.add('bottom-right');
                positionVideoElement();
            }
        }
    } else {
        if (pushTalk && avatarIframe) {
            avatarIframe.classList.remove('visible');
            avatarIframe.classList.remove('bottom-right');
            avatarVisible = false;
        } else if (!pushTalk && videoElement) {
            videoElement.classList.remove('visible');
            videoElement.classList.remove('bottom-right');
        }
    }
}

function transitionSlides(activeCanvas, inactiveCanvas) {
    activeCanvas.style.display = 'block';
    activeCanvas.style.opacity = 0;

    void activeCanvas.offsetWidth;

    activeCanvas.style.opacity = 1;
    inactiveCanvas.style.opacity = 0;

    setTimeout(() => {
        inactiveCanvas.style.display = 'none';
        pageRendering = false;
        if (pageNumPending !== null) {
            renderPage(pageNumPending);
            pageNumPending = null;
        }
        preloadPages(pageNum + 1);
    }, 400);

    fitCanvasToScreen(activeCanvas);
    fitCanvasToScreen(inactiveCanvas);
}

function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

function onPrevPage() {
    if (pageNum <= 1) {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
}

function onNextPage() {
    if (pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
}

function fitCanvasToScreen(canvas) {
    const containerWidth = viewerContainer.clientWidth;
    const containerHeight = viewerContainer.clientHeight;
    const canvasAspect = canvas.width / canvas.height;
    const containerAspect = containerWidth / containerHeight;

    let newWidth, newHeight;

    if (canvasAspect > containerAspect) {
        newWidth = containerWidth;
        newHeight = newWidth / canvasAspect;
    } else {
        newHeight = containerHeight;
        newWidth = newHeight * canvasAspect;
    }

    canvas.style.width = newWidth + 'px';
    canvas.style.height = newHeight + 'px';
    canvas.style.position = 'absolute';
    canvas.style.left = ((containerWidth - newWidth) / 2) + 'px';
    canvas.style.top = ((containerHeight - newHeight) / 2) + 'px';

    if (avatarVisible) {
        positionAvatarIframe();
    }
    if (videoElement) {
        positionVideoElement();
    }
}

function showSlideInfo() {
    slideInfo.style.opacity = '1';
    clearTimeout(slideInfo.hideTimeout);
    slideInfo.hideTimeout = setTimeout(() => {
        slideInfo.style.opacity = '0';
    }, 3000);
}

function createAvatarIframe(canvas) {
    console.log("Creating avatar iframe");
    avatarIframe = document.createElement('iframe');
    avatarIframe.id = 'avatarIframe';
    avatarIframe.src = 'https://avatar.skoop.digital/index-agents.html?avatar=e053f447-1455-43df-b76a-9504f9276987&context=7dcc2aa8-dbd9-46b3-8b1c-c953dcd34a50&header=false&interfaceMode=simplePushTalk';
    avatarIframe.style.background = 'transparent';
    avatarIframe.scrolling = 'no';
    avatarIframe.allow = "microphone; camera; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    viewerContainer.appendChild(avatarIframe);

    positionAvatarIframe(canvas);
}

function positionAvatarIframe() {
    if (!avatarIframe || !avatarVisible) return;

    const activeCanvas = canvas1.style.display !== 'none' ? canvas1 : canvas2;
    const canvasRect = activeCanvas.getBoundingClientRect();
    const containerRect = viewerContainer.getBoundingClientRect();

    if (avatarIframe.classList.contains('bottom-right')) {
        const iframeWidth = containerRect.width * 0.2;
        const iframeHeight = containerRect.height * 0.24;
        avatarIframe.style.width = `${iframeWidth}px`;
        avatarIframe.style.height = `${iframeHeight}px`;
        avatarIframe.style.right = '20px';
        avatarIframe.style.bottom = '20px';
        avatarIframe.style.left = 'auto';
        avatarIframe.style.top = 'auto';
    } else {
        const relativeWidth = 0.29;
        const relativeHeight = 0.50;
        const relativeLeft = 0.655;
        const relativeTop = 0.180;

        const iframeWidth = canvasRect.width * relativeWidth;
        const iframeHeight = canvasRect.height * relativeHeight;
        const iframeLeft = canvasRect.left - containerRect.left + (canvasRect.width * relativeLeft);
        const iframeTop = canvasRect.top - containerRect.top + (canvasRect.height * relativeTop);

        avatarIframe.style.width = `${iframeWidth}px`;
        avatarIframe.style.height = `${iframeHeight}px`;
        avatarIframe.style.left = `${iframeLeft}px`;
        avatarIframe.style.top = `${iframeTop}px`;
        avatarIframe.style.right = 'auto';
        avatarIframe.style.bottom = 'auto';
    }
}

function createVideoElement(canvas) {
    console.log("Creating video element");
    videoElement = document.createElement('video');
    videoElement.id = 'avatarVideo';
    videoElement.src = 'video.mp4';
    videoElement.style.background = 'transparent';
    videoElement.style.borderRadius = '9%';
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.muted = true;  // Muted to allow autoplay in most browsers
    videoElement.playsInline = true;  // For better mobile support
    videoElement.controls = false;  // Remove controls
    viewerContainer.appendChild(videoElement);

    positionVideoElement(canvas);

    // Ensure the video plays
    videoElement.play().catch(e => console.error("Error attempting to play video:", e));
}

function positionVideoElement() {
    if (!videoElement) return;

    const activeCanvas = canvas1.style.display !== 'none' ? canvas1 : canvas2;
    const canvasRect = activeCanvas.getBoundingClientRect();
    const containerRect = viewerContainer.getBoundingClientRect();

    if (videoElement.classList.contains('bottom-right')) {
        const videoWidth = containerRect.width * 0.2;
        const videoHeight = containerRect.height * 0.24;
        videoElement.style.width = `${videoWidth}px`;
        videoElement.style.height = `${videoHeight}px`;
        videoElement.style.right = '20px';
        videoElement.style.bottom = '20px';
        videoElement.style.left = 'auto';
        videoElement.style.top = 'auto';
    } else {
        const relativeWidth = 0.29;
        const relativeHeight = 0.50;
        const relativeLeft = 0.655;
        const relativeTop = 0.180;

        const videoWidth = canvasRect.width * relativeWidth;
        const videoHeight = canvasRect.height * relativeHeight;
        const videoLeft = canvasRect.left - containerRect.left + (canvasRect.width * relativeLeft);
        const videoTop = canvasRect.top - containerRect.top + (canvasRect.height * relativeTop);

        videoElement.style.width = `${videoWidth}px`;
        videoElement.style.height = `${videoHeight}px`;
        videoElement.style.left = `${videoLeft}px`;
        videoElement.style.top = `${videoTop}px`;
        videoElement.style.right = 'auto';
        videoElement.style.bottom = 'auto';
    }
    videoElement.style.position = 'absolute';
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Slide Switcher Functions
function toggleSlideSwitcher() {
    slideSwitcher.classList.toggle('open');
    if (slideSwitcher.classList.contains('open')) {
        navigationControls.style.left = '320px';
    } else {
        navigationControls.style.left = '20px';
    }
}

async function createThumbnails() {
    thumbnailContainer.innerHTML = '';
    for (let i = 1; i <= pdfDoc.numPages; i++) {
        const page = await pdfDoc.getPage(i);
        const viewport = page.getViewport({ scale: 0.2 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        await page.render({ canvasContext: context, viewport: viewport }).promise;
        
        const thumbnailItem = document.createElement('div');
        thumbnailItem.classList.add('thumbnail-item');
        thumbnailItem.innerHTML = `
            <img src="${canvas.toDataURL()}" alt="Page ${i}">
            <span> ${i}</span>
        `;
        thumbnailItem.addEventListener('click', () => {
            pageNum = i;
            queueRenderPage(pageNum);
            toggleSlideSwitcher();
        });
        thumbnailContainer.appendChild(thumbnailItem);
    }
}

// Event Listeners
hamburgerButton.addEventListener('click', toggleSlideSwitcher);

prevButton.addEventListener('click', function(e) {
    e.stopPropagation();
    onPrevPage();
});

nextButton.addEventListener('click', function(e) {
    e.stopPropagation();
    onNextPage();
});

document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
            onPrevPage();
            break;
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
            onNextPage();
            break;
        case 'f':
            toggleFullScreen();
            break;
    }
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.navButton') && !e.target.closest('.slide-switcher')) {
        onNextPage();
    }
});

let touchStartX = 0;
document.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function (e) {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) onNextPage();
    if (touchEndX > touchStartX + 50) onPrevPage();
});

window.addEventListener('resize', () => {
    const activeCanvas = canvas1.style.display !== 'none' ? canvas1 : canvas2;
    fitCanvasToScreen(activeCanvas);
    if (avatarVisible) {
        positionAvatarIframe(activeCanvas);
    }
    if (videoElement) {
        positionVideoElement();
    }
});

// Initialize
if (getEmail) {
    showEmailForm();
} else {
    loadPDF();
}

// Make sure navigation controls are always visible
navigationControls.style.opacity = '1';