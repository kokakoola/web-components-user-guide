import { r as registerInstance, h } from './chunk-8c82bca1.js';

class Step {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.circleClasses = () => {
            return {
                'step-big-circle': this.hasCircle
            };
        };
    }
    render() {
        if (this.hasNumber) {
            return (h("div", { class: "step-wrapper" }, h("slot", { name: "icon" }), h("div", { class: "step-border" }, h("div", { class: "step-circle" }, h("h3", null, this.hasNumber))), h("slot", { name: "title" }), h("slot", { name: "text" })));
        }
        else {
            return (h("div", { class: "step-wrapper" }, h("div", { class: "step-icon" }, h("div", { class: this.circleClasses() }, h("slot", { name: "icon" }))), h("slot", { name: "title" }), h("slot", { name: "text" })));
        }
    }
    static get style() { return ".step-wrapper {\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  padding-right: var(--space-sm);\n  margin-bottom: var(--space-xl);\n  width: 10em;\n  -webkit-box-flex: 1;\n          -ms-flex: 1;\n          flex: 1;\n}\n\n::slotted([slot=title]) {\n  font-family: var(--font-secondary);\n  text-align: center;\n  white-space: normal;\n}\n\n::slotted([slot=text]) {\n  text-align: center;\n  white-space: normal;\n}\n\n.step-border {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n          flex-direction: column;\n  position: relative;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n  height: 2px;\n  left: 50%;\n  right: 50%;\n  background-color: var(--color-contrast-low);\n  width: 18em;\n  margin: var(--space-lg) -9em var(--space-lg) -9em;\n}\n\n.step-circle {\n  position: absolute;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n  width: 3em;\n  height: 3em;\n  border-radius: 50%;\n  top: -1.5em;\n  left: calc(50% - 1.5em);\n  color: var(--color-white);\n  background-image: var(--gradient-secondary);\n  z-index: 1;\n}\n.step-circle h3 {\n  margin: 0;\n}\n\n.step-icon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: var(--space-md);\n}\n\n.step-big-circle {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n  width: 9em;\n  height: 9em;\n  border-radius: 50%;\n  background-image: var(--gradient-secondary);\n}"; }
}

export { Step as e_step };
