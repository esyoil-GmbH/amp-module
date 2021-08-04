"use strict";
exports.__esModule = true;
exports.removeExternalStyles = exports.VALID_FONT_PROVIDERS = void 0;
exports.VALID_FONT_PROVIDERS = [
    'https://cloud.typography.com',
    'https://fast.fonts.net',
    'https://fonts.googleapis.com',
    'https://use.typekit.net',
    'https://maxcdn.bootstrapcdn.com',
    'https://use.fontawesome.com'
];
function removeExternalStyles(head) {
    return head.replace(/<link[^>]*rel="stylesheet"[^>]*>/gi, function (v) {
        if (exports.VALID_FONT_PROVIDERS.some(function (domain) { return v.includes(domain); })) {
            return v;
        }
        return '';
    });
}
exports.removeExternalStyles = removeExternalStyles;
