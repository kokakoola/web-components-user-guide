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
            var Nav = /** @class */ (function () {
                function Nav(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.href = '#';
                    this.align = 'left';
                    this.caretColor = '';
                    this.liClasses = function () {
                        return {
                            'nav--selected': _this.selected,
                            'nav--open': _this.open && (_this.hasSubmenu || _this.hasDropdown)
                        };
                    };
                    this.dropdownClasses = function () {
                        return {
                            'nav__dropdown-container': true,
                            'nav__dropdown--align-right': _this.align === 'right'
                        };
                    };
                    this.containerClasses = function () {
                        return {
                            nav: true
                        };
                    };
                    this.navElement = function () {
                        return (h("a", { href: _this.href }, h("li", { class: _this.liClasses(), onClick: _this.toggle }, h("slot", { name: "nav-icon" }), h("span", null, _this.text), (_this.hasSubmenu || _this.hasDropdown) && (h("e-icon", { icon: _this.open ? 'caret-up' : 'caret-down', size: "xs", color: _this.caretColor })))));
                    };
                    this.toggle = function () {
                        _this.open = !_this.open;
                    };
                }
                Nav.prototype.render = function () {
                    return (h("div", { class: this.containerClasses() }, this.navElement(), this.hasDropdown && (h("div", { class: this.dropdownClasses(), style: { display: this.open ? 'block' : 'none' } }, h("slot", null)))));
                };
                Nav.prototype.handleClick = function (event) {
                    this.selected = false;
                    if (event.target == this.element) {
                        this.selected = !this.selected;
                    }
                    if (event.target !== this.element && (this.hasSubmenu || this.hasDropdown)) {
                        this.open = false;
                    }
                };
                Object.defineProperty(Nav.prototype, "element", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Nav, "style", {
                    get: function () { return "li {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n  margin-left: 0;\n  padding: var(--space-md) var(--space-xs);\n  cursor: pointer;\n  font-size: var(--text-base-size);\n  border-bottom: 3px solid transparent;\n}\nli.nav--selected {\n  border-bottom: 3px solid var(--color-primary);\n}\nli:hover {\n  border-bottom: 3px solid var(--color-primary);\n}\nli:focus {\n  border-bottom: 3px solid var(--color-primary);\n}\nli > :not(:first-child) {\n  margin-left: var(--space-xxs);\n}\nli e-icon {\n  display: -webkit-inline-box !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n\na {\n  text-decoration: none;\n  color: var(--color-black);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Nav;
            }());
            exports('e_nav', Nav);
        }
    };
});
