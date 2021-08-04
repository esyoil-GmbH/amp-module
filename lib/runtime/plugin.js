"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function ensureKey(obj, key, d) {
    if (!obj[key]) {
        obj[key] = d;
    }
}
function pick() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg !== undefined) {
            return arg;
        }
    }
}
function default_1(ctx, _a) {
    var origin = _a.origin, mode = _a.mode;
    var route = ctx.route, req = ctx.req;
    if (!route.matched[0]) {
        return;
    }
    var hasAMPPrefix = route.path === '/amp' || route.path.indexOf('/amp/') === 0;
    var options = route.matched[0].components["default"].options;
    var metaAMP = Array.isArray(route.meta) ? route.meta[0].amp : route.meta.amp;
    var ampMode = pick(options.amp, metaAMP, mode);
    var isAMP = false;
    switch (ampMode) {
        case true:
        case 'only':
            isAMP = true;
            ampMode = 'only';
            if (options.amp && hasAMPPrefix) {
                return ctx.error({ statusCode: 404, message: 'This page could not be found' });
            }
            break;
        case 'hybrid':
            isAMP = hasAMPPrefix;
            ampMode = 'hybrid';
            break;
        case false:
        default:
            isAMP = false;
            ampMode = false;
            if (hasAMPPrefix) {
                ctx.error({ statusCode: 404, message: 'This page could not be found' });
            }
            break;
    }
    if (ampMode !== false && !options._amp) {
        options.head = createCustomHead(options.head, origin);
        options.layout = createCustomLayout(options.layout, options.ampLayout);
        options._amp = true;
    }
    var _request = req || {};
    _request.isAMP = isAMP;
    return {
        req: _request,
        isAMP: isAMP,
        ampMode: ampMode
    };
}
exports["default"] = default_1;
var createCustomHead = function (originalHead, origin) { return function customHead() {
    if (!process.server) {
        origin = window.location.origin;
    }
    var head;
    switch (typeof originalHead) {
        case 'function':
            head = originalHead.call(this);
            break;
        case 'object':
            head = __assign({}, originalHead);
            break;
        default:
            head = {};
    }
    ensureKey(head, 'link', []);
    if (this.$isAMP) {
        if (!head.link.find(function (l) { return l.rel === 'canonical' || l.hid === 'canonical'; })) {
            var path = this.$isAMP && this.$ampMode !== 'only'
                ? this.$route.fullPath.replace(/^\/amp(\/.*)?/, '$1')
                : this.$route.fullPath;
            head.link.push({
                rel: 'canonical',
                hid: 'canonical',
                href: origin + path
            });
        }
        ensureKey(head, 'htmlAttrs', {});
        head.htmlAttrs.amp = true;
        ensureKey(head, 'bodyAttrs', {});
        ensureKey(head.bodyAttrs, 'class', '');
        head.bodyAttrs["class"] += ' __amp';
    }
    return head;
}; };
var createCustomLayout = function (originalLayout, ampLayout) { return function customLayout(ctx) {
    var layout;
    if (ctx.app.$isAMP && ampLayout) {
        layout = ampLayout;
        if (typeof layout === 'function') {
            layout = layout.call(this, ctx);
        }
        return layout;
    }
    layout = originalLayout || 'default';
    if (typeof layout === 'function') {
        layout = layout.call(this, ctx);
    }
    return layout;
}; };
