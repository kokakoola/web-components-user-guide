import { r as registerInstance, d as getContext, h } from './chunk-8c82bca1.js';

class Section {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.backgroundColor = '';
        this.sectionBorder = '';
        this.backgroundImage = '';
        this.overlayColor = '';
        this.overlayPosition = '50%';
        this.classes = () => {
            return {
                [`section--${this.backgroundColor}`]: this.backgroundColor !== '',
                [`section--border-${this.sectionBorder}`]: this.sectionBorder !== '',
                'section--no-overflow': this.noOverflow,
                'section--vertical-padding': this.verticalSpace,
                section__header: this.header,
                'section--full-height': this.isFullHeight,
                'section--text-white': this.textWhite,
                'section--background-image': this.backgroundImage !== '' && !this.header,
                'section--background-image-header': this.backgroundImage !== '' && this.header,
                bordered: this.bordered,
                subnav__section: this.hasSubnav,
                'section--column-reverse': this.columnReverse
            };
        };
        this.overlayClasses = () => {
            return {
                svgoverwrite: true,
                [`overlay-${this.overlayPosition}`]: this.overlayPosition !== '',
                [`overlay-${this.overlayColor}`]: this.overlayColor !== ''
            };
        };
        this.publicPath = getContext(this, "publicPath");
    }
    render() {
        if (this.backgroundImage) {
            return (h("section", { style: { backgroundImage: `url(${this.backgroundImage})` }, class: this.classes() }, h("slot", null), this.overlayColor && (h("svg", { class: this.overlayClasses(), style: { left: `${this.overlayPosition}` } }, h("use", { xlinkHref: `${this.publicPath}/assets/svg/ELV_shape.svg#test` })))));
        }
        else {
            return (h("section", { class: this.classes() }, h("slot", null), this.overlayColor && (h("svg", { viewBox: "0 0 300 259", style: { left: `${this.overlayPosition}` }, class: this.overlayClasses() }, h("use", { xlinkHref: `${this.publicPath}/assets/svg/ELV_shape.svg#test` })))));
        }
    }
    static get style() { return "section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\nsection.section--full-height {\n  height: 100%;\n}\nsection.section--white {\n  background-color: var(--color-white);\n}\nsection.section--light {\n  background-color: var(--color-contrast-lower);\n}\nsection.section--primary {\n  background-color: var(--color-primary);\n  color: var(--color-white);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nsection.section--gradient-primary {\n  background-image: var(--gradient-primary);\n  color: var(--color-white);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nsection.section--gradient-primary .link {\n  color: hsla(var(--color-white-h), var(--color-white-s), var(--color-white-l), 0.9) !important;\n}\nsection.section--gradient-primary .link:hover {\n  color: hsla(var(--color-white-h), var(--color-white-s), var(--color-white-l), 0.7) !important;\n  text-decoration: underline;\n}\nsection.section--gradient-secondary {\n  background-image: var(--gradient-secondary);\n  color: var(--color-white);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nsection.section--gradient-accent {\n  background-image: var(--gradient-accent);\n  color: var(--color-white);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nsection.section--primary-light {\n  background-color: var(--color-primary-lighter);\n}\nsection.section--text-white {\n  color: var(--color-white);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nsection.section--text-white ::slotted(.link) {\n  color: hsla(var(--color-white-h), var(--color-white-s), var(--color-white-l), 0.9) !important;\n}\nsection.section--text-white ::slotted(.link):hover {\n  color: hsla(var(--color-white-h), var(--color-white-s), var(--color-white-l), 0.7) !important;\n  text-decoration: underline;\n}\nsection.section--column-reverse {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n          -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n}\n\@media only screen and (min-width: 48rem) {\n  section.section--column-reverse {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n            flex-direction: row;\n  }\n}\n\@media only screen and (min-width: 48rem) {\n  section {\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n  }\n}\n\n.section--no-overflow {\n  overflow: hidden;\n}\n\n.section--background-image {\n  background-size: cover;\n  background-position: 25.5% 100%;\n}\n\@media only screen and (min-width: 64rem) {\n  .section--background-image {\n    background-position: 50% 100%;\n  }\n}\n\@media only screen and (min-width: 80rem) {\n  .section--background-image {\n    background-position: 100% 100%;\n  }\n}\n\n.section--background-image-header {\n  background-size: cover;\n  background-position: 25.5% 0;\n}\n\@media only screen and (min-width: 64rem) {\n  .section--background-image-header {\n    background-position: 35% 0;\n  }\n}\n\@media only screen and (min-width: 80rem) {\n  .section--background-image-header {\n    background-position: 45% 0;\n  }\n}\n\n.section__header {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\@media only screen and (min-width: 64rem) {\n  .section__header {\n    padding-left: var(--space-xl);\n    padding-right: var(--space-xl);\n  }\n}\n\n::slotted(*) {\n  width: 100%;\n}\n\n.section--vertical-padding {\n  margin-bottom: var(--space-xxs);\n}\n\n.bordered ::slotted(*) {\n  border-top: 2px solid var(--color-contrast-lower);\n}\n.bordered ::slotted(:not(:last-child)) {\n  border-right: 2px solid var(--color-contrast-lower);\n}\n\n.svgoverwrite {\n  max-height: 30%;\n  height: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 300px;\n  position: absolute;\n  bottom: 0;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  z-index: 3;\n  display: none;\n}\n\@media (min-width: 48rem) {\n  .svgoverwrite {\n    max-height: 40%;\n  }\n}\n\@media (min-width: 64rem) {\n  .svgoverwrite {\n    max-height: 50%;\n  }\n}\n\@media (min-width: 80rem) {\n  .svgoverwrite {\n    display: block;\n    max-height: 70%;\n  }\n}\n\@media (min-width: 90rem) {\n  .svgoverwrite {\n    max-height: 80%;\n  }\n}\n\n.overlay-primary {\n  fill: var(--color-primary);\n}\n\n.overlay-gray {\n  fill: var(--color-contrast-lower);\n}\n\n.overlay-white {\n  fill: var(--color-white);\n}\n\n.bordered ::slotted(*) {\n  border-top: 2px solid var(--color-contrast-lower);\n}\n.bordered ::slotted(:not(:last-child)) {\n  border-right: 2px solid var(--color-contrast-lower);\n}\n\n.subnav__section {\n  position: absolute;\n  z-index: var(--zindex-fixed-element);\n  width: 100%;\n}"; }
}

export { Section as e_section };
