
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









@@@␜-pdfjs files and structure:

The following text is a Git repository with code. The structure of the text are sections that begin with ----, followed by a single line containing the file path and file name, followed by a variable amount of lines containing the file contents. The text representing the Git repository ends when the symbols --END-- are encounted. Any further text beyond --END-- are meant to be interpreted as instructions using the aforementioned Git repository as context.
----
build\pdf.mjs
/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2024 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */

/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack
----
build\pdf.mjs.map
{"version":3,"file":"pdf.mjs","mappings":";;;;;;;;;;;;;;;;;;;;;;SAAA;SACA;;;;;UCDA;UACA;UACA;UACA;UACA,yCAAyC,wCAAwC;UACjF;UACA;UACA;;;;;UCPA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ACoBA,MAAMA,QAAQ,GAEZ,OAAOC,OAAO,KAAK,QAAQ,IAC3BA,OAAO,GAAG,EAAE,KAAK,kBAAkB,IACnC,CAACA,OAAO,CAACC,QAAQ,CAACC,EAAE,IACpB,EAAEF,OAAO,CAACC,QAAQ,CAACE,QAAQ,IAAIH,OAAO,CAACI,IAAI,IAAIJ,OAAO,CAACI,IAAI,KAAK,SAAS,CAAC;AAE5E,MAAMC,eAAe,GAAG,CAAC,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC;AAC1C,MAAMC,oBAAoB,GAAG,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,KAAK,EAAE,CAAC,EAAE,CAAC,CAAC;AAEvD,MAAMC,uBAAuB,GAAG,IAAI;AAIpC,MAAMC,WAAW,GAAG,IAAI;AACxB,MAAMC,mBAAmB,GAAG,IAAI;AAChC,MAAMC,eAAe,GAAGD,mBAAmB,GAAGD,WAAW;AAgBzD,MAAMG,mBAAmB,GAAG;EAC1BC,GAAG,EAAE,IAAI;EACTC,OAAO,EAAE,IAAI;EACbC,KAAK,EAAE,IAAI;EACXC,IAAI,EAAE,IAAI;EACVC,iBAAiB,EAAE,IAAI;EACvBC,mBAAmB,EAAE,IAAI;EACzBC,mBAAmB,EAAE,IAAI;EACzBC,UAAU,EAAE,IAAI;EAChBC,MAAM,EAAE;AACV,CAAC;AAED,MAAMC,cAAc,GAAG;EACrBC,OAAO,EAAE,CAAC;EACVC,MAAM,EAAE,CAAC;EACTC,YAAY,EAAE,CAAC;EACfC,cAAc,EAAE;AAClB,CAAC;AAED,MAAMC,sBAAsB,GAAG,wBAAwB;AAEvD,MAAMC,oBAAoB,GAAG;EAC3BL,OAAO,EAAE,CAA
----
build\pdf.sandbox.mjs
/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2024 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */

/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = globalThis.pdfjsSandbox = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  QuickJSSandbox: () => (/* binding */ QuickJSSandbox)
});

;// CONCATENATED MODULE: ./external/quickjs/quickjs-eval.js

----
build\pdf.sandbox.mjs.map
{"version":3,"file":"pdf.sandbox.mjs","mappings":";;;;;;;;;;;;;;;;;;;;;;SAAA;SACA;;;;;UCDA;UACA;UACA;UACA;UACA,yCAAyC,wCAAwC;UACjF;UACA;UACA;;;;;UCPA;;;;;;;;;;;;ACCA,GAAI,CAAAA,MAAM,CAAG,CAAC,IAAM,CAClB,GAAI,CAAAC,UAAU,CAAG,MAAO,CAAAC,QAAQ,GAAK,WAAW,EAAIA,QAAQ,CAACC,aAAa,CAAGD,QAAQ,CAACC,aAAa,CAACC,GAAG,CAAGC,SAAS,CAEnH,MACF,UAASC,SAAS,CAAG,CAAC,CAAC,CAAE,CAEzB,GAAI,CAAAC,CAAC,CAACD,SAAS,CAACE,CAAC,CAACC,CAAC,CAACF,CAAC,CAACG,KAAK,CAAC,GAAI,CAAAC,OAAO,CAAC,CAACC,CAAC,CAACC,CAAC,GAAG,CAACL,CAAC,CAACI,CAAC,CAACH,CAAC,CAACI,CAAC,EAAC,CAAC,CAAC,GAAI,CAAAC,CAAC,CAACC,MAAM,CAACC,MAAM,CAAC,CAAC,CAAC,CAACT,CAAC,CAAC,CAACU,CAAC,CAAC,EAAE,CAAC,WAAW,EAAE,MAAO,CAAAf,QAAQ,EAAEA,QAAQ,CAACC,aAAa,GAAGc,CAAC,CAACf,QAAQ,CAACC,aAAa,CAACC,GAAG,CAAC,CAACH,UAAU,GAAGgB,CAAC,CAAChB,UAAU,CAAC,CAACgB,CAAC,CAACC,UAAU,CAAC,OAAO,CAAC,CAACD,CAAC,CAAC,EAAE,CAACA,CAAC,CAACA,CAAC,CAACE,MAAM,CAAC,CAAC,CAACF,CAAC,CAACG,OAAO,CAAC,QAAQ,CAAC,EAAE,CAAC,CAACC,WAAW,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CAAC,GAAI,CAAAC,EAAE,CAACf,CAAC,CAACgB,KAAK,EAAEC,OAAO,CAACC,GAAG,CAACC,IAAI,CAACF,OAAO,CAAC,CAACG,CAAC,CAACpB,CAAC,CAACqB,QAAQ,EAAEJ,OAAO,CAACK,KAAK,CAACH,IAAI,CAACF,OAAO,CAAC,CAACT,MAAM,CAACC,MAAM,CAACT,C
----
build\pdf.worker.mjs
/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2024 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */

/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = globalThis.pdfjsWorker = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  WorkerMessageHandler: () => (/* reexport */ WorkerMessageHandler)
});

;// CONCATENATED MODULE: ./src/shared/util.js
const isNodeJS = typeof process === "object" && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
const IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
cons
----
build\pdf.worker.mjs.map
{"version":3,"file":"pdf.worker.mjs","mappings":";;;;;;;;;;;;;;;;;;;;;;SAAA;SACA;;;;;UCDA;UACA;UACA;UACA;UACA,yCAAyC,wCAAwC;UACjF;UACA;UACA;;;;;UCPA;;;;;;;;;;;;ACoBA,MAAMA,QAAQ,GAEZ,OAAOC,OAAO,KAAK,QAAQ,IAC3BA,OAAO,GAAG,EAAE,KAAK,kBAAkB,IACnC,CAACA,OAAO,CAACC,QAAQ,CAACC,EAAE,IACpB,EAAEF,OAAO,CAACC,QAAQ,CAACE,QAAQ,IAAIH,OAAO,CAACI,IAAI,IAAIJ,OAAO,CAACI,IAAI,KAAK,SAAS,CAAC;AAE5E,MAAMC,eAAe,GAAG,CAAC,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC;AAC1C,MAAMC,oBAAoB,GAAG,CAAC,KAAK,EAAE,CAAC,EAAE,CAAC,EAAE,KAAK,EAAE,CAAC,EAAE,CAAC,CAAC;AAEvD,MAAMC,uBAAuB,GAAG,IAAI;AAIpC,MAAMC,WAAW,GAAG,IAAI;AACxB,MAAMC,mBAAmB,GAAG,IAAI;AAChC,MAAMC,eAAe,GAAGD,mBAAmB,GAAGD,WAAW;AAgBzD,MAAMG,mBAAmB,GAAG;EAC1BC,GAAG,EAAE,IAAI;EACTC,OAAO,EAAE,IAAI;EACbC,KAAK,EAAE,IAAI;EACXC,IAAI,EAAE,IAAI;EACVC,iBAAiB,EAAE,IAAI;EACvBC,mBAAmB,EAAE,IAAI;EACzBC,mBAAmB,EAAE,IAAI;EACzBC,UAAU,EAAE,IAAI;EAChBC,MAAM,EAAE;AACV,CAAC;AAED,MAAMC,cAAc,GAAG;EACrBC,OAAO,EAAE,CAAC;EACVC,MAAM,EAAE,CAAC;EACTC,YAAY,EAAE,CAAC;EACfC,cAAc,EAAE;AAClB,CAAC;AAED,MAAMC,sBAAsB,GAAG,wBAAwB;AAEvD,MAAMC,oBAAoB,GAAG;EAC3BL,OAAO,EAAE,CAAC,CAAC;EACXM,IAAI,EAAE,CAAC;EACPC,QAAQ,EAAE,CAAC;EACXC,SAAS,EAAE,CAAC;EACZC,KAAK,EAAE,EAAE;EACTC,GAAG,EAAE;AACP,CAAC;AAED,MAAMC,0BAA0B,GAAG;EACjCC,MAAM,EAAE,CAAC;EACTC,MAAM,EAAE,CAAC;EACTC,aAAa,EAAE,EAAE;EACjBC,cAAc,EAAE,EAAE;EAClBC,gBAAgB,EAAE,EAAE;EACpBC,SAAS,EAAE,EAAE;EACbC,aAAa,EAAE,EAAE;EACjBC,WAAW,EAAE,EAAE;EACfC,eAAe,EAAE,EAAE;EACnBC,uBAAuB,EAAE,EAAE;EAC3BC,mBAAmB,EAAE,EAAE;EACvBC,cAAc,EAAE,EAAE;EAClBC,kBAAkB,EAAE;AACtB,CAAC;AAGD,MAAMC,cAAc,GAAG;EACrBjC,KAAK,EAAE,IAAI;EACXkC,eAAe,EAAE,IAAI;EACrBC,IAAI,EAAE,IAAI;EACVC,kBAAkB,EAAE,IAAI;EACxBC,sBAAsB,EAAE,KAAK;EAC7BC,sBAAsB,EAAE,KAAK;EAC7BC,QAAQ,EAAE,KAAK;EACfC,kBAAkB,EAAE;AACtB,CAAC;AAED,MAAMC,iBAAiB,GAAG;EACxBC,IAAI,EAAE,CAAC;EACPC,MAAM,EAAE,CAAC;EACTC,WAAW,EAAE,CAAC;EACdC,SAAS,EAAE,CAAC;EACZC,gBAAgB,EAAE,CAAC;EACnBC,kBAAkB,EAAE,CAAC;EACrBC,uBAAuB,EAAE,CAAC;EAC1BC,WAAW,EAAE,CAAC;EACdC,gBAAgB,EAAE,CAAC;EACnBC,gBAAgB,EAAE;AACpB,CAAC;AAED,MAAMC,SAAS,GAAG;EAChBC,cAAc,EAAE,CAAC;EACjBC,SAAS,EAAE,CAAC;EACZC,UAAU,EAAE;AACd,CAAC;AAED,MAAMC,cAAc,GAAG;EACrBC,IAAI,EAAE,CAAC;EACPC,IAAI,EAAE,CAAC;EACP3C,QAAQ,EAAE,CAAC;EACX4C,IAAI,EAAE,CAAC;EACPC,MAAM,EAAE,CAAC;EACTC,MAAM,EAAE,CAAC;EACTC,OAAO,EAAE,CAAC;EACVC,QAAQ,EAAE,CAAC;EACX/C,SAAS,EAAE,CAAC;EACZgD,SAAS,EAAE,EAAE;EACbC,QAAQ,EAAE,EAAE;EACZC,SAAS,EAAE,EAAE;EACbjD,KAAK,EAAE,EAAE;EACTkD,KAAK,EAAE,EAAE;EACTjD,GAAG,EAAE,EAAE;EACPkD,KAAK,EAAE,EAAE;EACTC,cAAc,EAAE,EAAE;EAClBC,KAAK,EAAE,EAAE;EACTC,KAAK,EAAE,EA
----
web\debugger.css
/* Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

:root {
  --panel-width: 300px;
}

#PDFBug,
#PDFBug :is(input, button, select) {
  font: message-box;
}
#PDFBug {
  background-color: rgb(255 255 255);
  border: 1px solid rgb(102 102 102);
  position: fixed;
  top: 32px;
  right: 0;
  bottom: 0;
  font-size: 10px;
  padding: 0;
  width: var(--panel-width);
}
#PDFBug .controls {
  background: rgb(238 238 238);
  border-bottom: 1px solid rgb(102 102 102);
  padding: 3px;
}
#PDFBug .panels {
  inset: 27px 0 0;
  overflow: auto;
  position: absolute;
}
#PDFBug .panels > div {
  padding: 5px;
}
#PDFBug button.active {
  font-weight: bold;
}
.debuggerShowText,
.debuggerHideText:hover {
  background-color: rgb(255 255 0 / 0.25);
}
#PDFBug .stats {
  font-family: courier;
  font-size: 10px;
  white-space: pre;
}
#PDFBug .stats .title {
  font-weight: bold;
}
#PDFBug table {
  font-size: 10px;
  white-space: pre;
}
#PDFBug table.showText {
  border-collapse: collapse;
  text-align: center;
}
#PDFBug table.showText,
#PDFBug table.showText :is(tr, td) {
  border: 1px solid black;
  padding: 1px;
}
#PDFBug table.showText td.advance {
  color: grey;
}

#viewer.textLayer-visible .textLayer {
  opacity: 1;
}

#viewer.textLayer-visible .canvasWrapper {
  background-color: rgb(128 255 128);
}

#viewer.textLayer-visible .canvasWrapper canvas {
  mix-blend-mode: screen;
}

#viewer.textLayer-visible .textLayer span {
  background-color: rgb(255 255 0 / 0.1);
  color: rgb(0 0 0);
  border: solid 1px rgb(255 0 0 / 0.5);
  box-sizing: border-box;
}

#viewer.textLayer-visible .textLayer span[aria-owns] {
  background-color: rgb(255 0 0 / 0.3);
}

#viewer.textLayer-hover .textLayer span:hover {
  background-color: rgb(255 255 255);
  color: rgb(0 0 0);
}

#viewer.textLayer-shadow .textLayer span {
  background-color: rgb(255 255 255 / 0.6);
  color: rgb(0 0 0);
}

----
web\debugger.mjs
/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const { OPS } = globalThis.pdfjsLib || (await import("pdfjs-lib"));

const opMap = Object.create(null);
for (const key in OPS) {
  opMap[OPS[key]] = key;
}

const FontInspector = (function FontInspectorClosure() {
  let fonts;
  let active = false;
  const fontAttribute = "data-font-name";
  function removeSelection() {
    const divs = document.querySelectorAll(`span[${fontAttribute}]`);
    for (const div of divs) {
      div.className = "";
    }
  }
  function resetSelection() {
    const divs = document.querySelectorAll(`span[${fontAttribute}]`);
    for (const div of divs) {
      div.className = "debuggerHideText";
    }
  }
  function selectFont(fontName, show) {
    const divs = document.querySelectorAll(
      `span[${fontAttribute}=${fontName}]`
    );
    for (const div of divs) {
      div.className = show ? "debuggerShowText" : "debuggerHideText";
    }
  }
  function textLayerClick(e) {
    if (
      !e.target.dataset.fontName ||
      e.target.tagName.toUpperCase() !== "SPAN"
    ) {
      return;
    }
    const fontName = e.target.dataset.fontName;
    const selects = document.getElementsByTagName("input");
    for (const select of selects) {
      if (select.dataset.fontName !== fontName) {
        continue;
      }
      select.checked = !select.checked;
      selectFont(fontName, select.checked);
      select.scrollIntoView();
    }
  }
  return {
    // Properties/functions needed by PDFBug.
    id: "FontInspector",
    name: "Font Inspector",
    panel: null,
    manager: null,
    init() {
      const panel = this.panel;
      const tmp = document.createElement("button");
      tmp.addEventListener("click", resetSelection);
      tmp.textContent = "Refresh";
      panel.append(tmp);

      fonts = document.createElement("div");
      panel.append(fonts);
    },
    cleanup() {
      fonts.textContent = "";
    },
    enabled: false,
    get active() {
      return active;
    },
    set active(value) {
      active = value;
      if (active) {
        document.body.addEventListener("click", textLayerClick, true);
        resetSelection();
      } else {
        document.body.removeEventListener("click", textLayerClick, true);
        removeSelection();
      }
    },
    // FontInspector specific functions.
    fontAdded(fontObj, url) {
      function properties(obj, list) {
        const moreInfo = document.createElement("table");
        for (const entry of list) {
          const tr = document.createElement("tr");
          const td1 = document.createElement("td");
          td1.textContent = entry;
          tr.append(td1);
          const td2 = document.createElement("td");
          td2.textContent = obj[entry].toString();
          tr.append(td2);
          moreInfo.append(tr);
        }
        return moreInfo;
      }

      const moreInfo = fontObj.css
        ? properties(fontObj, ["baseFontName"])
        : properties(fontObj, ["name", "type"]);

      const fontName = fontObj.loadedName;
      const font = document.createElement("div");
      const name = document.createElement("span");
      name.textContent = fontName;
      let download;
      if (!fontObj.css) {
        download = document.createElement("a");
        if (url) {
          url = /url\(['"]?([^)"']+)/.exec(url);
          download.href = url[1];
        } else if (fontObj.data) {
          download.href = URL.createObjectURL(
            new Blob([fontObj.data], { type: fontObj.mimetype })
          );
        }
        download.textContent = "Download";
      }

      const logIt = document.createElement("a");
      logIt.href = "";
      logIt.textContent = "Log";
      logIt.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(fontObj);
      });
      const select = document.createElement("input");
      select.setAttribute("type", "checkbox");
      select.dataset.fontName = fontName;
      select.addEventListener("click", function () {
        selectFont(fontName, select.checked);
      });
      if (download) {
        font.append(select, name, " ", download, " ", logIt, moreInfo);
      } else {
        font.append(select, name, " ", logIt, moreInfo);
      }
      fonts.append(font);
      // Somewhat of a hack, should probably add a hook for when the text layer
      // is done rendering.
      setTimeout(() => {
        if (this.active) {
          resetSelection();
        }
      }, 2000);
    },
  };
})();

// Manages all the page steppers.
const StepperManager = (function StepperManagerClosure() {
  let steppers = [];
  let stepperDiv = null;
  let stepperControls = null;
  let stepperChooser = null;
  let breakPoints = Object.create(null);
  return {
    // Properties/functions needed by PDFBug.
    id: "Stepper",
    name: "Stepper",
    panel: null,
    manager: null,
    init() {
      const self = this;
      stepperControls = document.createElement("div");
      stepperChooser = document.createElement("select");
      stepperChooser.addEventListener("change", function (event) {
        self.selectStepper(this.value);
      });
      stepperControls.append(stepperChooser);
      stepperDiv = document.createElement("div");
      this.panel.append(stepperControls, stepperDiv);
      if (sessionStorage.getItem("pdfjsBreakPoints")) {
        breakPoints = JSON.parse(sessionStorage.getItem("pdfjsBreakPoints"));
      }
    },
    cleanup() {
      stepperChooser.textContent = "";
      stepperDiv.textContent = "";
      steppers = [];
    },
    enabled: false,
    active: false,
    // Stepper specific functions.
    create(pageIndex) {
      const debug = document.createElement("div");
      debug.id = "stepper" + pageIndex;
      debug.hidden = true;
      debug.className = "stepper";
      stepperDiv.append(debug);
      const b = document.createElement("option");
      b.textContent = "Page " + (pageIndex + 1);
      b.value = pageIndex;
      stepperChooser.append(b);
      const initBreakPoints = breakPoints[pageIndex] || [];
      const stepper = new Stepper(debug, pageIndex, initBreakPoints);
      steppers.push(stepper);
      if (steppers.length === 1) {
        this.selectStepper(pageIndex, false);
      }
      return stepper;
    },
    selectStepper(pageIndex, selectPanel) {
      pageIndex |= 0;
      if (selectPanel) {
        this.manager.selectPanel(this);
      }
      for (const stepper of steppers) {
        stepper.panel.hidden = stepper.pageIndex !== pageIndex;
      }
      for (const option of stepperChooser.options) {
        option.selected = (option.value | 0) === pageIndex;
      }
    },
    saveBreakPoints(pageIndex, bps) {
      breakPoints[pageIndex] = bps;
      sessionStorage.setItem("pdfjsBreakPoints", JSON.stringify(breakPoints));
    },
  };
})();

// The stepper for each page's operatorList.
class Stepper {
  // Shorter way to create element and optionally set textContent.
  #c(tag, textContent) {
    const d = document.createElement(tag);
    if (textContent) {
      d.textContent = textContent;
    }
    return d;
  }

  #simplifyArgs(args) {
    if (typeof args === "string") {
      const MAX_STRING_LENGTH = 75;
      return args.length <= MAX_STRING_LENGTH
        ? args
        : args.substring(0, MAX_STRING_LENGTH) + "...";
    }
    if (typeof args !== "object" || args === null) {
      return args;
    }
    if ("length" in args) {
      // array
      const MAX_ITEMS = 10,
        simpleArgs = [];
      let i, ii;
      for (i = 0, ii = Math.min(MAX_ITEMS, args.length); i < ii; i++) {
        simpleArgs.push(this.#simplifyArgs(args[i]));
      }
      if (i < args.length) {
        simpleArgs.push("...");
      }
      return simpleArgs;
    }
    const simpleObj = {};
    for (const key in args) {
      simpleObj[key] = this.#simplifyArgs(args[key]);
    }
    return simpleObj;
  }

  constructor(panel, pageIndex, initialBreakPoints) {
    this.panel = panel;
    this.breakPoint = 0;
    this.nextBreakPoint = null;
    this.pageIndex = pageIndex;
    this.breakPoints = initialBreakPoints;
    this.currentIdx = -1;
    this.operatorListIdx = 0;
    this.indentLevel = 0;
  }

  init(operatorList) {
    const panel = this.panel;
    const content = this.#c("div", "c=continue, s=step");
    const table = this.#c("table");
    content.append(table);
    table.cellSpacing = 0;
    const headerRow = this.#c("tr");
    table.append(headerRow);
    headerRow.append(
      this.#c("th", "Break"),
      this.#c("th", "Idx"),
      this.#c("th", "fn"),
      this.#c("th", "args")
    );
    panel.append(content);
    this.table = table;
    this.updateOperatorList(operatorList);
  }

  updateOperatorList(operatorList) {
    const self = this;

    function cboxOnClick() {
      const x = +this.dataset.idx;
      if (this.checked) {
        self.breakPoints.push(x);
      } else {
        self.breakPoints.splice(self.breakPoints.indexOf(x), 1);
      }
      StepperManager.saveBreakPoints(self.pageIndex, self.breakPoints);
    }

    const MAX_OPERATORS_COUNT = 15000;
    if (this.operatorListIdx > MAX_OPERATORS_COUNT) {
      return;
    }

    const chunk = document.createDocumentFragment();
    const operatorsToDisplay = Math.min(
      MAX_OPERATORS_COUNT,
      operatorList.fnArray.length
    );
    for (let i = this.operatorListIdx; i < operatorsToDisplay; i++) {
      const line = this.#c("tr");
      line.className = "line";
      line.dataset.idx = i;
      chunk.append(line);
      const checked = this.breakPoints.includes(i);
      const args = operatorList.argsArray[i] || [];

      const breakCell = this.#c("td");
      const cbox = this.#c("input");
      cbox.type = "checkbox";
      cbox.className = "points";
      cbox.checked = checked;
      cbox.dataset.idx = i;
      cbox.onclick = cboxOnClick;

      breakCell.append(cbox);
      line.append(breakCell, this.#c("td", i.toString()));
      const fn = opMap[operatorList.fnArray[i]];
      let decArgs = args;
      if (fn === "showText") {
        const glyphs = args[0];
        const charCodeRow = this.#c("tr");
        const fontCharRow = this.#c("tr");
        const unicodeRow = this.#c("tr");
        for (const glyph of glyphs) {
          if (typeof glyph === "object" && glyph !== null) {
            charCodeRow.append(this.#c("td", glyph.originalCharCode));
            fontCharRow.append(this.#c("td", glyph.fontChar));
            unicodeRow.append(this.#c("td", glyph.unicode));
          } else {
            // null or number
            const advanceEl = this.#c("td", glyph);
            advanceEl.classList.add("advance");
            charCodeRow.append(advanceEl);
            fontCharRow.append(this.#c("td"));
            unicodeRow.append(this.#c("td"));
          }
        }
        decArgs = this.#c("td");
        const table = this.#c("table");
        table.classList.add("showText");
        decArgs.append(table);
        table.append(charCodeRow, fontCharRow, unicodeRow);
      } else if (fn === "restore" && this.indentLevel > 0) {
        this.indentLevel--;
      }
      line.append(this.#c("td", " ".repeat(this.indentLevel * 2) + fn));
      if (fn === "save") {
        this.indentLevel++;
      }

      if (decArgs instanceof HTMLElement) {
        line.append(decArgs);
      } else {
        line.append(this.#c("td", JSON.stringify(this.#simplifyArgs(decArgs))));
      }
    }
    if (operatorsToDisplay < operatorList.fnArray.length) {
      const lastCell = this.#c("td", "...");
      lastCell.colspan = 4;
      chunk.append(lastCell);
    }
    this.operatorListIdx = operatorList.fnArray.length;
    this.table.append(chunk);
  }

  getNextBreakPoint() {
    this.breakPoints.sort(function (a, b) {
      return a - b;
    });
    for (const breakPoint of this.breakPoints) {
      if (breakPoint > this.currentIdx) {
        return breakPoint;
      }
    }
    return null;
  }

  breakIt(idx, callback) {
    StepperManager.selectStepper(this.pageIndex, true);
    this.currentIdx = idx;

    const listener = evt => {
      switch (evt.keyCode) {
        case 83: // step
          document.removeEventListener("keydown", listener);
          this.nextBreakPoint = this.currentIdx + 1;
          this.goTo(-1);
          callback();
          break;
        case 67: // continue
          document.removeEventListener("keydown", listener);
          this.nextBreakPoint = this.getNextBreakPoint();
          this.goTo(-1);
          callback();
          break;
      }
    };
    document.addEventListener("keydown", listener);
    this.goTo(idx);
  }

  goTo(idx) {
    const allRows = this.panel.getElementsByClassName("line");
    for (const row of allRows) {
      if ((row.dataset.idx | 0) === idx) {
        row.style.backgroundColor = "rgb(251,250,207)";
        row.scrollIntoView();
      } else {
        row.style.backgroundColor = null;
      }
    }
  }
}

const Stats = (function Stats() {
  let stats = [];
  function clear(node) {
    node.textContent = ""; // Remove any `node` contents from the DOM.
  }
  function getStatIndex(pageNumber) {
    for (const [i, stat] of stats.entries()) {
      if (stat.pageNumber === pageNumber) {
        return i;
      }
    }
    return false;
  }
  return {
    // Properties/functions needed by PDFBug.
    id: "Stats",
    name: "Stats",
    panel: null,
    manager: null,
    init() {},
    enabled: false,
    active: false,
    // Stats specific functions.
    add(pageNumber, stat) {
      if (!stat) {
        return;
      }
      const statsIndex = getStatIndex(pageNumber);
      if (statsIndex !== false) {
        stats[statsIndex].div.remove();
        stats.splice(statsIndex, 1);
      }
      const wrapper = document.createElement("div");
      wrapper.className = "stats";
      const title = document.createElement("div");
      title.className = "title";
      title.textContent = "Page: " + pageNumber;
      const statsDiv = document.createElement("div");
      statsDiv.textContent = stat.toString();
      wrapper.append(title, statsDiv);
      stats.push({ pageNumber, div: wrapper });
      stats.sort(function (a, b) {
        return a.pageNumber - b.pageNumber;
      });
      clear(this.panel);
      for (const entry of stats) {
        this.panel.append(entry.div);
      }
    },
    cleanup() {
      stats = [];
      clear(this.panel);
    },
  };
})();

// Manages all the debugging tools.
class PDFBug {
  static #buttons = [];

  static #activePanel = null;

  static tools = [FontInspector, StepperManager, Stats];

  static enable(ids) {
    const all = ids.length === 1 && ids[0] === "all";
    const tools = this.tools;
    for (const tool of tools) {
      if (all || ids.includes(tool.id)) {
        tool.enabled = true;
      }
    }
    if (!all) {
      // Sort the tools by the order they are enabled.
      tools.sort(function (a, b) {
        let indexA = ids.indexOf(a.id);
        indexA = indexA < 0 ? tools.length : indexA;
        let indexB = ids.indexOf(b.id);
        indexB = indexB < 0 ? tools.length : indexB;
        return indexA - indexB;
      });
    }
  }

  static init(container, ids) {
    this.loadCSS();
    this.enable(ids);
    /*
     * Basic Layout:
     * PDFBug
     *  Controls
     *  Panels
     *    Panel
     *    Panel
     *    ...
     */
    const ui = document.createElement("div");
    ui.id = "PDFBug";

    const controls = document.createElement("div");
    controls.setAttribute("class", "controls");
    ui.append(controls);

    const panels = document.createElement("div");
    panels.setAttribute("class", "panels");
    ui.append(panels);

    container.append(ui);
    container.style.right = "var(--panel-width)";

    // Initialize all the debugging tools.
    for (const tool of this.tools) {
      const panel = document.createElement("div");
      const panelButton = document.createElement("button");
      panelButton.textContent = tool.name;
      panelButton.addEventListener("click", event => {
        event.preventDefault();
        this.selectPanel(tool);
      });
      controls.append(panelButton);
      panels.append(panel);
      tool.panel = panel;
      tool.manager = this;
      if (tool.enabled) {
        tool.init();
      } else {
        panel.textContent =
          `${tool.name} is disabled. To enable add "${tool.id}" to ` +
          "the pdfBug parameter and refresh (separate multiple by commas).";
      }
      this.#buttons.push(panelButton);
    }
    this.selectPanel(0);
  }

  static loadCSS() {
    const { url } = import.meta;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url.replace(/\.mjs$/, ".css");

    document.head.append(link);
  }

  static cleanup() {
    for (const tool of this.tools) {
      if (tool.enabled) {
        tool.cleanup();
      }
    }
  }

  static selectPanel(index) {
    if (typeof index !== "number") {
      index = this.tools.indexOf(index);
    }
    if (index === this.#activePanel) {
      return;
    }
    this.#activePanel = index;
    for (const [j, tool] of this.tools.entries()) {
      const isActive = j === index;
      this.#buttons[j].classList.toggle("active", isActive);
      tool.active = isActive;
      tool.panel.hidden = !isActive;
    }
  }
}

