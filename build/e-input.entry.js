import { r as registerInstance, h } from './chunk-8c82bca1.js';

class Input {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = 'text';
        this.disabled = false;
        this.inputId = '';
        this.name = '';
        this.placeholder = 'email@elektrilevi.ee';
        this.label = '';
        this.value = '';
        this.iconColor = '';
    }
    render() {
        const searchboxClasses = () => {
            return {
                'e-header__searchbox': true,
                'searchbox-fullwidth': this.isFullWidth
            };
        };
        if (this.type === 'search')
            return (h("div", { class: "searchbox-container" }, h("e-icon", { icon: "search", size: "xs", color: this.iconColor }), h("input", { class: searchboxClasses(), type: "text", name: this.name, id: this.inputId, value: this.value, disabled: this.disabled })));
        else {
            return (h("div", { class: "grid" }, h("label", { htmlFor: this.inputId, class: "form-label margin-bottom-xxs" }, this.label), h("input", { value: this.value, class: "e-input", type: this.type, name: this.name, id: this.inputId, placeholder: this.placeholder, disabled: this.disabled })));
        }
    }
    static get style() { return ".e-input {\n  border-radius: var(--radius-lg);\n  padding: var(--btn-padding-y) var(--btn-padding-x);\n  background-color: var(--color-white-dark);\n  outline: none;\n  border: 1px solid var(--color-white-dark);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.e-input:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  --color-shadow: hsla(var(--color-primary-h), var(--color-primary-s), var(--color-primary-l), 0.2);\n  -webkit-box-shadow: 0 0 0 2px var(--color-shadow);\n  box-shadow: 0 0 0 2px var(--color-shadow);\n}\n.e-input:hover {\n  border: 1px solid var(--color-primary);\n}\n.e-input[disabled] {\n  border: none;\n  cursor: not-allowed;\n}\n.e-input[disabled]:hover {\n  border: none;\n  outline: none;\n}\n\n.searchbox-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background-color: var(--color-white-dark);\n  border-radius: 290486px;\n  -webkit-transition: width 0.4s ease-in-out;\n  transition: width 0.4s ease-in-out;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\n.e-header__searchbox {\n  position: relative;\n  border-radius: 290486px;\n  width: 2.3em;\n  height: 2.3em;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 1px solid var(--color-white-darker);\n  font-size: inherit;\n  background: transparent;\n  padding: 5px 15px;\n  -webkit-transition: width 0.4s ease-in-out;\n  transition: width 0.4s ease-in-out;\n}\n\n.searchbox-container e-icon {\n  top: 50%;\n  right: 1.2em;\n  -webkit-transform: translate(50%, -50%);\n          transform: translate(50%, -50%);\n  position: absolute;\n}\n\n.searchbox:focus {\n  width: 200px;\n  outline: none;\n  -webkit-transition: width 0.4s ease-in-out;\n  transition: width 0.4s ease-in-out;\n  padding-right: var(--space-md);\n}\n\n.searchbox-fullwidth {\n  width: 100%;\n}"; }
}

export { Input as e_input };
