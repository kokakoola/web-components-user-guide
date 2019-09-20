System.register(['./chunk-8c17ff1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var Navblock = /** @class */ (function () {
                function Navblock(hostRef) {
                    registerInstance(this, hostRef);
                    this.blockTitle = '';
                }
                Navblock.prototype.render = function () {
                    return (h("div", { class: "navblock" }, h("p", { class: "navblock-title" }, this.blockTitle), h("hr", null), h("slot", null)));
                };
                Object.defineProperty(Navblock, "style", {
                    get: function () { return ".navblock-title {\n  font-size: var(--text-base-size);\n  color: var(--color-contrast-medium);\n  font-weight: 700;\n}\n\nhr {\n  border: none;\n  background-color: var(--color-white-darker);\n  color: var(--color-white-darker);\n  height: 1px;\n}\n\n::slotted(*) {\n  display: block;\n  margin-bottom: var(--space-xxs);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Navblock;
            }());
            exports('e_navblock', Navblock);
        }
    };
});
