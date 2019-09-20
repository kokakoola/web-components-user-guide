System.register(['./chunk-8c17ff1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var Textarea = /** @class */ (function () {
                function Textarea(hostRef) {
                    registerInstance(this, hostRef);
                    this.label = '';
                    this.name = '';
                }
                Textarea.prototype.render = function () {
                    return (h("div", { class: "grid" }, h("label", { class: "form-label margin-bottom-xxs", htmlFor: this._id }, this.label), h("textarea", { id: this._id, class: "e-textarea", name: this.name })));
                };
                Object.defineProperty(Textarea, "style", {
                    get: function () { return ".e-textarea {\n  border-color: var(--color-white-darker);\n}\n.e-textarea:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  --color-shadow: hsla(var(--color-primary-h), var(--color-primary-s), var(--color-primary-l), 0.2);\n  -webkit-box-shadow: 0 0 0 2px var(--color-shadow);\n  box-shadow: 0 0 0 2px var(--color-shadow);\n}\n.e-textarea:hover {\n  border: 1px solid var(--color-primary);\n}\n.e-textarea[disabled] {\n  border: none;\n  cursor: not-allowed;\n}\n.e-textarea[disabled]:hover {\n  border: none;\n  outline: none;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Textarea;
            }());
            exports('e_textarea', Textarea);
        }
    };
});
