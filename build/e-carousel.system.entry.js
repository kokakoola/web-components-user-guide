System.register(['./chunk-8c17ff1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, getElement;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                getElement = module.c;
            }],
        execute: function () {
            var Carousel = /** @class */ (function () {
                function Carousel(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.text = '';
                    /** in seconds */
                    this.interval = 3;
                    this.children = [];
                    this.slideIndex = 0;
                    this.carouselInterval = this.interval && setInterval(function () { return _this.next(); }, this.interval * 1000);
                    this.classes = function () {
                        return {
                            carousel: true,
                            'carousel--fixed-height': _this.isHero
                        };
                    };
                }
                Carousel.prototype.componentWillLoad = function () {
                    this.carouselInterval;
                };
                Carousel.prototype.componentDidLoad = function () {
                    if (this.host.children[0].nodeName === 'DIV') {
                        this.children = Array.from(this.host.children[0].querySelectorAll('div > e-section'));
                    }
                    else {
                        this.children = Array.from(this.host.children);
                    }
                    this.children.forEach(function (el) {
                        el.style.display = 'none';
                    });
                    this.children[this.slideIndex].style.display = 'block';
                };
                Carousel.prototype.render = function () {
                    return (h("div", { class: this.classes() }, h("e-button", { iconButton: true, class: "prev", onClick: this.previous.bind(this), color: "primary-alpha" }, h("e-icon", { icon: "caret-left" })), this.children.map(function (el, i) {
                        return (h("div", null, h("div", { class: "fade", key: i }, el)));
                    }), h("slot", null), h("e-button", { iconButton: true, class: "next", onClick: this.next.bind(this) }, h("e-icon", { icon: "caret-right" }))));
                };
                Carousel.prototype.show = function (index, arr) {
                    var _this = this;
                    clearInterval(this.carouselInterval);
                    this.carouselInterval = setInterval(function () { return _this.next(); }, this.interval * 1000);
                    arr.forEach(function (el) {
                        el.style.display = 'none';
                    });
                    arr[index].style.display = 'block';
                };
                Carousel.prototype.previous = function () {
                    this.slideIndex--;
                    if (this.slideIndex < 0) {
                        this.slideIndex = this.children.length - 1;
                    }
                    this.show(this.slideIndex, this.children);
                };
                Carousel.prototype.next = function () {
                    this.slideIndex++;
                    if (this.slideIndex >= this.children.length) {
                        this.slideIndex = 0;
                    }
                    this.show(this.slideIndex, this.children);
                };
                Object.defineProperty(Carousel.prototype, "host", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Carousel, "style", {
                    get: function () { return ".carousel {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.carousel--fixed-height {\n  height: 300px;\n}\n\n.prev,\n.next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  padding: var(--space-xs);\n  color: currentColor;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: auto;\n}\n\n::slotted(*) {\n  width: 100%;\n  height: 100%;\n  -webkit-animation-name: fade;\n          animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  display: none;\n}\n\n.next {\n  right: 0;\n  width: auto;\n}\n\n.fade {\n  -webkit-animation-name: fade;\n          animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n}\n\n\@-webkit-keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\@keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.carousel--fixed-height {\n  height: 350px;\n  overflow: hidden;\n}\n.carousel--fixed-height ::slotted(*) {\n  min-height: 350px;\n  height: 350px;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Carousel;
            }());
            exports('e_carousel', Carousel);
        }
    };
});
