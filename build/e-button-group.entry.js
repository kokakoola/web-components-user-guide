import { r as registerInstance, h } from './chunk-8c82bca1.js';

class ButtonGroup {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.classes = () => {
            return {
                'btn-group': true,
                'btn-group--center': this.center,
            };
        };
    }
    render() {
        return (h("div", { class: this.classes() }, h("slot", null)));
    }
    static get style() { return ".btn-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n\n.btn-group--center {\n  -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center;\n}\n\n::slotted(*) {\n  margin: 0.5rem;\n}"; }
}

export { ButtonGroup as e_button_group };
