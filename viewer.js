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
let pushtalk = true;
let minimalbot = false;
let introspeech = true;
let getemail = false;

// DOM elements
const viewerContainer = document.getElementById('viewerContainer');
const loadingIndicator = document.getElementById('loadingIndicator');
const slideInfo = document.getElementById('slideInfo');
const currentSlideSpan = document.getElementById('currentSlide');
const totalSlidesSpan = document.getElementById('totalSlides');

viewerContainer.appendChild(canvas1);
viewerContainer.appendChild(canvas2);
canvas2.style.display = 'none';

function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    let value = params.get(name);
    if (value === null) {
        // Try to get the base64 encoded version
        const encodedName = encode(name);
        value = params.get(encodedName);
        if (value !== null) {
            value = decode(value);
        }
    }
    return value;
}

// Load the PDF
function loadPDF() {
    pushtalk = getUrlParameter('pushtalk') !== 'false';
    minimalbot = getUrlParameter('minimalbot') === 'true';
    introspeech = getUrlParameter('introspeech') !== 'false';
    getemail = getUrlParameter('getemail') === 'true';

    if (getemail) {
        showEmailForm();
        return;
    }

    loadingIndicator.classList.remove('hidden');
    pdfjsLib.getDocument('presentation.pdf').promise.then(function (pdf) {
        pdfDoc = pdf;
        totalSlidesSpan.textContent = pdf.numPages;
        loadingIndicator.classList.add('hidden');
        slideInfo.classList.remove('hidden');
        renderPage(pageNum);
        preloadPages(pageNum);
    }).catch(function (error) {
        console.error('Error loading PDF:', error);
        loadingIndicator.textContent = 'Error loading PDF';
    });
}

