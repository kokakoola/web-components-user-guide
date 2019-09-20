import { r as registerInstance, h } from './chunk-8c82bca1.js';

class Navblock {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.blockTitle = '';
    }
    render() {
        return (h("div", { class: "navblock" }, h("p", { class: "navblock-title" }, this.blockTitle), h("hr", null), h("slot", null)));
    }
    static get style() { return ".navblock-title {\n  font-size: var(--text-base-size);\n  color: var(--color-contrast-medium);\n  font-weight: 700;\n}\n\nhr {\n  border: none;\n  background-color: var(--color-white-darker);\n  color: var(--color-white-darker);\n  height: 1px;\n}\n\n::slotted(*) {\n  display: block;\n  margin-bottom: var(--space-xxs);\n}"; }
}

export { Navblock as e_navblock };
