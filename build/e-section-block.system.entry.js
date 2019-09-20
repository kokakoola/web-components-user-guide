System.register(['./chunk-8c17ff1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, getContext, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                getContext = module.d;
                h = module.h;
            }],
        execute: function () {
            var SectionBlock = /** @class */ (function () {
                function SectionBlock(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.backgroundImage = '';
                    this.backgroundColor = '';
                    this.overlayColor = '';
                    this.overlayPosition = '50%';
                    this.backgroundStyles = function () { return _this.backgroundImage !== ''
                        ? {
                            background: "url(" + _this.backgroundImage + ") left center no-repeat",
                            height: '100%',
                            backgroundSize: 'cover'
                        }
                        : null; };
                    this.imgClasses = function () {
                        return {
                            'section-container': true,
                            'section-img': _this.backgroundImage !== '',
                            'image-overlay': _this.hasImageOverlay
                        };
                    };
                    this.classes = function () {
                        var _a;
                        return _a = {
                                outer__container: true,
                                'section--diagonal': _this.isDiagonal
                            },
                            _a["section--" + _this.backgroundColor] = _this.backgroundColor !== '',
                            _a['section--diagonal-space'] = _this.diagonalSpace,
                            _a.wide = _this.isWide,
                            _a.narrow = _this.isNarrow,
                            _a;
                    };
                    this.overlayClasses = function () {
                        var _a;
                        return _a = {
                                svgoverwrite: true
                            },
                            _a["overlay-" + _this.overlayPosition] = _this.overlayPosition !== '',
                            _a["overlay-" + _this.overlayColor] = _this.overlayColor !== '',
                            _a;
                    };
                    this.publicPath = getContext(this, "publicPath");
                }
                SectionBlock.prototype.render = function () {
                    return (h("div", { class: this.classes() }, this.overlayColor && (h("svg", { class: this.overlayClasses(), style: { left: "" + this.overlayPosition } }, h("use", { xlinkHref: this.publicPath + "/assets/svg/ELV_shape.svg#test" }))), h("div", { class: this.imgClasses(), style: this.backgroundStyles() }, h("div", { class: "content-wrapper container" }, h("slot", null)))));
                };
                Object.defineProperty(SectionBlock, "style", {
                    get: function () { return ".outer__container {\n  height: 100%;\n  min-height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n\n.section-img {\n  position: inherit;\n}\n\n.content-wrapper {\n  padding: 0;\n  padding: var(--space-md) 0;\n}\n\@media only screen and (min-width: 48rem) {\n  .content-wrapper {\n    margin-left: 0;\n  }\n}\n\@media only screen and (min-width: 80rem) {\n  .content-wrapper {\n    padding: var(--space-lg);\n  }\n}\n\n.section--diagonal {\n  min-height: var(--space-xxxl);\n  position: relative;\n  left: 0;\n  padding: 0;\n  overflow: hidden;\n  width: 100%;\n}\n\@media only screen and (min-width: 80rem) {\n  .section--diagonal {\n    -webkit-transform: skew(-25deg);\n            transform: skew(-25deg);\n    width: 120%;\n  }\n}\n.section--diagonal ::slotted(*) {\n  padding: 0;\n  position: relative;\n  z-index: 3;\n}\n.section--diagonal .content-wrapper {\n  width: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding-right: 0;\n  padding-left: 0;\n}\n\@media only screen and (min-width: 80rem) {\n  .section--diagonal .content-wrapper {\n    -webkit-transform: skew(25deg);\n            transform: skew(25deg);\n  }\n}\n\@media only screen and (min-width: 80rem) {\n  .section--diagonal .content-wrapper {\n    padding-left: 0;\n    padding-left: var(--space-lg);\n    padding-right: var(--space-xxl);\n  }\n}\n\@media only screen and (min-width: 90rem) {\n  .section--diagonal .content-wrapper {\n    padding-left: var(--space-lg);\n    padding-right: var(--space-xxxl);\n  }\n}\n.section--diagonal .section-img {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\@media only screen and (min-width: 80rem) {\n  .section--diagonal .section-img {\n    -webkit-transform: skew(25deg);\n            transform: skew(25deg);\n    left: -30%;\n    width: 125%;\n  }\n}\n\n.svgoverwrite {\n  max-height: 100%;\n  max-width: 300px;\n  height: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: absolute;\n  bottom: 0;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  z-index: 1;\n}\n\n.wide {\n  z-index: 2;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n}\n\@media only screen and (min-width: 48rem) {\n  .wide {\n    width: 200%;\n    margin-left: -50%;\n  }\n}\n\@media only screen and (min-width: 64rem) {\n  .wide {\n    width: 180%;\n    margin-left: -40%;\n  }\n}\n.wide .content-wrapper {\n  width: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding-right: 0;\n  padding-left: 0;\n}\n\@media only screen and (min-width: 64rem) {\n  .wide .content-wrapper {\n    padding: var(--space-xl);\n  }\n}\n.wide.section--diagonal-space {\n  border-right: 0;\n}\n\@media only screen and (min-width: 48rem) {\n  .wide.section--diagonal-space {\n    border-right: var(--space-xxs) solid var(--color-white);\n  }\n}\n\n:host(:first-child) .section--diagonal {\n  -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center;\n  left: 0;\n  width: 100%;\n}\n\@media only screen and (min-width: 80rem) {\n  :host(:first-child) .section--diagonal {\n    width: 125%;\n    left: -25%;\n  }\n}\n:host(:first-child) .section--diagonal .section-img {\n  left: 0%;\n}\n:host(:first-child) .section--diagonal .content-wrapper {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\@media only screen and (min-width: 80rem) {\n  :host(:first-child) .section--diagonal .content-wrapper {\n    padding-right: var(--space-lg);\n  }\n}\n:host(:first-child) .section--diagonal .section-container {\n  padding-left: 0;\n}\n\@media only screen and (min-width: 80rem) {\n  :host(:first-child) .section--diagonal .section-container {\n    padding-left: 20%;\n  }\n}\n\n.overlay-primary {\n  fill: var(--color-primary);\n}\n\n.overlay-gray {\n  fill: var(--color-contrast-lower);\n}\n\n.overlay-white {\n  fill: var(--color-white);\n}\n\n.section--diagonal-space {\n  border-left: 0;\n}\n\@media only screen and (min-width: 48rem) {\n  .section--diagonal-space {\n    border-left: var(--space-xxs) solid var(--color-white);\n  }\n}\n\n.section--primary {\n  background-color: var(--color-primary);\n  color: var(--color-white);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.section--light {\n  background-color: var(--color-contrast-lower);\n}\n\n.section--primary-light {\n  background-color: var(--color-primary-lighter);\n}\n\n.section--white {\n  background-color: var(--color-white);\n}\n\n.section--gradient {\n  background-image: var(--gradient-accent);\n  color: var(--color-white);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.section--gradient-primary {\n  background-image: var(--gradient-primary);\n  color: var(--color-white);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.section--accent-gradient {\n  background-image: var(--gradient-accent-dark);\n  color: var(--color-white);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.image-overlay {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  color: var(--color-white);\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.image-overlay::before {\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-image: var(--gradient-accent);\n  opacity: 0.6;\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n::slotted(*) {\n  position: relative;\n}\n\n.container {\n  width: calc(100% - 5em) !important;\n  height: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  white-space: normal;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n          -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\@media only screen and (min-width: 64rem) {\n  .container {\n    -webkit-box-pack: center;\n            -ms-flex-pack: center;\n            justify-content: center;\n  }\n}\n\n\@supports (--css: variables) {\n  .container {\n    width: calc(100% - 2*var(--component-padding)) !important;\n  }\n}\n\@media only screen and (min-width: 64rem) {\n  .narrow.section--diagonal {\n    -webkit-transform: skew(0);\n            transform: skew(0);\n    width: 130%;\n  }\n}\n.narrow.section--diagonal .content-wrapper,\n.narrow.section--diagonal .section-container,\n.narrow.section--diagonal .section-img {\n  width: 100%;\n  margin: 0;\n  left: 0;\n}\n\@media only screen and (min-width: 64rem) {\n  .narrow.section--diagonal .content-wrapper,\n.narrow.section--diagonal .section-container,\n.narrow.section--diagonal .section-img {\n    -webkit-transform: skew(0);\n            transform: skew(0);\n  }\n}\n\n.section-container {\n  height: 100%;\n}\n\n\@media (min-width: 64rem) {\n  .svgoverwrite {\n    max-height: 50%;\n  }\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return SectionBlock;
            }());
            exports('e_section_block', SectionBlock);
        }
    };
});
