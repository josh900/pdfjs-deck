
The following is a set of information and documents ending with a question for you to reply to. 

The information and documents are separated by @@@␜-<item name>



@@@␜-pdfjs docs

Getting Started
===============

An introduction to PDF.js with examples.

Introduction
------------

Before downloading PDF.js please take a moment to understand the different layers of the PDF.js project.

| Layer | About |
| --- | --- |
| Core | The core layer is where a binary PDF is parsed and interpreted. This layer is the foundation for all subsequent layers. It is not documented here because using it directly is considered an advanced usage and the API is likely to change. For an example of using the core layer see the [PDF Object Browser](https://github.com/brendandahl/pdf.js.utils/tree/master/browser). |
| Display | The display layer takes the core layer and exposes an easier to use API to render PDFs and get other information out of a document. This API is what the version number is based on. |
| Viewer | The viewer is built on the display layer and is the UI for PDF viewer in Firefox and the other browser extensions within the project. It can be a good starting point for building your own viewer. *However, we do ask if you plan to embed the viewer in your own site, that it not just be an unmodified version. Please re-skin it or build upon it.* |

Download
--------

Please refer to [this wiki page](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#faq-support) for information about supported browsers.

### Prebuilt (modern browsers)

Includes the generic build of PDF.js and the viewer.

[Stable (v4.5.136)](https://github.com/mozilla/pdf.js/releases/download/v4.5.136/pdfjs-4.5.136-dist.zip)

### Prebuilt (older browsers)

Includes the generic build of PDF.js and the viewer.

[Stable (v4.5.136)](https://github.com/mozilla/pdf.js/releases/download/v4.5.136/pdfjs-4.5.136-legacy-dist.zip)

### Source

To get a local copy of the current code, clone it using git:

```
$ git clone https://github.com/mozilla/pdf.js.git
$ cd pdf.js

```

Including via a CDN
-------------------

PDF.js is hosted on several free CDNs:

-   <https://www.jsdelivr.com/package/npm/pdfjs-dist>
-   <https://cdnjs.com/libraries/pdf.js>
-   <https://unpkg.com/pdfjs-dist/>

File Layout Overview
--------------------

Note that we only mention the most relevant files and folders.

### Prebuilt

```
├── build/
│   ├── pdf.mjs                            - display layer
│   ├── pdf.mjs.map                        - display layer's source map
│   ├── pdf.worker.mjs                     - core layer
│   └── pdf.worker.mjs.map                 - core layer's source map
├── web/
│   ├── cmaps/                             - character maps (required by core)
│   ├── compressed.tracemonkey-pldi-09.pdf - PDF file for testing purposes
│   ├── images/                            - images for the viewer and annotation icons
│   ├── locale/                            - translation files
│   ├── viewer.css                         - viewer style sheet
│   ├── viewer.html                        - viewer layout
│   ├── viewer.mjs                         - viewer layer
│   └── viewer.mjs.map                     - viewer layer's source map
└── LICENSE

```

### Source

```
├── docs/                                  - website source code
├── examples/                              - simple usage examples
├── extensions/                            - browser extension source code
├── external/                              - third party code
├── l10n/                                  - translation files
├── src/
│   ├── core/                              - core layer
│   ├── display/                           - display layer
│   ├── shared/                            - shared code between the core and display layers
│   ├── interfaces.js                      - interface definitions for the core/display layers
│   └── pdf.*.js                           - wrapper files for bundling
├── test/                                  - unit, font, reference, and integration tests
├── web/                                   - viewer layer
├── LICENSE
├── README.md
├── gulpfile.mjs                           - build scripts/logic
├── package-lock.json                      - pinned dependency versions
└── package.json                           - package definition and dependencies

```

Trying the Viewer
-----------------

With the prebuilt or source version, open `web/viewer.html` in a browser and the test pdf should load. Note: the worker is not enabled for file:// urls, so use a server. If you're using the source build and have node, you can run `npx gulp server`.

More Information
----------------

For a further walkthrough of a minimal viewer, see the hello world example. More documentation can be found in our [wiki](https://github.com/mozilla/pdf.js/wiki) too.

Frequently Asked Questions
==========================

Tim van der Meij edited this page 3 weeks ago - [153 revisions](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions/_history)

-   [Can I specify a different PDF in the default viewer?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#file)
-   [Can I load a PDF from another server (cross domain request)?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#faq-xhr)
-   [Which browsers/environments are supported?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#faq-support)
-   [Which browsers have extensions (and where can I find install procedures)?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#faq-extensions)
-   [Reasons for the Error: `The API version "a.b.c" does not match the Worker version "x.y.z"`?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#version-mismatch)
-   [I know JavaScript and want to contribute to the project. How do I start?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#faq-contrib)
-   [Is it possible to add annotations to a PDF?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#faq-annotations)
-   [What are the PDF.js keyboard shortcuts?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#faq-shortcuts)
-   [The PDF.js files are too big. Is it possible to obtain minified versions of the JS files?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#minified)
-   [Is there a pre-built version PDF.js available?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#gh-pages)
-   [What is the ECCN for PDF.js?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#eccn)
-   [PDF.js does not render my files right. Can I report an issue?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#issue)
-   [I know that my PDFs are corrupted. Will PDF.js attempt to display it?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#corrupted-pdf)
-   [I have a really great idea. Where is the best place to record it?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#idea)
-   [I'm developing a custom solution based on PDF.js core library. Can you help me?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#custom)
-   [I want to render all 100 pages in a document at a high resolution. Is it a good idea?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#allthepages)
-   [PDF.js is fetching the entire PDF file from a server. Can it fetch only the required portions for rendering?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#range)
-   [What is the latest stable version of PDF.js?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#version)
-   [What types of PDF files are slow in PDF.js? Can I optimize a PDF file to make PDF.js faster?](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#optimize)

Can I specify a different PDF in the default viewer?
----------------------------------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#can-i-specify-a-different-pdf-in-the-default-viewer)

You can modify the `defaultUrl` app option in the `web/app_options.js` file or you can append the `?file=` query string to the viewer URL, e.g. `http://mozilla.github.com/pdf.js/web/viewer.html?file=compressed.tracemonkey-pldi-09.pdf`. In the latter case, the PDF path/URL must be encoded using `encodeURIComponent()`.

The viewer can be started without any PDF loaded by setting the `defaultUrl` app option to an empty string or by using the `?file=` query string without any location specified. Use `PDFViewerApplication.open({ url: file });` to load the PDF file later.

You can use raw binary data to open a PDF document: use Uint8Array instead of URL in the `PDFViewerApplication.open` call. If you have base64 encoded data, please [decode](https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding) it first -- not all browsers have `atob` or data URI scheme support. (The base64 conversion operation uses more memory, so we recommend delivering raw PDF data as typed array in first place.)

Can I load a PDF from another server (cross domain request)?
------------------------------------------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#can-i-load-a-pdf-from-another-server-cross-domain-request)

Not by default, but it is possible. PDF.js runs with the same permissions as any other JavaScript code, which means it cannot do cross origin requests (see [Same origin policy](http://en.wikipedia.org/wiki/Same_origin_policy) and [an example](https://gist.github.com/3452072)). There are some possible ways to get around this such as using [CORS](http://enable-cors.org/) (see also [unsafe headers issue](https://github.com/mozilla/pdf.js/issues/3150#issuecomment-17582371) and [Access-Control-Expose-Headers issue](https://github.com/mozilla/pdf.js/issues/4530)) or setting up a proxy on your server that will feed PDF.js the PDF file (example: <https://github.com/mozilla/pdf.js/issues/1000#issuecomment-133756244>). Please notice that generic/demo viewer blocks this functionality if deployed not on mozilla.github.io domain to avoid content spoofing (see <https://github.com/mozilla/pdf.js/pull/6916>).

Which browsers/environments are supported?
------------------------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#which-browsersenvironments-are-supported)

By default we produce a non-translated/non-polyfilled build, intended for *the latest* browsers. However, we also provide a translated/polyfilled build for older browsers in a separate bundle (with a `legacy` suffix).

The objective is to support all HTML5 compliant browsers, but since feature support varies per browser/version our support for all PDF features varies as well. If no version is indicated, then *the latest* desktop/mobile versions are implied.

### Modern build

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#modern-build)

| Browser/environment | Supported | Automated testing | Notes |
| Firefox | Yes | Windows/Linux |  |
| Chrome | Yes | Windows/Linux |  |

### `legacy` build

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#legacy-build)

| Browser/environment | Supported | Automated testing | Notes |
| Firefox ESR+ | Yes | None |  |
| Chrome 98+ | Yes | None |  |
| Opera | Yes | None |  |
| Edge | Yes | None | Only the Chromium-based version. |
| Safari 16.4+ | Mostly | None | Some missing features/defects have been reported, but no problems in general. |
| Node.js 18+ | Mostly | Limited | Some missing features, but no problems in general. |

Which browsers have extensions (and where can I find install procedures)?
-------------------------------------------------------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#which-browsers-have-extensions-and-where-can-i-find-install-procedures)

The Chromium extension is maintained by a PDF.js contributor. To install the Chromium extension, please refer to the [README](https://github.com/mozilla/pdf.js/blob/master/README.md).

The Firefox extension is not supported and marked as disabled for Firefox versions 35 and up. PDF.js is part of Firefox since version 19. The extension is mostly used by developers and for bringing a newer version of the PDF.js library to an older Firefox version. Users should uninstall the extension, revert the `pdfjs.disabled` configuration setting and set the `Options -> Applications` selection for PDF documents to the internal viewer to continue viewing PDF files with PDF.js in Firefox.

Reasons for the Error: `The API version "a.b.c" does not match the Worker version "x.y.z"`?
-------------------------------------------------------------------------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#reasons-for-the-error-the-api-version-abc-does-not-match-the-worker-version-xyz)

When using the PDF.js library, it's necessary to use the *exact* same version of the `pdf.js` and `pdf.worker.js` files since otherwise things are not guaranteed to work correctly. In order to prevent bugs, the library will thus throw the aforementioned Error if there's a version mismatch.

Possible reasons for this Error include (but may not be limited to):

-   Updating to a new version of the PDF.js library, and the old `pdf.worker.js` file being cached in the browser. Usually clearing the browser cache, and then refreshing the page, should help in this case.
-   Including the `pdf.js` file locally in your project, but loading the `pdf.worker.js` file from a [CDN](https://mozilla.github.io/pdf.js/getting_started/#including-via-a-cdn). In this case, please ensure that you are actually loading the *corresponding* version of the `pdf.worker.js` file from the CDN.

Finally, please note that the version number can always be found inside of the distributed files, such as e.g. `pdf.js` and `pdf.worker.js`; search for `pdfjsVersion` in order to find it.

I know JavaScript and want to contribute to the project. How do I start?
------------------------------------------------------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#i-know-javascript-and-want-to-contribute-to-the-project-how-do-i-start)

First, you need to prepare your [fork](https://help.github.com/articlenetworks/fork-a-repo) and setup the development environment. Don't forget to read the [Contributing](https://github.com/mozilla/pdf.js/wiki/Contributing) page. Second, make yourself familiar with the [PDF format and PDF.js internals](https://github.com/mozilla/pdf.js/wiki/Additional-Learning-Resources). Third, if you don't already have a certain issue you want to fix, choose one from the [open issues labeled 5-good-beginner-bug](https://github.com/mozilla/pdf.js/issues?direction=desc&labels=5-good-beginner-bug&page=1&sort=created&state=open). Last, submit a [pull request](https://help.github.com/articles/using-pull-requests) for the review. *During any part of the process we recommend communicating with the PDF.js team in the [Matrix room](https://chat.mozilla.org/#/room/#pdfjs:mozilla.org) if you have questions or need to find a reviewer.*

Is it possible to add annotations to a PDF?
-------------------------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#is-it-possible-to-add-annotations-to-a-pdf)

PDF.js is designed for reading PDF files and supports rendering annotations for viewing, but also supports adding annotations using a subset of the possible annotation types.

What are the PDF.js keyboard shortcuts?
---------------------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#what-are-the-pdfjs-keyboard-shortcuts)

### Navigation

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#navigation)

The `Home`, `End`, `Page up`, `Page down` and all arrow keys can be used to navigate the document. Moreover, the following navigation shortcuts exist:

-   Next page: `n`, `j`, `Space bar` (presentation mode only), `Enter` (presentation mode only) or left click (presentation mode only)
-   Previous page: `p`, `k`, `Shift` + `Space bar` (presentation mode only), `Shift` + `Enter` (presentation mode only) or `Shift` + left click (presentation mode only)

### Viewer controls

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#viewer-controls)

User interface buttons or `ctrl` + mouse wheel can be used to change the zooming level, but keyboard shortcuts are also available:

-   Zoom in: `ctrl` + `+`, `ctrl` + `=`
-   Zoom out: `ctrl` + `-`
-   Restore normal zoom: `ctrl` + `0`
-   Rotate the document clockwise: `r`
-   Rotate the document counterclockwise: `shift` + `r`
-   Activate presentation mode: `ctrl` + `alt` + `p`
-   Enable the hand tool: `h`
-   Enable the text selection tool: `s`
-   Move focus to the 'go to page' box: `ctrl` + `alt` + `g`
-   Find text in the document: `ctrl` + `f`
-   Find next occurrence of text in the document: `ctrl` + `g`
-   Find previous occurrence of text in the document: `shift` + `ctrl` + `g`
-   Download the document: `ctrl` + `s`
-   Print the document: `ctrl` + `p`
-   Open a file: `ctrl` + `o`

(replace ctrl with meta on some configurations)

### Outline sidebar

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#outline-sidebar)

-   Use `F4` to toggle the visibility of the sidebar.
-   After showing the sidebar, click on the "Show document outline" button (![Show document outline](https://camo.githubusercontent.com/3846c7a0b0de1107e257cbb7435e749b5d6f52971b53ee5d1fb2a289d97f717b/68747470733a2f2f6d6f7a696c6c612e6769746875622e696f2f7064662e6a732f7765622f696d616765732f746f6f6c626172427574746f6e2d766965774f75746c696e652e706e67)) to show the document outline (if the PDF file has one).
-   Nested outline items can be expanded/collapsed by clicking on the triangles at the left of an item.
-   To expand/collapse all items under the selected item, press `Shift` while clicking on the triangle.
-   Double-click on the "Show document outline" button (![Show document outline](https://camo.githubusercontent.com/3846c7a0b0de1107e257cbb7435e749b5d6f52971b53ee5d1fb2a289d97f717b/68747470733a2f2f6d6f7a696c6c612e6769746875622e696f2f7064662e6a732f7765622f696d616765732f746f6f6c626172427574746f6e2d766965774f75746c696e652e706e67)) to expand/collapse all outline items.

The PDF.js files are too big. Is it possible to obtain minified versions of the JS files?
-----------------------------------------------------------------------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#the-pdfjs-files-are-too-big-is-it-possible-to-obtain-minified-versions-of-the-js-files)

You can build a minified version of PDF.js using the following command:

`npx gulp minified`

We use Terser to minify the JS files. It is known that other minifiers might break PDF.js code if advanced options are used (see [#710](https://github.com/mozilla/pdf.js/issues/710) or [#2479](https://github.com/mozilla/pdf.js/issues/2479)). It's safe to use minifiers, such as Google Closure Compiler, in whitespace/comments removal mode. If you are not using `npx gulp minified`, please note that you *must* configure the minifier to keep original class/function names intact; otherwise the build is not guaranteed to work correctly.

Is there a pre-built version PDF.js available?
----------------------------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#is-there-a-pre-built-version-pdfjs-available)

Yes. Refer to <http://mozilla.github.io/pdf.js/getting_started/> and <https://github.com/mozilla/pdf.js/wiki/Setup-PDF.js-in-a-website#official-releases> for more details. Generic PDF.js library builds can be installed via NPM with `npm install pdfjs-dist`.

What is the ECCN for PDF.js?
----------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#what-is-the-eccn-for-pdfjs)

PDF.js is publicly available software not subject to the Export Administration Regulations (EAR) per EAR 734.3(b) and 734.7. Because PDF.js is not subject to the EAR it does not have an Export Control Classification Number (ECCN). Mozilla has completed the notification for PDF.js publicly available encryption source code per EAR 742.15(b).

PDF.js does not render my files correctly. Can I report an issue?
-----------------------------------------------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#pdfjs-does-not-render-my-files-correctly-can-i-report-an-issue)

Yes. The issues are used to track both bugs filed by users and specific work items for developers. Try to file one issue per problem observed.

Please specify valid title (e.g. "Glyph spacing is incorrect" instead of "PDF.js does not work") and provide more details about the issue: link to the PDF, location in the PDF, screenshot, browser version, operating system, PDF.js version and JavaScript console warning/error messages. The issues that do not have enough details provided will be closed as invalid/incomplete.

I know that my PDFs are corrupted. Will PDF.js attempt to display it?
---------------------------------------------------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#i-know-that-my-pdfs-are-corrupted-will-pdfjs-attempt-to-display-it)

Yes. PDF.js will attempt to recover usable PDF data (pages, content or fonts) and display the document. Please report the issue (see above) and we will take a look.

I have a really great idea. Where is the best place to record it?
-----------------------------------------------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#i-have-a-really-great-idea-where-is-the-best-place-to-record-it)

You can contact the developers in our [Matrix room](https://chat.mozilla.org/#/room/#pdfjs:mozilla.org).

The issue tracking system is designed to record a single technical problem. A bug report is something a developer/contributor can work on. The [GitHub issue tracker](https://github.com/mozilla/pdf.js/issues?state=open) is not a good place for general, not well thought out or unworkable ideas. Most likely a discussion-type issue will not be addressed for a long time or closed as invalid.

I'm developing a custom solution based on PDF.js core library. Can you help me?
-------------------------------------------------------------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#im-developing-a-custom-solution-based-on-pdfjs-core-library-can-you-help-me)

We are glad to hear that and will try to help you, but first check the examples at <https://github.com/mozilla/pdf.js#learning> and search existing [issues](https://github.com/mozilla/pdf.js/search?q=keyword&type=Issues). If this does not help, please prepare short well-documented example that demonstrates the problem and make it accessible online on your website, JSBin, etc. before opening a new issue or contacting us in the Matrix room -- keep in mind that just code snippets won't help us troubleshoot the problem. Issues that do not provide enough details will be closed as invalid/incomplete (see [reporting issue](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#issue) above).

I want to render all 100 pages in a document at a high resolution. Is it a good idea?
-------------------------------------------------------------------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#i-want-to-render-all-100-pages-in-a-document-at-a-high-resolution-is-it-a-good-idea)

Not really. You can count yourself: a letter page size is 816⨉1056px at 96DPI (and if you have a HiDPI display, multiply each dimension by `window.devicePixelRatio`, e.g., 2), so you will need a canvas that takes up 816⨉1056⨉4 = 3,446,784 bytes (don't forget to multiply that by e.g., 2⨉2 = 4 if it's a HiDPI display). This requires you to allocate 3.5Mb (or 14Mb) per page. You need a decent amount of memory to hold the 100 canvases, and it does not count the time that is spent on rendering them.

The demo viewer creates, renders, and holds canvases only for visible pages to reduce the amount of used memory. Our recommendation is to create and render only visible pages.

PDF.js is fetching the entire PDF file from a server. Can it fetch only the required portions for rendering?
------------------------------------------------------------------------------------------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#pdfjs-is-fetching-the-entire-pdf-file-from-a-server-can-it-fetch-only-the-required-portions-for-rendering)

Actually, PDF.js is doing just that. PDF is a complicated format; in most of the cases, the vital data of a PDF document is located at the end. Depending on [browser support](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#faq-support) and on what web server returns the [HTTP Range Requests headers](https://tools.ietf.org/html/rfc7233), PDF.js may automatically start using HTTP Range Requests to fetch not-yet-loaded portions of a PDF needed for rendering visible pages, so a document can be rendered without fully loading it.

What is the latest stable version of PDF.js?
--------------------------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#what-is-the-latest-stable-version-of-pdfjs)

PDF.js is a general-purpose library to parse and render PDFs. It is included in a number of projects such as Firefox, a Chromium extension, et cetera. We are recording changes to the library with GitHub [pull requests](https://github.com/mozilla/pdf.js/pulls). The changelog is also available from the Git log.

The version number consists of three digits: the major release number, minor release number and build number. Before version 1.2, the major and minor numbers were selected when some major milestone was reached. Currently, we are using semantic versioning, where a major version release means that we can introduce API-breaking changes and a minor version release indicates added functionality and backwards compatible changes. The build number is incremented by one each time a new commit is pushed to the master branch.

We are moving fast and trying to land as much good stuff as we can review and test. The [generic viewer](https://mozilla.github.io/pdf.js/web/viewer.html) always contains the latest PDF.js build and is available for testing.

We regularly (usually weekly or bi-weekly) push the library to the [Firefox Nightly](http://nightly.mozilla.org/) channel. To promote the latest beta to a stable release, we listen for feedback (via [GitHub](https://github.com/mozilla/pdf.js/issues), [Bugzilla](https://bugzilla.mozilla.org/enter_bug.cgi?product=Firefox&component=PDF+Viewer) or [Matrix](https://chat.mozilla.org/#/room/#pdfjs:mozilla.org)) from the users and projects that use the library. If no critical issues (e.g. a build is unusable, major regressions, et cetera) appeared, we promote the build to stable. Otherwise we fix the issues and create a new beta release.

What types of PDF files are slow in PDF.js? Can I optimize a PDF file to make PDF.js faster?
--------------------------------------------------------------------------------------------

[](https://github.com/mozilla/pdf.js/wiki/Frequently-Asked-Questions#what-types-of-pdf-files-are-slow-in-pdfjs-can-i-optimize-a-pdf-file-to-make-pdfjs-faster)

Typically, PDFs with a smaller file size will be rendered faster and it depends on how big a single page is. The amount of pages does not affect the performance. It's essential that you optimize your documents for the web. See [Optimize a PDF](https://helpx.adobe.com/acrobat/using/optimizing-pdfs-acrobat-pro.html) from Adobe's website for more information. There are more improvement techniques that we can suggest:

1.  Avoid using high resolution images -- 150 dpi resolution for scanned images shall be enough for screens, especially for low powered devices;
2.  Try to use JPEG encoding for color images/photos in RGB colorspace when possible;
3.  Avoid using expensive compositions/effects such as transitions/masking -- flatten transparency;
4.  Avoid using PDF generators (or don't create content) that produce ineffective PDF output (e.g. LibreOffice creates a lots of tiny images for vector elements/pictures it does not understand);
5.  If there is such a setting, use web-optimized PDF output / linearization;
6.  Fix or don't produce corrupted PDFs that do not conform to the PDF32000 specification.


Third party viewer usage
Tim van der Meij edited this page on Mar 2, 2020 · 6 revisions
The default viewer is built on the display layer and is the UI for PDF viewer in Firefox and the other browser extensions within the project.

Initialization promise
For custom deployments it is often useful to know when the viewer is fully initialized. Previously this was possible by listening to the localized event, but since pull request #11607 there is a simpler way:

document.addEventListener("webviewerloaded", function() {
  PDFViewerApplication.initializedPromise.then(function() {
    // The viewer has now been initialized.
  })
});
Event bus
The viewer components can dispatch events on an event bus to which other components can listen and act upon. PDF.js dispatches common events on the event bus that the user provides. For custom deployments it is required to provide a manually made event bus instance since pull request #11631. This prevents having to use DOM events for this purpose, making the viewer more stand-alone. Event bus instances have an on method to start listening for an event, an off method to stop listening for an event and a dispatch method to send an event through the event bus for other viewer components.

For example, to perform an action when the page is initialized, you can use the following code:

// Create the event bus instance for the viewer application.
const eventBus = new pdfjsViewer.EventBus();

// Pass the event bus instance to the PDF viewer.
const pdfViewer = new pdfjsViewer.PDFViewer({
  ...
  eventBus: eventBus,
});

// Listen for `pagesinit` events on the event bus.
eventBus.on("pagesinit", function() {
  // Handle the `pagesinit` event here.
});


Setup PDF.js in a website
=========================

Tim van der Meij edited this page on May 31 - [41 revisions](https://github.com/mozilla/pdf.js/wiki/Setup-PDF.js-in-a-website/_history)

You can choose to use a pre-built version of PDF.js or build PDF.js from source.

Pre-built PDF.js
----------------

[](https://github.com/mozilla/pdf.js/wiki/Setup-pdf.js-in-a-website#pre-built-pdfjs)

### Official releases

[](https://github.com/mozilla/pdf.js/wiki/Setup-pdf.js-in-a-website#official-releases)

The official releases from <https://github.com/mozilla/pdf.js/releases> include the generic build of PDF.js and the viewer. You should always use the latest release for production applications and the pre-release only if you're willing to test the next version. This is most likely the best choice if you're not looking to build your own viewer from scratch using our viewer components.

The viewer is built on the display layer and is the UI for the PDF viewer in Firefox and the other browser extensions within the project. It can be a good starting point for building your own viewer. *However, we do ask if you plan to embed the viewer in your own site, that it not just be an unmodified version. Please re-skin it or build upon it.*

### NPM

[](https://github.com/mozilla/pdf.js/wiki/Setup-pdf.js-in-a-website#npm)

Install the PDF.js dependency in your project:

```
npm install pdfjs-dist --save

```

You can find a usage example at <https://github.com/mozilla/pdf.js/blob/master/examples/node/getinfo.mjs>.

#### Webpack

[](https://github.com/mozilla/pdf.js/wiki/Setup-pdf.js-in-a-website#webpack)

Install the PDF.js dependency in your project:

```
npm install pdfjs-dist --save-dev

```

To use the library in your project add `require('pdfjs-dist')` to your file requires and build your project normally. The worker shall be built into a separate bundle: take the file "./node_modules/pdfjs-dist/build/pdf.worker.entry.js" or built a separate file that uses `require('pdfjs-dist/build/pdf.worker')`. `PDFJS.workerSrc` shall be set to point to this file. You can use the `pdfjs-dist/webpack` module for PDF.js autoconfiguration.

Refer to <https://github.com/mozilla/pdf.js/tree/master/examples/webpack> for a complete example.

Build PDF.js from source
------------------------

[](https://github.com/mozilla/pdf.js/wiki/Setup-pdf.js-in-a-website#build-pdfjs-from-source)

After cloning PDF.js, you can build PDF.js from source by running the `npx gulp generic` command. This will create the built PDF.js in the `build` folder



Viewer options
==============

Tim van der Meij edited this page on Mar 7, 2019 - [3 revisions](https://github.com/mozilla/pdf.js/wiki/Viewer-options/_history)

Below are the options for the PDF.js viewer that can be given at URL level. Multiple values of either type can be combined by separating with an ampersand (`&`) after the hash (for example: `#page=2&zoom=200`).

Options after the #
-------------------

[](https://github.com/mozilla/pdf.js/wiki/Viewer-options#options-after-the-)

Example: <https://mozilla.github.io/pdf.js/web/viewer.html#page=2>

-   page: page number. Example: page=2
-   zoom: zoom level. Example: zoom=200 (accepted formats: `[zoom],[left offset],[top offset]`, `page-width`, `page-height`, `page-fit`, `auto`)
-   nameddest: go to a named destination
-   pagemode: sidebar state. Example: `pagemode=none` (accepted values: `none`, `thumbs`, `bookmarks`, `attachments`)

Options after the ?
-------------------

[](https://github.com/mozilla/pdf.js/wiki/Viewer-options#options-after-the--1)

Example: <https://mozilla.github.io/pdf.js/web/viewer.html?file=compressed.tracemonkey-pldi-09.pdf>

-   file: the path of the PDF file to use (must be on the same server due to JavaScript limitations). Please notice that the path/URL must be encoded using `encodeURIComponent`, e.g. `/viewer.html?file=%2Fpdf.js%2Fweb%2Fcompressed.tracemonkey-pldi-09.pdf`



@@@␜-Repo

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
    transition: all 0s ease-in-out;
    opacity: 0;
}

#avatarIframe.visible {
    opacity: 1;
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

    // Preload avatar iframe on slide 4
    if (num === 4 && !avatarIframe) {
        createAvatarIframe(activeCanvas);
    }

    // Show avatar iframe on slide 5
    if (num === 5 && avatarIframe) {
        avatarIframe.classList.add('visible');
        avatarVisible = true;
    } else if (avatarIframe) {
        avatarIframe.classList.remove('visible');
        avatarVisible = false;
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

    if (avatarIframe && !avatarIframe.classList.contains('bottom-right')) {
        positionAvatarIframe(canvas);
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
function positionAvatarIframe(canvas) {
    if (!avatarIframe) return;

    const iframeWidth = '29%'; // 20% of the parent container width
    const iframeHeight = '36%'; // To maintain a square shape
    const leftPosition = '65.5%';
    const topPosition = '27.2%';

    avatarIframe.style.width = iframeWidth;
    avatarIframe.style.height = iframeHeight;
    avatarIframe.style.left = leftPosition;
    avatarIframe.style.top = topPosition;
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
    fitCanvasToScreen(canvas1);
    fitCanvasToScreen(canvas2);
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

@@@␜-Task:


Ok, additionally, there is a very thin blank line around the avatar edges. 

I think maybe because of multiple things stacked. can you get rid of it?




ok, and how might i make the avatar speak something at a certain point. Like I want it to say, hello there, ask me anything, but I need to trigger it through the iframe

I have added the postMessage functionality to the dtm app, here is a snippit:
 const { action, text } = event.data;

  if (action === 'speak') {
    // Trigger the avatar to speak the received text
    handleTextInput(text);
  }
}

I want everything to stay the same as it is now, but send the talk command 5 seconds after transitioning to slide 4


make it smoothly go to the bottom right


audio doesnt work after permission, have to reload











This is working pretty well, but the avatar that shows on slide 5 doesnt move perfectly with the pdf presentation. It's ok if the window is large, but as it gets smaller it drifts away from the specified location. We need it to be positioned reletive to the pdf presentation so that it appears to be part of the pdf.








I need to add an additional feature.

The pdf presentation is about a project we are working on (DTM).
The DTM project featues a talking avatar which will use ai to respond to users questions.

The way it works, is that once you turn on push to talk mode,then you can hold down the push to talk button and it will record and transcribe your audio. Once you let go it sends the audio to the llm for a response, and then to d-id to generate and get back a talking avatar to play to the user.

This is all working ok, and we won't be directly modifying this project. 

However we want to add the dtm talking avatar to the presentation project
We want to use the avatar in the presentation so that the reader can ask it questions.

On slide 5 of the PDFjs presentation, after it loads and a 1 second delay, we should fade in an iframe of the actual talking avatar app.
It should be placed exactly where the image of the avatar is in the pdf page 5. 
The iframe should have a transparent background and feature no scrollbars.
The exact location of the avatar image on slide 5 is, the left side of the image is at 72% of the width from the left going till 92% and the top edge of the image is at 22% of the height from the top. its a square.

When we click next page, on slide 5, instead of the next page, we want to stay on the current page, but the image of the avatar (now morphed into the iframe) should slide over to the bottom right. 

The avatar iframe should remain there for the remainder of the slides. The next transition should resume to transition to the next slide as normal but while keeping the avatar present.

the link for the dtm app and the link for the iframe is:
https://avatar.skoop.digital/index-agents.html?header=false&interfaceMode=simplePushTalk





Use the apple keynote export notes above as it has a really nice implementation of pdfjs similar to what we want to do.

We want to be able to display the presenation.pdf, which is a slide based powerpoint like presentation exported as a pdf. 
Only display one slide or page at a time.
Always keep it contained within the browser window without stretching or scaling and filling any empty space with black.
There should be very minimal UI, but implementations for things like left/right or up/down and space and click and touch swipes for chaning slides. 

I have doesnloaded the main default pdfjs folder with web abd build.

Please create a comprehensive plan for creating a pdfjs site, to display a pdf called "presentation.pdf" which will be saved in the root directory next to web and build folders.

Be as detailed as possible, providing whole code functions and files for anything that needs to be added or modified.



Human:
Ok this works but there are a couple of issues:

1. 
It takes a second to load each page and doesnt seem to cache.
Can you save it to cache stragtegically, maybe load the current and next 2 pages, and then always have the next 2 pages load in the background as you go through the slides.

2. 
Hide the page indicator after 3 seconds, show it on every page transition and then hide it again after 3 seconds.

3. 
Make the initial loading indicator look better.






