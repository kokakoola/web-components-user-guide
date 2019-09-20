System.register(['./chunk-8c17ff1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, getContext;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                getContext = module.d;
            }],
        execute: function () {
            var Icon = /** @class */ (function () {
                function Icon(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.icon = 'person';
                    this.size = '';
                    this.color = '';
                    this.background = '';
                    this.isGradient = this.color.includes('gradient');
                    this.classes = function () {
                        var _a;
                        return _a = {
                                icon: true
                            },
                            _a["icon--" + _this.size] = _this.size !== '',
                            _a["icon--" + _this.color] = _this.color !== '' && !_this.isGradient,
                            _a['icon--gradient'] = _this.isGradient,
                            _a;
                    };
                    this.backgroundClasses = function () {
                        var _a;
                        return _a = {
                                'icon--background': true
                            },
                            _a["icon--background-" + _this.background] = _this.background !== '',
                            _a;
                    };
                    this.gradient = function (stop1, stop2, stop3) { return (h("linearGradient", { id: "gradient", x1: "0%", y1: "100%", x2: "100%", y2: "0%" }, h("stop", { offset: "0%", class: stop1 }), h("stop", { offset: "45%", class: stop2 }), h("stop", { offset: "100%", class: stop3 }))); };
                    this.use = function () {
                        return h("use", { xlinkHref: _this.publicPath + "assets/svg/icons.svg#" + _this.icon });
                    };
                    this.publicPath = getContext(this, "publicPath");
                }
                Icon.prototype.render = function () {
                    if (this.isGradient) {
                        return (h("svg", { class: this.classes() }, this.gradient(this.color + "-stop1", this.color + "-stop2", this.color + "-stop3"), this.use()));
                    }
                    else if (this.background) {
                        return (h("div", { class: this.backgroundClasses() }, h("svg", { class: "icon icon--lg icon--white" }, this.use())));
                    }
                    else {
                        return h("svg", { class: this.classes() }, this.use());
                    }
                };
                Object.defineProperty(Icon, "style", {
                    get: function () { return ":host {\n  --icon-sm: 4rem;\n  --icon-md: 5rem;\n  --icon-lg: 6rem;\n  --icon-xl: 7rem;\n  --icon-xxl: 8rem;\n  --icon-xxxl: 10rem;\n}\n\n.icon {\n  color: inherit;\n  fill: currentColor;\n  height: 1em;\n  width: 1em;\n  line-height: 1;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n}\n\n.icon use {\n  color: inherit;\n  fill: currentColor;\n}\n\n.icon--primary use {\n  color: var(--color-primary);\n  fill: var(--color-primary);\n}\n.icon--white use {\n  color: var(--color-white);\n  fill: var(--color-white);\n}\n.icon--warning use {\n  color: var(--color-warning);\n  fill: var(--color-warning);\n}\n.icon--success use {\n  color: var(--color-success);\n  fill: var(--color-success);\n}\n.icon--error use {\n  color: var(--color-error);\n  fill: var(--color-error);\n}\n.icon--gray use {\n  color: var(--color-contrast-medium);\n  fill: var(--color-contrast-medium);\n}\n.icon--gray-light use {\n  color: var(--color-contrast-low);\n  fill: var(--color-contrast-low);\n}\n.icon--gradient use {\n  color: var(--color-primary);\n  fill: url(\"#gradient\");\n}\n\n.gradient-primary-stop1 {\n  stop-color: var(--color-primary);\n}\n\n.gradient-primary-stop2 {\n  stop-color: var(--color-primary);\n}\n\n.gradient-primary-stop3 {\n  stop-color: var(--color-primary-accent);\n}\n\n.gradient-secondary-stop1 {\n  stop-color: var(--color-accent);\n}\n\n.gradient-secondary-stop2 {\n  stop-color: var(--color-secondary-accent-light);\n}\n\n.gradient-secondary-stop3 {\n  stop-color: var(--color-secondary-accent-dark);\n}\n\n.gradient-tertiary-stop1 {\n  stop-color: var(--color-tertiary-dark);\n}\n\n.gradient-tertiary-stop2 {\n  stop-color: var(--color-tertiary);\n}\n\n.gradient-tertiary-stop3 {\n  stop-color: var(--color-tertiary-light);\n}\n\n.icon--default,\n.icon--sm {\n  font-size: var(--icon-sm);\n}\n\n.icon--md {\n  font-size: var(--icon-md);\n}\n\n.icon--lg {\n  font-size: var(--icon-lg);\n}\n\n.icon--xl {\n  font-size: var(--icon-xl);\n}\n\n.icon--xxl {\n  font-size: var(--icon-xxl);\n}\n\n.icon--background {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  padding: var(--space-md);\n  border-radius: var(--radius-lg);\n}\n.icon--background.icon--background-primary {\n  background-color: var(--color-primary);\n}\n.icon--background.icon--background-gradient-primary {\n  background-image: var(--gradient-primary);\n}\n.icon--background.icon--background-gradient-secondary {\n  background-image: var(--gradient-secondary);\n}\n.icon--background.icon--background-gradient-accent {\n  background-image: var(--gradient-accent);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Icon;
            }());
            exports('e_icon', Icon);
        }
    };
});
