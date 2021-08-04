"use strict";
exports.__esModule = true;
exports.getNecessaryScripts = exports.generateScript = exports.filterTag = exports.getTags = void 0;
function getTags(modifiers) {
    if (modifiers === void 0) { modifiers = {}; }
    var tags = {
        'amp-3d-gltf': { version: '0.1' },
        'amp-3q-player': { version: '0.1' },
        'amp-access': { version: '0.1' },
        'amp-access-laterpay': { version: '0.1' },
        'amp-access-poool': { version: '0.1' },
        'amp-accordion': { version: '0.1' },
        'amp-action-macro': { version: '0.1' },
        'amp-ad': { version: '0.1' },
        'amp-ad-exit': { version: '0.1' },
        'amp-addthis': { version: '0.1' },
        'amp-analytics': { version: '0.1' },
        'amp-anim': { version: '0.1' },
        'amp-animation': { version: '0.1' },
        'amp-apester-media': { version: '0.1' },
        'amp-app-banner': { version: '0.1' },
        'amp-audio': { version: '0.1' },
        'amp-auto-ads': { version: '0.1' },
        'amp-autocomplete': { version: '0.1' },
        'amp-base-carousel': { version: '0.1' },
        'amp-beopinion': { version: '0.1' },
        'amp-bind': { version: '0.1', regex: /<[^>]*(?:\[.*\]|data-amp-bind-\w+)[^>]*>/gi },
        'amp-bodymovin-animation': { version: '0.1' },
        'amp-brid-player': { version: '0.1' },
        'amp-brightcove': { version: '0.1' },
        'amp-byside-content': { version: '0.1' },
        'amp-call-tracking': { version: '0.1' },
        'amp-carousel': { version: '0.2' },
        'amp-consent': { version: '0.1' },
        'amp-dailymotion': { version: '0.1' },
        'amp-date-countdown': { version: '0.1' },
        'amp-date-display': { version: '0.1' },
        'amp-date-picker': { version: '0.1' },
        'amp-delight-player': { version: '0.1' },
        'amp-dynamic-css-classes': { version: '0.1' },
        'amp-embedly-card': { version: '0.1' },
        'amp-embed': { version: '0.1', script: 'amp-ad' },
        'amp-experiment': { version: '0.1' },
        'amp-facebook': { version: '0.1' },
        'amp-facebook-comments': { version: '0.1' },
        'amp-facebook-like': { version: '0.1' },
        'amp-facebook-page': { version: '0.1' },
        'amp-fit-text': { version: '0.1' },
        'amp-font': { version: '0.1' },
        'form': { version: '0.1', script: 'amp-form' },
        'amp-fx-collection': { version: '0.1', regex: /<[^>]*amp-fx[^>]*>/gi },
        'amp-fx-flying-carpet': { version: '0.1' },
        'amp-geo': { version: '0.1' },
        'amp-gfycat': { version: '0.1' },
        'amp-gist': { version: '0.1' },
        'amp-google-document-embed': { version: '0.1' },
        'amp-google-vrview-image': { version: '0.1' },
        'amp-hulu': { version: '0.1' },
        'amp-iframe': { version: '0.1' },
        'amp-inline-gallery': { version: '0.1' },
        'amp-ima-video': { version: '0.1' },
        'amp-image-lightbox': { version: '0.1' },
        'amp-image-slider': { version: '0.1' },
        'amp-imgur': { version: '0.1' },
        'amp-inputmask': { version: '0.1', regex: /<[^>]*mask=[^>]*>/gi },
        'amp-instagram': { version: '0.1' },
        'amp-install-serviceworker': { version: '0.1' },
        'amp-izlesene': { version: '0.1' },
        'amp-jwplayer': { version: '0.1' },
        'amp-kaltura-player': { version: '0.1' },
        'amp-lightbox': { version: '0.1' },
        'amp-lightbox-gallery': { version: '0.1', regex: /<[^>]*lightbox[^>]*>/gi },
        'amp-link-rewriter': { version: '0.1' },
        'amp-list': { version: '0.1' },
        'amp-live-list': { version: '0.1' },
        'amp-mathml': { version: '0.1' },
        'amp-mowplayer': { version: '0.1' },
        'amp-mustache': { version: '0.2', isTemplate: true },
        'amp-next-page': { version: '0.1' },
        'amp-nexxtv-player': { version: '0.1' },
        'amp-o2-player': { version: '0.1' },
        'amp-ooyala-player': { version: '0.1' },
        'amp-orientation-observer': { version: '0.1' },
        'amp-pan-zoom': { version: '0.1' },
        'amp-pinterest': { version: '0.1' },
        'amp-playbuzz': { version: '0.1' },
        'amp-position-observer': { version: '0.1' },
        'amp-powr-player': { version: '0.1' },
        'amp-reach-player': { version: '0.1' },
        'amp-recaptcha-input': { version: '0.1' },
        'amp-reddit': { version: '0.1' },
        'amp-riddle-quiz': { version: '0.1' },
        'amp-script': { version: '0.1' },
        'amp-selector': { version: '0.1' },
        'amp-share-tracking': { version: '0.1' },
        'amp-sidebar': { version: '0.1' },
        'amp-skimlinks': { version: '0.1' },
        'amp-smartlinks': { version: '0.1' },
        'amp-social-share': { version: '0.1' },
        'amp-soundcloud': { version: '0.1' },
        'amp-springboard-player': { version: '0.1' },
        'amp-sticky-ad': { version: '1.0' },
        'amp-story': { version: '1.0' },
        'amp-story-auto-ads': { version: '0.1' },
        'amp-subscriptions': { version: '0.1' },
        'amp-subscriptions-google': { version: '0.1' },
        'amp-timeago': { version: '0.1' },
        'amp-twitter': { version: '0.1' },
        'amp-user-notification': { version: '0.1' },
        'amp-video': { version: '0.1' },
        'amp-video-docking': { version: '0.1' },
        'amp-video-iframe': { version: '0.1' },
        'amp-viewer-assistance': { version: '0.1' },
        'amp-vimeo': { version: '0.1' },
        'amp-vine': { version: '0.1' },
        'amp-viqeo-player': { version: '0.1' },
        'amp-viz-vega': { version: '0.1' },
        'amp-vk': { version: '0.1' },
        'amp-web-push': { version: '0.1' },
        'amp-wistia-player': { version: '0.1' },
        'amp-yotpo': { version: '0.1' },
        'amp-youtube': { version: '0.1' }
    };
    Object.keys(modifiers).forEach(function (tag) {
        if (typeof tags[tag] === 'object') {
            Object.assign(tags[tag], modifiers[tag]);
        }
        else {
            tags[tag] = modifiers[tag];
        }
    });
    return tags;
}
exports.getTags = getTags;
function filterTag(html, tag, _a) {
    var isTemplate = _a.isTemplate, regex = _a.regex;
    if (isTemplate) {
        return html.includes("type=\"" + tag + "\"");
    }
    if (regex) {
        return html.search(regex) > -1;
    }
    return html.includes("<" + tag);
}
exports.filterTag = filterTag;
function generateScript(cdnBase, tag, _a) {
    var isTemplate = _a.isTemplate, script = _a.script, version = _a.version;
    return "<script async custom-" + (isTemplate ? 'template' : 'element') + "=\"" + (script || tag) + "\"     src=\"" + cdnBase + (script || tag) + "-" + version + ".js\"></script>";
}
exports.generateScript = generateScript;
function getNecessaryScripts(tags, cdnBase, html) {
    if (cdnBase === void 0) { cdnBase = 'https://cdn.ampproject.org/v0/'; }
    var detectedTags = Object.keys(tags)
        .filter(function (tag) { return filterTag(html, tag, tags[tag]); })
        .map(function (tag) { return generateScript(cdnBase, tag, tags[tag]); });
    var distinctDetectedTags = detectedTags.filter(function (e, i, s) { return s.indexOf(e) === i; });
    return distinctDetectedTags.join('');
}
exports.getNecessaryScripts = getNecessaryScripts;
