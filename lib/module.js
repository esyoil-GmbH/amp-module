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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var _a = require('path'), resolve = _a.resolve, join = _a.join;
var chalk = require('chalk');
var tags_1 = require("./tags");
var utils_1 = require("./utils");
var AMPBoilerplate = '<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>' +
    '<script async src="https://cdn.ampproject.org/v0.js"></script>';
var scriptPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
var ampBodyPattern = /<amp-body[^>]*>([.\S\s]*)<\/amp-body>/;
var styleLoaders = [
    {
        test: /\.scss$/i,
        loader: '!sass-loader'
    }
];
function default_1(moduleOptions) {
    var nuxt = this.nuxt;
    var options = __assign(__assign({ cdnBase: undefined, css: undefined, removeInlineStyles: true, origin: '', cssLoader: '', mode: 'hybrid', tags: {}, routeAliases: 'auto', validator: true }, this.options.amp), moduleOptions);
    console.log('test register complete');
    if (options.css && !options.cssLoader) {
        var matchedLoader = styleLoaders.find(function (_a) {
            var test = _a.test;
            return options.css.match(test);
        });
        if (matchedLoader) {
            options.cssLoader = matchedLoader.loader;
        }
    }
    registerPlugin.call(this, options);
    registerRendererHook.call(this, options);
    ensureMeta.call(this, options);
    if (options.validator && nuxt.options.dev) {
        registerValidator.call(this, options);
    }
    processRoutes.call(this, options);
    var runtimeDir = resolve(__dirname, './runtime');
    nuxt.options.alias['~amp'] = runtimeDir;
}
exports["default"] = default_1;
function processRoutes(options) {
    this.nuxt.hook('generate:extendRoutes', function (routes) {
        for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
            var route = routes_1[_i];
            if (route.route && route.route !== '/amp' && route.route.indexOf('/amp/') !== 0) {
                routes.push(__assign(__assign({}, route), { route: '/amp' + route.route }));
            }
        }
    });
    this.nuxt.hook('generate:page', function (_a) {
        var page = _a.page, errors = _a.errors;
        if (errors.length) {
            var error = errors.find(function (error) { return error.route.includes('/amp'); });
            if (error && error.error.statusCode === 404) {
                page.exclude = true;
            }
        }
    });
    this.extendRoutes(function (routes) {
        var head = 0;
        for (var _i = 0, _a = routes.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], index = _b[0], route = _b[1];
            route.meta = route.meta || {};
            route.alias = route.alias || [];
            if (typeof route.alias === 'string') {
                route.alias = [route.alias];
            }
            if (route.path === '/amp' || route.path.indexOf('/amp/') === 0) {
                routes.splice(head, 0, routes.splice(index, 1)[0]);
                head += 1;
                route.meta.amp = true;
            }
            else if (!Array.isArray(options.routeAliases) || options.routeAliases.includes(route.path)) {
                route.alias.push('/amp' + route.path);
            }
        }
    });
}
function registerValidator(options) {
    return __awaiter(this, void 0, void 0, function () {
        var amphtmlValidator, validator;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    amphtmlValidator = require('amphtml-validator');
                    return [4, amphtmlValidator.getInstance()];
                case 1:
                    validator = _a.sent();
                    this.nuxt.hook('render:route', function (url, _a, _b) {
                        var html = _a.html;
                        var req = _b.req;
                        var isAMP = req.isAMP;
                        if (isAMP) {
                            var result = validator.validateString(html);
                            var isValid = result.status === 'PASS';
                            for (var _i = 0, _c = result.errors; _i < _c.length; _i++) {
                                var error = _c[_i];
                                var msg = 'line ' + error.line + ', col ' + error.col + ': ' + error.message;
                                if (error.specUrl !== null) {
                                    msg += ' (see ' + error.specUrl + ')';
                                }
                            }
                        }
                    });
                    return [2];
            }
        });
    });
}
function registerRendererHook(options) {
    var tags = tags_1.getTags(options.tags);
    this.nuxt.hook('vue-renderer:spa:templateParams', function (params) {
        params.isAMP = params.HTML_ATTRS.includes('amp');
    });
    this.nuxt.hook('vue-renderer:ssr:templateParams', function (params) {
        var isAMP = params.HTML_ATTRS.includes('amp');
        params.isAMP = isAMP;
        if (!isAMP) {
            return;
        }
        params.APP = params.APP
            .replace(scriptPattern, function (script) {
            return script.includes('application/json') ? script : '';
        });
        var AMPBody = ampBodyPattern.exec(params.APP);
        if (AMPBody) {
            params.APP = AMPBody[1];
        }
        params.HEAD = params.HEAD
            .replace(scriptPattern, function (v) {
            return (v.includes('custom-element') || v.includes('application/ld+json')) ? v : '';
        });
        if (options.removeInlineStyles) {
            params.HEAD = params.HEAD
                .replace(/<style[^>]*>[.\S\s]*?<\/style>/g, function (v) {
                return v.includes('amp-custom') ? v : '';
            })
                .replace(/<\/style>[\S\s]*<style[^>]*>/g, '');
        }
        else {
            var styleRegex_1 = /<style(?: .+?)?>([\s\S]*?)<\/style>/g;
            var styleList = params.HEAD.match(styleRegex_1).map(function (css) {
                var rawStyle = css.replace(styleRegex_1, '$1\n');
                return rawStyle;
            });
            params.HEAD = params.HEAD.replace(styleRegex_1, '') + ("<style>" + styleList.join('\n') + "</style>");
        }
        params.HEAD = params.HEAD
            .replace(/<style/, '<style amp-custom')
            .replace('@charset "UTF-8";', '');
        params.HEAD = utils_1.removeExternalStyles(params.HEAD);
        params.HEAD += AMPBoilerplate;
        params.HEAD += tags_1.getNecessaryScripts(tags, options.cdnBase, params.APP);
    });
}
function registerPlugin(options) {
    this.addPlugin({
        src: resolve(__dirname, '../templates', 'plugin.js'),
        fileName: join('amp.js'),
        options: options
    });
}
function find(arr, key, val) {
    if (val === void 0) { val = undefined; }
    return arr.find(function (obj) { return val ? obj[key] === val : obj[key]; });
}
function ensureMeta() {
    if (!this.options.head) {
        this.options.head = {};
    }
    if (!this.options.head.meta) {
        this.options.head.meta = {};
    }
    if (!find(this.options.head.meta, 'charset')) {
        this.options.head.meta.push({
            hid: 'charset',
            charset: 'utf-8'
        });
    }
    if (!find(this.options.head.meta, 'name', 'viewport')) {
        this.options.head.meta.push({
            hid: 'viewport',
            name: 'viewport',
            content: 'width=device-width, minimum-scale=1, initial-scale=1, shrink-to-fit=no, user-scalable=0, viewport-fit=cover'
        });
    }
}
