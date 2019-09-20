import { r as registerInstance, h } from './chunk-8c82bca1.js';

class Navbar {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("ul", { class: "navbar" }, h("slot", null)));
    }
    static get style() { return ".navbar {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 0;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-weight: 700;\n}\n\n::slotted(*) {\n  -webkit-box-flex: 1;\n          -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center;\n}\n\n::slotted(:not(:first-child)) {\n  border-left: 1px solid var(--color-contrast-lower);\n}"; }
}

export { Navbar as e_navbar };
