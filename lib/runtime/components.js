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
exports.AMPMustache = void 0;
exports.AMPMustache = {
    name: 'AmpMustache',
    render: function (h) {
        return h('template', {
            props: __assign({}, this.$props),
            attrs: {
                type: 'amp-mustache'
            }
        }, this.$slots["default"]);
    }
};
