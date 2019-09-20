System.register(['./chunk-8c17ff1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var Checkbox = /** @class */ (function () {
                function Checkbox(hostRef) {
                    registerInstance(this, hostRef);
                    this.disabled = false;
                    this.checked = false;
                    this.name = '';
                    this.label = '';
                    this.checkboxId = 'e-checkbox';
                }
                Checkbox.prototype.render = function () {
                    return (h("div", { class: "checkbox-list flex flex-gap-sm" }, h("div", null, h("input", { name: this.name, type: "checkbox", id: this.checkboxId, checked: this.checked, disabled: this.disabled }), h("label", { htmlFor: this.checkboxId }, this.label))));
                };
                return Checkbox;
            }());
            exports('e_checkbox', Checkbox);
        }
    };
});
