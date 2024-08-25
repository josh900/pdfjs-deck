The following text is a Git repository with code. The structure of the text are sections that begin with ----, followed by a single line containing the file path and file name, followed by a variable amount of lines containing the file contents. The text representing the Git repository ends when the symbols --END-- are encounted. Any further text beyond --END-- are meant to be interpreted as instructions using the aforementioned Git repository as context.
----
index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skoop Deck</title>
    <link rel="stylesheet" href="viewer.css">
    <script src="build/pdf.mjs" type="module"></script>
    <link rel="icon" type="image/png" sizes="192x192"
    href="https://cdn.prod.website-files.com/6316d11d553f411d6f1fa732/6343f55adbb1a12a532f2769_skoop-favicon.png" />
</head>
<body>
    <div id="viewerContainer">
        <div id="viewer" class="pdfViewer"></div>
    </div>
    <div id="loadingIndicator" class="hidden">Loading...</div>
    <div id="slideInfo" class="hidden">Slide <span id="currentSlide"></span> of <span id="totalSlides"></span></div>
    <script src="viewer.js" type="module"></script>
</body>
</html>
----
viewer.css
body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: black;
    color: white;
    font-family: Arial, sans-serif;
}

#viewerContainer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

canvas {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.4s ease-in-out;
}

#loadingIndicator {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    background-color: rgba(184, 184, 184, 0.7);
    padding: 20px 40px;
    border-radius: 10px;
    
}

#loadingIndicator::after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid white;
    border-top: 3px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-left: 10px;
    vertical-align: middle;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

#slideInfo {
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-size: 16px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-radius: 5px;
    transition: opacity 0.3s ease-in-out;
}

.hidden {
    opacity: 0;
    pointer-events: none;
}

#avatarIframe {
    position: absolute;
    border: none;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    pointer-events: none;
}


#avatarIframe.visible {
    opacity: 1;
    pointer-events: auto;
}

#avatarIframe.bottom-right {
    width: 20% !important;
    height: 24% !important;
    right: 20px !important;
    bottom: 20px !important;
    top: auto !important;
    left: auto !important;
}
----
viewer.js
import * as pdfjsLib from './build/pdf.mjs';

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

// DOM elements
const viewerContainer = document.getElementById('viewerContainer');
const loadingIndicator = document.getElementById('loadingIndicator');
const slideInfo = document.getElementById('slideInfo');
const currentSlideSpan = document.getElementById('currentSlide');
const totalSlidesSpan = document.getElementById('totalSlides');

viewerContainer.appendChild(canvas1);
viewerContainer.appendChild(canvas2);
canvas2.style.display = 'none';

// Load the PDF
function loadPDF() {
    loadingIndicator.classList.remove('hidden');
    pdfjsLib.getDocument('presentation.pdf').promise.then(function(pdf) {
        pdfDoc = pdf;
        totalSlidesSpan.textContent = pdf.numPages;
        loadingIndicator.classList.add('hidden');
        slideInfo.classList.remove('hidden');
        renderPage(pageNum);
        preloadPages(pageNum);
    }).catch(function(error) {
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
                const viewport = page.getViewport({scale: scale});
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
        pdfDoc.getPage(num).then(function(page) {
            const viewport = page.getViewport({scale: scale});
            activeCanvas.height = viewport.height;
            activeCanvas.width = viewport.width;

            const renderContext = {
                canvasContext: activeCtx,
                viewport: viewport
            };
            const renderTask = page.render(renderContext);

            renderTask.promise.then(function() {
                transitionSlides(activeCanvas, inactiveCanvas);
            });
        });
    }

    // Preload avatar iframe on slide 3
    if (num === 3 && !avatarIframe) {
        createAvatarIframe(activeCanvas);
    }

    // Show avatar iframe on slide 5
    if (num === 5 && avatarIframe) {
        avatarIframe.classList.add('visible');
        avatarVisible = true;
        positionAvatarIframe();
    } else if (avatarIframe) {
        // avatarIframe.classList.remove('visible');
        // avatarVisible = false;
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
    console.log("Creating avatar iframe");
    avatarIframe = document.createElement('iframe');
    avatarIframe.id = 'avatarIframe';
    avatarIframe.src = 'https://avatar-stage.skoop.digital/index-agents.html?avatar=fdc710f6-33ba-4514-8cd8-44fc5218fa87&header=false&interfaceMode=simplePushTalk';
    avatarIframe.style.background = 'transparent';
    avatarIframe.scrolling = 'no';
    avatarIframe.allow = "microphone; camera; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    viewerContainer.appendChild(avatarIframe);

    positionAvatarIframe(canvas);
}

// Position avatar iframe
function positionAvatarIframe() {
    if (!avatarIframe || !avatarVisible) return;

    const activeCanvas = canvas1.style.display !== 'none' ? canvas1 : canvas2;
    const canvasRect = activeCanvas.getBoundingClientRect();
    const containerRect = viewerContainer.getBoundingClientRect();

    // These percentages represent the position and size relative to the PDF
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
}

// Event listeners
document.addEventListener('keydown', function(e) {
    switch(e.key) {
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
document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
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
document.addEventListener('keydown', function(e) {
    if (e.key === 'f') {
        toggleFullScreen();
    }
});

// Initialize
loadPDF();
--END--