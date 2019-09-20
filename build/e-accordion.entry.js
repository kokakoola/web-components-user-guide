import { r as registerInstance, h } from './chunk-8c82bca1.js';

class Accordion {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "accordion" }, h("slot", null)));
    }
    static get style() { return "::slotted(*) {\n  border-bottom: 1px solid var(--color-white-dark);\n}\n\n::slotted(:last-child) {\n  border-bottom: none;\n}"; }
}

export { Accordion as e_accordion };
