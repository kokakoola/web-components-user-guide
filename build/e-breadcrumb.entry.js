import { r as registerInstance, h } from './chunk-8c82bca1.js';

class Breadcrumb {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "breadcrumb" }, h("slot", null)));
    }
    static get style() { return ".breadcrumb {\n  font-size: var(--text-sm);\n}\n\n::slotted(*) {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: inherit;\n}\n\n::slotted(*:last-child) {\n  color: var(--color-contrast-medium);\n}\n\n::slotted(:nth-child(n+2))::before {\n  color: var(--color-contrast-low);\n  content: \"/\";\n  margin: 0 0.4em 0 0.2em;\n}\n::slotted(:nth-child(n+2))::before:hover {\n  text-decoration: none;\n  cursor: default;\n}"; }
}

export { Breadcrumb as e_breadcrumb };
