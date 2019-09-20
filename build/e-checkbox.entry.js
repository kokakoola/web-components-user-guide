import { r as registerInstance, h } from './chunk-8c82bca1.js';

class Checkbox {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false;
        this.checked = false;
        this.name = '';
        this.label = '';
        this.checkboxId = 'e-checkbox';
    }
    render() {
        return (h("div", { class: "checkbox-list flex flex-gap-sm" }, h("div", null, h("input", { name: this.name, type: "checkbox", id: this.checkboxId, checked: this.checked, disabled: this.disabled }), h("label", { htmlFor: this.checkboxId }, this.label))));
    }
}

export { Checkbox as e_checkbox };
