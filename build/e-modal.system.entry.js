System.register(['./chunk-8c17ff1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, Host, getElement;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.H;
                getElement = module.c;
            }],
        execute: function () {
            var Modal = /** @class */ (function () {
                function Modal(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.componentDidLoad = function () {
                        if (!_this.host.id) {
                            return console.error('Modal id not provided');
                        }
                        _this.backdropElement = _this.host.shadowRoot.querySelector('.modal__backdrop');
                        if (_this.backdropElement) {
                            _this.backdropElement.addEventListener('click', _this.close);
                        }
                    };
                    this.disconnectedCallback = function () {
                        if (_this.backdropElement) {
                            _this.backdropElement.removeEventListener('click', _this.close);
                        }
                    };
                    this.contentClasses = function () {
                        return {
                            modal__content: true,
                            'modal--fixed-width': _this.isFixedWidth
                        };
                    };
                    this.close = function () { return (_this.open = false); };
                }
                Modal.prototype.render = function () {
                    return (h(Host, null, h("div", { class: "modal" + (this.open ? ' modal--is-open' : '') }, h("div", { class: this.contentClasses() }, h("div", { class: "modal__header" }, h("slot", { name: "header" }), h("div", { class: "modal__close-button" }, h("e-button", { onClick: this.close, iconButton: true, color: "light-gray" }, h("e-icon", { color: "gray", icon: "x" })))), h("div", { class: "modal__body" }, h("slot", { name: "body" })), h("div", { class: "modal__footer" }, h("slot", { name: "footer" }))), h("div", { class: "modal__backdrop" }))));
                };
                Object.defineProperty(Modal.prototype, "host", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Modal, "style", {
                    get: function () { return ".modal {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  z-index: var(--zindex-overlay);\n}\n\n.modal__backdrop {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: hsla(var(--color-primary-darker-h), var(--color-primary-darker-s), var(--color-primary-darker-l), 0.3);\n  top: 0;\n  left: 0;\n}\n\n.modal--is-open {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.modal__header,\n.modal__footer {\n  padding: var(--space-sm) var(--space-md);\n}\n\n.modal__body {\n  margin: var(--space-md);\n  padding-bottom: var(--space-md);\n  border-bottom: 1px solid var(--color-contrast-lower);\n  min-height: 10vh;\n  max-height: 50vh;\n  overflow-y: auto;\n}\n\n.modal__content {\n  min-width: 25%;\n  max-width: 75%;\n  width: auto;\n  position: relative;\n  background-color: var(--color-white);\n  padding: 0;\n  color: var(--color-black);\n  border: 1px solid var(--color-contrast-low);\n  -webkit-box-shadow: var(--shadow-lg);\n  box-shadow: var(--shadow-lg);\n  -webkit-animation-name: animatetop;\n          animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n          animation-duration: 0.4s;\n  z-index: var(--zindex-fixed-element);\n  border-radius: var(--radius-sm);\n}\n\@media only screen and (max-width: 48rem) {\n  .modal__content {\n    max-width: 90%;\n  }\n}\n\n\@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n\@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n.modal__header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid var(--color-contrast-lower);\n}\n\n.modal--fixed-width {\n  width: 80vw;\n}\n\n.modal__close-button {\n  margin-left: var(--space-sm);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Modal;
            }());
            exports('e_modal', Modal);
        }
    };
});
