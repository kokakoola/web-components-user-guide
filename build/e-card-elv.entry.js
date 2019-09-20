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
    static get style() { return ".card {\n  background-color: var(--color-bg);\n  border: 1px solid var(--color-contrast-low);\n  overflow: hidden;\n}\n\n.card--no-border {\n  border: none;\n  height: 100%;\n}\n\n.card--has-image {\n  padding: var(--space-sm);\n}\n.card--has-image img {\n  display: block;\n  width: 100%;\n  margin-bottom: var(--space-sm);\n}\n.card--has-image::slotted(h6) {\n  position: relative;\n  height: 2.8em;\n  overflow: hidden;\n}\n.card--has-image::slotted(h6):after {\n  content: \"\";\n  text-align: right;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 50%;\n  height: 1.2em;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(80%, white));\n  background: linear-gradient(to right, rgba(255, 255, 255, 0), white 80%);\n}\n\@supports (-webkit-line-clamp: 2) {\n  .card--has-image ::slotted(h6) {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n  .card--has-image ::slotted(h6):after {\n    display: none;\n  }\n}\n\n.is-contact-card {\n  width: 250px;\n}\n.is-contact-card ::slotted(h6) {\n  text-transform: uppercase;\n  letter-spacing: 0.01em;\n  font-size: var(--text-sm) !important;\n  min-height: 45px;\n}"; }
}

export { Card as e_card };
