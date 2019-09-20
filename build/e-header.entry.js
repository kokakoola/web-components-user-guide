import { r as registerInstance, h, H as Host } from './chunk-8c82bca1.js';

class Header {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        this.getNav();
    }
    componentDidUpdate() {
        this.getNav();
    }
    getNav() {
        if (window.innerWidth >= 1280) {
            this.isMobile = false;
        }
        else {
            this.isMobile = true;
        }
    }
    render() {
        return (h(Host, null, h("slot", { name: "mobile-header" }), h("slot", { name: "desktop-header" })));
    }
    static get style() { return "::slotted([slot=mobile-header]) {\n  display: block !important;\n}\n\@media only screen and (min-width: 64rem) {\n  ::slotted([slot=mobile-header]) {\n    display: none !important;\n  }\n}\n\n::slotted([slot=desktop-header]) {\n  display: none !important;\n}\n\@media only screen and (min-width: 64rem) {\n  ::slotted([slot=desktop-header]) {\n    display: block !important;\n  }\n}"; }
}

export { Header as e_header };
