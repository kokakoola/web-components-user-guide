import { r as registerInstance, h } from './chunk-8c82bca1.js';

class Navbar {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("ul", { class: "navbar" }, h("slot", null)));
    }
    static get style() { return ".navbar {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}"; }
}

export { Navbar as e_navbar };
