import { r as registerInstance, h, c as getElement } from './chunk-8c82bca1.js';

class Tabs {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** left, center, right */
        this.position = 'center';
        this.children = [];
        this.positions = () => {
            return {
                'tab-header-container': true,
                [`tabs-${this.position}`]: this.position !== ''
            };
        };
    }
    componentDidLoad() {
        this.selected = this.selectedTab;
        if (this.host.children[0].nodeName === 'DIV') {
            this.children = Array.from(this.host.children[0].querySelectorAll('div > e-tab'));
        }
        else {
            this.children = Array.from(this.host.children);
        }
        this.children[this.selected].classList.add('selected');
    }
    componentDidUpdate() {
        this.children.forEach(el => {
            el.classList.remove('selected');
        });
        this.children[this.selected].classList.add('selected');
    }
    render() {
        return (h("div", null, h("ul", { class: this.positions() }, this.children.map((elem, index) => {
            const classes = () => {
                return {
                    ['selected']: index === this.selected
                };
            };
            return (h("li", { class: classes(), key: index, onClick: this.handleChange.bind(this, index) }, elem.title));
        })), h("hr", null), h("div", { class: "tab" }, this.children[this.selected]), h("slot", null)));
    }
    handleChange(index) {
        this.selected = index;
    }
    get host() { return getElement(this); }
    static get style() { return ".tab {\n  width: 100%;\n  display: block;\n  font-size: var(--text-md);\n}\n\nul.tab-header-container {\n  list-style: none;\n  padding: 0;\n  margin-bottom: 0;\n  margin-top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\nul.tab-header-container li {\n  display: inline-block;\n  margin-left: 0;\n  padding: var(--space-sm);\n  font-size: var(--text-md);\n  cursor: pointer;\n  font-family: var(--font-primary);\n  font-weight: 700;\n  text-align: center;\n}\nul.tab-header-container li.selected {\n  border-bottom: 4px solid var(--color-primary);\n}\n\n::slotted(*) {\n  display: none;\n}\n\n::slotted(.selected) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nhr {\n  border-top: 1px solid var(--color-white-dark);\n  margin: 0;\n}\n\n.tabs-left {\n  -webkit-box-pack: start;\n          -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\n.tabs-center {\n  -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.tabs-right {\n  -webkit-box-pack: end;\n          -ms-flex-pack: end;\n          justify-content: flex-end;\n}"; }
}

export { Tabs as e_tabs };
