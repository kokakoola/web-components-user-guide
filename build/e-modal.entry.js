import { r as registerInstance, h, H as Host, c as getElement } from './chunk-8c82bca1.js';

class Modal {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.componentDidLoad = () => {
            if (!this.host.id) {
                return console.error('Modal id not provided');
            }
            this.backdropElement = this.host.shadowRoot.querySelector('.modal__backdrop');
            if (this.backdropElement) {
                this.backdropElement.addEventListener('click', this.close);
            }
        };
        this.disconnectedCallback = () => {
            if (this.backdropElement) {
                this.backdropElement.removeEventListener('click', this.close);
            }
        };
        this.contentClasses = () => {
            return {
                modal__content: true,
                'modal--fixed-width': this.isFixedWidth
            };
        };
        this.close = () => (this.open = false);
    }
    render() {
        return (h(Host, null, h("div", { class: `modal${this.open ? ' modal--is-open' : ''}` }, h("div", { class: this.contentClasses() }, h("div", { class: "modal__header" }, h("slot", { name: "header" }), h("div", { class: "modal__close-button" }, h("e-button", { onClick: this.close, iconButton: true, color: "light-gray" }, h("e-icon", { color: "gray", icon: "x" })))), h("div", { class: "modal__body" }, h("slot", { name: "body" })), h("div", { class: "modal__footer" }, h("slot", { name: "footer" }))), h("div", { class: "modal__backdrop" }))));
    }
    get host() { return getElement(this); }
    static get style() { return ".modal {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  z-index: var(--zindex-overlay);\n}\n\n.modal__backdrop {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: hsla(var(--color-primary-darker-h), var(--color-primary-darker-s), var(--color-primary-darker-l), 0.3);\n  top: 0;\n  left: 0;\n}\n\n.modal--is-open {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.modal__header,\n.modal__footer {\n  padding: var(--space-sm) var(--space-md);\n}\n\n.modal__body {\n  margin: var(--space-md);\n  padding-bottom: var(--space-md);\n  border-bottom: 1px solid var(--color-contrast-lower);\n  min-height: 10vh;\n  max-height: 50vh;\n  overflow-y: auto;\n}\n\n.modal__content {\n  min-width: 25%;\n  max-width: 75%;\n  width: auto;\n  position: relative;\n  background-color: var(--color-white);\n  padding: 0;\n  color: var(--color-black);\n  border: 1px solid var(--color-contrast-low);\n  -webkit-box-shadow: var(--shadow-lg);\n  box-shadow: var(--shadow-lg);\n  -webkit-animation-name: animatetop;\n          animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n          animation-duration: 0.4s;\n  z-index: var(--zindex-fixed-element);\n  border-radius: var(--radius-sm);\n}\n\@media only screen and (max-width: 48rem) {\n  .modal__content {\n    max-width: 90%;\n  }\n}\n\n\@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n\n\@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0;\n  }\n  to {\n    top: 0;\n    opacity: 1;\n  }\n}\n.modal__header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid var(--color-contrast-lower);\n}\n\n.modal--fixed-width {\n  width: 80vw;\n}\n\n.modal__close-button {\n  margin-left: var(--space-sm);\n}"; }
}

export { Modal as e_modal };
