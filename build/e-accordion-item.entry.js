import { r as registerInstance, h, c as getElement } from './chunk-8c82bca1.js';

class AccordionItem {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.label = 'Label';
        this.contentHeight = 0;
        this.toggle = () => {
            this.open = !this.open;
        };
    }
    componentDidLoad() {
        this.contentHeight = this.content.scrollHeight;
    }
    componentWillUpdate() {
        this.contentHeight = this.content.scrollHeight;
    }
    contentClicked() {
        if (!this.open) {
            this.contentHeight = this.content.clientHeight;
            return;
        }
        this.content.style.height = 'auto';
        setTimeout(() => {
            this.contentHeight = this.content.scrollHeight;
        }, 350);
    }
    render() {
        return (h("div", { class: "item" }, h("div", { class: "label", onClick: this.toggle }, h("div", { class: "icon" }, h("e-icon", { icon: "caret-down", size: "xs", class: this.open ? 'rotate' : 'reset' })), h("span", null, this.label)), h("div", { style: { height: this.open ? `${this.contentHeight}px` : '0px' }, ref: el => (this.content = el), class: this.open ? 'content visible' : 'content', onClick: this.contentClicked.bind(this) }, h("slot", null))));
    }
    get el() { return getElement(this); }
    static get style() { return ".item {\n  border-bottom: inherit;\n}\n.item .label {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n  padding: 0.5em;\n  font-weight: 600;\n}\n.item .label span {\n  padding-left: 0.5em;\n}\n.item .content {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n  -webkit-transition: height 0.3s;\n  transition: height 0.3s;\n  margin-bottom: 0;\n  padding-left: 2.5em;\n}\n.item .content.visible {\n  margin-bottom: 1em;\n}\n\n.icon {\n  width: 1.5em;\n  height: 1.5em;\n  min-width: 1.5em;\n  line-height: 0;\n  background: var(--color-primary-lighter);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center;\n  border-radius: 50%;\n  line-height: 0;\n}\n\n.rotate {\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.reset {\n  -webkit-transform: initial;\n          transform: initial;\n  -webkit-transition: -webkit-transform 0.3s;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}"; }
}

export { AccordionItem as e_accordion_item };
