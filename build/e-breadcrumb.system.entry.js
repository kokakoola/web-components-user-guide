System.register(['./chunk-8c17ff1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var Breadcrumb = /** @class */ (function () {
                function Breadcrumb(hostRef) {
                    registerInstance(this, hostRef);
                }
                Breadcrumb.prototype.render = function () {
                    return (h("div", { class: "breadcrumb" }, h("slot", null)));
                };
                Object.defineProperty(Breadcrumb, "style", {
                    get: function () { return ".breadcrumb {\n  font-size: var(--text-sm);\n}\n\n::slotted(*) {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: inherit;\n}\n\n::slotted(*:last-child) {\n  color: var(--color-contrast-medium);\n}\n\n::slotted(:nth-child(n+2))::before {\n  color: var(--color-contrast-low);\n  content: \"/\";\n  margin: 0 0.4em 0 0.2em;\n}\n::slotted(:nth-child(n+2))::before:hover {\n  text-decoration: none;\n  cursor: default;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Breadcrumb;
            }());
            exports('e_breadcrumb', Breadcrumb);
        }
    };
});
