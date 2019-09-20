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
                    get: function () { return ".navbar {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Navbar;
            }());
            exports('e_navbar', Navbar);
        }
    };
});
