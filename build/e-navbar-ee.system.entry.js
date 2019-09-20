System.register(['./chunk-8c17ff1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var Navbar = /** @class */ (function () {
                function Navbar(hostRef) {
                    registerInstance(this, hostRef);
                }
                Navbar.prototype.render = function () {
                    return (h("ul", { class: "navbar" }, h("slot", null)));
                };
                Object.defineProperty(Navbar, "style", {
                    get: function () { return ".navbar {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 0;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-weight: 700;\n}\n\n::slotted(*) {\n  -webkit-box-flex: 1;\n          -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center;\n}\n\n::slotted(:not(:first-child)) {\n  border-left: 1px solid var(--color-contrast-lower);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Navbar;
            }());
            exports('e_navbar', Navbar);
        }
    };
});