globalThis.FontInspector = FontInspector;
globalThis.StepperManager = StepperManager;
globalThis.Stats = Stats;

export { PDFBug };

----
web\viewer.css
/* Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

.dialog{
  --dialog-bg-color:white;
  --dialog-border-color:white;
  --dialog-shadow:0 2px 14px 0 rgb(58 57 68 / 0.2);
  --text-primary-color:#15141a;
  --text-secondary-color:#5b5b66;
  --hover-filter:brightness(0.9);
  --focus-ring-color:#0060df;
  --focus-ring-outline:2px solid var(--focus-ring-color);

  --textarea-border-color:#8f8f9d;
  --textarea-bg-color:white;
  --textarea-fg-color:var(--text-secondary-color);

  --radio-bg-color:#f0f0f4;
  --radio-checked-bg-color:#fbfbfe;
  --radio-border-color:#8f8f9d;
  --radio-checked-border-color:#0060df;

  --button-secondary-bg-color:#f0f0f4;
  --button-secondary-fg-color:var(--text-primary-color);
  --button-secondary-border-color:var(--button-secondary-bg-color);
  --button-secondary-hover-bg-color:var(--button-secondary-bg-color);
  --button-secondary-hover-fg-color:var(--button-secondary-fg-color);
  --button-secondary-hover-border-color:var(--button-secondary-hover-bg-color);

  --button-primary-bg-color:#0060df;
  --button-primary-fg-color:#fbfbfe;
  --button-primary-hover-bg-color:var(--button-primary-bg-color);
  --button-primary-hover-fg-color:var(--button-primary-fg-color);
  --button-primary-hover-border-color:var(--button-primary-hover-bg-color);

  font:message-box;
  font-size:13px;
  font-weight:400;
  line-height:150%;
  border-radius:4px;
  padding:12px 16px;
  border:1px solid var(--dialog-border-color);
  background:var(--dialog-bg-color);
  color:var(--text-primary-color);
  box-shadow:var(--dialog-shadow);
}

@media (prefers-color-scheme: dark){

:where(html:not(.is-light)) .dialog{
    --dialog-bg-color:#1c1b22;
    --dialog-border-color:#1c1b22;
    --dialog-shadow:0 2px 14px 0 #15141a;
    --text-primary-color:#fbfbfe;
    --text-secondary-color:#cfcfd8;
    --focus-ring-color:#0df;
    --hover-filter:brightness(1.4);

    --textarea-bg-color:#42414d;

    --radio-bg-color:#2b2a33;
    --radio-checked-bg-color:#15141a;
    --radio-checked-border-color:#0df;

    --button-secondary-bg-color:#2b2a33;
    --button-primary-bg-color:#0df;
    --button-primary-fg-color:#15141a;
}
  }

:where(html.is-dark) .dialog{
    --dialog-bg-color:#1c1b22;
    --dialog-border-color:#1c1b22;
    --dialog-shadow:0 2px 14px 0 #15141a;
    --text-primary-color:#fbfbfe;
    --text-secondary-color:#cfcfd8;
    --focus-ring-color:#0df;
    --hover-filter:brightness(1.4);

    --textarea-bg-color:#42414d;

    --radio-bg-color:#2b2a33;
    --radio-checked-bg-color:#15141a;
    --radio-checked-border-color:#0df;

    --button-secondary-bg-color:#2b2a33;
    --button-primary-bg-color:#0df;
    --button-primary-fg-color:#15141a;
}

@media screen and (forced-colors: active){

.dialog{
    --dialog-bg-color:Canvas;
    --dialog-border-color:CanvasText;
    --dialog-shadow:none;
    --text-primary-color:CanvasText;
    --text-secondary-color:CanvasText;
    --hover-filter:none;
    --focus-ring-color:ButtonBorder;

    --textarea-border-color:ButtonBorder;
    --textarea-bg-color:Field;
    --textarea-fg-color:ButtonText;

    --radio-bg-color:ButtonFace;
    --radio-checked-bg-color:ButtonFace;
    --radio-border-color:ButtonText;
    --radio-checked-border-color:ButtonText;

    --button-secondary-bg-color:ButtonFace;
    --button-secondary-fg-color:ButtonText;
    --button-secondary-border-color:ButtonText;
    --button-secondary-hover-bg-color:AccentColor;
    --button-secondary-hover-fg-color:AccentColorText;

    --button-primary-bg-color:ButtonText;
    --button-primary-fg-color:ButtonFace;
    --button-primary-hover-bg-color:AccentColor;
    --button-primary-hover-fg-color:AccentColorText;
}
  }

.dialog .mainContainer *:focus-visible{
      outline:var(--focus-ring-outline);
      outline-offset:2px;
    }

.dialog .mainContainer .radio{
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      gap:4px;
    }

.dialog .mainContainer .radio > .radioButton{
        display:flex;
        gap:8px;
        align-self:stretch;
        align-items:center;
      }

.dialog .mainContainer .radio > .radioButton input{
          -webkit-appearance:none;
             -moz-appearance:none;
                  appearance:none;
          box-sizing:border-box;
          width:16px;
          height:16px;
          border-radius:50%;
          background-color:var(--radio-bg-color);
          border:1px solid var(--radio-border-color);
        }

.dialog .mainContainer .radio > .radioButton input:hover{
            filter:var(--hover-filter);
          }

.dialog .mainContainer .radio > .radioButton input:checked{
            background-color:var(--radio-checked-bg-color);
            border:4px solid var(--radio-checked-border-color);
          }

.dialog .mainContainer .radio > .radioLabel{
        display:flex;
        padding-inline-start:24px;
        align-items:flex-start;
        gap:10px;
        align-self:stretch;
      }

.dialog .mainContainer .radio > .radioLabel > span{
          flex:1 0 0;
          font-size:11px;
          color:var(--text-secondary-color);
        }

.dialog .mainContainer button{
      border-radius:4px;
      border:1px solid;
      font:menu;
      font-weight:600;
      padding:4px 16px;
      width:auto;
      height:32px;
    }

.dialog .mainContainer button:hover{
        cursor:pointer;
        filter:var(--hover-filter);
      }

.dialog .mainContainer button.secondaryButton{
        color:var(--button-secondary-fg-color);
        background-color:var(--button-secondary-bg-color);
        border-color:var(--button-secondary-border-color);
      }

.dialog .mainContainer button.secondaryButton:hover{
          color:var(--button-secondary-hover-fg-color);
          background-color:var(--button-secondary-hover-bg-color);
          border-color:var(--button-secondary-hover-border-color);
        }

.dialog .mainContainer button.primaryButton{
        color:var(--button-primary-hover-fg-color);
        background-color:var(--button-primary-hover-bg-color);
        border-color:var(--button-primary-hover-border-color);
        opacity:1;
      }

.dialog .mainContainer button.primaryButton:hover{
          color:var(--button-primary-hover-fg-color);
          background-color:var(--button-primary-hover-bg-color);
          border-color:var(--button-primary-hover-border-color);
        }

.dialog .mainContainer textarea{
      font:inherit;
      padding:8px;
      resize:none;
      margin:0;
      box-sizing:border-box;
      border-radius:4px;
      border:1px solid var(--textarea-border-color);
      background:var(--textarea-bg-color);
      color:var(--textarea-fg-color);
    }

.dialog .mainContainer textarea:focus{
        outline-offset:0;
        border-color:transparent;
      }

.dialog .mainContainer textarea:disabled{
        pointer-events:none;
        opacity:0.4;
      }

.textLayer{
  position:absolute;
  text-align:initial;
  inset:0;
  overflow:clip;
  opacity:1;
  line-height:1;
  -webkit-text-size-adjust:none;
     -moz-text-size-adjust:none;
          text-size-adjust:none;
  forced-color-adjust:none;
  transform-origin:0 0;
  caret-color:CanvasText;
  z-index:0;
}

.textLayer.highlighting{
    touch-action:none;
  }

.textLayer :is(span, br){
    color:transparent;
    position:absolute;
    white-space:pre;
    cursor:text;
    transform-origin:0% 0%;
  }

.textLayer > :not(.markedContent),
  .textLayer .markedContent span:not(.markedContent){
    z-index:1;
  }

.textLayer span.markedContent{
    top:0;
    height:0;
  }

.textLayer .highlight{
    --highlight-bg-color:rgb(180 0 170 / 0.25);
    --highlight-selected-bg-color:rgb(0 100 0 / 0.25);
    --highlight-backdrop-filter:none;
    --highlight-selected-backdrop-filter:none;

    margin:-1px;
    padding:1px;
    background-color:var(--highlight-bg-color);
    -webkit-backdrop-filter:var(--highlight-backdrop-filter);
            backdrop-filter:var(--highlight-backdrop-filter);
    border-radius:4px;
  }

@media screen and (forced-colors: active){

.textLayer .highlight{
      --highlight-bg-color:transparent;
      --highlight-selected-bg-color:transparent;
      --highlight-backdrop-filter:var(--hcm-highlight-filter);
      --highlight-selected-backdrop-filter:var(
        --hcm-highlight-selected-filter
      );
  }
    }

.textLayer .highlight.appended{
      position:initial;
    }

.textLayer .highlight.begin{
      border-radius:4px 0 0 4px;
    }

.textLayer .highlight.end{
      border-radius:0 4px 4px 0;
    }

.textLayer .highlight.middle{
      border-radius:0;
    }

.textLayer .highlight.selected{
      background-color:var(--highlight-selected-bg-color);
      -webkit-backdrop-filter:var(--highlight-selected-backdrop-filter);
              backdrop-filter:var(--highlight-selected-backdrop-filter);
    }

.textLayer ::-moz-selection{
    background:rgba(0 0 255 / 0.25);
    background:color-mix(in srgb, AccentColor, transparent 75%);
  }

.textLayer ::selection{
    background:rgba(0 0 255 / 0.25);
    background:color-mix(in srgb, AccentColor, transparent 75%);
  }

.textLayer br::-moz-selection{
    background:transparent;
  }

.textLayer br::selection{
    background:transparent;
  }

.textLayer .endOfContent{
    display:block;
    position:absolute;
    inset:100% 0 0;
    z-index:0;
    cursor:default;
    -webkit-user-select:none;
       -moz-user-select:none;
            user-select:none;
  }

.textLayer .endOfContent.active{
      top:0;
    }

.annotationLayer{
  --annotation-unfocused-field-background:url("data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>");
  --input-focus-border-color:Highlight;
  --input-focus-outline:1px solid Canvas;
  --input-unfocused-border-color:transparent;
  --input-disabled-border-color:transparent;
  --input-hover-border-color:black;
  --link-outline:none;

  position:absolute;
  top:0;
  left:0;
  pointer-events:none;
  transform-origin:0 0;
}

@media screen and (forced-colors: active){

.annotationLayer{
    --input-focus-border-color:CanvasText;
    --input-unfocused-border-color:ActiveText;
    --input-disabled-border-color:GrayText;
    --input-hover-border-color:Highlight;
    --link-outline:1.5px solid LinkText;
}

    .annotationLayer .textWidgetAnnotation :is(input, textarea):required, .annotationLayer .choiceWidgetAnnotation select:required, .annotationLayer .buttonWidgetAnnotation:is(.checkBox, .radioButton) input:required{
      outline:1.5px solid selectedItem;
    }

    .annotationLayer .linkAnnotation{
      outline:var(--link-outline);
    }

      .annotationLayer .linkAnnotation:hover{
        -webkit-backdrop-filter:var(--hcm-highlight-filter);
                backdrop-filter:var(--hcm-highlight-filter);
      }

      .annotationLayer .linkAnnotation > a:hover{
        opacity:0 !important;
        background:none !important;
        box-shadow:none;
      }

    .annotationLayer .popupAnnotation .popup{
      outline:calc(1.5px * var(--scale-factor)) solid CanvasText !important;
      background-color:ButtonFace !important;
      color:ButtonText !important;
    }

    .annotationLayer .highlightArea:hover::after{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      -webkit-backdrop-filter:var(--hcm-highlight-filter);
              backdrop-filter:var(--hcm-highlight-filter);
      content:"";
      pointer-events:none;
    }

    .annotationLayer .popupAnnotation.focused .popup{
      outline:calc(3px * var(--scale-factor)) solid Highlight !important;
    }
  }

.annotationLayer[data-main-rotation="90"] .norotate{
    transform:rotate(270deg) translateX(-100%);
  }

.annotationLayer[data-main-rotation="180"] .norotate{
    transform:rotate(180deg) translate(-100%, -100%);
  }

.annotationLayer[data-main-rotation="270"] .norotate{
    transform:rotate(90deg) translateY(-100%);
  }

.annotationLayer.disabled section,
    .annotationLayer.disabled .popup{
      pointer-events:none;
    }

.annotationLayer .annotationContent{
    position:absolute;
    width:100%;
    height:100%;
    pointer-events:none;
  }

.annotationLayer .annotationContent.freetext{
      background:transparent;
      border:none;
      inset:0;
      overflow:visible;
      white-space:nowrap;
      font:10px sans-serif;
      line-height:1.35;
      -webkit-user-select:none;
         -moz-user-select:none;
              user-select:none;
    }

.annotationLayer section{
    position:absolute;
    text-align:initial;
    pointer-events:auto;
    box-sizing:border-box;
    transform-origin:0 0;
  }

.annotationLayer section:has(div.annotationContent) canvas.annotationContent{
        display:none;
      }

.annotationLayer :is(.linkAnnotation, .buttonWidgetAnnotation.pushButton) > a{
    position:absolute;
    font-size:1em;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }

.annotationLayer :is(.linkAnnotation, .buttonWidgetAnnotation.pushButton):not(.hasBorder)
    > a:hover{
    opacity:0.2;
    background-color:rgb(255 255 0);
    box-shadow:0 2px 10px rgb(255 255 0);
  }

.annotationLayer .linkAnnotation.hasBorder:hover{
    background-color:rgb(255 255 0 / 0.2);
  }

.annotationLayer .hasBorder{
    background-size:100% 100%;
  }

.annotationLayer .textAnnotation img{
    position:absolute;
    cursor:pointer;
    width:100%;
    height:100%;
    top:0;
    left:0;
  }

.annotationLayer .textWidgetAnnotation :is(input, textarea), .annotationLayer .choiceWidgetAnnotation select, .annotationLayer .buttonWidgetAnnotation:is(.checkBox, .radioButton) input{
    background-image:var(--annotation-unfocused-field-background);
    border:2px solid var(--input-unfocused-border-color);
    box-sizing:border-box;
    font:calc(9px * var(--scale-factor)) sans-serif;
    height:100%;
    margin:0;
    vertical-align:top;
    width:100%;
  }

.annotationLayer .textWidgetAnnotation :is(input, textarea):required, .annotationLayer .choiceWidgetAnnotation select:required, .annotationLayer .buttonWidgetAnnotation:is(.checkBox, .radioButton) input:required{
    outline:1.5px solid red;
  }

.annotationLayer .choiceWidgetAnnotation select option{
    padding:0;
  }

.annotationLayer .buttonWidgetAnnotation.radioButton input{
    border-radius:50%;
  }

.annotationLayer .textWidgetAnnotation textarea{
    resize:none;
  }

.annotationLayer .textWidgetAnnotation [disabled]:is(input, textarea), .annotationLayer .choiceWidgetAnnotation select[disabled], .annotationLayer .buttonWidgetAnnotation:is(.checkBox, .radioButton) input[disabled]{
    background:none;
    border:2px solid var(--input-disabled-border-color);
    cursor:not-allowed;
  }

.annotationLayer .textWidgetAnnotation :is(input, textarea):hover, .annotationLayer .choiceWidgetAnnotation select:hover, .annotationLayer .buttonWidgetAnnotation:is(.checkBox, .radioButton) input:hover{
    border:2px solid var(--input-hover-border-color);
  }

.annotationLayer .textWidgetAnnotation :is(input, textarea):hover, .annotationLayer .choiceWidgetAnnotation select:hover, .annotationLayer .buttonWidgetAnnotation.checkBox input:hover{
    border-radius:2px;
  }

.annotationLayer .textWidgetAnnotation :is(input, textarea):focus, .annotationLayer .choiceWidgetAnnotation select:focus{
    background:none;
    border:2px solid var(--input-focus-border-color);
    border-radius:2px;
    outline:var(--input-focus-outline);
  }

.annotationLayer .buttonWidgetAnnotation:is(.checkBox, .radioButton) :focus{
    background-image:none;
    background-color:transparent;
  }

.annotationLayer .buttonWidgetAnnotation.checkBox :focus{
    border:2px solid var(--input-focus-border-color);
    border-radius:2px;
    outline:var(--input-focus-outline);
  }

.annotationLayer .buttonWidgetAnnotation.radioButton :focus{
    border:2px solid var(--input-focus-border-color);
    outline:var(--input-focus-outline);
  }

.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::before,
  .annotationLayer .buttonWidgetAnnotation.checkBox input:checked::after,
  .annotationLayer .buttonWidgetAnnotation.radioButton input:checked::before{
    background-color:CanvasText;
    content:"";
    display:block;
    position:absolute;
  }

.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::before,
  .annotationLayer .buttonWidgetAnnotation.checkBox input:checked::after{
    height:80%;
    left:45%;
    width:1px;
  }

.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::before{
    transform:rotate(45deg);
  }

.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::after{
    transform:rotate(-45deg);
  }

.annotationLayer .buttonWidgetAnnotation.radioButton input:checked::before{
    border-radius:50%;
    height:50%;
    left:25%;
    top:25%;
    width:50%;
  }

.annotationLayer .textWidgetAnnotation input.comb{
    font-family:monospace;
    padding-left:2px;
    padding-right:0;
  }

.annotationLayer .textWidgetAnnotation input.comb:focus{
    width:103%;
  }

.annotationLayer .buttonWidgetAnnotation:is(.checkBox, .radioButton) input{
    -webkit-appearance:none;
       -moz-appearance:none;
            appearance:none;
  }

.annotationLayer .fileAttachmentAnnotation .popupTriggerArea{
    height:100%;
    width:100%;
  }

.annotationLayer .popupAnnotation{
    position:absolute;
    font-size:calc(9px * var(--scale-factor));
    pointer-events:none;
    width:-moz-max-content;
    width:max-content;
    max-width:45%;
    height:auto;
  }

.annotationLayer .popup{
    background-color:rgb(255 255 153);
    box-shadow:0 calc(2px * var(--scale-factor)) calc(5px * var(--scale-factor)) rgb(136 136 136);
    border-radius:calc(2px * var(--scale-factor));
    outline:1.5px solid rgb(255 255 74);
    padding:calc(6px * var(--scale-factor));
    cursor:pointer;
    font:message-box;
    white-space:normal;
    word-wrap:break-word;
    pointer-events:auto;
  }

.annotationLayer .popupAnnotation.focused .popup{
    outline-width:3px;
  }

.annotationLayer .popup *{
    font-size:calc(9px * var(--scale-factor));
  }

.annotationLayer .popup > .header{
    display:inline-block;
  }

.annotationLayer .popup > .header h1{
    display:inline;
  }

.annotationLayer .popup > .header .popupDate{
    display:inline-block;
    margin-left:calc(5px * var(--scale-factor));
    width:-moz-fit-content;
    width:fit-content;
  }

.annotationLayer .popupContent{
    border-top:1px solid rgb(51 51 51);
    margin-top:calc(2px * var(--scale-factor));
    padding-top:calc(2px * var(--scale-factor));
  }

.annotationLayer .richText > *{
    white-space:pre-wrap;
    font-size:calc(9px * var(--scale-factor));
  }

.annotationLayer .popupTriggerArea{
    cursor:pointer;
  }

.annotationLayer section svg{
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
  }

.annotationLayer .annotationTextContent{
    position:absolute;
    width:100%;
    height:100%;
    opacity:0;
    color:transparent;
    -webkit-user-select:none;
       -moz-user-select:none;
            user-select:none;
    pointer-events:none;
  }

.annotationLayer .annotationTextContent span{
      width:100%;
      display:inline-block;
    }

.annotationLayer svg.quadrilateralsContainer{
    contain:strict;
    width:0;
    height:0;
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
  }

:root{
  --xfa-unfocused-field-background:url("data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>");
  --xfa-focus-outline:auto;
}

@media screen and (forced-colors: active){
  :root{
    --xfa-focus-outline:2px solid CanvasText;
  }
  .xfaLayer *:required{
    outline:1.5px solid selectedItem;
  }
}

.xfaLayer{
  background-color:transparent;
}

.xfaLayer .highlight{
  margin:-1px;
  padding:1px;
  background-color:rgb(239 203 237);
  border-radius:4px;
}

.xfaLayer .highlight.appended{
  position:initial;
}

.xfaLayer .highlight.begin{
  border-radius:4px 0 0 4px;
}

.xfaLayer .highlight.end{
  border-radius:0 4px 4px 0;
}

.xfaLayer .highlight.middle{
  border-radius:0;
}

.xfaLayer .highlight.selected{
  background-color:rgb(203 223 203);
}

.xfaPage{
  overflow:hidden;
  position:relative;
}

.xfaContentarea{
  position:absolute;
}

.xfaPrintOnly{
  display:none;
}

.xfaLayer{
  position:absolute;
  text-align:initial;
  top:0;
  left:0;
  transform-origin:0 0;
  line-height:1.2;
}

.xfaLayer *{
  color:inherit;
  font:inherit;
  font-style:inherit;
  font-weight:inherit;
  font-kerning:inherit;
  letter-spacing:-0.01px;
  text-align:inherit;
  text-decoration:inherit;
  box-sizing:border-box;
  background-color:transparent;
  padding:0;
  margin:0;
  pointer-events:auto;
  line-height:inherit;
}

.xfaLayer *:required{
  outline:1.5px solid red;
}

.xfaLayer div,
.xfaLayer svg,
.xfaLayer svg *{
  pointer-events:none;
}

.xfaLayer a{
  color:blue;
}

.xfaRich li{
  margin-left:3em;
}

.xfaFont{
  color:black;
  font-weight:normal;
  font-kerning:none;
  font-size:10px;
  font-style:normal;
  letter-spacing:0;
  text-decoration:none;
  vertical-align:0;
}

.xfaCaption{
  overflow:hidden;
  flex:0 0 auto;
}

.xfaCaptionForCheckButton{
  overflow:hidden;
  flex:1 1 auto;
}

.xfaLabel{
  height:100%;
  width:100%;
}

.xfaLeft{
  display:flex;
  flex-direction:row;
  align-items:center;
}

.xfaRight{
  display:flex;
  flex-direction:row-reverse;
  align-items:center;
}

:is(.xfaLeft, .xfaRight) > :is(.xfaCaption, .xfaCaptionForCheckButton){
  max-height:100%;
}

.xfaTop{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
}

.xfaBottom{
  display:flex;
  flex-direction:column-reverse;
  align-items:flex-start;
}

:is(.xfaTop, .xfaBottom) > :is(.xfaCaption, .xfaCaptionForCheckButton){
  width:100%;
}

.xfaBorder{
  background-color:transparent;
  position:absolute;
  pointer-events:none;
}

.xfaWrapped{
  width:100%;
  height:100%;
}

:is(.xfaTextfield, .xfaSelect):focus{
  background-image:none;
  background-color:transparent;
  outline:var(--xfa-focus-outline);
  outline-offset:-1px;
}

:is(.xfaCheckbox, .xfaRadio):focus{
  outline:var(--xfa-focus-outline);
}

.xfaTextfield,
.xfaSelect{
  height:100%;
  width:100%;
  flex:1 1 auto;
  border:none;
  resize:none;
  background-image:var(--xfa-unfocused-field-background);
}

.xfaSelect{
  padding-inline:2px;
}

:is(.xfaTop, .xfaBottom) > :is(.xfaTextfield, .xfaSelect){
  flex:0 1 auto;
}

.xfaButton{
  cursor:pointer;
  width:100%;
  height:100%;
  border:none;
  text-align:center;
}

.xfaLink{
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
}

.xfaCheckbox,
.xfaRadio{
  width:100%;
  height:100%;
  flex:0 0 auto;
  border:none;
}

.xfaRich{
  white-space:pre-wrap;
  width:100%;
  height:100%;
}

.xfaImage{
  -o-object-position:left top;
     object-position:left top;
  -o-object-fit:contain;
     object-fit:contain;
  width:100%;
  height:100%;
}

.xfaLrTb,
.xfaRlTb,
.xfaTb{
  display:flex;
  flex-direction:column;
  align-items:stretch;
}

.xfaLr{
  display:flex;
  flex-direction:row;
  align-items:stretch;
}

.xfaRl{
  display:flex;
  flex-direction:row-reverse;
  align-items:stretch;
}

.xfaTb > div{
  justify-content:left;
}

.xfaPosition{
  position:relative;
}

.xfaArea{
  position:relative;
}

.xfaValignMiddle{
  display:flex;
  align-items:center;
}

.xfaTable{
  display:flex;
  flex-direction:column;
  align-items:stretch;
}

.xfaTable .xfaRow{
  display:flex;
  flex-direction:row;
  align-items:stretch;
}

.xfaTable .xfaRlRow{
  display:flex;
  flex-direction:row-reverse;
  align-items:stretch;
  flex:1;
}

.xfaTable .xfaRlRow > div{
  flex:1;
}

:is(.xfaNonInteractive, .xfaDisabled, .xfaReadOnly) :is(input, textarea){
  background:initial;
}

@media print{
  .xfaTextfield,
  .xfaSelect{
    background:transparent;
  }

  .xfaSelect{
    -webkit-appearance:none;
       -moz-appearance:none;
            appearance:none;
    text-indent:1px;
    text-overflow:"";
  }
}

.canvasWrapper svg{
    transform:none;
  }

.canvasWrapper svg[data-main-rotation="90"] mask,
      .canvasWrapper svg[data-main-rotation="90"] use:not(.clip, .mask){
        transform:matrix(0, 1, -1, 0, 1, 0);
      }

.canvasWrapper svg[data-main-rotation="180"] mask,
      .canvasWrapper svg[data-main-rotation="180"] use:not(.clip, .mask){
        transform:matrix(-1, 0, 0, -1, 1, 1);
      }

.canvasWrapper svg[data-main-rotation="270"] mask,
      .canvasWrapper svg[data-main-rotation="270"] use:not(.clip, .mask){
        transform:matrix(0, -1, 1, 0, 0, 1);
      }

.canvasWrapper svg.highlight{
      --blend-mode:multiply;

      position:absolute;
      mix-blend-mode:var(--blend-mode);
    }

@media screen and (forced-colors: active){

.canvasWrapper svg.highlight{
        --blend-mode:difference;
    }
      }

.canvasWrapper svg.highlight:not(.free){
        fill-rule:evenodd;
      }

.canvasWrapper svg.highlightOutline{
      position:absolute;
      mix-blend-mode:normal;
      fill-rule:evenodd;
      fill:none;
    }

.canvasWrapper svg.highlightOutline.hovered:not(.free):not(.selected){
          stroke:var(--hover-outline-color);
          stroke-width:var(--outline-width);
        }

.canvasWrapper svg.highlightOutline.selected:not(.free) .mainOutline{
            stroke:var(--outline-around-color);
            stroke-width:calc(
              var(--outline-width) + 2 * var(--outline-around-width)
            );
          }

.canvasWrapper svg.highlightOutline.selected:not(.free) .secondaryOutline{
            stroke:var(--outline-color);
            stroke-width:var(--outline-width);
          }

.canvasWrapper svg.highlightOutline.free.hovered:not(.selected){
          stroke:var(--hover-outline-color);
          stroke-width:calc(2 * var(--outline-width));
        }

.canvasWrapper svg.highlightOutline.free.selected .mainOutline{
            stroke:var(--outline-around-color);
            stroke-width:calc(
              2 * (var(--outline-width) + var(--outline-around-width))
            );
          }

.canvasWrapper svg.highlightOutline.free.selected .secondaryOutline{
            stroke:var(--outline-color);
            stroke-width:calc(2 * var(--outline-width));
          }

.toggle-button{
  --button-background-color:#f0f0f4;
  --button-background-color-hover:#e0e0e6;
  --button-background-color-active:#cfcfd8;
  --color-accent-primary:#0060df;
  --color-accent-primary-hover:#0250bb;
  --color-accent-primary-active:#054096;
  --border-interactive-color:#8f8f9d;
  --border-radius-circle:9999px;
  --border-width:1px;
  --size-item-small:16px;
  --size-item-large:32px;
  --color-canvas:white;

  --toggle-background-color:var(--button-background-color);
  --toggle-background-color-hover:var(--button-background-color-hover);
  --toggle-background-color-active:var(--button-background-color-active);
  --toggle-background-color-pressed:var(--color-accent-primary);
  --toggle-background-color-pressed-hover:var(--color-accent-primary-hover);
  --toggle-background-color-pressed-active:var(--color-accent-primary-active);
  --toggle-border-color:var(--border-interactive-color);
  --toggle-border-color-hover:var(--toggle-border-color);
  --toggle-border-color-active:var(--toggle-border-color);
  --toggle-border-radius:var(--border-radius-circle);
  --toggle-border-width:var(--border-width);
  --toggle-height:var(--size-item-small);
  --toggle-width:var(--size-item-large);
  --toggle-dot-background-color:var(--toggle-border-color);
  --toggle-dot-background-color-hover:var(--toggle-dot-background-color);
  --toggle-dot-background-color-active:var(--toggle-dot-background-color);
  --toggle-dot-background-color-on-pressed:var(--color-canvas);
  --toggle-dot-margin:1px;
  --toggle-dot-height:calc(
    var(--toggle-height) - 2 * var(--toggle-dot-margin) - 2 *
      var(--toggle-border-width)
  );
  --toggle-dot-width:var(--toggle-dot-height);
  --toggle-dot-transform-x:calc(
    var(--toggle-width) - 4 * var(--toggle-dot-margin) - var(--toggle-dot-width)
  );

  -webkit-appearance:none;

     -moz-appearance:none;

          appearance:none;
  padding:0;
  margin:0;
  border:var(--toggle-border-width) solid var(--toggle-border-color);
  height:var(--toggle-height);
  width:var(--toggle-width);
  border-radius:var(--toggle-border-radius);
  background:var(--toggle-background-color);
  box-sizing:border-box;
  flex-shrink:0;
}

@media (prefers-color-scheme: dark){

:where(html:not(.is-light)) .toggle-button{
    --button-background-color:color-mix(in srgb, currentColor 7%, transparent);
    --button-background-color-hover:color-mix(
      in srgb,
      currentColor 14%,
      transparent
    );
    --button-background-color-active:color-mix(
      in srgb,
      currentColor 21%,
      transparent
    );
    --color-accent-primary:#0df;
    --color-accent-primary-hover:#80ebff;
    --color-accent-primary-active:#aaf2ff;
    --border-interactive-color:#bfbfc9;
    --color-canvas:#1c1b22;
}
  }

:where(html.is-dark) .toggle-button{
    --button-background-color:color-mix(in srgb, currentColor 7%, transparent);
    --button-background-color-hover:color-mix(
      in srgb,
      currentColor 14%,
      transparent
    );
    --button-background-color-active:color-mix(
      in srgb,
      currentColor 21%,
      transparent
    );
    --color-accent-primary:#0df;
    --color-accent-primary-hover:#80ebff;
    --color-accent-primary-active:#aaf2ff;
    --border-interactive-color:#bfbfc9;
    --color-canvas:#1c1b22;
}

@media (forced-colors: active){

.toggle-button{
    --color-accent-primary:ButtonText;
    --color-accent-primary-hover:SelectedItem;
    --color-accent-primary-active:SelectedItem;
    --border-interactive-color:ButtonText;
    --button-background-color:ButtonFace;
    --border-interactive-color-hover:SelectedItem;
    --border-interactive-color-active:SelectedItem;
    --border-interactive-color-disabled:GrayText;
    --color-canvas:ButtonText;
}
  }

.toggle-button:focus-visible{
    outline:var(--focus-outline);
    outline-offset:var(--focus-outline-offset);
  }

.toggle-button:enabled:hover{
    background:var(--toggle-background-color-hover);
    border-color:var(--toggle-border-color);
  }

.toggle-button:enabled:active{
    background:var(--toggle-background-color-active);
    border-color:var(--toggle-border-color);
  }

.toggle-button[aria-pressed="true"]{
    background:var(--toggle-background-color-pressed);
    border-color:transparent;
  }

.toggle-button[aria-pressed="true"]:enabled:hover{
    background:var(--toggle-background-color-pressed-hover);
    border-color:transparent;
  }

.toggle-button[aria-pressed="true"]:enabled:active{
    background:var(--toggle-background-color-pressed-active);
    border-color:transparent;
  }

.toggle-button::before{
    display:block;
    content:"";
    background-color:var(--toggle-dot-background-color);
    height:var(--toggle-dot-height);
    width:var(--toggle-dot-width);
    margin:var(--toggle-dot-margin);
    border-radius:var(--toggle-border-radius);
    translate:0;
  }

.toggle-button[aria-pressed="true"]::before{
    translate:var(--toggle-dot-transform-x);
    background-color:var(--toggle-dot-background-color-on-pressed);
  }

.toggle-button[aria-pressed="true"]:enabled:hover::before,
  .toggle-button[aria-pressed="true"]:enabled:active::before{
    background-color:var(--toggle-dot-background-color-on-pressed);
  }

[dir="rtl"] .toggle-button[aria-pressed="true"]::before{
    translate:calc(-1 * var(--toggle-dot-transform-x));
  }

@media (prefers-reduced-motion: no-preference){
    .toggle-button::before{
      transition:translate 100ms;
    }
  }

@media (prefers-contrast){
    .toggle-button:enabled:hover{
      border-color:var(--toggle-border-color-hover);
    }

    .toggle-button:enabled:active{
      border-color:var(--toggle-border-color-active);
    }

    .toggle-button[aria-pressed="true"]:enabled{
      border-color:var(--toggle-border-color);
      position:relative;
    }

    .toggle-button[aria-pressed="true"]:enabled:hover,
    .toggle-button[aria-pressed="true"]:enabled:hover:active{
      border-color:var(--toggle-border-color-hover);
    }

    .toggle-button[aria-pressed="true"]:enabled:active{
      background-color:var(--toggle-dot-background-color-active);
      border-color:var(--toggle-dot-background-color-hover);
    }

    .toggle-button:hover::before,
    .toggle-button:active::before{
      background-color:var(--toggle-dot-background-color-hover);
    }
  }

@media (forced-colors){

.toggle-button{
    --toggle-dot-background-color:var(--color-accent-primary);
    --toggle-dot-background-color-hover:var(--color-accent-primary-hover);
    --toggle-dot-background-color-active:var(--color-accent-primary-active);
    --toggle-dot-background-color-on-pressed:var(--button-background-color);
    --toggle-background-color-disabled:var(--button-background-color-disabled);
    --toggle-border-color-hover:var(--border-interactive-color-hover);
    --toggle-border-color-active:var(--border-interactive-color-active);
    --toggle-border-color-disabled:var(--border-interactive-color-disabled);
}

    .toggle-button[aria-pressed="true"]:enabled::after{
      border:1px solid var(--button-background-color);
      content:"";
      position:absolute;
      height:var(--toggle-height);
      width:var(--toggle-width);
      display:block;
      border-radius:var(--toggle-border-radius);
      inset:-2px;
    }

    .toggle-button[aria-pressed="true"]:enabled:active::after{
      border-color:var(--toggle-border-color-active);
    }
  }

:root{
  --outline-width:2px;
  --outline-color:#0060df;
  --outline-around-width:1px;
  --outline-around-color:#f0f0f4;
  --hover-outline-around-color:var(--outline-around-color);
  --focus-outline:solid var(--outline-width) var(--outline-color);
  --unfocus-outline:solid var(--outline-width) transparent;
  --focus-outline-around:solid var(--outline-around-width) var(--outline-around-color);
  --hover-outline-color:#8f8f9d;
  --hover-outline:solid var(--outline-width) var(--hover-outline-color);
  --hover-outline-around:solid var(--outline-around-width) var(--hover-outline-around-color);
  --freetext-line-height:1.35;
  --freetext-padding:2px;
  --resizer-bg-color:var(--outline-color);
  --resizer-size:6px;
  --resizer-shift:calc(
    0px - (var(--outline-width) + var(--resizer-size)) / 2 -
      var(--outline-around-width)
  );
  --editorFreeText-editing-cursor:text;
  --editorInk-editing-cursor:url(images/cursor-editorInk.svg) 0 16, pointer;
  --editorHighlight-editing-cursor:url(images/cursor-editorTextHighlight.svg) 24 24, text;
  --editorFreeHighlight-editing-cursor:url(images/cursor-editorFreeHighlight.svg) 1 18, pointer;
}
.visuallyHidden{
  position:absolute;
  top:0;
  left:0;
  border:0;
  margin:0;
  padding:0;
  width:0;
  height:0;
  overflow:hidden;
  white-space:nowrap;
  font-size:0;
}

.textLayer.highlighting{
  cursor:var(--editorFreeHighlight-editing-cursor);
}

.textLayer.highlighting:not(.free) span{
    cursor:var(--editorHighlight-editing-cursor);
  }

.textLayer.highlighting.free span{
    cursor:var(--editorFreeHighlight-editing-cursor);
  }

@media (min-resolution: 1.1dppx){
  :root{
    --editorFreeText-editing-cursor:url(images/cursor-editorFreeText.svg) 0 16, text;
  }
}

@media screen and (forced-colors: active){
  :root{
    --outline-color:CanvasText;
    --outline-around-color:ButtonFace;
    --resizer-bg-color:ButtonText;
    --hover-outline-color:Highlight;
    --hover-outline-around-color:SelectedItemText;
  }
}

[data-editor-rotation="90"]{
  transform:rotate(90deg);
}

[data-editor-rotation="180"]{
  transform:rotate(180deg);
}

[data-editor-rotation="270"]{
  transform:rotate(270deg);
}

.annotationEditorLayer{
  background:transparent;
  position:absolute;
  inset:0;
  font-size:calc(100px * var(--scale-factor));
  transform-origin:0 0;
  cursor:auto;
}

.annotationEditorLayer .selectedEditor{
    z-index:100000 !important;
  }

.annotationEditorLayer.drawing *{
    pointer-events:none !important;
  }

.annotationEditorLayer.waiting{
  content:"";
  cursor:wait;
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
}

.annotationEditorLayer.disabled{
  pointer-events:none;
}

.annotationEditorLayer.freetextEditing{
  cursor:var(--editorFreeText-editing-cursor);
}

.annotationEditorLayer.inkEditing{
  cursor:var(--editorInk-editing-cursor);
}

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor){
  position:absolute;
  background:transparent;
  z-index:1;
  transform-origin:0 0;
  cursor:auto;
  max-width:100%;
  max-height:100%;
  border:var(--unfocus-outline);
}

.annotationEditorLayer .draggable.selectedEditor:is(.freeTextEditor, .inkEditor, .stampEditor){
    cursor:move;
  }

.annotationEditorLayer .moving:is(.freeTextEditor, .inkEditor, .stampEditor){
    touch-action:none;
  }

.annotationEditorLayer .selectedEditor:is(.freeTextEditor, .inkEditor, .stampEditor){
    border:var(--focus-outline);
    outline:var(--focus-outline-around);
  }

.annotationEditorLayer .selectedEditor:is(.freeTextEditor, .inkEditor, .stampEditor)::before{
      content:"";
      position:absolute;
      inset:0;
      border:var(--focus-outline-around);
      pointer-events:none;
    }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor):hover:not(.selectedEditor){
    border:var(--hover-outline);
    outline:var(--hover-outline-around);
  }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor):hover:not(.selectedEditor)::before{
      content:"";
      position:absolute;
      inset:0;
      border:var(--focus-outline-around);
    }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar{
    --editor-toolbar-delete-image:url(images/editor-toolbar-delete.svg);
    --editor-toolbar-bg-color:#f0f0f4;
    --editor-toolbar-highlight-image:url(images/toolbarButton-editorHighlight.svg);
    --editor-toolbar-fg-color:#2e2e56;
    --editor-toolbar-border-color:#8f8f9d;
    --editor-toolbar-hover-border-color:var(--editor-toolbar-border-color);
    --editor-toolbar-hover-bg-color:#e0e0e6;
    --editor-toolbar-hover-fg-color:var(--editor-toolbar-fg-color);
    --editor-toolbar-hover-outline:none;
    --editor-toolbar-focus-outline-color:#0060df;
    --editor-toolbar-shadow:0 2px 6px 0 rgb(58 57 68 / 0.2);
    --editor-toolbar-vert-offset:6px;
    --editor-toolbar-height:28px;
    --editor-toolbar-padding:2px;

    display:flex;
    width:-moz-fit-content;
    width:fit-content;
    height:var(--editor-toolbar-height);
    flex-direction:column;
    justify-content:center;
    align-items:center;
    cursor:default;
    pointer-events:auto;
    box-sizing:content-box;
    padding:var(--editor-toolbar-padding);

    position:absolute;
    inset-inline-end:0;
    inset-block-start:calc(100% + var(--editor-toolbar-vert-offset));

    border-radius:6px;
    background-color:var(--editor-toolbar-bg-color);
    border:1px solid var(--editor-toolbar-border-color);
    box-shadow:var(--editor-toolbar-shadow);
  }

@media (prefers-color-scheme: dark){

:where(html:not(.is-light)) :is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar{
      --editor-toolbar-bg-color:#2b2a33;
      --editor-toolbar-fg-color:#fbfbfe;
      --editor-toolbar-hover-bg-color:#52525e;
      --editor-toolbar-focus-outline-color:#0df;
  }
    }

:where(html.is-dark) :is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar{
      --editor-toolbar-bg-color:#2b2a33;
      --editor-toolbar-fg-color:#fbfbfe;
      --editor-toolbar-hover-bg-color:#52525e;
      --editor-toolbar-focus-outline-color:#0df;
  }

@media screen and (forced-colors: active){

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar{
      --editor-toolbar-bg-color:ButtonFace;
      --editor-toolbar-fg-color:ButtonText;
      --editor-toolbar-border-color:ButtonText;
      --editor-toolbar-hover-border-color:AccentColor;
      --editor-toolbar-hover-bg-color:ButtonFace;
      --editor-toolbar-hover-fg-color:AccentColor;
      --editor-toolbar-hover-outline:2px solid var(--editor-toolbar-hover-border-color);
      --editor-toolbar-focus-outline-color:ButtonBorder;
      --editor-toolbar-shadow:none;
  }
    }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar.hidden{
      display:none;
    }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar:has(:focus-visible){
      border-color:transparent;
    }

[dir="ltr"] :is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar{
      transform-origin:100% 0;
    }

[dir="rtl"] :is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar{
      transform-origin:0 0;
    }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons{
      display:flex;
      justify-content:center;
      align-items:center;
      gap:0;
      height:100%;
    }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons .divider{
        width:1px;
        height:calc(
          2 * var(--editor-toolbar-padding) + var(--editor-toolbar-height)
        );
        background-color:var(--editor-toolbar-border-color);
        display:inline-block;
        margin-inline:2px;
      }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons .highlightButton{
        width:var(--editor-toolbar-height);
      }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons .highlightButton::before{
          content:"";
          -webkit-mask-image:var(--editor-toolbar-highlight-image);
                  mask-image:var(--editor-toolbar-highlight-image);
          -webkit-mask-repeat:no-repeat;
                  mask-repeat:no-repeat;
          -webkit-mask-position:center;
                  mask-position:center;
          display:inline-block;
          background-color:var(--editor-toolbar-fg-color);
          width:100%;
          height:100%;
        }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons .highlightButton:hover::before{
          background-color:var(--editor-toolbar-hover-fg-color);
        }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons .delete{
        width:var(--editor-toolbar-height);
      }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons .delete::before{
          content:"";
          -webkit-mask-image:var(--editor-toolbar-delete-image);
                  mask-image:var(--editor-toolbar-delete-image);
          -webkit-mask-repeat:no-repeat;
                  mask-repeat:no-repeat;
          -webkit-mask-position:center;
                  mask-position:center;
          display:inline-block;
          background-color:var(--editor-toolbar-fg-color);
          width:100%;
          height:100%;
        }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons .delete:hover::before{
          background-color:var(--editor-toolbar-hover-fg-color);
        }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons > *{
        height:var(--editor-toolbar-height);
      }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons > :not(.divider){
        border:none;
        background-color:transparent;
        cursor:pointer;
      }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons > :not(.divider):hover{
          border-radius:2px;
          background-color:var(--editor-toolbar-hover-bg-color);
          color:var(--editor-toolbar-hover-fg-color);
          outline:var(--editor-toolbar-hover-outline);
          outline-offset:1px;
        }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons > :not(.divider):hover:active{
            outline:none;
          }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons > :not(.divider):focus-visible{
          border-radius:2px;
          outline:2px solid var(--editor-toolbar-focus-outline-color);
        }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons .altText{
        --alt-text-add-image:url(images/altText_add.svg);
        --alt-text-done-image:url(images/altText_done.svg);

        display:flex;
        align-items:center;
        justify-content:center;
        width:-moz-max-content;
        width:max-content;
        padding-inline:8px;
        pointer-events:all;
        font:menu;
        font-weight:590;
        font-size:12px;
        color:var(--editor-toolbar-fg-color);
      }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons .altText:disabled{
          pointer-events:none;
        }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons .altText::before{
          content:"";
          -webkit-mask-image:var(--alt-text-add-image);
                  mask-image:var(--alt-text-add-image);
          -webkit-mask-repeat:no-repeat;
                  mask-repeat:no-repeat;
          -webkit-mask-position:center;
                  mask-position:center;
          display:inline-block;
          width:12px;
          height:13px;
          background-color:var(--editor-toolbar-fg-color);
          margin-inline-end:4px;
        }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons .altText:hover::before{
          background-color:var(--editor-toolbar-hover-fg-color);
        }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons .altText.done::before{
          -webkit-mask-image:var(--alt-text-done-image);
                  mask-image:var(--alt-text-done-image);
        }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons .altText .tooltip{
          display:none;
        }

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons .altText .tooltip.show{
            --alt-text-tooltip-bg:#f0f0f4;
            --alt-text-tooltip-fg:#15141a;
            --alt-text-tooltip-border:#8f8f9d;
            --alt-text-tooltip-shadow:0px 2px 6px 0px rgb(58 57 68 / 0.2);

            display:inline-flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            position:absolute;
            top:calc(100% + 2px);
            inset-inline-start:0;
            padding-block:2px 3px;
            padding-inline:3px;
            max-width:300px;
            width:-moz-max-content;
            width:max-content;
            height:auto;
            font-size:12px;

            border:0.5px solid var(--alt-text-tooltip-border);
            background:var(--alt-text-tooltip-bg);
            box-shadow:var(--alt-text-tooltip-shadow);
            color:var(--alt-text-tooltip-fg);

            pointer-events:none;
          }

@media (prefers-color-scheme: dark){

:where(html:not(.is-light)) :is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons .altText .tooltip.show{
              --alt-text-tooltip-bg:#1c1b22;
              --alt-text-tooltip-fg:#fbfbfe;
              --alt-text-tooltip-shadow:0px 2px 6px 0px #15141a;
          }
            }

:where(html.is-dark) :is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons .altText .tooltip.show{
              --alt-text-tooltip-bg:#1c1b22;
              --alt-text-tooltip-fg:#fbfbfe;
              --alt-text-tooltip-shadow:0px 2px 6px 0px #15141a;
          }

@media screen and (forced-colors: active){

:is(.annotationEditorLayer
  :is(.freeTextEditor, .inkEditor, .stampEditor, .highlightEditor),.textLayer) .editToolbar .buttons .altText .tooltip.show{
              --alt-text-tooltip-bg:Canvas;
              --alt-text-tooltip-fg:CanvasText;
              --alt-text-tooltip-border:CanvasText;
              --alt-text-tooltip-shadow:none;
          }
            }

.annotationEditorLayer .freeTextEditor{
  padding:calc(var(--freetext-padding) * var(--scale-factor));
  width:auto;
  height:auto;
  touch-action:none;
}

.annotationEditorLayer .freeTextEditor .internal{
  background:transparent;
  border:none;
  inset:0;
  overflow:visible;
  white-space:nowrap;
  font:10px sans-serif;
  line-height:var(--freetext-line-height);
  -webkit-user-select:none;
     -moz-user-select:none;
          user-select:none;
}

.annotationEditorLayer .freeTextEditor .overlay{
  position:absolute;
  display:none;
  background:transparent;
  inset:0;
  width:100%;
  height:100%;
}

.annotationEditorLayer freeTextEditor .overlay.enabled{
  display:block;
}

.annotationEditorLayer .freeTextEditor .internal:empty::before{
  content:attr(default-content);
  color:gray;
}

.annotationEditorLayer .freeTextEditor .internal:focus{
  outline:none;
  -webkit-user-select:auto;
     -moz-user-select:auto;
          user-select:auto;
}

.annotationEditorLayer .inkEditor{
  width:100%;
  height:100%;
}

.annotationEditorLayer .inkEditor.editing{
  cursor:inherit;
}

.annotationEditorLayer .inkEditor .inkEditorCanvas{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  touch-action:none;
}

.annotationEditorLayer .stampEditor{
  width:auto;
  height:auto;
}

.annotationEditorLayer .stampEditor canvas{
    position:absolute;
    width:100%;
    height:100%;
    margin:0;
    top:0;
    left:0;
  }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers{
      position:absolute;
      inset:0;
    }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers.hidden{
        display:none;
      }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers > .resizer{
        width:var(--resizer-size);
        height:var(--resizer-size);
        background:content-box var(--resizer-bg-color);
        border:var(--focus-outline-around);
        border-radius:2px;
        position:absolute;
      }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers > .resizer.topLeft{
          top:var(--resizer-shift);
          left:var(--resizer-shift);
        }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers > .resizer.topMiddle{
          top:var(--resizer-shift);
          left:calc(50% + var(--resizer-shift));
        }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers > .resizer.topRight{
          top:var(--resizer-shift);
          right:var(--resizer-shift);
        }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers > .resizer.middleRight{
          top:calc(50% + var(--resizer-shift));
          right:var(--resizer-shift);
        }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers > .resizer.bottomRight{
          bottom:var(--resizer-shift);
          right:var(--resizer-shift);
        }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers > .resizer.bottomMiddle{
          bottom:var(--resizer-shift);
          left:calc(50% + var(--resizer-shift));
        }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers > .resizer.bottomLeft{
          bottom:var(--resizer-shift);
          left:var(--resizer-shift);
        }

.annotationEditorLayer :is(.freeTextEditor, .inkEditor, .stampEditor) > .resizers > .resizer.middleLeft{
          top:calc(50% + var(--resizer-shift));
          left:var(--resizer-shift);
        }

.annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.topLeft,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.topLeft,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.topLeft,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.topLeft,
      .annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.bottomRight,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.bottomRight,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.bottomRight,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.bottomRight{
        cursor:nwse-resize;
      }

.annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.topMiddle,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.topMiddle,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.topMiddle,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.topMiddle,
      .annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.bottomMiddle,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.bottomMiddle,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.bottomMiddle,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.bottomMiddle{
        cursor:ns-resize;
      }

.annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.topRight,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.topRight,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.topRight,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.topRight,
      .annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.bottomLeft,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.bottomLeft,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.bottomLeft,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.bottomLeft{
        cursor:nesw-resize;
      }

.annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.middleRight,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.middleRight,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.middleRight,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.middleRight,
      .annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.middleLeft,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.middleLeft,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.middleLeft,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.middleLeft{
        cursor:ew-resize;
      }

.annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.topLeft,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.topLeft,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.topLeft,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.topLeft,
      .annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.bottomRight,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.bottomRight,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.bottomRight,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.bottomRight{
        cursor:nesw-resize;
      }

.annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.topMiddle,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.topMiddle,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.topMiddle,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.topMiddle,
      .annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.bottomMiddle,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.bottomMiddle,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.bottomMiddle,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.bottomMiddle{
        cursor:ew-resize;
      }

.annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.topRight,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.topRight,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.topRight,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.topRight,
      .annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.bottomLeft,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.bottomLeft,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.bottomLeft,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.bottomLeft{
        cursor:nwse-resize;
      }

.annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.middleRight,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.middleRight,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.middleRight,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.middleRight,
      .annotationEditorLayer[data-main-rotation="0"]
    :is([data-editor-rotation="90"], [data-editor-rotation="270"]) > .resizers > .resizer.middleLeft,
      .annotationEditorLayer[data-main-rotation="90"]
    :is([data-editor-rotation="0"], [data-editor-rotation="180"]) > .resizers > .resizer.middleLeft,
      .annotationEditorLayer[data-main-rotation="180"]
    :is([data-editor-rotation="270"], [data-editor-rotation="90"]) > .resizers > .resizer.middleLeft,
      .annotationEditorLayer[data-main-rotation="270"]
    :is([data-editor-rotation="180"], [data-editor-rotation="0"]) > .resizers > .resizer.middleLeft{
        cursor:ns-resize;
      }

.annotationEditorLayer
    :is(
      [data-main-rotation="0"] [data-editor-rotation="90"],
      [data-main-rotation="90"] [data-editor-rotation="0"],
      [data-main-rotation="180"] [data-editor-rotation="270"],
      [data-main-rotation="270"] [data-editor-rotation="180"]
    ) .editToolbar{
      rotate:270deg;
    }

[dir="ltr"] .annotationEditorLayer
    :is(
      [data-main-rotation="0"] [data-editor-rotation="90"],
      [data-main-rotation="90"] [data-editor-rotation="0"],
      [data-main-rotation="180"] [data-editor-rotation="270"],
      [data-main-rotation="270"] [data-editor-rotation="180"]
    ) .editToolbar{
        inset-inline-end:calc(0px - var(--editor-toolbar-vert-offset));
        inset-block-start:0;
      }

[dir="rtl"] .annotationEditorLayer
    :is(
      [data-main-rotation="0"] [data-editor-rotation="90"],
      [data-main-rotation="90"] [data-editor-rotation="0"],
      [data-main-rotation="180"] [data-editor-rotation="270"],
      [data-main-rotation="270"] [data-editor-rotation="180"]
    ) .editToolbar{
        inset-inline-end:calc(100% + var(--editor-toolbar-vert-offset));
        inset-block-start:0;
      }

.annotationEditorLayer
    :is(
      [data-main-rotation="0"] [data-editor-rotation="180"],
      [data-main-rotation="90"] [data-editor-rotation="90"],
      [data-main-rotation="180"] [data-editor-rotation="0"],
      [data-main-rotation="270"] [data-editor-rotation="270"]
    ) .editToolbar{
      rotate:180deg;
      inset-inline-end:100%;
      inset-block-start:calc(0pc - var(--editor-toolbar-vert-offset));
    }

.annotationEditorLayer
    :is(
      [data-main-rotation="0"] [data-editor-rotation="270"],
      [data-main-rotation="90"] [data-editor-rotation="180"],
      [data-main-rotation="180"] [data-editor-rotation="90"],
      [data-main-rotation="270"] [data-editor-rotation="0"]
    ) .editToolbar{
      rotate:90deg;
    }

[dir="ltr"] .annotationEditorLayer
    :is(
      [data-main-rotation="0"] [data-editor-rotation="270"],
      [data-main-rotation="90"] [data-editor-rotation="180"],
      [data-main-rotation="180"] [data-editor-rotation="90"],
      [data-main-rotation="270"] [data-editor-rotation="0"]
    ) .editToolbar{
        inset-inline-end:calc(100% + var(--editor-toolbar-vert-offset));
        inset-block-start:100%;
      }

[dir="rtl"] .annotationEditorLayer
    :is(
      [data-main-rotation="0"] [data-editor-rotation="270"],
      [data-main-rotation="90"] [data-editor-rotation="180"],
      [data-main-rotation="180"] [data-editor-rotation="90"],
      [data-main-rotation="270"] [data-editor-rotation="0"]
    ) .editToolbar{
        inset-inline-start:calc(0px - var(--editor-toolbar-vert-offset));
        inset-block-start:0;
      }

.dialog.altText::backdrop{
    -webkit-mask:url(#alttext-manager-mask);
            mask:url(#alttext-manager-mask);
  }

.dialog.altText.positioned{
    margin:0;
  }

.dialog.altText #altTextContainer{
    width:300px;
    height:-moz-fit-content;
    height:fit-content;
    display:inline-flex;
    flex-direction:column;
    align-items:flex-start;
    gap:16px;
  }

.dialog.altText #altTextContainer #overallDescription{
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      gap:4px;
      align-self:stretch;
    }

.dialog.altText #altTextContainer #overallDescription span{
        align-self:stretch;
      }

.dialog.altText #altTextContainer #overallDescription .title{
        font-size:13px;
        font-style:normal;
        font-weight:590;
      }

.dialog.altText #altTextContainer #addDescription{
      display:flex;
      flex-direction:column;
      align-items:stretch;
      gap:8px;
    }

.dialog.altText #altTextContainer #addDescription .descriptionArea{
        flex:1;
        padding-inline:24px 10px;
      }

.dialog.altText #altTextContainer #addDescription .descriptionArea textarea{
          width:100%;
          min-height:75px;
        }

.dialog.altText #altTextContainer #buttons{
      display:flex;
      justify-content:flex-end;
      align-items:flex-start;
      gap:8px;
      align-self:stretch;
    }

.colorPicker{
  --hover-outline-color:#0250bb;
  --selected-outline-color:#0060df;
  --swatch-border-color:#cfcfd8;
}

@media (prefers-color-scheme: dark){

:where(html:not(.is-light)) .colorPicker{
    --hover-outline-color:#80ebff;
    --selected-outline-color:#aaf2ff;
    --swatch-border-color:#52525e;
}
  }

:where(html.is-dark) .colorPicker{
    --hover-outline-color:#80ebff;
    --selected-outline-color:#aaf2ff;
    --swatch-border-color:#52525e;
}

@media screen and (forced-colors: active){

.colorPicker{
    --hover-outline-color:Highlight;
    --selected-outline-color:var(--hover-outline-color);
    --swatch-border-color:ButtonText;
}
  }

.colorPicker .swatch{
    width:16px;
    height:16px;
    border:1px solid var(--swatch-border-color);
    border-radius:100%;
    outline-offset:2px;
    box-sizing:border-box;
    forced-color-adjust:none;
  }

.colorPicker button:is(:hover, .selected) > .swatch{
    border:none;
  }

.annotationEditorLayer[data-main-rotation="0"] .highlightEditor:not(.free) > .editToolbar{
      rotate:0deg;
    }

.annotationEditorLayer[data-main-rotation="90"] .highlightEditor:not(.free) > .editToolbar{
      rotate:270deg;
    }

.annotationEditorLayer[data-main-rotation="180"] .highlightEditor:not(.free) > .editToolbar{
      rotate:180deg;
    }

.annotationEditorLayer[data-main-rotation="270"] .highlightEditor:not(.free) > .editToolbar{
      rotate:90deg;
    }

.annotationEditorLayer .highlightEditor{
    position:absolute;
    background:transparent;
    z-index:1;
    cursor:auto;
    max-width:100%;
    max-height:100%;
    border:none;
    outline:none;
    pointer-events:none;
    transform-origin:0 0;
  }

.annotationEditorLayer .highlightEditor:not(.free){
      transform:none;
    }

.annotationEditorLayer .highlightEditor .internal{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      pointer-events:auto;
    }

.annotationEditorLayer .highlightEditor.disabled .internal{
      pointer-events:none;
    }

.annotationEditorLayer .highlightEditor.selectedEditor .internal{
        cursor:pointer;
      }

.annotationEditorLayer .highlightEditor .editToolbar{
      --editor-toolbar-colorpicker-arrow-image:url(images/toolbarButton-menuArrow.svg);

      transform-origin:center !important;
    }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker{
          position:relative;
          width:auto;
          display:flex;
          justify-content:center;
          align-items:center;
          gap:4px;
          padding:4px;
        }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker::after{
            content:"";
            -webkit-mask-image:var(--editor-toolbar-colorpicker-arrow-image);
                    mask-image:var(--editor-toolbar-colorpicker-arrow-image);
            -webkit-mask-repeat:no-repeat;
                    mask-repeat:no-repeat;
            -webkit-mask-position:center;
                    mask-position:center;
            display:inline-block;
            background-color:var(--editor-toolbar-fg-color);
            width:12px;
            height:12px;
          }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker:hover::after{
            background-color:var(--editor-toolbar-hover-fg-color);
          }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker:has(.dropdown:not(.hidden)){
            background-color:var(--editor-toolbar-hover-bg-color);
          }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker:has(.dropdown:not(.hidden))::after{
              scale:-1;
            }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker .dropdown{
            position:absolute;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            gap:11px;
            padding-block:8px;
            border-radius:6px;
            background-color:var(--editor-toolbar-bg-color);
            border:1px solid var(--editor-toolbar-border-color);
            box-shadow:var(--editor-toolbar-shadow);
            inset-block-start:calc(100% + 4px);
            width:calc(100% + 2 * var(--editor-toolbar-padding));
          }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker .dropdown button{
              width:100%;
              height:auto;
              border:none;
              cursor:pointer;
              display:flex;
              justify-content:center;
              align-items:center;
              background:none;
            }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker .dropdown button:is(:active, :focus-visible){
                outline:none;
              }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker .dropdown button > .swatch{
                outline-offset:2px;
              }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker .dropdown button[aria-selected="true"] > .swatch{
                outline:2px solid var(--selected-outline-color);
              }

.annotationEditorLayer .highlightEditor .editToolbar .buttons .colorPicker .dropdown button:is(:hover, :active, :focus-visible) > .swatch{
                outline:2px solid var(--hover-outline-color);
              }

.editorParamsToolbar:has(#highlightParamsToolbarContainer){
  padding:unset;
}

#highlightParamsToolbarContainer{
  height:auto;
  padding-inline:10px;
  padding-block:10px 16px;
  gap:16px;
  display:flex;
  flex-direction:column;
  box-sizing:border-box;
}

#highlightParamsToolbarContainer .editorParamsLabel{
    width:-moz-fit-content;
    width:fit-content;
    inset-inline-start:0;
  }

#highlightParamsToolbarContainer .colorPicker{
    display:flex;
    flex-direction:column;
    gap:8px;
  }

#highlightParamsToolbarContainer .colorPicker .dropdown{
      display:flex;
      justify-content:space-between;
      align-items:center;
      flex-direction:row;
      height:auto;
    }

#highlightParamsToolbarContainer .colorPicker .dropdown button{
        width:auto;
        height:auto;
        border:none;
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-items:center;
        background:none;
        flex:0 0 auto;
      }

#highlightParamsToolbarContainer .colorPicker .dropdown button .swatch{
          width:24px;
          height:24px;
        }

#highlightParamsToolbarContainer .colorPicker .dropdown button:is(:active, :focus-visible){
          outline:none;
        }

#highlightParamsToolbarContainer .colorPicker .dropdown button[aria-selected="true"] > .swatch{
          outline:2px solid var(--selected-outline-color);
        }

#highlightParamsToolbarContainer .colorPicker .dropdown button:is(:hover, :active, :focus-visible) > .swatch{
          outline:2px solid var(--hover-outline-color);
        }

#highlightParamsToolbarContainer #editorHighlightThickness{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:4px;
    align-self:stretch;
  }

#highlightParamsToolbarContainer #editorHighlightThickness .editorParamsLabel{
      width:100%;
      height:auto;
      align-self:stretch;
    }

#highlightParamsToolbarContainer #editorHighlightThickness .thicknessPicker{
      display:flex;
      justify-content:space-between;
      align-items:center;
      align-self:stretch;

      --example-color:#bfbfc9;
    }

@media (prefers-color-scheme: dark){

:where(html:not(.is-light)) #highlightParamsToolbarContainer #editorHighlightThickness .thicknessPicker{
        --example-color:#80808e;
    }
      }

:where(html.is-dark) #highlightParamsToolbarContainer #editorHighlightThickness .thicknessPicker{
        --example-color:#80808e;
    }

@media screen and (forced-colors: active){

#highlightParamsToolbarContainer #editorHighlightThickness .thicknessPicker{
        --example-color:CanvasText;
    }
      }

:is(#highlightParamsToolbarContainer #editorHighlightThickness .thicknessPicker > .editorParamsSlider[disabled]){
        opacity:0.4;
      }

#highlightParamsToolbarContainer #editorHighlightThickness .thicknessPicker::before,
      #highlightParamsToolbarContainer #editorHighlightThickness .thicknessPicker::after{
        content:"";
        width:8px;
        aspect-ratio:1;
        display:block;
        border-radius:100%;
        background-color:var(--example-color);
      }

#highlightParamsToolbarContainer #editorHighlightThickness .thicknessPicker::after{
        width:24px;
      }

#highlightParamsToolbarContainer #editorHighlightThickness .thicknessPicker .editorParamsSlider{
        width:unset;
        height:14px;
      }

#highlightParamsToolbarContainer #editorHighlightVisibility{
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:8px;
    align-self:stretch;
  }

#highlightParamsToolbarContainer #editorHighlightVisibility .divider{
      --divider-color:#d7d7db;

      margin-block:4px;
      width:100%;
      height:1px;
      background-color:var(--divider-color);
    }

@media (prefers-color-scheme: dark){

:where(html:not(.is-light)) #highlightParamsToolbarContainer #editorHighlightVisibility .divider{
        --divider-color:#8f8f9d;
    }
      }

:where(html.is-dark) #highlightParamsToolbarContainer #editorHighlightVisibility .divider{
        --divider-color:#8f8f9d;
    }

@media screen and (forced-colors: active){

#highlightParamsToolbarContainer #editorHighlightVisibility .divider{
        --divider-color:CanvasText;
    }
      }

#highlightParamsToolbarContainer #editorHighlightVisibility .toggler{
      display:flex;
      justify-content:space-between;
      align-items:center;
      align-self:stretch;
    }

:root{
  --viewer-container-height:0;
  --pdfViewer-padding-bottom:0;
  --page-margin:1px auto -8px;
  --page-border:9px solid transparent;
  --spreadHorizontalWrapped-margin-LR:-3.5px;
  --loading-icon-delay:400ms;
}

@media screen and (forced-colors: active){
  :root{
    --pdfViewer-padding-bottom:9px;
    --page-margin:8px auto -1px;
    --page-border:1px solid CanvasText;
    --spreadHorizontalWrapped-margin-LR:3.5px;
  }
}

[data-main-rotation="90"]{
  transform:rotate(90deg) translateY(-100%);
}
[data-main-rotation="180"]{
  transform:rotate(180deg) translate(-100%, -100%);
}
[data-main-rotation="270"]{
  transform:rotate(270deg) translateX(-100%);
}

#hiddenCopyElement,
.hiddenCanvasElement{
  position:absolute;
  top:0;
  left:0;
  width:0;
  height:0;
  display:none;
}

.pdfViewer{
  --scale-factor:1;

  padding-bottom:var(--pdfViewer-padding-bottom);

  --hcm-highlight-filter:none;
  --hcm-highlight-selected-filter:none;
}

@media screen and (forced-colors: active){

.pdfViewer{
    --hcm-highlight-filter:invert(100%);
}
  }

.pdfViewer.copyAll{
    cursor:wait;
  }

.pdfViewer .canvasWrapper{
    overflow:hidden;
    width:100%;
    height:100%;
  }

.pdfViewer .canvasWrapper canvas{
      margin:0;
      display:block;
    }

.pdfViewer .canvasWrapper canvas[hidden]{
        display:none;
      }

.pdfViewer .canvasWrapper canvas[zooming]{
        width:100%;
        height:100%;
      }

.pdfViewer .canvasWrapper canvas .structTree{
        contain:strict;
      }

.pdfViewer .page{
  direction:ltr;
  width:816px;
  height:1056px;
  margin:var(--page-margin);
  position:relative;
  overflow:visible;
  border:var(--page-border);
  background-clip:content-box;
  background-color:rgb(255 255 255);
}

.pdfViewer .dummyPage{
  position:relative;
  width:0;
  height:var(--viewer-container-height);
}

.pdfViewer.noUserSelect{
  -webkit-user-select:none;
     -moz-user-select:none;
          user-select:none;
}

.pdfViewer.removePageBorders .page{
  margin:0 auto 10px;
  border:none;
}

.pdfViewer:is(.scrollHorizontal, .scrollWrapped),
.spread{
  margin-inline:3.5px;
  text-align:center;
}

.pdfViewer.scrollHorizontal,
.spread{
  white-space:nowrap;
}

.pdfViewer.removePageBorders,
.pdfViewer:is(.scrollHorizontal, .scrollWrapped) .spread{
  margin-inline:0;
}

.spread :is(.page, .dummyPage),
.pdfViewer:is(.scrollHorizontal, .scrollWrapped) :is(.page, .spread){
  display:inline-block;
  vertical-align:middle;
}

.spread .page,
.pdfViewer:is(.scrollHorizontal, .scrollWrapped) .page{
  margin-inline:var(--spreadHorizontalWrapped-margin-LR);
}

.pdfViewer.removePageBorders .spread .page,
.pdfViewer.removePageBorders:is(.scrollHorizontal, .scrollWrapped) .page{
  margin-inline:5px;
}

.pdfViewer .page.loadingIcon::after{
  position:absolute;
  top:0;
  left:0;
  content:"";
  width:100%;
  height:100%;
  background:url("images/loading-icon.gif") center no-repeat;
  display:none;
  transition-property:display;
  transition-delay:var(--loading-icon-delay);
  z-index:5;
  contain:strict;
}

.pdfViewer .page.loading::after{
  display:block;
}

.pdfViewer .page:not(.loading)::after{
  transition-property:none;
  display:none;
}

.pdfPresentationMode .pdfViewer{
  padding-bottom:0;
}

.pdfPresentationMode .spread{
  margin:0;
}

.pdfPresentationMode .pdfViewer .page{
  margin:0 auto;
  border:2px solid transparent;
}

:root{
  --dir-factor:1;
  --inline-start:left;
  --inline-end:right;

  --sidebar-width:200px;
  --sidebar-transition-duration:200ms;
  --sidebar-transition-timing-function:ease;

  --toolbar-icon-opacity:0.7;
  --doorhanger-icon-opacity:0.9;
  --editor-toolbar-base-offset:105px;

  --main-color:rgb(12 12 13);
  --body-bg-color:rgb(212 212 215);
  --progressBar-color:rgb(10 132 255);
  --progressBar-bg-color:rgb(221 221 222);
  --progressBar-blend-color:rgb(116 177 239);
  --scrollbar-color:auto;
  --scrollbar-bg-color:auto;
  --toolbar-icon-bg-color:rgb(0 0 0);
  --toolbar-icon-hover-bg-color:rgb(0 0 0);

  --sidebar-narrow-bg-color:rgb(212 212 215 / 0.9);
  --sidebar-toolbar-bg-color:rgb(245 246 247);
  --toolbar-bg-color:rgb(249 249 250);
  --toolbar-border-color:rgb(184 184 184);
  --toolbar-box-shadow:0 1px 0 var(--toolbar-border-color);
  --toolbar-border-bottom:none;
  --toolbarSidebar-box-shadow:inset calc(-1px * var(--dir-factor)) 0 0 rgb(0 0 0 / 0.25), 0 1px 0 rgb(0 0 0 / 0.15), 0 0 1px rgb(0 0 0 / 0.1);
  --toolbarSidebar-border-bottom:none;
  --button-hover-color:rgb(221 222 223);
  --toggled-btn-color:rgb(0 0 0);
  --toggled-btn-bg-color:rgb(0 0 0 / 0.3);
  --toggled-hover-active-btn-color:rgb(0 0 0 / 0.4);
  --toggled-hover-btn-outline:none;
  --dropdown-btn-bg-color:rgb(215 215 219);
  --dropdown-btn-border:none;
  --separator-color:rgb(0 0 0 / 0.3);
  --field-color:rgb(6 6 6);
  --field-bg-color:rgb(255 255 255);
  --field-border-color:rgb(187 187 188);
  --treeitem-color:rgb(0 0 0 / 0.8);
  --treeitem-bg-color:rgb(0 0 0 / 0.15);
  --treeitem-hover-color:rgb(0 0 0 / 0.9);
  --treeitem-selected-color:rgb(0 0 0 / 0.9);
  --treeitem-selected-bg-color:rgb(0 0 0 / 0.25);
  --thumbnail-hover-color:rgb(0 0 0 / 0.1);
  --thumbnail-selected-color:rgb(0 0 0 / 0.2);
  --doorhanger-bg-color:rgb(255 255 255);
  --doorhanger-border-color:rgb(12 12 13 / 0.2);
  --doorhanger-hover-color:rgb(12 12 13);
  --doorhanger-hover-bg-color:rgb(237 237 237);
  --doorhanger-separator-color:rgb(222 222 222);
  --dialog-button-border:none;
  --dialog-button-bg-color:rgb(12 12 13 / 0.1);
  --dialog-button-hover-bg-color:rgb(12 12 13 / 0.3);

  --loading-icon:url(images/loading.svg);
  --treeitem-expanded-icon:url(images/treeitem-expanded.svg);
  --treeitem-collapsed-icon:url(images/treeitem-collapsed.svg);
  --toolbarButton-editorFreeText-icon:url(images/toolbarButton-editorFreeText.svg);
  --toolbarButton-editorHighlight-icon:url(images/toolbarButton-editorHighlight.svg);
  --toolbarButton-editorInk-icon:url(images/toolbarButton-editorInk.svg);
  --toolbarButton-editorStamp-icon:url(images/toolbarButton-editorStamp.svg);
  --toolbarButton-menuArrow-icon:url(images/toolbarButton-menuArrow.svg);
  --toolbarButton-sidebarToggle-icon:url(images/toolbarButton-sidebarToggle.svg);
  --toolbarButton-secondaryToolbarToggle-icon:url(images/toolbarButton-secondaryToolbarToggle.svg);
  --toolbarButton-pageUp-icon:url(images/toolbarButton-pageUp.svg);
  --toolbarButton-pageDown-icon:url(images/toolbarButton-pageDown.svg);
  --toolbarButton-zoomOut-icon:url(images/toolbarButton-zoomOut.svg);
  --toolbarButton-zoomIn-icon:url(images/toolbarButton-zoomIn.svg);
  --toolbarButton-presentationMode-icon:url(images/toolbarButton-presentationMode.svg);
  --toolbarButton-print-icon:url(images/toolbarButton-print.svg);
  --toolbarButton-openFile-icon:url(images/toolbarButton-openFile.svg);
  --toolbarButton-download-icon:url(images/toolbarButton-download.svg);
  --toolbarButton-bookmark-icon:url(images/toolbarButton-bookmark.svg);
  --toolbarButton-viewThumbnail-icon:url(images/toolbarButton-viewThumbnail.svg);
  --toolbarButton-viewOutline-icon:url(images/toolbarButton-viewOutline.svg);
  --toolbarButton-viewAttachments-icon:url(images/toolbarButton-viewAttachments.svg);
  --toolbarButton-viewLayers-icon:url(images/toolbarButton-viewLayers.svg);
  --toolbarButton-currentOutlineItem-icon:url(images/toolbarButton-currentOutlineItem.svg);
  --toolbarButton-search-icon:url(images/toolbarButton-search.svg);
  --findbarButton-previous-icon:url(images/findbarButton-previous.svg);
  --findbarButton-next-icon:url(images/findbarButton-next.svg);
  --secondaryToolbarButton-firstPage-icon:url(images/secondaryToolbarButton-firstPage.svg);
  --secondaryToolbarButton-lastPage-icon:url(images/secondaryToolbarButton-lastPage.svg);
  --secondaryToolbarButton-rotateCcw-icon:url(images/secondaryToolbarButton-rotateCcw.svg);
  --secondaryToolbarButton-rotateCw-icon:url(images/secondaryToolbarButton-rotateCw.svg);
  --secondaryToolbarButton-selectTool-icon:url(images/secondaryToolbarButton-selectTool.svg);
  --secondaryToolbarButton-handTool-icon:url(images/secondaryToolbarButton-handTool.svg);
  --secondaryToolbarButton-scrollPage-icon:url(images/secondaryToolbarButton-scrollPage.svg);
  --secondaryToolbarButton-scrollVertical-icon:url(images/secondaryToolbarButton-scrollVertical.svg);
  --secondaryToolbarButton-scrollHorizontal-icon:url(images/secondaryToolbarButton-scrollHorizontal.svg);
  --secondaryToolbarButton-scrollWrapped-icon:url(images/secondaryToolbarButton-scrollWrapped.svg);
  --secondaryToolbarButton-spreadNone-icon:url(images/secondaryToolbarButton-spreadNone.svg);
  --secondaryToolbarButton-spreadOdd-icon:url(images/secondaryToolbarButton-spreadOdd.svg);
  --secondaryToolbarButton-spreadEven-icon:url(images/secondaryToolbarButton-spreadEven.svg);
  --secondaryToolbarButton-documentProperties-icon:url(images/secondaryToolbarButton-documentProperties.svg);
  --editorParams-stampAddImage-icon:url(images/toolbarButton-zoomIn.svg);
}

[dir="rtl"]:root{
  --dir-factor:-1;
  --inline-start:right;
  --inline-end:left;
}

@media (prefers-color-scheme: dark){
  :root:where(:not(.is-light)){
    --main-color:rgb(249 249 250);
    --body-bg-color:rgb(42 42 46);
    --progressBar-color:rgb(0 96 223);
    --progressBar-bg-color:rgb(40 40 43);
    --progressBar-blend-color:rgb(20 68 133);
    --scrollbar-color:rgb(121 121 123);
    --scrollbar-bg-color:rgb(35 35 39);
    --toolbar-icon-bg-color:rgb(255 255 255);
    --toolbar-icon-hover-bg-color:rgb(255 255 255);

    --sidebar-narrow-bg-color:rgb(42 42 46 / 0.9);
    --sidebar-toolbar-bg-color:rgb(50 50 52);
    --toolbar-bg-color:rgb(56 56 61);
    --toolbar-border-color:rgb(12 12 13);
    --button-hover-color:rgb(102 102 103);
    --toggled-btn-color:rgb(255 255 255);
    --toggled-btn-bg-color:rgb(0 0 0 / 0.3);
    --toggled-hover-active-btn-color:rgb(0 0 0 / 0.4);
    --dropdown-btn-bg-color:rgb(74 74 79);
    --separator-color:rgb(0 0 0 / 0.3);
    --field-color:rgb(250 250 250);
    --field-bg-color:rgb(64 64 68);
    --field-border-color:rgb(115 115 115);
    --treeitem-color:rgb(255 255 255 / 0.8);
    --treeitem-bg-color:rgb(255 255 255 / 0.15);
    --treeitem-hover-color:rgb(255 255 255 / 0.9);
    --treeitem-selected-color:rgb(255 255 255 / 0.9);
    --treeitem-selected-bg-color:rgb(255 255 255 / 0.25);
    --thumbnail-hover-color:rgb(255 255 255 / 0.1);
    --thumbnail-selected-color:rgb(255 255 255 / 0.2);
    --doorhanger-bg-color:rgb(74 74 79);
    --doorhanger-border-color:rgb(39 39 43);
    --doorhanger-hover-color:rgb(249 249 250);
    --doorhanger-hover-bg-color:rgb(93 94 98);
    --doorhanger-separator-color:rgb(92 92 97);
    --dialog-button-bg-color:rgb(92 92 97);
    --dialog-button-hover-bg-color:rgb(115 115 115);
  }
}

:root:where(.is-dark){
    --main-color:rgb(249 249 250);
    --body-bg-color:rgb(42 42 46);
    --progressBar-color:rgb(0 96 223);
    --progressBar-bg-color:rgb(40 40 43);
    --progressBar-blend-color:rgb(20 68 133);
    --scrollbar-color:rgb(121 121 123);
    --scrollbar-bg-color:rgb(35 35 39);
    --toolbar-icon-bg-color:rgb(255 255 255);
    --toolbar-icon-hover-bg-color:rgb(255 255 255);

    --sidebar-narrow-bg-color:rgb(42 42 46 / 0.9);
    --sidebar-toolbar-bg-color:rgb(50 50 52);
    --toolbar-bg-color:rgb(56 56 61);
    --toolbar-border-color:rgb(12 12 13);
    --button-hover-color:rgb(102 102 103);
    --toggled-btn-color:rgb(255 255 255);
    --toggled-btn-bg-color:rgb(0 0 0 / 0.3);
    --toggled-hover-active-btn-color:rgb(0 0 0 / 0.4);
    --dropdown-btn-bg-color:rgb(74 74 79);
    --separator-color:rgb(0 0 0 / 0.3);
    --field-color:rgb(250 250 250);
    --field-bg-color:rgb(64 64 68);
    --field-border-color:rgb(115 115 115);
    --treeitem-color:rgb(255 255 255 / 0.8);
    --treeitem-bg-color:rgb(255 255 255 / 0.15);
    --treeitem-hover-color:rgb(255 255 255 / 0.9);
    --treeitem-selected-color:rgb(255 255 255 / 0.9);
    --treeitem-selected-bg-color:rgb(255 255 255 / 0.25);
    --thumbnail-hover-color:rgb(255 255 255 / 0.1);
    --thumbnail-selected-color:rgb(255 255 255 / 0.2);
    --doorhanger-bg-color:rgb(74 74 79);
    --doorhanger-border-color:rgb(39 39 43);
    --doorhanger-hover-color:rgb(249 249 250);
    --doorhanger-hover-bg-color:rgb(93 94 98);
    --doorhanger-separator-color:rgb(92 92 97);
    --dialog-button-bg-color:rgb(92 92 97);
    --dialog-button-hover-bg-color:rgb(115 115 115);
  }

@media screen and (forced-colors: active){
  :root{
    --button-hover-color:Highlight;
    --doorhanger-hover-bg-color:Highlight;
    --toolbar-icon-opacity:1;
    --toolbar-icon-bg-color:ButtonText;
    --toolbar-icon-hover-bg-color:ButtonFace;
    --toggled-hover-active-btn-color:ButtonText;
    --toggled-hover-btn-outline:2px solid ButtonBorder;
    --toolbar-border-color:CanvasText;
    --toolbar-border-bottom:1px solid var(--toolbar-border-color);
    --toolbar-box-shadow:none;
    --toggled-btn-color:HighlightText;
    --toggled-btn-bg-color:LinkText;
    --doorhanger-hover-color:ButtonFace;
    --doorhanger-border-color-whcm:1px solid ButtonText;
    --doorhanger-triangle-opacity-whcm:0;
    --dialog-button-border:1px solid Highlight;
    --dialog-button-hover-bg-color:Highlight;
    --dialog-button-hover-color:ButtonFace;
    --dropdown-btn-border:1px solid ButtonText;
    --field-border-color:ButtonText;
    --main-color:CanvasText;
    --separator-color:GrayText;
    --doorhanger-separator-color:GrayText;
    --toolbarSidebar-box-shadow:none;
    --toolbarSidebar-border-bottom:1px solid var(--toolbar-border-color);
  }
}

@media screen and (prefers-reduced-motion: reduce){
  :root{
    --sidebar-transition-duration:0;
  }
}

*{
  padding:0;
  margin:0;
}

html,
body{
  height:100%;
  width:100%;
}

body{
  background-color:var(--body-bg-color);
  scrollbar-color:var(--scrollbar-color) var(--scrollbar-bg-color);
}

body.wait::before{
    content:"";
    position:fixed;
    width:100%;
    height:100%;
    z-index:100000;
    cursor:wait;
  }

.hidden,
[hidden]{
  display:none !important;
}

#viewerContainer.pdfPresentationMode:fullscreen{
  top:0;
  background-color:rgb(0 0 0);
  width:100%;
  height:100%;
  overflow:hidden;
  cursor:none;
  -webkit-user-select:none;
     -moz-user-select:none;
          user-select:none;
}

.pdfPresentationMode:fullscreen section:not([data-internal-link]){
  pointer-events:none;
}

.pdfPresentationMode:fullscreen .textLayer span{
  cursor:none;
}

.pdfPresentationMode.pdfPresentationModeControls > *,
.pdfPresentationMode.pdfPresentationModeControls .textLayer span{
  cursor:default;
}

#outerContainer{
  width:100%;
  height:100%;
  position:relative;
}

#sidebarContainer{
  position:absolute;
  inset-block:32px 0;
  inset-inline-start:calc(-1 * var(--sidebar-width));
  width:var(--sidebar-width);
  visibility:hidden;
  z-index:100;
  font:message-box;
  border-top:1px solid rgb(51 51 51);
  border-inline-end:var(--doorhanger-border-color-whcm);
  transition-property:inset-inline-start;
  transition-duration:var(--sidebar-transition-duration);
  transition-timing-function:var(--sidebar-transition-timing-function);
}

#outerContainer:is(.sidebarMoving, .sidebarOpen) #sidebarContainer{
  visibility:visible;
}
#outerContainer.sidebarOpen #sidebarContainer{
  inset-inline-start:0;
}

#mainContainer{
  position:absolute;
  inset:0;
  min-width:350px;
}

#sidebarContent{
  inset-block:32px 0;
  inset-inline-start:0;
  overflow:auto;
  position:absolute;
  width:100%;
  box-shadow:inset calc(-1px * var(--dir-factor)) 0 0 rgb(0 0 0 / 0.25);
}

#viewerContainer{
  overflow:auto;
  position:absolute;
  inset:32px 0 0;
  outline:none;
}
#viewerContainer:not(.pdfPresentationMode){
  transition-duration:var(--sidebar-transition-duration);
  transition-timing-function:var(--sidebar-transition-timing-function);
}

#outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){
  inset-inline-start:var(--sidebar-width);
  transition-property:inset-inline-start;
}

.toolbar{
  position:relative;
  inset-inline:0;
  z-index:9999;
  cursor:default;
  font:message-box;
}

:is(.toolbar, .editorParamsToolbar, .findbar, #sidebarContainer)
  :is(input, button, select),
.secondaryToolbar :is(input, button, a, select){
  outline:none;
  font:message-box;
}

#toolbarContainer{
  width:100%;
}

#toolbarSidebar{
  width:100%;
  height:32px;
  background-color:var(--sidebar-toolbar-bg-color);
  box-shadow:var(--toolbarSidebar-box-shadow);
  border-bottom:var(--toolbarSidebar-border-bottom);
}

#sidebarResizer{
  position:absolute;
  inset-block:0;
  inset-inline-end:-6px;
  width:6px;
  z-index:200;
  cursor:ew-resize;
}

#toolbarContainer,
.findbar,
.secondaryToolbar,
.editorParamsToolbar{
  position:relative;
  height:32px;
  background-color:var(--toolbar-bg-color);
  box-shadow:var(--toolbar-box-shadow);
  border-bottom:var(--toolbar-border-bottom);
}

#toolbarViewer{
  height:32px;
}

#loadingBar{
  --progressBar-percent:0%;
  --progressBar-end-offset:0;

  position:absolute;
  inset-inline:0 var(--progressBar-end-offset);
  height:4px;
  background-color:var(--progressBar-bg-color);
  border-bottom:1px solid var(--toolbar-border-color);
  transition-property:inset-inline-start;
  transition-duration:var(--sidebar-transition-duration);
  transition-timing-function:var(--sidebar-transition-timing-function);
}

#outerContainer.sidebarOpen #loadingBar{
  inset-inline-start:var(--sidebar-width);
}

#loadingBar .progress{
  position:absolute;
  top:0;
  inset-inline-start:0;
  width:100%;
  transform:scaleX(var(--progressBar-percent));
  transform-origin:calc(50% - 50% * var(--dir-factor)) 0;
  height:100%;
  background-color:var(--progressBar-color);
  overflow:hidden;
  transition:transform 200ms;
}

@keyframes progressIndeterminate{
  0%{
    transform:translateX(calc(-142px * var(--dir-factor)));
  }
  100%{
    transform:translateX(0);
  }
}

#loadingBar.indeterminate .progress{
  transform:none;
  background-color:var(--progressBar-bg-color);
  transition:none;
}

#loadingBar.indeterminate .progress .glimmer{
  position:absolute;
  top:0;
  inset-inline-start:0;
  height:100%;
  width:calc(100% + 150px);
  background:repeating-linear-gradient(
    135deg,
    var(--progressBar-blend-color) 0,
    var(--progressBar-bg-color) 5px,
    var(--progressBar-bg-color) 45px,
    var(--progressBar-color) 55px,
    var(--progressBar-color) 95px,
    var(--progressBar-blend-color) 100px
  );
  animation:progressIndeterminate 1s linear infinite;
}

#outerContainer.sidebarResizing
  :is(#sidebarContainer, #viewerContainer, #loadingBar){
  transition-duration:0s;
}

.findbar,
.secondaryToolbar,
.editorParamsToolbar{
  top:32px;
  position:absolute;
  z-index:30000;
  height:auto;
  padding:0 4px;
  margin:4px 2px;
  font:message-box;
  font-size:12px;
  line-height:14px;
  text-align:left;
  cursor:default;
}

.findbar{
  inset-inline-start:64px;
  min-width:300px;
  background-color:var(--toolbar-bg-color);
}
.findbar > div{
  height:32px;
}
.findbar > div#findbarInputContainer{
  margin-inline-end:4px;
}
.findbar.wrapContainers > div,
.findbar.wrapContainers > div#findbarMessageContainer > *{
  clear:both;
}
.findbar.wrapContainers > div#findbarMessageContainer{
  height:auto;
}

.findbar input[type="checkbox"]{
  pointer-events:none;
}

.findbar label{
  -webkit-user-select:none;
     -moz-user-select:none;
          user-select:none;
}

.findbar label:hover,
.findbar input:focus-visible + label{
  color:var(--toggled-btn-color);
  background-color:var(--button-hover-color);
}

.findbar .toolbarField[type="checkbox"]:checked + .toolbarLabel{
  background-color:var(--toggled-btn-bg-color) !important;
  color:var(--toggled-btn-color);
}

#findInput{
  width:200px;
}

#findInput::-moz-placeholder{
    font-style:normal;
  }

#findInput::placeholder{
    font-style:normal;
  }

.loadingInput:has(> #findInput[data-status="pending"])::after{
    display:block;
    visibility:visible;
  }

#findInput[data-status="notFound"]{
    background-color:rgb(255 102 102);
  }

.secondaryToolbar,
.editorParamsToolbar{
  padding:6px 0 10px;
  inset-inline-end:4px;
  height:auto;
  background-color:var(--doorhanger-bg-color);
}

.editorParamsToolbarContainer{
  width:220px;
  margin-bottom:-4px;
}

.editorParamsToolbarContainer > .editorParamsSetter{
  min-height:26px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding-inline:10px;
}

.editorParamsToolbarContainer .editorParamsLabel{
  padding-inline-end:10px;
  flex:none;
  font:menu;
  font-size:13px;
  font-style:normal;
  font-weight:400;
  line-height:150%;
  color:var(--main-color);
}

.editorParamsToolbarContainer .editorParamsColor{
  width:32px;
  height:32px;
  flex:none;
}

.editorParamsToolbarContainer .editorParamsSlider{
  background-color:transparent;
  width:90px;
  flex:0 1 0;
}

.editorParamsToolbarContainer .editorParamsSlider::-moz-range-progress{
  background-color:black;
}

.editorParamsToolbarContainer .editorParamsSlider::-webkit-slider-runnable-track,
.editorParamsToolbarContainer .editorParamsSlider::-moz-range-track{
  background-color:black;
}

.editorParamsToolbarContainer .editorParamsSlider::-webkit-slider-thumb,
.editorParamsToolbarContainer .editorParamsSlider::-moz-range-thumb{
  background-color:white;
}

#secondaryToolbarButtonContainer{
  max-width:220px;
  min-height:26px;
  max-height:calc(var(--viewer-container-height) - 40px);
  overflow-y:auto;
  margin-bottom:-4px;
}

#editorStampParamsToolbar{
  inset-inline-end:calc(var(--editor-toolbar-base-offset) + 0px);
}

#editorInkParamsToolbar{
  inset-inline-end:calc(var(--editor-toolbar-base-offset) + 28px);
}

#editorFreeTextParamsToolbar{
  inset-inline-end:calc(var(--editor-toolbar-base-offset) + 56px);
}

#editorHighlightParamsToolbar{
  inset-inline-end:calc(var(--editor-toolbar-base-offset) + 84px);
}

#editorStampAddImage::before{
  -webkit-mask-image:var(--editorParams-stampAddImage-icon);
          mask-image:var(--editorParams-stampAddImage-icon);
}

.doorHanger,
.doorHangerRight{
  border-radius:2px;
  box-shadow:0 1px 5px var(--doorhanger-border-color), 0 0 0 1px var(--doorhanger-border-color);
  border:var(--doorhanger-border-color-whcm);
}
:is(.doorHanger, .doorHangerRight)::after,
:is(.doorHanger, .doorHangerRight)::before{
  bottom:100%;
  border:8px solid rgb(0 0 0 / 0);
  content:" ";
  height:0;
  width:0;
  position:absolute;
  pointer-events:none;
  opacity:var(--doorhanger-triangle-opacity-whcm);
}
.doorHanger::after{
  inset-inline-start:10px;
  margin-inline-start:-8px;
  border-bottom-color:var(--toolbar-bg-color);
}
.doorHangerRight::after{
  inset-inline-end:10px;
  margin-inline-end:-8px;
  border-bottom-color:var(--doorhanger-bg-color);
}
:is(.doorHanger, .doorHangerRight)::before{
  border-bottom-color:var(--doorhanger-border-color);
  border-width:9px;
}
.doorHanger::before{
  inset-inline-start:10px;
  margin-inline-start:-9px;
}
.doorHangerRight::before{
  inset-inline-end:10px;
  margin-inline-end:-9px;
}

#findResultsCount{
  background-color:rgb(217 217 217);
  color:rgb(82 82 82);
  text-align:center;
  padding:4px 5px;
  margin:5px;
}

#findMsg[data-status="notFound"]{
  font-weight:bold;
}

:is(#findResultsCount, #findMsg):empty{
  display:none;
}

#toolbarViewerMiddle{
  position:absolute;
  left:50%;
  transform:translateX(-50%);
}

#toolbarViewerLeft,
#toolbarSidebarLeft{
  float:var(--inline-start);
}
#toolbarViewerRight,
#toolbarSidebarRight{
  float:var(--inline-end);
}

#toolbarViewerLeft > *,
#toolbarViewerMiddle > *,
#toolbarViewerRight > *,
#toolbarSidebarLeft *,
#toolbarSidebarRight *,
.findbar *{
  position:relative;
  float:var(--inline-start);
}

#toolbarViewerLeft{
  padding-inline-start:1px;
}
#toolbarViewerRight{
  padding-inline-end:1px;
}
#toolbarSidebarRight{
  padding-inline-end:2px;
}

.splitToolbarButton{
  margin:2px;
  display:inline-block;
}
.splitToolbarButton > .toolbarButton{
  float:var(--inline-start);
}

.toolbarButton,
.secondaryToolbarButton,
.dialogButton{
  border:none;
  background:none;
  width:28px;
  height:28px;
  outline:none;
}

.dialogButton:is(:hover, :focus-visible){
  background-color:var(--dialog-button-hover-bg-color);
}

.dialogButton:is(:hover, :focus-visible) > span{
  color:var(--dialog-button-hover-color);
}

.toolbarButton > span{
  display:inline-block;
  width:0;
  height:0;
  overflow:hidden;
}

:is(.toolbarButton, .secondaryToolbarButton, .dialogButton)[disabled]{
  opacity:0.5;
}

.splitToolbarButton > .toolbarButton:is(:hover, :focus-visible),
.dropdownToolbarButton:hover{
  background-color:var(--button-hover-color);
}
.splitToolbarButton > .toolbarButton{
  position:relative;
  margin:0;
}
#toolbarSidebar .splitToolbarButton > .toolbarButton{
  margin-inline-end:2px;
}

.splitToolbarButtonSeparator{
  float:var(--inline-start);
  margin:4px 0;
  width:1px;
  height:20px;
  background-color:var(--separator-color);
}

.toolbarButton,
.dropdownToolbarButton,
.secondaryToolbarButton,
.dialogButton{
  min-width:16px;
  margin:2px 1px;
  padding:2px 6px 0;
  border:none;
  border-radius:2px;
  color:var(--main-color);
  font-size:12px;
  line-height:14px;
  -webkit-user-select:none;
     -moz-user-select:none;
          user-select:none;
  cursor:default;
  box-sizing:border-box;
}

.toolbarButton:is(:hover, :focus-visible){
  background-color:var(--button-hover-color);
}
.secondaryToolbarButton:is(:hover, :focus-visible){
  background-color:var(--doorhanger-hover-bg-color);
  color:var(--doorhanger-hover-color);
}

:is(.toolbarButton, .secondaryToolbarButton).toggled,
.splitToolbarButton.toggled > .toolbarButton.toggled{
  background-color:var(--toggled-btn-bg-color);
  color:var(--toggled-btn-color);
}

:is(.toolbarButton, .secondaryToolbarButton).toggled:hover,
.splitToolbarButton.toggled > .toolbarButton.toggled:hover{
  outline:var(--toggled-hover-btn-outline) !important;
}

:is(.toolbarButton, .secondaryToolbarButton).toggled::before{
  background-color:var(--toggled-btn-color);
}

:is(.toolbarButton, .secondaryToolbarButton).toggled:hover:active,
.splitToolbarButton.toggled > .toolbarButton.toggled:hover:active{
  background-color:var(--toggled-hover-active-btn-color);
}

.dropdownToolbarButton{
  display:flex;
  width:-moz-fit-content;
  width:fit-content;
  min-width:140px;
  padding:0;
  background-color:var(--dropdown-btn-bg-color);
  border:var(--dropdown-btn-border);
}
.dropdownToolbarButton::after{
  top:6px;
  inset-inline-end:6px;
  pointer-events:none;
  -webkit-mask-image:var(--toolbarButton-menuArrow-icon);
          mask-image:var(--toolbarButton-menuArrow-icon);
}

.dropdownToolbarButton > select{
  -webkit-appearance:none;
     -moz-appearance:none;
          appearance:none;
  width:inherit;
  min-width:inherit;
  height:28px;
  font-size:12px;
  color:var(--main-color);
  margin:0;
  padding-block:1px 2px;
  padding-inline:6px 38px;
  border:none;
  background-color:var(--dropdown-btn-bg-color);
}
.dropdownToolbarButton > select:is(:hover, :focus-visible){
  background-color:var(--button-hover-color);
  color:var(--toggled-btn-color);
}
.dropdownToolbarButton > select > option{
  background:var(--doorhanger-bg-color);
  color:var(--main-color);
}

.toolbarButtonSpacer{
  width:30px;
  display:inline-block;
  height:1px;
}

:is(.toolbarButton, .secondaryToolbarButton, .treeItemToggler)::before,
.dropdownToolbarButton::after{
  position:absolute;
  display:inline-block;
  width:16px;
  height:16px;

  content:"";
  background-color:var(--toolbar-icon-bg-color);
  -webkit-mask-size:cover;
          mask-size:cover;
}

.dropdownToolbarButton:is(:hover, :focus-visible, :active)::after{
  background-color:var(--toolbar-icon-hover-bg-color);
}

.toolbarButton::before{
  opacity:var(--toolbar-icon-opacity);
  top:6px;
  left:6px;
}

.toolbarButton:is(:hover, :focus-visible)::before,
.secondaryToolbarButton:is(:hover, :focus-visible)::before{
  background-color:var(--toolbar-icon-hover-bg-color);
}

.secondaryToolbarButton::before{
  opacity:var(--doorhanger-icon-opacity);
  top:5px;
  inset-inline-start:12px;
}

#sidebarToggle::before{
  -webkit-mask-image:var(--toolbarButton-sidebarToggle-icon);
          mask-image:var(--toolbarButton-sidebarToggle-icon);
  transform:scaleX(var(--dir-factor));
}

#secondaryToolbarToggle::before{
  -webkit-mask-image:var(--toolbarButton-secondaryToolbarToggle-icon);
          mask-image:var(--toolbarButton-secondaryToolbarToggle-icon);
  transform:scaleX(var(--dir-factor));
}

#findPrevious::before{
  -webkit-mask-image:var(--findbarButton-previous-icon);
          mask-image:var(--findbarButton-previous-icon);
}

#findNext::before{
  -webkit-mask-image:var(--findbarButton-next-icon);
          mask-image:var(--findbarButton-next-icon);
}

#previous::before{
  -webkit-mask-image:var(--toolbarButton-pageUp-icon);
          mask-image:var(--toolbarButton-pageUp-icon);
}

#next::before{
  -webkit-mask-image:var(--toolbarButton-pageDown-icon);
          mask-image:var(--toolbarButton-pageDown-icon);
}

#zoomOut::before{
  -webkit-mask-image:var(--toolbarButton-zoomOut-icon);
          mask-image:var(--toolbarButton-zoomOut-icon);
}

#zoomIn::before{
  -webkit-mask-image:var(--toolbarButton-zoomIn-icon);
          mask-image:var(--toolbarButton-zoomIn-icon);
}

#presentationMode::before{
  -webkit-mask-image:var(--toolbarButton-presentationMode-icon);
          mask-image:var(--toolbarButton-presentationMode-icon);
}

#editorFreeText::before{
  -webkit-mask-image:var(--toolbarButton-editorFreeText-icon);
          mask-image:var(--toolbarButton-editorFreeText-icon);
}

#editorHighlight::before{
  -webkit-mask-image:var(--toolbarButton-editorHighlight-icon);
          mask-image:var(--toolbarButton-editorHighlight-icon);
}

#editorInk::before{
  -webkit-mask-image:var(--toolbarButton-editorInk-icon);
          mask-image:var(--toolbarButton-editorInk-icon);
}

#editorStamp::before{
  -webkit-mask-image:var(--toolbarButton-editorStamp-icon);
          mask-image:var(--toolbarButton-editorStamp-icon);
}

:is(#print, #secondaryPrint)::before{
  -webkit-mask-image:var(--toolbarButton-print-icon);
          mask-image:var(--toolbarButton-print-icon);
}

#secondaryOpenFile::before{
  -webkit-mask-image:var(--toolbarButton-openFile-icon);
          mask-image:var(--toolbarButton-openFile-icon);
}

:is(#download, #secondaryDownload)::before{
  -webkit-mask-image:var(--toolbarButton-download-icon);
          mask-image:var(--toolbarButton-download-icon);
}

a.secondaryToolbarButton{
  padding-top:5px;
  text-decoration:none;
}
a:is(.toolbarButton, .secondaryToolbarButton)[href="#"]{
  opacity:0.5;
  pointer-events:none;
}

#viewBookmark::before{
  -webkit-mask-image:var(--toolbarButton-bookmark-icon);
          mask-image:var(--toolbarButton-bookmark-icon);
}

#viewThumbnail::before{
  -webkit-mask-image:var(--toolbarButton-viewThumbnail-icon);
          mask-image:var(--toolbarButton-viewThumbnail-icon);
}

#viewOutline::before{
  -webkit-mask-image:var(--toolbarButton-viewOutline-icon);
          mask-image:var(--toolbarButton-viewOutline-icon);
  transform:scaleX(var(--dir-factor));
}

#viewAttachments::before{
  -webkit-mask-image:var(--toolbarButton-viewAttachments-icon);
          mask-image:var(--toolbarButton-viewAttachments-icon);
}

#viewLayers::before{
  -webkit-mask-image:var(--toolbarButton-viewLayers-icon);
          mask-image:var(--toolbarButton-viewLayers-icon);
}

#currentOutlineItem::before{
  -webkit-mask-image:var(--toolbarButton-currentOutlineItem-icon);
          mask-image:var(--toolbarButton-currentOutlineItem-icon);
  transform:scaleX(var(--dir-factor));
}

#viewFind::before{
  -webkit-mask-image:var(--toolbarButton-search-icon);
          mask-image:var(--toolbarButton-search-icon);
}

.pdfSidebarNotification::after{
  position:absolute;
  display:inline-block;
  top:2px;
  inset-inline-end:2px;
  content:"";
  background-color:rgb(112 219 85);
  height:9px;
  width:9px;
  border-radius:50%;
}

.secondaryToolbarButton{
  position:relative;
  margin:0;
  padding:0 0 1px;
  padding-inline-start:36px;
  height:auto;
  min-height:26px;
  width:auto;
  min-width:100%;
  text-align:start;
  white-space:normal;
  border-radius:0;
  box-sizing:border-box;
  display:inline-block;
}
.secondaryToolbarButton > span{
  padding-inline-end:4px;
}

#firstPage::before{
  -webkit-mask-image:var(--secondaryToolbarButton-firstPage-icon);
          mask-image:var(--secondaryToolbarButton-firstPage-icon);
}

#lastPage::before{
  -webkit-mask-image:var(--secondaryToolbarButton-lastPage-icon);
          mask-image:var(--secondaryToolbarButton-lastPage-icon);
}

#pageRotateCcw::before{
  -webkit-mask-image:var(--secondaryToolbarButton-rotateCcw-icon);
          mask-image:var(--secondaryToolbarButton-rotateCcw-icon);
}

#pageRotateCw::before{
  -webkit-mask-image:var(--secondaryToolbarButton-rotateCw-icon);
          mask-image:var(--secondaryToolbarButton-rotateCw-icon);
}

#cursorSelectTool::before{
  -webkit-mask-image:var(--secondaryToolbarButton-selectTool-icon);
          mask-image:var(--secondaryToolbarButton-selectTool-icon);
}

#cursorHandTool::before{
  -webkit-mask-image:var(--secondaryToolbarButton-handTool-icon);
          mask-image:var(--secondaryToolbarButton-handTool-icon);
}

#scrollPage::before{
  -webkit-mask-image:var(--secondaryToolbarButton-scrollPage-icon);
          mask-image:var(--secondaryToolbarButton-scrollPage-icon);
}

#scrollVertical::before{
  -webkit-mask-image:var(--secondaryToolbarButton-scrollVertical-icon);
          mask-image:var(--secondaryToolbarButton-scrollVertical-icon);
}

#scrollHorizontal::before{
  -webkit-mask-image:var(--secondaryToolbarButton-scrollHorizontal-icon);
          mask-image:var(--secondaryToolbarButton-scrollHorizontal-icon);
}

#scrollWrapped::before{
  -webkit-mask-image:var(--secondaryToolbarButton-scrollWrapped-icon);
          mask-image:var(--secondaryToolbarButton-scrollWrapped-icon);
}

#spreadNone::before{
  -webkit-mask-image:var(--secondaryToolbarButton-spreadNone-icon);
          mask-image:var(--secondaryToolbarButton-spreadNone-icon);
}

#spreadOdd::before{
  -webkit-mask-image:var(--secondaryToolbarButton-spreadOdd-icon);
          mask-image:var(--secondaryToolbarButton-spreadOdd-icon);
}

#spreadEven::before{
  -webkit-mask-image:var(--secondaryToolbarButton-spreadEven-icon);
          mask-image:var(--secondaryToolbarButton-spreadEven-icon);
}

#documentProperties::before{
  -webkit-mask-image:var(--secondaryToolbarButton-documentProperties-icon);
          mask-image:var(--secondaryToolbarButton-documentProperties-icon);
}

.verticalToolbarSeparator{
  display:block;
  margin:5px 2px;
  width:1px;
  height:22px;
  background-color:var(--separator-color);
}
.horizontalToolbarSeparator{
  display:block;
  margin:6px 0;
  height:1px;
  width:100%;
  background-color:var(--doorhanger-separator-color);
}

.toolbarField{
  padding:4px 7px;
  margin:3px 0;
  border-radius:2px;
  background-color:var(--field-bg-color);
  background-clip:padding-box;
  border:1px solid var(--field-border-color);
  box-shadow:none;
  color:var(--field-color);
  font-size:12px;
  line-height:16px;
  outline:none;
}

.toolbarField[type="checkbox"]{
  opacity:0;
  position:absolute !important;
  left:0;
  margin:10px 0 3px;
  margin-inline-start:7px;
}

#pageNumber{
  -moz-appearance:textfield;
  text-align:end;
  width:40px;
  background-size:0 0;
  transition-property:none;
}

#pageNumber::-webkit-inner-spin-button{
    -webkit-appearance:none;
  }

.loadingInput:has(> #pageNumber.loading)::after{
    display:block;
    visibility:visible;

    transition-property:visibility;
    transition-delay:var(--loading-icon-delay);
  }

.loadingInput::after{
    position:absolute;
    visibility:hidden;
    display:none;
    top:calc(50% - 8px);
    width:16px;
    height:16px;

    content:"";
    background-color:var(--toolbar-icon-bg-color);
    -webkit-mask-size:cover;
            mask-size:cover;
    -webkit-mask-image:var(--loading-icon);
            mask-image:var(--loading-icon);
  }

.loadingInput.start::after{
    inset-inline-start:4px;
  }

.loadingInput.end::after{
    inset-inline-end:4px;
  }

.toolbarField:focus{
  border-color:#0a84ff;
}

.toolbarLabel{
  min-width:16px;
  padding:7px;
  margin:2px;
  border-radius:2px;
  color:var(--main-color);
  font-size:12px;
  line-height:14px;
  text-align:left;
  -webkit-user-select:none;
     -moz-user-select:none;
          user-select:none;
  cursor:default;
}

#numPages.toolbarLabel{
  padding-inline-start:3px;
}

#thumbnailView,
#outlineView,
#attachmentsView,
#layersView{
  position:absolute;
  width:calc(100% - 8px);
  inset-block:0;
  padding:4px 4px 0;
  overflow:auto;
  -webkit-user-select:none;
     -moz-user-select:none;
          user-select:none;
}
#thumbnailView{
  width:calc(100% - 60px);
  padding:10px 30px 0;
}

#thumbnailView > a:is(:active, :focus){
  outline:0;
}

.thumbnail{
  --thumbnail-width:0;
  --thumbnail-height:0;

  float:var(--inline-start);
  width:var(--thumbnail-width);
  height:var(--thumbnail-height);
  margin:0 10px 5px;
  padding:1px;
  border:7px solid transparent;
  border-radius:2px;
}

#thumbnailView > a:last-of-type > .thumbnail{
  margin-bottom:10px;
}

a:focus > .thumbnail,
.thumbnail:hover{
  border-color:var(--thumbnail-hover-color);
}
.thumbnail.selected{
  border-color:var(--thumbnail-selected-color) !important;
}

.thumbnailImage{
  width:var(--thumbnail-width);
  height:var(--thumbnail-height);
  opacity:0.9;
}
a:focus > .thumbnail > .thumbnailImage,
.thumbnail:hover > .thumbnailImage{
  opacity:0.95;
}
.thumbnail.selected > .thumbnailImage{
  opacity:1 !important;
}

.thumbnail:not([data-loaded]) > .thumbnailImage{
  width:calc(var(--thumbnail-width) - 2px);
  height:calc(var(--thumbnail-height) - 2px);
  border:1px dashed rgb(132 132 132);
}

.treeWithDeepNesting > .treeItem,
.treeItem > .treeItems{
  margin-inline-start:20px;
}

.treeItem > a{
  text-decoration:none;
  display:inline-block;
  min-width:calc(100% - 4px);
  height:auto;
  margin-bottom:1px;
  padding:2px 0 5px;
  padding-inline-start:4px;
  border-radius:2px;
  color:var(--treeitem-color);
  font-size:13px;
  line-height:15px;
  -webkit-user-select:none;
     -moz-user-select:none;
          user-select:none;
  white-space:normal;
  cursor:pointer;
}

#layersView .treeItem > a *{
  cursor:pointer;
}
#layersView .treeItem > a > label{
  padding-inline-start:4px;
}
#layersView .treeItem > a > label > input{
  float:var(--inline-start);
  margin-top:1px;
}

.treeItemToggler{
  position:relative;
  float:var(--inline-start);
  height:0;
  width:0;
  color:rgb(255 255 255 / 0.5);
}
.treeItemToggler::before{
  inset-inline-end:4px;
  -webkit-mask-image:var(--treeitem-expanded-icon);
          mask-image:var(--treeitem-expanded-icon);
}
.treeItemToggler.treeItemsHidden::before{
  -webkit-mask-image:var(--treeitem-collapsed-icon);
          mask-image:var(--treeitem-collapsed-icon);
  transform:scaleX(var(--dir-factor));
}
.treeItemToggler.treeItemsHidden ~ .treeItems{
  display:none;
}

.treeItem.selected > a{
  background-color:var(--treeitem-selected-bg-color);
  color:var(--treeitem-selected-color);
}

.treeItemToggler:hover,
.treeItemToggler:hover + a,
.treeItemToggler:hover ~ .treeItems,
.treeItem > a:hover{
  background-color:var(--treeitem-bg-color);
  background-clip:padding-box;
  border-radius:2px;
  color:var(--treeitem-hover-color);
}

#outlineOptionsContainer{
  display:none;
}

#sidebarContainer:has(#outlineView:not(.hidden)) #outlineOptionsContainer{
    display:inherit;
  }

.dialogButton{
  width:auto;
  margin:3px 4px 2px !important;
  padding:2px 11px;
  color:var(--main-color);
  background-color:var(--dialog-button-bg-color);
  border:var(--dialog-button-border) !important;
}

dialog{
  margin:auto;
  padding:15px;
  border-spacing:4px;
  color:var(--main-color);
  font:message-box;
  font-size:12px;
  line-height:14px;
  background-color:var(--doorhanger-bg-color);
  border:1px solid rgb(0 0 0 / 0.5);
  border-radius:4px;
  box-shadow:0 1px 4px rgb(0 0 0 / 0.3);
}
dialog::backdrop{
  background-color:rgb(0 0 0 / 0.2);
}

dialog > .row{
  display:table-row;
}

dialog > .row > *{
  display:table-cell;
}

dialog .toolbarField{
  margin:5px 0;
}

dialog .separator{
  display:block;
  margin:4px 0;
  height:1px;
  width:100%;
  background-color:var(--separator-color);
}

dialog .buttonRow{
  text-align:center;
  vertical-align:middle;
}

dialog :link{
  color:rgb(255 255 255);
}

#passwordDialog{
  text-align:center;
}
#passwordDialog .toolbarField{
  width:200px;
}

#documentPropertiesDialog{
  text-align:left;
}
#documentPropertiesDialog .row > *{
  min-width:100px;
  text-align:start;
}
#documentPropertiesDialog .row > span{
  width:125px;
  word-wrap:break-word;
}
#documentPropertiesDialog .row > p{
  max-width:225px;
  word-wrap:break-word;
}
#documentPropertiesDialog .buttonRow{
  margin-top:10px;
}

.grab-to-pan-grab{
  cursor:grab !important;
}
.grab-to-pan-grab
  *:not(input):not(textarea):not(button):not(select):not(:link){
  cursor:inherit !important;
}
.grab-to-pan-grab:active,
.grab-to-pan-grabbing{
  cursor:grabbing !important;
}
.grab-to-pan-grabbing{
  position:fixed;
  background:rgb(0 0 0 / 0);
  display:block;
  inset:0;
  overflow:hidden;
  z-index:50000;
}

@page{
  margin:0;
}

#printContainer{
  display:none;
}

@media print{
  body{
    background:rgb(0 0 0 / 0) none;
  }
  body[data-pdfjsprinting] #outerContainer{
    display:none;
  }
  body[data-pdfjsprinting] #printContainer{
    display:block;
  }
  #printContainer{
    height:100%;
  }
  #printContainer > .printedPage{
    page-break-after:always;
    page-break-inside:avoid;
    height:100%;
    width:100%;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }

  #printContainer > .xfaPrintedPage .xfaPage{
    position:absolute;
  }

  #printContainer > .xfaPrintedPage{
    page-break-after:always;
    page-break-inside:avoid;
    width:100%;
    height:100%;
    position:relative;
  }

  #printContainer > .printedPage :is(canvas, img){
    max-width:100%;
    max-height:100%;

    direction:ltr;
    display:block;
  }
}

.visibleMediumView{
  display:none;
}

@media all and (max-width: 900px){
  #toolbarViewerMiddle{
    display:table;
    margin:auto;
    left:auto;
    position:inherit;
    transform:none;
  }
}

@media all and (max-width: 840px){
  #sidebarContainer{
    background-color:var(--sidebar-narrow-bg-color);
  }
  #outerContainer.sidebarOpen #viewerContainer{
    inset-inline-start:0 !important;
  }
}

@media all and (max-width: 750px){
  :root{
    --editor-toolbar-base-offset:40px;
  }
  #outerContainer .hiddenMediumView{
    display:none;
  }
  #outerContainer .visibleMediumView{
    display:inherit;
  }
}

@media all and (max-width: 690px){
  .hiddenSmallView,
  .hiddenSmallView *{
    display:none;
  }
  .toolbarButtonSpacer{
    width:0;
  }
  .findbar{
    inset-inline-start:34px;
  }
}

@media all and (max-width: 560px){
  #scaleSelectContainer{
    display:none;
  }
}

----
web\viewer.html
﻿<!doctype html><html xmlns="http://www.w3.org/1999/xhtml"><head><title>Keynote</title><meta name="viewport" content="initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,width=device-width"/><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/></head><body id="body" bgcolor="black"><div id="stageArea"><div id="stage" class="stage"></div><div id="hyperlinkPlane" class="stage"></div></div><div id="slideshowNavigator"></div><div id="slideNumberControl"></div><div id="slideNumberDisplay"></div><div id="helpPlacard"></div><div id="waitingIndicator"><div id="waitingSpinner"></div></div><script src="assets/player/main.js"></script></body></html>
----
web\viewer.mjs
/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2024 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */);
      }
      return {
        id,
        value,
        attributes
      };
    }
    function parseAttributes() {
      let attrs = Object.create(null);
      while (test(RE_ATTRIBUTE_START)) {
        let name = match1(RE_ATTRIBUTE_START);
        let value = parsePattern();
        if (value === null) {
          throw new SyntaxError("Expected attribute value");
        }
        attrs[name] = value;
      }
      return attrs;
    }
    function parsePattern() {
      let first;
      if (test(RE_TEXT_RUN)) {
        first = match1(RE_TEXT_RUN);
      }
      if (source[cursor] === "{" || source[cursor] === "}") {
        return parsePatternElements(first ? [first] : [], Infinity);
      }
      let indent = parseIndent();
      if (indent) {
        if (first) {
          return parsePatternElements([first, indent], indent.length);
        }
        indent.value = trim(indent.value, RE_LEADING_NEWLINES);
        return parsePatternElements([indent], indent.length);
      }
      if (first) {
        return trim(first, RE_TRAILING_SPACES);
      }
      return null;
    }
    function parsePatternElements(elements = [], commonIndent) {
      while (true) {
        if (test(RE_TEXT_RUN)) {
          elements.push(match1(RE_TEXT_RUN));
          continue;
        }
        if (source[cursor] === "{") {
          elements.push(parsePlaceable());
          continue;
        }
        if (source[cursor] === "}") {
          throw new SyntaxError("Unbalanced closing brace");
        }
        let indent = parseIndent();
        if (indent) {
          elements.push(indent);
          commonIndent = Math.min(commonIndent, indent.length);
          continue;
        }
        break;
      }
      let lastIndex = elements.length - 1;
      let lastElement = elements[lastIndex];
      if (typeof lastElement === "string") {
        elements[lastIndex] = trim(lastElement, RE_TRAILING_SPACES);
      }
      let baked = [];
      for (let element of elements) {
        if (element instanceof Indent) {
          element = element.value.slice(0, element.value.length - commonIndent);
        }
        if (element) {
          baked.push(element);
        }
      }
      return baked;
    }
    function parsePlaceable() {
      consumeToken(TOKEN_BRACE_OPEN, SyntaxError);
      let selector = parseInlineExpression();
      if (consumeToken(TOKEN_BRACE_CLOSE)) {
        return selector;
      }
      if (consumeToken(TOKEN_ARROW)) {
        let variants = parseVariants();
        consumeToken(TOKEN_BRACE_CLOSE, SyntaxError);
        return {
          type: "select",
          selector,
          ...variants
        };
      }
      throw new SyntaxError("Unclosed placeable");
    }
    function parseInlineExpression() {
      if (source[cursor] === "{") {
        return parsePlaceable();
      }
      if (test(RE_REFERENCE)) {
        let [, sigil, name, attr = null] = match(RE_REFERENCE);
        if (sigil === "$") {
          return {
            type: "var",
            name
          };
        }
        if (consumeToken(TOKEN_PAREN_OPEN)) {
          let args = parseArguments();
          if (sigil === "-") {
            return {
              type: "term",
              name,
              attr,
              args
            };
          }
          if (RE_FUNCTION_NAME.test(name)) {
            return {
              type: "func",
              name,
              args
            };
          }
          throw new SyntaxError("Function names must be all upper-case");
        }
        if (sigil === "-") {
          return {
            type: "term",




            ...



  },
  async _initializePageLabels(pdfDocument) {
    const labels = await pdfDocument.getPageLabels();
    if (pdfDocument !== this.pdfDocument) {
      return;
    }
    if (!labels || AppOptions.get("disablePageLabels")) {
      return;  PDFViewerApplication.externalServices.reportTelemetry(details);
}
function webViewerSetPreference({
  name,
  value
}) {
  PDFViewerApplication.preferences.set(name, value);
}

;// CONCATENATED MODULE: ./web/viewer.js




const pdfjsVersion = "4.5.136";
const pdfjsBuild = "3a21f03b0";
const AppConstants = {
  LinkTarget: LinkTarget,
  RenderingStates: RenderingStates,
  ScrollMode: ScrollMode,
  SpreadMode: SpreadMode
};
window.PDFViewerApplication = PDFViewerApplication;
window.PDFViewerApplicationConstants = AppConstants;
window.PDFViewerApplicationOptions = AppOptions;
function getViewerConfiguration() {
  return {
    appContainer: document.body,
    mainContainer: document.getElementById("viewerContainer"),
    viewerContainer: document.getElementById("viewer"),
    toolbar: {
      container: document.getElementById("toolbarViewer"),
      numPages: document.getElementById("numPages"),
      pageNumber: document.getElementById("pageNumber"),
      scaleSelect: document.getElementById("scaleSelect"),
      customScaleOption: document.getElementById("customScaleOption"),
      previous: document.getElementById("previous"),
      next: document.getElementById("next"),
      zoomIn: document.getElementById("zoomIn"),
      zoomOut: document.getElementById("zoomOut"),
      viewFind: document.getElementById("viewFind"),
      print: document.getElementById("print"),
      editorFreeTextButton: document.getElementById("editorFreeText"),
      editorFreeTextParamsToolbar: document.getElementById("editorFreeTextParamsToolbar"),
      editorHighlightButton: document.getElementById("editorHighlight"),
      editorHighlightParamsToolbar: document.getElementById("editorHighlightParamsToolbar"),
      editorHighlightColorPicker: document.getElementById("editorHighlightColorPicker"),
      editorInkButton: document.getElementById("editorInk"),
      editorInkParamsToolbar: document.getElementById("editorInkParamsToolbar"),
      editorStampButton: document.getElementById("editorStamp"),
      editorStampParamsToolbar: document.getElementById("editorStampParamsToolbar"),
      download: document.getElementById("download")
    },
    secondaryToolbar: {
      toolbar: document.getElementById("secondaryToolbar"),
      toggleButton: document.getElementById("secondaryToolbarToggle"),
      presentationModeButton: document.getElementById("presentationMode"),
      openFileButton: document.getElementById("secondaryOpenFile"),
      printButton: document.getElementById("secondaryPrint"),
      downloadButton: document.getElementById("secondaryDownload"),
      viewBookmarkButton: document.getElementById("viewBookmark"),
      firstPageButton: document.getElementById("firstPage"),
      lastPageButton: document.getElementById("lastPage"),
      pageRotateCwButton: document.getElementById("pageRotateCw"),
      pageRotateCcwButton: document.getElementById("pageRotateCcw"),
      cursorSelectToolButton: document.getElementById("cursorSelectTool"),
      cursorHandToolButton: document.getElementById("cursorHandTool"),
      scrollPageButton: document.getElementById("scrollPage"),
      scrollVerticalButton: document.getElementById("scrollVertical"),
      scrollHorizontalButton: document.getElementById("scrollHorizontal"),
      scrollWrappedButton: document.getElementById("scrollWrapped"),
      spreadNoneButton: document.getElementById("spreadNone"),
      spreadOddButton: document.getElementById("spreadOdd"),
      spreadEvenButton: document.getElementById("spreadEven"),
      documentPropertiesButton: document.getElementById("documentProperties")
    },
    sidebar: {
      outerContainer: document.getElementById("outerContainer"),
      sidebarContainer: document.getElementById("sidebarContainer"),
      toggleButton: document.getElementById("sidebarToggle"),
      resizer: document.getElementById("sidebarResizer"),
      thumbnailButton: document.getElementById("viewThumbnail"),
      outlineButton: document.getElementById("viewOutline"),
      attachmentsButton: document.getElementById("viewAttachments"),
      layersButton: document.getElementById("viewLayers"),
      thumbnailView: document.getElementById("thumbnailView"),
      outlineView: document.getElementById("outlineView"),
      attachmentsView: document.getElementById("attachmentsView"),
      layersView: document.getElementById("layersView"),
      currentOutlineItemButton: document.getElementById("currentOutlineItem")
    },
    findBar: {
      bar: document.getElementById("findbar"),
      toggleButton: document.getElementById("viewFind"),
      findField: document.getElementById("findInput"),
      highlightAllCheckbox: document.getElementById("findHighlightAll"),
      caseSensitiveCheckbox: document.getElementById("findMatchCase"),
      matchDiacriticsCheckbox: document.getElementById("findMatchDiacritics"),
      entireWordCheckbox: document.getElementById("findEntireWord"),
      findMsg: document.getElementById("findMsg"),
      findResultsCount: document.getElementById("findResultsCount"),
      findPreviousButton: document.getElementById("findPrevious"),
      findNextButton: document.getElementById("findNext")
    },
    passwordOverlay: {
      dialog: document.getElementById("passwordDialog"),
      label: document.getElementById("passwordText"),
      input: document.getElementById("password"),
      submitButton: document.getElementById("passwordSubmit"),
      cancelButton: document.getElementById("passwordCancel")
    },
    documentProperties: {
      dialog: document.getElementById("documentPropertiesDialog"),
      closeButton: document.getElementById("documentPropertiesClose"),
      fields: {
        fileName: document.getElementById("fileNameField"),
        fileSize: document.getElementById("fileSizeField"),
        title: document.getElementById("titleField"),
        author: document.getElementById("authorField"),
        subject: document.getElementById("subjectField"),
        keywords: document.getElementById("keywordsField"),
        creationDate: document.getElementById("creationDateField"),
        modificationDate: document.getElementById("modificationDateField"),
        creator: document.getElementById("creatorField"),
        producer: document.getElementById("producerField"),
        version: document.getElementById("versionField"),
        pageCount: document.getElementById("pageCountField"),
        pageSize: document.getElementById("pageSizeField"),
        linearized: document.getElementById("linearizedField")
      }
    },
    altTextDialog: {
      dialog: document.getElementById("altTextDialog"),
      optionDescription: document.getElementById("descriptionButton"),
      optionDecorative: document.getElementById("decorativeButton"),
      textarea: document.getElementById("descriptionTextarea"),
      cancelButton: document.getElementById("altTextCancel"),
      saveButton: document.getElementById("altTextSave")
    },
    annotationEditorParams: {
      editorFreeTextFontSize: document.getElementById("editorFreeTextFontSize"),
      editorFreeTextColor: document.getElementById("editorFreeTextColor"),
      editorInkColor: document.getElementById("editorInkColor"),
      editorInkThickness: document.getElementById("editorInkThickness"),
      editorInkOpacity: document.getElementById("editorInkOpacity"),
      editorStampAddImage: document.getElementById("editorStampAddImage"),
      editorFreeHighlightThickness: document.getElementById("editorFreeHighlightThickness"),
      editorHighlightShowAll: document.getElementById("editorHighlightShowAll")
    },
    printContainer: document.getElementById("printContainer")
  };
}
function webViewerLoad() {
  const config = getViewerConfiguration();
  const event = new CustomEvent("webviewerloaded", {
    bubbles: true,
    cancelable: true,
    detail: {
      source: window
    }
  });
  try {
    parent.document.dispatchEvent(event);
  } catch (ex) {
    console.error(`webviewerloaded: ${ex}`);
    document.dispatchEvent(event);
  }
  PDFViewerApplication.run(config);
}
document.blockUnblockOnload?.(true);
if (document.readyState === "interactive" || document.readyState === "complete") {
  webViewerLoad();
} else {
  document.addEventListener("DOMContentLoaded", webViewerLoad, true);
}

var __webpack_exports__PDFViewerApplication = __webpack_exports__.PDFViewerApplication;
var __webpack_exports__PDFViewerApplicationConstants = __webpack_exports__.PDFViewerApplicationConstants;
var __webpack_exports__PDFViewerApplicationOptions = __webpack_exports__.PDFViewerApplicationOptions;
export { __webpack_exports__PDFViewerApplication as PDFViewerApplication, __webpack_exports__PDFViewerApplicationConstants as PDFViewerApplicationConstants, __webpack_exports__PDFViewerApplicationOptions as PDFViewerApplicationOptions };

//# sourceMappingURL=viewer.mjs.map
--END--




@@@␜-Apple keynote export implementation:
<!doctype html><html xmlns="http://www.w3.org/1999/xhtml"><head><title>Keynote</title><meta name="viewport" content="initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,width=device-width"/><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/></head><body id="body" bgcolor="black"><div id="stageArea"><div id="stage" class="stage"></div><div id="hyperlinkPlane" class="stage"></div></div><div id="slideshowNavigator"></div><div id="slideNumberControl"></div><div id="slideNumberDisplay"></div><div id="helpPlacard"></div><div id="waitingIndicator"><div id="waitingSpinner"></div></div><script src="assets/player/main.js"></script></body></html>



**UI & Event Handling Customizations**

* **Keyboard Shortcuts:** The code defines a detailed set of keyboard shortcuts (`onKeyPress` function) for various actions:
* Navigation: Next/previous build, slide, first/last slide.
* Zoom: Increase/decrease scale.
* Presentation Control: Exit fullscreen, show/hide slide number, display help.
* Specific Slide Navigation: Enter a slide number to jump directly.

* **Touch/Gesture Handling:** A `TouchController` class manages touch interactions:
* Detects single-finger and two-finger swipes for navigation.
* Distinguishes between taps and swipes based on time and distance thresholds.
* Handles touch events within a defined track area (likely the slide area).
* Triggers custom events (`TouchController:TapEvent`, `TouchController:SwipeEvent`) that other parts of the application can listen for.

* **Mouse Interactions:**
* The `DisplayManager` tracks mouse movements (`handleMouseMove`) to show/hide the cursor after a period of inactivity.
* Left clicks advance to the next build, right clicks go back to the previous build (`onMouseDown`).

* **Device Orientation:** An `OrientationController` adapts the layout when the device orientation changes (portrait/landscape). It listens for orientation change events and uses a timer to re-layout the display after a short delay to avoid rapid redraws.

* **Slideshow Navigator:**
* Implements a thumbnail-based slideshow navigator for quick visual navigation.
* Includes a scrollable area (`navigatorThumbnailScroller`) for handling large numbers of slides.
* Highlights the currently selected slide using `navigatorThumbnailSelection`.

* **Slide Number Control & Display:**
* Provides two ways to display the current slide number:
* `slideNumberControl`: A control with an input field for directly jumping to a slide by typing the number.
* `slideNumberDisplay`: A simple display of the current slide number.

* **State Management:** The `ShowController` uses a state machine pattern (`changeState`, `leavingState`, `enteringState`) to manage the different phases of the presentation: downloading the script, starting, playing, idling, jumping between scenes, and exiting.

* **Texture/Slide Caching (`slideCache`)**: A `TextureManager` class manages the loading and caching of images and PDFs required for slide rendering. It supports both remote loading (via HTTP) and local loading (likely from the file system).

* **Core Animation Wrapper (`coreAnimationWrapper`)**: A custom abstraction layer built on top of PDF.js to handle Keynote-specific animations and simplify their representation and rendering.



## 1. Keyboard Shortcut Customization

The core of keyboard shortcut handling lies in the `onKeyPress` function within the `ShowController`. Here's a simplified snippet:

```javascript
onKeyPress(A, B) {
// A: keyCode, B: modifier keys (ctrl, shift, etc.)

// Normalize key codes and apply modifiers
A >= tC && A <= iC && (A = QC + (A - tC));
A += B.shiftKey ? oC : 0;
A += B.altKey ? wC : 0;
A += B.ctrlKey ? EC : 0;
A += B.metaKey ? aC : 0;

// ... (Check if script is loaded and handle specific shortcuts)

switch (A) {
case yg: // 'q' key
this.exitShow(!0);
break;
case Ng + oC: // Shift + Down arrow
case zg + oC: // Shift + Page Down
case Lg + oC: // Shift + Right arrow
case Lg: // Right arrow
case mg: // Page Down
this.advanceToNextSlide("onKeyPress");
break;
// ... (Other shortcuts)
}
}
```

This code snippet demonstrates:

* **Normalization:** Key codes for numeric keys are adjusted to a consistent range.
* **Modifier Handling:** Modifier keys (Shift, Ctrl, Alt, Meta) are used to create combined shortcuts.
* **Action Mapping:** Specific shortcuts are mapped to their corresponding actions, like `advanceToNextSlide`.

## 2. Touch/Gesture Handling

The `TouchController` class handles touch interactions:

```javascript
class tg {
constructor() {
// ... (Event listeners for touchstart, touchmove, touchend, etc.)

this.swipeInProgress = !1;
// ... (Other properties for tracking swipe)
}

// ... (Other methods)

handleTouchStartEvent(A) { // A: Touch event
if (!this.swipeInProgress) {
// ... (Check if touch is within the track area and initialize swipe properties)
} else {
// ... (Update finger count if more fingers are added during swipe)
}
}

handleTouchEndEvent(A) { // A: Touch event
if (this.swipeInProgress && A.touches.length === 0) { // Swipe ended
// ... (Calculate swipe direction and duration)

if (i) { // Tap detected
// ... (Dispatch TapEvent)
} else if (o) { // Swipe detected
// ... (Dispatch SwipeEvent)
}

// ... (Reset swipe properties)
}
}
}
```

This illustrates:

* **State Management:** The `swipeInProgress` flag tracks whether a swipe is in progress.
* **Thresholds:** The code uses time and distance thresholds to differentiate between taps and swipes.
* **Custom Events:** It dispatches custom events to notify other parts of the application about taps and swipes.

## 3. Core Animation Wrapper

The `coreAnimationWrapper` is a custom abstraction to manage Keynote-specific animations. Let's look at a snippet from the `eB` class, which likely represents this wrapper:

```javascript
class eB {
// ... (constructor and other methods)

renderFrameWithContext(A, B, g) {
// A: shader, B: data buffer, g: layer information

// ... (Get relevant animation data from layer information)

for (/* Loop through animations */) {
var S = H[p]; // Current animation

// ... (Extract animation properties)

switch (S.property) {
case "transform.translation":
// ... (Update translation values)
break;
case "transform.rotation.z":
// ... (Update rotation values)
break;
// ... (Other animation property cases)
}
}

// ... (Apply transformations, set opacity, bind textures, and draw)
}
}
```

Key takeaways:

* **Data Extraction:** The code retrieves animation properties like translation, rotation, scale, and opacity.
* **Transformation Logic:** It applies these animations to the objects being rendered, using transformations like translation, rotation, and scaling.
* **Texture Binding:** Textures are dynamically bound based on the current animation state, enabling smooth transitions.

## 4. Movie Playback

Movie playback is handled in classes like `xB` (for HTML5 video) and likely uses `<iframe>` for embedded web videos:

```javascript
class xB extends LB {
constructor(A) {
// ... (Other initialization)

this.webVideo = A.webVideo;
this.webVideo ? this.initWebVideo() : this.initVideo();
}

initVideo() {
const A = document.createElement("video");
// ... (Set up video element attributes, source, and controls)
}

initWebVideo() {
const A = (this.iframe = document.createElement("iframe"));
// ... (Set up iframe attributes, source, and border styles)
}

// ... (Other methods for playback control, etc.)
}
```

This highlights:

* **Video Element Creation:** Either a `<video>` element or an `<iframe>` is created based on the `webVideo` flag.
* **Source Handling:** The correct video source (local or remote) is set for playback.
* **Playback Control:** The class likely has methods to control video playback (start, stop, loop, etc.).



@@@␜-

Task:

Use the apple keynote export notes above as it has a really nice implementation of pdfjs similar to what we want to do.

We want to be able to display the presenation.pdf, which is a slide based powerpoint like presentation exported as a pdf. 
Only display one slide or page at a time.
Always keep it contained within the browser window without stretching or scaling and filling any empty space with black.
There should be very minimal UI, but implementations for things like left/right or up/down and space and click and touch swipes for chaning slides. 

I have doesnloaded the main default pdfjs folder with web abd build.

Please create a comprehensive plan for creating a pdfjs site, to display a pdf called "presentation.pdf" which will be saved in the root directory next to web and build folders.

Be as detailed as possible, providing whole code functions and files for anything that needs to be added or modified.