function showEmailForm() {
    const emailForm = document.createElement('div');
    emailForm.innerHTML = `
        <form id="emailForm" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
            <h2>Please enter your email to access the presentation</h2>
            <input type="email" id="emailInput" required style="display: block; width: 100%; margin: 10px 0; padding: 5px;">
            <button type="submit" style="display: block; width: 100%; padding: 10px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">Submit</button>
        </form>
    `;
    document.body.appendChild(emailForm);

    document.getElementById('emailForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('emailInput').value;
        fetch('https://n8n.skoop.digital/webhook/d3b0dec5-d870-4d0e-b810-79df3e51fad1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            document.body.removeChild(emailForm);
            loadPDF();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
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
    if (avatarIframe && pushtalk) {
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

// Preload pages
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

// Render the specified page
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

    // Preload avatar iframe or video on slide 3
    if (num === 3 && !avatarIframe) {
        createAvatarIframe(activeCanvas);
    }

    // Show avatar iframe or video on slide 5
    if (num === 5 && avatarIframe) {
        avatarIframe.classList.add('visible');
        avatarVisible = true;
        positionAvatarIframe();
        
        if (introspeech && pushtalk) {
            setTimeout(() => {
                sendMessageToAvatar("<speak> Hello there, <break strength=\"medium\"/> feel free to ask me anything about <phoneme alphabet=\"ipa\" ph=\"skuːp\">Skoop</phoneme><break strength=\"medium\"/>, I'll try my best to answer correctly. </speak>");
            }, 5000);
        }
    } else if (avatarIframe) {
        if (!minimalbot && pushtalk) {
            avatarIframe.classList.remove('visible');
            avatarVisible = false;
            avatarIframe.classList.add('bottom-right');
        } else {
            avatarIframe.classList.remove('visible');
            avatarVisible = false;
            avatarIframe.classList.remove('bottom-right');
        }
    }
}

function transitionSlides(activeCanvas, inactiveCanvas) {
    activeCanvas.style.display = 'block';
    activeCanvas.style.opacity = 0;

    // Force a reflow to ensure the initial opacity is applied
    void activeCanvas.offsetWidth;

    activeCanvas.style.opacity = 1;
    inactiveCanvas.style.opacity = 0;

    // Wait for the transition to complete
    setTimeout(() => {
        inactiveCanvas.style.display = 'none';
        pageRendering = false;
        if (pageNumPending !== null) {
            renderPage(pageNumPending);
            pageNumPending = null;
        }
        preloadPages(pageNum + 1);
    }, 400); // This should match the transition duration in the CSS

    fitCanvasToScreen(activeCanvas);
    fitCanvasToScreen(inactiveCanvas);
}

// Queue rendering of a page
function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

// Go to previous page
function onPrevPage() {
    if (pageNum <= 1) {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
}

// Go to next page
function onNextPage() {
    if (pageNum === 5 && avatarIframe && !avatarIframe.classList.contains('bottom-right')) {
        avatarIframe.classList.add('bottom-right');
        pageNum++;
        queueRenderPage(pageNum);
        return;
    }
    if (pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
}

// Fit canvas to screen
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
}

// Show slide info and hide after 3 seconds
function showSlideInfo() {
    slideInfo.classList.remove('hidden');
    clearTimeout(slideInfo.hideTimeout);
    slideInfo.hideTimeout = setTimeout(() => {
        slideInfo.classList.add('hidden');
    }, 3000);
}

// Create and position avatar iframe
function createAvatarIframe(canvas) {
    console.log("Creating avatar iframe or video");
    if (pushtalk) {
        avatarIframe = document.createElement('iframe');
        avatarIframe.id = 'avatarIframe';
        avatarIframe.src = 'https://avatar.skoop.digital/index-agents.html?avatar=e053f447-1455-43df-b76a-9504f9276987&context=7dcc2aa8-dbd9-46b3-8b1c-c953dcd34a50&header=false&interfaceMode=simplePushTalk';
        avatarIframe.style.background = 'transparent';
        avatarIframe.scrolling = 'no';
        avatarIframe.allow = "microphone; camera; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    } else {
        avatarIframe = document.createElement('video');
        avatarIframe.id = 'avatarVideo';
        avatarIframe.src = 'video.mp4';
        avatarIframe.autoplay = true;
        avatarIframe.loop = true;
        avatarIframe.muted = true;
    }
    viewerContainer.appendChild(avatarIframe);

    positionAvatarIframe(canvas);
}


// Position avatar iframe
function positionAvatarIframe() {
    if (!avatarIframe || !avatarVisible) return;

    const activeCanvas = canvas1.style.display !== 'none' ? canvas1 : canvas2;
    const canvasRect = activeCanvas.getBoundingClientRect();
    const containerRect = viewerContainer.getBoundingClientRect();

    if (!pushtalk || (pushtalk && !avatarIframe.classList.contains('bottom-right'))) {
        // Position in the original location for video or iframe when not in bottom-right
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
    } else {
        // Position in bottom-right for iframe when in bottom-right mode
        const width = '20%';
        const height = '24%';
        const right = '20px';
        const bottom = '20px';

        avatarIframe.style.width = width;
        avatarIframe.style.height = height;
        avatarIframe.style.right = right;
        avatarIframe.style.bottom = bottom;
        avatarIframe.style.left = 'auto';
        avatarIframe.style.top = 'auto';
    }
}


// Event listeners
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
    }
});

document.addEventListener('click', onNextPage);

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
});

// Fullscreen function
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Add fullscreen event listener
document.addEventListener('keydown', function (e) {
    if (e.key === 'f') {
        toggleFullScreen();
    }
});

// Add Posthog tracking
const script = document.createElement('script');
script.innerHTML = `
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init push capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    posthog.init('phc_FDZSd9oWIayFbhjAq64QT95qN9ncqyqJtXod8pRy6bi',{api_host:'https://us.i.posthog.com', person_profiles: 'identified_only'});
`;
document.head.appendChild(script);

// Initialize
loadPDF();

// Export functions for use in other modules if needed
export {
    onPrevPage,
    onNextPage,
    toggleFullScreen
};