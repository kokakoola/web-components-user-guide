System.register(['./chunk-8c17ff1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var Accordion = /** @class */ (function () {
                function Accordion(hostRef) {
                    registerInstance(this, hostRef);
                }
                Accordion.prototype.render = function () {
                    return (h("div", { class: "accordion" }, h("slot", null)));
                };
                Object.defineProperty(Accordion, "style", {
                    get: function () { return "::slotted(*) {\n  border-bottom: 1px solid var(--color-white-dark);\n}\n\n::slotted(:last-child) {\n  border-bottom: none;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Accordion;
            }());
            exports('e_accordion', Accordion);
        }
    };
});
