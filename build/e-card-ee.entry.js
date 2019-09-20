import { r as registerInstance, h } from './chunk-8c82bca1.js';

class Card {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.image = '';
        this.classes = () => {
            return {
                card: true,
                'card--no-border': this.noBorder,
                'card--has-image': this.hasImage,
                'is-contact-card': this.isContactCard
            };
        };
    }
    render() {
        if (this.isContactCard) {
            return (h("div", { class: this.classes() }, h("slot", null)));
        }
        else {
            return (h("div", { class: this.classes() }, this.image && h("img", { src: this.image, alt: "image" }), h("slot", null)));
        }
    }
    static get style() { return ".card {\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-contrast-low);\n  overflow: hidden;\n}\n\n.card--no-border {\n  border: none;\n  height: 100%;\n}\n\n.card {\n  border-radius: var(--radius-md);\n  height: 100%;\n}\n.card:hover {\n  cursor: pointer;\n}\n\n.card--has-image img {\n  display: block;\n  width: 100%;\n  margin-bottom: var(--space-sm);\n  border-bottom: 3px solid var(--color-primary);\n}\n.card--has-image ::slotted(*) {\n  padding: 0 2rem 0 2rem !important;\n}\n.card--has-image:hover img {\n  opacity: 0.85;\n  -webkit-transition: opacity 0.5s ease-out;\n  transition: opacity 0.5s ease-out;\n}\n.card--has-image:hover ::slotted(h2) {\n  color: var(--color-primary) !important;\n}"; }
}

export { Card as e_card };
