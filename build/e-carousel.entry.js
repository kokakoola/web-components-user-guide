import { r as registerInstance, h, c as getElement } from './chunk-8c82bca1.js';

class Carousel {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.text = '';
        /** in seconds */
        this.interval = 3;
        this.children = [];
        this.slideIndex = 0;
        this.carouselInterval = this.interval && setInterval(() => this.next(), this.interval * 1000);
        this.classes = () => {
            return {
                carousel: true,
                'carousel--fixed-height': this.isHero
            };
        };
    }
    componentWillLoad() {
        this.carouselInterval;
    }
    componentDidLoad() {
        if (this.host.children[0].nodeName === 'DIV') {
            this.children = Array.from(this.host.children[0].querySelectorAll('div > e-section'));
        }
        else {
            this.children = Array.from(this.host.children);
        }
        this.children.forEach(el => {
            el.style.display = 'none';
        });
        this.children[this.slideIndex].style.display = 'block';
    }
    render() {
        return (h("div", { class: this.classes() }, h("e-button", { iconButton: true, class: "prev", onClick: this.previous.bind(this), color: "primary-alpha" }, h("e-icon", { icon: "caret-left" })), this.children.map((el, i) => {
            return (h("div", null, h("div", { class: "fade", key: i }, el)));
        }), h("slot", null), h("e-button", { iconButton: true, class: "next", onClick: this.next.bind(this) }, h("e-icon", { icon: "caret-right" }))));
    }
    show(index, arr) {
        clearInterval(this.carouselInterval);
        this.carouselInterval = setInterval(() => this.next(), this.interval * 1000);
        arr.forEach(el => {
            el.style.display = 'none';
        });
        arr[index].style.display = 'block';
    }
    previous() {
        this.slideIndex--;
        if (this.slideIndex < 0) {
            this.slideIndex = this.children.length - 1;
        }
        this.show(this.slideIndex, this.children);
    }
    next() {
        this.slideIndex++;
        if (this.slideIndex >= this.children.length) {
            this.slideIndex = 0;
        }
        this.show(this.slideIndex, this.children);
    }
    get host() { return getElement(this); }
    static get style() { return ".carousel {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.carousel--fixed-height {\n  height: 300px;\n}\n\n.prev,\n.next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  padding: var(--space-xs);\n  color: currentColor;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: auto;\n}\n\n::slotted(*) {\n  width: 100%;\n  height: 100%;\n  -webkit-animation-name: fade;\n          animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n  display: none;\n}\n\n.next {\n  right: 0;\n  width: auto;\n}\n\n.fade {\n  -webkit-animation-name: fade;\n          animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n          animation-duration: 1.5s;\n}\n\n\@-webkit-keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\@keyframes fade {\n  from {\n    opacity: 0.4;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.carousel--fixed-height {\n  height: 350px;\n  overflow: hidden;\n}\n.carousel--fixed-height ::slotted(*) {\n  min-height: 350px;\n  height: 350px;\n}"; }
}

export { Carousel as e_carousel };
