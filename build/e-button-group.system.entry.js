System.register(['./chunk-8c17ff1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var ButtonGroup = /** @class */ (function () {
                function ButtonGroup(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.classes = function () {
                        return {
                            'btn-group': true,
                            'btn-group--center': _this.center,
                        };
                    };
                }
                ButtonGroup.prototype.render = function () {
                    return (h("div", { class: this.classes() }, h("slot", null)));
                };
                Object.defineProperty(ButtonGroup, "style", {
                    get: function () { return ".btn-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n\n.btn-group--center {\n  -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center;\n}\n\n::slotted(*) {\n  margin: 0.5rem;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return ButtonGroup;
            }());
            exports('e_button_group', ButtonGroup);
        }
    };
});
