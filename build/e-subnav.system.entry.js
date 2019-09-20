System.register(['./chunk-8c17ff1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var Subnav = /** @class */ (function () {
                function Subnav(hostRef) {
                    registerInstance(this, hostRef);
                }
                Subnav.prototype.render = function () {
                    return (h("div", { class: "subnav-container" }, h("slot", null)));
                };
                Object.defineProperty(Subnav, "style", {
                    get: function () { return ".subnav-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: var(--space-sm);\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n\@media (min-width: 64rem) {\n  .subnav-container {\n    padding: var(--space-sm) var(--space-xl);\n  }\n}\n\@media (min-width: 90rem) {\n  .subnav-container {\n    padding: var(--space-sm) var(--space-xxxl);\n  }\n}\n\n::slotted(*) {\n  width: 100%;\n  margin-right: var(--space-sm);\n  padding: var(--space-sm);\n}\n\@media (min-width: 48rem) {\n  ::slotted(*) {\n    width: 20%;\n    margin-right: var(--space-md);\n    padding: var(--space-sm);\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Subnav;
            }());
            exports('e_subnav', Subnav);
        }
    };
});
