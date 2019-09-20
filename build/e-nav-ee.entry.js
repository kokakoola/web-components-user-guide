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
    static get style() { return "li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center;\n  margin-left: 0;\n  padding: var(--space-sm);\n  cursor: pointer;\n  font-size: var(--text-md);\n  line-height: 1.1;\n  border-bottom: 3px solid transparent;\n}\nli.nav--selected {\n  color: var(--color-primary);\n  border-bottom: 3px solid var(--color-primary);\n}\nli:hover,\nli :focus {\n  color: var(--color-primary);\n  border-bottom: 3px solid var(--color-primary);\n}\nli > :not(:last-child) {\n  margin-right: var(--space-xxs);\n}\n\@media only screen and (min-width: 64rem) {\n  li > :not(:last-child) {\n    margin-right: var(--space-xxs);\n  }\n}\n\na {\n  text-decoration: none;\n  color: var(--color-black);\n}\na > :not(:first-child) {\n  margin-left: var(--space-xxs);\n}\n\n.nav {\n  position: relative;\n}\n\n.nav__dropdown--align-right {\n  right: 0;\n}\n\n.nav--open {\n  background-color: var(--color-contrast-low);\n}\n\n.nav__dropdown-container {\n  -webkit-box-shadow: 0 0.25em 1em rgba(0, 0, 0, 0.25);\n  box-shadow: 0 0.25em 1em rgba(0, 0, 0, 0.25);\n  border-radius: 4px;\n  width: 15em;\n  z-index: 100;\n  position: absolute;\n  background-color: var(--color-white);\n  margin: 1em auto 0;\n}\n.nav__dropdown-container::after {\n  bottom: 98%;\n  left: 35%;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border: 15px solid transparent;\n  border-top-color: var(--color-white);\n  margin-left: -15px;\n  -webkit-transform: rotateZ(-180deg);\n          transform: rotateZ(-180deg);\n}\n\n::slotted(:not(e-icon)) {\n  font-family: var(--font-primary);\n  color: var(--color-black);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  padding: 1em 1.5em !important;\n  z-index: 1000;\n  border-bottom: 1px solid var(--color-contrast-low) !important;\n}\n\n::slotted(e-icon) {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}"; }
}

export { Nav as e_nav };
