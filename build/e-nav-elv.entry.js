import { r as registerInstance, h, c as getElement } from './chunk-8c82bca1.js';

class Nav {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.href = '#';
        this.align = 'left';
        this.caretColor = '';
        this.liClasses = () => {
            return {
                'nav--selected': this.selected,
                'nav--open': this.open && (this.hasSubmenu || this.hasDropdown)
            };
        };
        this.dropdownClasses = () => {
            return {
                'nav__dropdown-container': true,
                'nav__dropdown--align-right': this.align === 'right'
            };
        };
        this.containerClasses = () => {
            return {
                nav: true
            };
        };
        this.navElement = () => {
            return (h("a", { href: this.href }, h("li", { class: this.liClasses(), onClick: this.toggle }, h("slot", { name: "nav-icon" }), h("span", null, this.text), (this.hasSubmenu || this.hasDropdown) && (h("e-icon", { icon: this.open ? 'caret-up' : 'caret-down', size: "xs", color: this.caretColor })))));
        };
        this.toggle = () => {
            this.open = !this.open;
        };
    }
    render() {
        return (h("div", { class: this.containerClasses() }, this.navElement(), this.hasDropdown && (h("div", { class: this.dropdownClasses(), style: { display: this.open ? 'block' : 'none' } }, h("slot", null)))));
    }
    handleClick(event) {
        this.selected = false;
        if (event.target == this.element) {
            this.selected = !this.selected;
        }
        if (event.target !== this.element && (this.hasSubmenu || this.hasDropdown)) {
            this.open = false;
        }
    }
    get element() { return getElement(this); }
    static get style() { return "li {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n  margin-left: 0;\n  padding: var(--space-md) var(--space-xs);\n  cursor: pointer;\n  font-size: var(--text-base-size);\n  border-bottom: 3px solid transparent;\n}\nli.nav--selected {\n  border-bottom: 3px solid var(--color-primary);\n}\nli:hover {\n  border-bottom: 3px solid var(--color-primary);\n}\nli:focus {\n  border-bottom: 3px solid var(--color-primary);\n}\nli > :not(:first-child) {\n  margin-left: var(--space-xxs);\n}\nli e-icon {\n  display: -webkit-inline-box !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n\na {\n  text-decoration: none;\n  color: var(--color-black);\n}"; }
}

export { Nav as e_nav };
