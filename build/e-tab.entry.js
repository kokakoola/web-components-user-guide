import { r as registerInstance, h } from './chunk-8c82bca1.js';

class Tab {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.classes = () => {
            return {
                tab: true
            };
        };
    }
    render() {
        return (h("div", { class: this.classes() }, h("slot", null)));
    }
    static get style() { return ".tab {\n  width: 100%;\n  display: block;\n  font-size: var(--text-base-size);\n}"; }
}

export { Tab as e_tab };
