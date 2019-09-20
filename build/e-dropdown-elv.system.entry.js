System.register(['./chunk-8c17ff1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, getElement;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                getElement = module.c;
            }],
        execute: function () {
            var Dropdown = /** @class */ (function () {
                function Dropdown(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.text = '';
                    this.type = 'button';
                    this.spacing = 'no-spacing';
                    this.align = 'left';
                    this.caretColor = '';
                    this.buttonColor = 'primary';
                    this.buttonSize = '';
                    this.containerClasses = function () {
                        return {
                            dropdown: true
                        };
                    };
                    this.btnClasses = function () {
                        return {
                            'dropdown--type-text': _this.type === 'text'
                        };
                    };
                    this.dropdownClasses = function () {
                        var _a;
                        return _a = {
                                'dropdown-container': true
                            },
                            _a["dropdown--" + _this.spacing] = _this.spacing !== '',
                            _a['dropdown--align-right'] = _this.align === 'right',
                            _a;
                    };
                    this.btnElement = function () {
                        if (_this.type === 'button') {
                            return (h("e-button", { ref: function (el) { return (_this.dropdownButtonRef = el); }, onClick: _this.toggle, color: _this.buttonColor, size: _this.buttonSize, "has-icon": _this.hasIcon }, h("span", null, h("slot", { name: "button-icon" }), _this.text), h("e-icon", { icon: _this.open ? 'caret-up' : 'caret-down', size: "xxs" })));
                        }
                        else {
                            return (h("div", { class: "btn-group-container" }, h("button", { class: _this.btnClasses(), onClick: _this.toggle, ref: function (el) { return (_this.dropdownRef = el); } }, _this.text, h("span", null, h("e-icon", { icon: _this.open ? 'caret-up' : 'caret-down', size: "xxs", color: _this.caretColor })))));
                        }
                    };
                    this.toggle = function () {
                        _this.open = !_this.open;
                    };
                    this.close = function () {
                        _this.open = false;
                    };
                }
                Dropdown.prototype.render = function () {
                    return (h("div", { class: this.containerClasses() }, this.btnElement(), h("div", { class: this.dropdownClasses(), style: { display: this.open ? 'block' : 'none' } }, h("slot", null))));
                };
                Dropdown.prototype.handleOutsideClick = function (event) {
                    if (this.type === 'button') {
                        if (event.target !== this.element && event.target !== this.dropdownButtonRef.childNodes[3]) {
                            this.close();
                        }
                    }
                    else if (this.type === 'text') {
                        if (event.target !== this.element && event.target !== this.dropdownRef) {
                            this.close();
                        }
                    }
                };
                Object.defineProperty(Dropdown.prototype, "element", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dropdown, "style", {
                    get: function () { return ".dropdown--type-text {\n  font-size: inherit;\n  font-weight: inherit;\n  font-family: var(--font-primary);\n  color: inherit;\n  background: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  padding: 0;\n}\n.dropdown--type-text:focus {\n  outline: 0;\n}\n\n.dropdown-container {\n  -webkit-box-shadow: var(--shadow-sm);\n  box-shadow: var(--shadow-sm);\n  border-radius: var(--radius-sm);\n  z-index: var(--zindex-overlay);\n  width: auto;\n  position: absolute;\n  background-color: var(--color-white);\n}\n\n::slotted(:not([slot=button-icon])) {\n  color: var(--color-primary);\n  font-weight: 400 !important;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0.55em 1.5em !important;\n  white-space: nowrap;\n}\n\n::slotted(:not([slot=button-icon]):hover) {\n  background-color: var(--color-white-dark);\n}\n\n::slotted([slot=button-icon]) {\n  margin-right: var(--space-xs);\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown--align-right {\n  right: 0;\n}\n\n.dropdown--xs {\n  margin-top: var(--space-xxxxs);\n}\n\n.dropdown--sm {\n  margin-top: var(--space-xxxs);\n}\n\n.dropdown--md {\n  margin-top: var(--space-xs);\n}\n\n.dropdown--lg {\n  margin-top: var(--space-sm);\n}\n\n.dropdown--xl {\n  margin-top: var(--space-md);\n}\n\n.dropdown--no-spacing {\n  margin-top: 0;\n}\n\n.btn-group-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.btn-group-container span {\n  margin-left: 0.5rem;\n}\n.btn-group-container span * {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Dropdown;
            }());
            exports('e_dropdown', Dropdown);
        }
    };
});
