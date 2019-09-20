import { r as registerInstance, h } from './chunk-8c82bca1.js';

class Subnav {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "subnav-container" }, h("slot", null)));
    }
    static get style() { return ".subnav-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: var(--space-sm);\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n\@media (min-width: 64rem) {\n  .subnav-container {\n    padding: var(--space-sm) var(--space-xl);\n  }\n}\n\@media (min-width: 90rem) {\n  .subnav-container {\n    padding: var(--space-sm) var(--space-xxxl);\n  }\n}\n\n::slotted(*) {\n  width: 100%;\n  margin-right: var(--space-sm);\n  padding: var(--space-sm);\n}\n\@media (min-width: 48rem) {\n  ::slotted(*) {\n    width: 20%;\n    margin-right: var(--space-md);\n    padding: var(--space-sm);\n  }\n}"; }
}

export { Subnav as e_subnav };
