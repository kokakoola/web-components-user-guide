import { r as registerInstance, h } from './chunk-8c82bca1.js';

class HeaderBlock {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.classes = () => {
            return {
                header__block: true,
                topbar: this.isTopbar,
                header: this.isHeader
            };
        };
        this.slotContainerClasses = () => {
            return {
                'flex-center': this.isHeader
            };
        };
    }
    render() {
        return (h("div", { class: this.classes() }, h("div", { class: this.slotContainerClasses() }, h("slot", { name: "left" })), h("div", { class: this.slotContainerClasses() }, h("slot", { name: "right" }))));
    }
    static get style() { return ".header__block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  color: var(--color-black);\n  -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n}\n\n.topbar {\n  font-size: var(--text-sm);\n  line-height: 2;\n}\n.topbar slot[name=left]::slotted(:not(:first-child)) {\n  margin-left: var(--space-xs);\n  padding-left: var(--space-xs);\n  border-left: var(--header-block-border);\n}\n\nslot[name=right]::slotted(:not(:first-child)) {\n  margin-left: var(--space-xs);\n}\n\n.header ::slotted(*) {\n  display: inline-block;\n}\n\n.flex-center {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n}\n\n:host(e-header-block) {\n  --header-block-border: 1px solid var(--color-contrast-low);\n}\n\n.header__block {\n  padding: var(--space-sm) 0;\n}\n\@media only screen and (min-width: 64rem) {\n  .header__block {\n    padding: 0;\n  }\n}"; }
}

export { HeaderBlock as e_header_block };
