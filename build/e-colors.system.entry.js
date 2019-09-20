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
            var Colors = /** @class */ (function () {
                function Colors(hostRef) {
                    registerInstance(this, hostRef);
                    this.color = '--color-primary-darker';
                }
                Colors.prototype.render = function () {
                    return (h(Host, null, h("div", { class: "demo-colorblock" }, h("div", { class: this.color }), h("p", null, this.color))));
                };
                Object.defineProperty(Colors, "style", {
                    get: function () { return ".demo-colorblock > div {\n  width: 100%;\n  height: 100px;\n  display: inline-block;\n}\n\n.color-primary-darker {\n  background-color: var(--color-primary-darker);\n}\n\n.color-primary-dark {\n  background-color: var(--color-primary-dark);\n}\n\n.color-primary {\n  background-color: var(--color-primary);\n}\n\n.color-primary-light {\n  background-color: var(--color-primary-light);\n}\n\n.color-primary-lighter {\n  background-color: var(--color-primary-lighter);\n}\n\n.color-black {\n  background-color: var(--color-black);\n}\n\n.color-white {\n  background-color: var(--color-white);\n}\n\n.color-white-dark {\n  background-color: var(--color-white-dark);\n}\n\n.color-white-darker {\n  background-color: var(--color-white-darker);\n}\n\n.color-warning-darker {\n  background-color: var(--color-warning-darker);\n}\n\n.color-warning-dark {\n  background-color: var(--color-warning-dark);\n}\n\n.color-warning {\n  background-color: var(--color-warning);\n}\n\n.color-warning-light {\n  background-color: var(--color-warning-light);\n}\n\n.color-warning-lighter {\n  background-color: var(--color-warning-lighter);\n}\n\n.color-success-darker {\n  background-color: var(--color-success-darker);\n}\n\n.color-success-dark {\n  background-color: var(--color-success-dark);\n}\n\n.color-success {\n  background-color: var(--color-success);\n}\n\n.color-success-light {\n  background-color: var(--color-success-light);\n}\n\n.color-success-lighter {\n  background-color: var(--color-success-lighter);\n}\n\n.color-error-darker {\n  background-color: var(--color-error-darker);\n}\n\n.color-error-dark {\n  background-color: var(--color-error-dark);\n}\n\n.color-error {\n  background-color: var(--color-error);\n}\n\n.color-error-light {\n  background-color: var(--color-error-light);\n}\n\n.color-error-lighter {\n  background-color: var(--color-error-lighter);\n}\n\n.color-bg {\n  background-color: var(--color-bg);\n}\n\n.color-contrast-lower {\n  background-color: var(--color-contrast-lower);\n}\n\n.color-contrast-low {\n  background-color: var(--color-contrast-low);\n}\n\n.color-contrast-medium {\n  background-color: var(--color-contrast-medium);\n}\n\n.color-contrast-high {\n  background-color: var(--color-contrast-high);\n}\n\n.color-contrast-higher {\n  background-color: var(--color-contrast-higher);\n}\n\n.gradient-primary {\n  background-image: var(--gradient-primary);\n}\n\n.gradient-accent {\n  background-image: var(--gradient-accent);\n}\n\n.gradient-secondary {\n  background-image: var(--gradient-secondary);\n}\n\n.color-accent-darker {\n  background-color: var(--color-accent-darker);\n}\n\n.color-accent-dark {\n  background-color: var(--color-accent-dark);\n}\n\n.color-accent {\n  background-color: var(--color-accent);\n}\n\n.color-accent-light {\n  background-color: var(--color-accent-light);\n}\n\n.color-accent-lighter {\n  background-color: var(--color-accent-lighter);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Colors;
            }());
            exports('e_colors', Colors);
        }
    };
});
