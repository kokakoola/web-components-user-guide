System.register(['./chunk-8c17ff1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, getContext, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getContext = module.d;
                h = module.h;
            }],
        execute: function () {
            var Logo = /** @class */ (function () {
                function Logo(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.href = '#';
                    this.logo = 'enefit-color';
                    this.size = '';
                    this.classes = function () {
                        var _a;
                        return _a = {
                                logo: true,
                                'logo--horizontal': _this.logo.includes('horizontal'),
                                'logo--ee': _this.logo.includes('energia')
                            },
                            _a["logo--" + _this.size] = _this.size !== '',
                            _a;
                    };
                    this.publicPath = getContext(this, "publicPath");
                }
                Logo.prototype.render = function () {
                    return (h("a", { href: this.href }, h("svg", { class: this.classes() }, h("use", { xlinkHref: this.publicPath + "assets/svg/logos.svg#" + this.logo }))));
                };
                Object.defineProperty(Logo, "style", {
                    get: function () { return ".logo--horizontal {\n  height: var(--logo-height);\n  width: var(--logo-width);\n}\n\@media only screen and (min-width: 64rem) {\n  .logo--horizontal {\n    height: var(--logo-height-md);\n    width: var(--logo-width-md);\n  }\n}\n\n.logo--md.logo--horizontal {\n  height: var(--logo-height-md);\n  width: var(--logo-width-md);\n}\n\n.logo--lg.logo--horizontal {\n  height: var(--logo-height-lg);\n  width: var(--logo-width-lg);\n}\n\n:host(e-logo) {\n  --logo-scale-ratio: 1.42;\n  --logo-height: 2.5em;\n  --logo-width: 5em;\n  --logo-height-md: calc(var(--logo-height)*var(--logo-scale-ratio));\n  --logo-width-md: calc(var(--logo-width)*var(--logo-scale-ratio));\n  --logo-height-lg: calc(3.55em*var(--logo-scale-ratio));\n  --logo-width-lg: calc(7.1em*var(--logo-scale-ratio));\n}\n\@supports (--css: variables) {\n  :host(e-logo) {\n    --logo-height-lg: calc(var(--logo-height-md)*var(--logo-scale-ratio));\n    --logo-width-lg: calc(var(--logo-width-md)*var(--logo-scale-ratio));\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Logo;
            }());
            exports('e_logo', Logo);
        }
    };
});
