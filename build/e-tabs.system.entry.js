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
            var Tabs = /** @class */ (function () {
                function Tabs(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    /** left, center, right */
                    this.position = 'center';
                    this.children = [];
                    this.positions = function () {
                        var _a;
                        return _a = {
                                'tab-header-container': true
                            },
                            _a["tabs-" + _this.position] = _this.position !== '',
                            _a;
                    };
                }
                Tabs.prototype.componentDidLoad = function () {
                    this.selected = this.selectedTab;
                    if (this.host.children[0].nodeName === 'DIV') {
                        this.children = Array.from(this.host.children[0].querySelectorAll('div > e-tab'));
                    }
                    else {
                        this.children = Array.from(this.host.children);
                    }
                    this.children[this.selected].classList.add('selected');
                };
                Tabs.prototype.componentDidUpdate = function () {
                    this.children.forEach(function (el) {
                        el.classList.remove('selected');
                    });
                    this.children[this.selected].classList.add('selected');
                };
                Tabs.prototype.render = function () {
                    var _this = this;
                    return (h("div", null, h("ul", { class: this.positions() }, this.children.map(function (elem, index) {
                        var classes = function () {
                            var _a;
                            return _a = {},
                                _a['selected'] = index === _this.selected,
                                _a;
                        };
                        return (h("li", { class: classes(), key: index, onClick: _this.handleChange.bind(_this, index) }, elem.title));
                    })), h("hr", null), h("div", { class: "tab" }, this.children[this.selected]), h("slot", null)));
                };
                Tabs.prototype.handleChange = function (index) {
                    this.selected = index;
                };
                Object.defineProperty(Tabs.prototype, "host", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Tabs, "style", {
                    get: function () { return ".tab {\n  width: 100%;\n  display: block;\n  font-size: var(--text-md);\n}\n\nul.tab-header-container {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 0;\n  margin-top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\nul.tab-header-container li {\n  display: inline-block;\n  margin-left: 0;\n  padding: var(--space-sm);\n  font-size: var(--text-md);\n  cursor: pointer;\n  font-family: var(--font-primary);\n  font-weight: 700;\n  text-align: center;\n}\nul.tab-header-container li.selected {\n  border-bottom: 4px solid var(--color-primary);\n}\n\n::slotted(*) {\n  display: none;\n}\n\n::slotted(.selected) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nhr {\n  border-top: 1px solid var(--color-white-dark);\n  margin: 0;\n}\n\n.tabs-left {\n  -webkit-box-pack: start;\n          -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\n.tabs-center {\n  -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.tabs-right {\n  -webkit-box-pack: end;\n          -ms-flex-pack: end;\n          justify-content: flex-end;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Tabs;
            }());
            exports('e_tabs', Tabs);
        }
    };
});
