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
            var AccordionItem = /** @class */ (function () {
                function AccordionItem(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.label = 'Label';
                    this.contentHeight = 0;
                    this.toggle = function () {
                        _this.open = !_this.open;
                    };
                }
                AccordionItem.prototype.componentDidLoad = function () {
                    this.contentHeight = this.content.scrollHeight;
                };
                AccordionItem.prototype.componentWillUpdate = function () {
                    this.contentHeight = this.content.scrollHeight;
                };
                AccordionItem.prototype.contentClicked = function () {
                    var _this = this;
                    if (!this.open) {
                        this.contentHeight = this.content.clientHeight;
                        return;
                    }
                    this.content.style.height = 'auto';
                    setTimeout(function () {
                        _this.contentHeight = _this.content.scrollHeight;
                    }, 350);
                };
                AccordionItem.prototype.render = function () {
                    var _this = this;
                    return (h("div", { class: "item" }, h("div", { class: "label", onClick: this.toggle }, h("div", { class: "icon" }, h("e-icon", { icon: "caret-down", size: "xs", class: this.open ? 'rotate' : 'reset' })), h("span", null, this.label)), h("div", { style: { height: this.open ? this.contentHeight + "px" : '0px' }, ref: function (el) { return (_this.content = el); }, class: this.open ? 'content visible' : 'content', onClick: this.contentClicked.bind(this) }, h("slot", null))));
                };
                Object.defineProperty(AccordionItem.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AccordionItem, "style", {
                    get: function () { return ".item {\n  border-bottom: inherit;\n}\n.item .label {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n  padding: 0.5em;\n  font-weight: 600;\n}\n.item .label span {\n  padding-left: 0.5em;\n}\n.item .content {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n  -webkit-transition: height 0.3s;\n  transition: height 0.3s;\n  margin-bottom: 0;\n  padding-left: 2.5em;\n}\n.item .content.visible {\n  margin-bottom: 1em;\n}\n\n.icon {\n  width: 1.5em;\n  height: 1.5em;\n  min-width: 1.5em;\n  line-height: 0;\n  background: var(--color-primary-lighter);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center;\n  border-radius: 50%;\n  line-height: 0;\n}\n\n.rotate {\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.reset {\n  -webkit-transform: initial;\n          transform: initial;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return AccordionItem;
            }());
            exports('e_accordion_item', AccordionItem);
        }
    };
});
