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
            var MobileNav = /** @class */ (function () {
                function MobileNav(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.openIcon = 'dots-vertical';
                    this.closeIcon = 'dots-horizontal';
                    this.iconSize = 'xs';
                    this.backButtonTitle = 'Tagasi';
                    this.menu = [];
                    this.currentMenu = [];
                    this.currentPosition = [];
                    this.lastMenu = [];
                    this.level = 0;
                    this.containerClasses = function () {
                        return {
                            mobile__nav__container: true,
                            'mobile-nav--selected': _this.open
                        };
                    };
                    this.toggle = function () {
                        _this.open = !_this.open;
                    };
                }
                MobileNav.prototype.traverseNav = function () {
                    var _this = this;
                    var count = 0;
                    var menu = [];
                    var parentStack = [0];
                    var createNewLevel = function (obj) {
                        obj = obj || _this.host.children[0];
                        if (obj.tagName == 'LI') {
                            ++count;
                            menu.push({
                                title: obj.querySelector('a').innerText,
                                id: count,
                                hasChildren: obj.querySelector('li'),
                                href: obj.querySelector('a').href,
                                parent: parentStack[parentStack.length - 1]
                            });
                        }
                        if (obj.hasChildNodes) {
                            var child = obj.firstChild;
                            while (child) {
                                if (child.nodeType === 1) {
                                    if (child.tagName == 'UL') {
                                        parentStack.push(count);
                                    }
                                    createNewLevel(child);
                                    if (child.tagName == 'UL') {
                                        parentStack.pop();
                                    }
                                }
                                child = child.nextSibling;
                            }
                        }
                    };
                    function getNestedChildren(arr, parent) {
                        if (parent === void 0) { parent = 0; }
                        var result = [];
                        arr.forEach(function (el) {
                            if (el.parent == parent) {
                                var submenu = getNestedChildren(arr, el.id);
                                delete el.id;
                                delete el.parent;
                                if (submenu.length) {
                                    el.submenu = submenu;
                                }
                                result.push(el);
                            }
                        });
                        return result;
                    }
                    createNewLevel(this.host.children[0]);
                    var nestedMenu = getNestedChildren(menu);
                    return nestedMenu;
                };
                MobileNav.prototype.componentWillLoad = function () {
                    this.menu = this.traverseNav();
                    this.currentMenu = this.menu;
                };
                MobileNav.prototype.openNextLevel = function (el) {
                    if (el.isBackButton) {
                        this.currentPosition.pop();
                        this.currentMenu = this.currentPosition.reduce(function (arr, el) {
                            if (arr[el].submenu) {
                                return arr[el].submenu;
                            }
                            else {
                                return arr;
                            }
                        }, this.menu);
                        return;
                    }
                    if (el.submenu) {
                        this.currentPosition.push(this.currentMenu.indexOf(el));
                        this.lastMenu = this.currentMenu;
                        if (!el.submenu[0].isBackButton) {
                            el.submenu.unshift({ title: this.backButtonTitle, isBackButton: true });
                        }
                        this.currentMenu = el.submenu;
                    }
                };
                MobileNav.prototype.render = function () {
                    var _this = this;
                    return (h("div", { class: this.containerClasses() }, this.hasIconButton ? (h("e-button", { "icon-button": true, onClick: this.toggle, color: "light-gray", size: this.iconSize }, h("e-icon", { icon: this.open ? "" + this.closeIcon : "" + this.openIcon, size: this.iconSize }))) : (h("button", { onClick: this.toggle, class: "mobile-toggle__button" }, h("e-icon", { icon: this.open ? "" + this.closeIcon : "" + this.openIcon, size: this.iconSize }))), h("div", { style: { display: this.open ? 'block' : 'none' }, class: "mobile__nav", ref: function (el) { return (_this.navRef = el); } }, h("ul", null, this.currentMenu.map(function (el) {
                        var linkClasses = function () {
                            return {
                                'flex-justify-start': el.isBackButton
                            };
                        };
                        return (h("li", { onClick: _this.openNextLevel.bind(_this, el) }, h("a", { href: el.href, class: linkClasses() }, el.isBackButton && h("e-icon", { icon: "caret-left" }), h("span", null, el.title), el.hasChildren && h("e-icon", { icon: "caret-right" }))));
                    }), this.hasSearch && (h("div", null, h("slot", { name: "languages" }), h("hr", null), h("slot", { name: "searchbox" })))))));
                };
                MobileNav.prototype.handleOutsideClick = function (event) {
                    console.log(this.host.children[3].children[0].children[0].children[0].children[1]);
                    console.log(event.target);
                    if (this.hasSearch) {
                        if (event.target !== this.host &&
                            event.target !== this.host.children[3].children[0].children[0].children[0].children[1]) {
                            this.open = false;
                        }
                    }
                    else {
                        if (event.target !== this.host) {
                            this.open = false;
                        }
                    }
                };
                Object.defineProperty(MobileNav.prototype, "host", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MobileNav, "style", {
                    get: function () { return ".mobile__nav__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center;\n  height: 100%;\n}\n.mobile__nav__container:hover, .mobile__nav__container:focus {\n  border-bottom: 3px solid var(--color-primary);\n}\n\n.mobile__nav {\n  position: absolute;\n  right: 0;\n  left: 0;\n  min-width: 200px;\n  -webkit-box-shadow: var(--shadow-sm);\n  box-shadow: var(--shadow-sm);\n  margin: var(--space-xxs);\n  margin-top: var(--space-xl);\n  background-color: var(--color-white);\n  z-index: var(--zindex-overlay);\n}\n\n.mobile-toggle__button {\n  border: 0;\n  cursor: pointer;\n  text-decoration: none;\n  background-color: transparent;\n  outline: none;\n  width: 100%;\n}\n.mobile-toggle__button:hover,\n.mobile-toggle__button :focus {\n  color: var(--color-primary);\n}\n\nul {\n  padding: 0;\n  margin: 0;\n}\n\nli {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  list-style: none;\n  padding: var(--space-sm) var(--space-md);\n  border-bottom: 1px solid var(--color-white-dark);\n}\nli:hover {\n  color: var(--color-primary);\n  background-color: var(--color-white-dark);\n}\n\na {\n  text-decoration: none;\n  color: var(--color-dark);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n}\na span {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n          -ms-flex-align: center;\n          align-items: center;\n}\n\n.flex-justify-start {\n  -webkit-box-pack: start;\n          -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\nhr {\n  display: none;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return MobileNav;
            }());
            exports('e_mobile_nav', MobileNav);
        }
    };
});
