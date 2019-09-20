System.register(['./chunk-8c17ff1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, Host;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.H;
            }],
        execute: function () {
            var Header = /** @class */ (function () {
                function Header(hostRef) {
                    registerInstance(this, hostRef);
                }
                Header.prototype.componentWillLoad = function () {
                    this.getNav();
                };
                Header.prototype.componentDidUpdate = function () {
                    this.getNav();
                };
                Header.prototype.getNav = function () {
                    if (window.innerWidth >= 1280) {
                        this.isMobile = false;
                    }
                    else {
                        this.isMobile = true;
                    }
                };
                Header.prototype.render = function () {
                    return (h(Host, null, h("slot", { name: "mobile-header" }), h("slot", { name: "desktop-header" })));
                };
                Object.defineProperty(Header, "style", {
                    get: function () { return "::slotted([slot=mobile-header]) {\n  display: block !important;\n}\n\@media only screen and (min-width: 64rem) {\n  ::slotted([slot=mobile-header]) {\n    display: none !important;\n  }\n}\n\n::slotted([slot=desktop-header]) {\n  display: none !important;\n}\n\@media only screen and (min-width: 64rem) {\n  ::slotted([slot=desktop-header]) {\n    display: block !important;\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Header;
            }());
            exports('e_header', Header);
        }
    };
});
