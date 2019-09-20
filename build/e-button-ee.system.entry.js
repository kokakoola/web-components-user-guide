System.register(['./chunk-8c17ff1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var Button = /** @class */ (function () {
                function Button(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.href = '#';
                    this.type = 'btn';
                    this.size = '';
                    this.color = '';
                    this.borderColor = '';
                    this.modalId = '';
                    this.classes = function () {
                        var _a;
                        return _a = {
                                btn: true,
                                'btn--has-icon': _this.hasIcon,
                                'btn--is-icon': _this.iconButton,
                                'btn--has-divider': _this.hasDivider
                            },
                            _a["btn--" + _this.color] = _this.color !== '',
                            _a["btn--" + _this.size] = _this.size !== '',
                            _a["btn--border-" + _this.borderColor] = _this.borderColor !== '',
                            _a['btn--is-full-width'] = _this.isFullWidth,
                            _a;
                    };
                }
                Button.prototype.render = function () {
                    var _this = this;
                    if (this.type === 'link') {
                        return (h("a", { href: this.href, class: this.classes() }, h("slot", null)));
                    }
                    else {
                        return (h("button", { class: this.classes(), disabled: this.disabled, onClick: this.modalId ? function () { return window.OpenModal(_this.modalId); } : null }, h("slot", null)));
                    }
                };
                Object.defineProperty(Button, "style", {
                    get: function () { return ":host(e-button) {\n  --btn-font-size: var(--text-base-size);\n}\n\n.btn {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  --space-unit: 1em;\n  --space-xxxxs: 0.125em;\n  --space-xxxs: 0.25em;\n  --space-xxs: 0.375em;\n  --space-xs: 0.5em;\n  --space-sm: 0.75em;\n  --space-md: 1.25em;\n  --space-lg: 2em;\n  --space-xl: 3.25em;\n  --space-xxl: 5.25em;\n  --space-xxxl: 8.5em;\n  --space-xxxxl: 13.75em;\n  --component-padding: var(--space-md);\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n  border: 0;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1;\n  position: relative;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: var(--color-primary);\n  border-radius: var(--radius-lg);\n  color: var(--color-white);\n  font-size: var(--btn-font-size);\n  font-family: var(--font-secondary);\n  font-weight: 700;\n  padding: var(--space-unit) var(--space-lg);\n  -webkit-transition: all 0.2s var(--ease-in-out);\n  transition: all 0.2s var(--ease-in-out);\n}\n.btn:focus, .btn:hover {\n  background-color: var(--color-primary-dark);\n}\n.btn:disabled {\n  background-color: var(--color-contrast-low);\n  color: var(--color-black);\n  cursor: not-allowed;\n}\n.btn.btn--is-full-width {\n  width: 100%;\n  padding-left: initial;\n  padding-right: initial;\n}\n\n::slotted(:not(:first-child)) {\n  margin-left: var(--space-xs);\n}\n\n.btn--is-icon {\n  padding: var(--space-unit);\n}\n\n.btn--has-icon:not(.btn--is-full-width):not(.btn--has-divider) {\n  padding: var(--space-unit);\n}\n\@media only screen and (min-width: 64rem) {\n  .btn--has-icon:not(.btn--is-full-width):not(.btn--has-divider) {\n    padding: var(--space-unit) var(--space-lg);\n  }\n}\n.btn--has-icon:not(.btn--is-full-width):not(.btn--has-divider) ::slotted(span) {\n  display: none;\n}\n\@media only screen and (min-width: 64rem) {\n  .btn--has-icon:not(.btn--is-full-width):not(.btn--has-divider) ::slotted(span) {\n    display: block;\n  }\n}\n\n.btn--white {\n  background-color: var(--color-white);\n  color: var(--color-black);\n}\n.btn--white:focus, .btn--white:hover {\n  background-color: var(--color-white-dark);\n}\n\n.btn--transparent {\n  background-color: transparent;\n  color: var(--color-black);\n}\n.btn--transparent:focus, .btn--transparent:hover {\n  background-color: var(--color-primary-lighter);\n}\n\n.btn--border-primary {\n  -webkit-box-shadow: inset 0 0 0 2px var(--color-primary);\n  box-shadow: inset 0 0 0 2px var(--color-primary);\n}\n\n.btn--border-white {\n  -webkit-box-shadow: inset 0 0 0 2px var(--color-white);\n  box-shadow: inset 0 0 0 2px var(--color-white);\n}\n\n.btn--secondary {\n  background-color: var(--color-accent);\n  color: var(--color-white);\n}\n.btn--secondary:focus, .btn--secondary:hover {\n  background-color: var(--color-accent-dark);\n}\n\n.btn--accent {\n  background-color: var(--color-accent);\n  color: var(--color-white);\n}\n.btn--accent:focus, .btn--accent:hover {\n  background-color: var(--color-accent-dark);\n}\n\n.btn--facebook {\n  background-color: var(--color-facebook);\n  color: var(--color-white);\n}\n.btn--facebook:focus, .btn--facebook:hover {\n  background-color: var(--color-facebook-dark);\n}\n\n.btn--linkedin {\n  background-color: var(--color-linkedin);\n  color: var(--color-white);\n}\n.btn--linkedin:focus, .btn--linkedin:hover {\n  background-color: var(--color-linkedin-dark);\n}\n\n.btn--instagram {\n  background-color: var(--color-instagram);\n  color: var(--color-white);\n}\n.btn--instagram:focus, .btn--instagram:hover {\n  background-color: var(--color-instagram-dark);\n}\n\n.btn--twitter {\n  background-color: var(--color-twitter);\n  color: var(--color-white);\n}\n.btn--twitter:focus, .btn--twitter:hover {\n  background-color: var(--color-twitter-dark);\n}\n\n.btn--youtube {\n  background-color: var(--color-youtube);\n  color: var(--color-white);\n}\n.btn--youtube:focus, .btn--youtube:hover {\n  background-color: var(--color-youtube-dark);\n}\n\n.btn--gray {\n  background-color: var(--color-contrast-low);\n  color: var(--color-black);\n}\n.btn--gray:focus, .btn--gray:hover {\n  background-color: var(--color-contrast-medium);\n}\n\n.btn--light-gray {\n  background-color: var(--color-contrast-lower);\n  color: var(--color-black);\n}\n.btn--light-gray:focus, .btn--light-gray:hover {\n  background-color: var(--color-contrast-low);\n}\n\n.btn--gradient-primary {\n  background-image: var(--gradient-primary);\n}\n.btn--gradient-primary:focus, .btn--gradient-primary:hover {\n  background-image: var(--gradient-secondary);\n}\n\n.btn--gradient-secondary {\n  background-image: var(--gradient-secondary);\n}\n.btn--gradient-secondary:focus, .btn--gradient-secondary:hover {\n  background-image: var(--gradient-primary);\n}\n\n.btn--primary-alpha {\n  background-color: hsla(var(--color-primary-h), var(--color-primary-s), var(--color-primary-l), 0.3);\n}\n.btn--primary-alpha:focus, .btn--primary-alpha:hover {\n  background-color: var(--color-primary);\n}\n\n.btn--has-divider ::slotted(:first-of-type) {\n  display: block;\n  padding-right: var(--space-unit);\n}\n.btn--has-divider ::slotted(:last-of-type) {\n  display: block;\n  padding-left: var(--space-md);\n  border-left: 1px solid var(--color-primary);\n}\n\n\@supports (--css: variables) {\n  .btn--has-divider {\n    padding: 0;\n  }\n  .btn--has-divider ::slotted(:first-of-type) {\n    display: block;\n    padding: var(--space-unit) var(--space-xs) var(--space-unit) var(--space-lg);\n  }\n  .btn--has-divider ::slotted(:last-of-type) {\n    display: block;\n    padding: var(--space-unit) var(--space-md) var(--space-unit) var(--space-md);\n    border-left: 1px solid var(--color-primary);\n    height: 100%;\n  }\n}\n.btn--xs {\n  font-size: var(--text-xs);\n}\n\n.btn--sm {\n  font-size: var(--text-sm);\n}\n\n.btn--md {\n  font-size: var(--text-md);\n}\n\n.btn--lg {\n  font-size: var(--text-lg);\n}\n\n::slotted(e-icon) {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\n.btn--primary-light {\n  background-color: var(--color-primary-light);\n}\n\n.btn--tertiary-light {\n  background-color: var(--color-white);\n}\n\n.btn--secondary:hover {\n  background-color: var(--color-accent-dark);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Button;
            }());
            exports('e_button', Button);
        }
    };
});
