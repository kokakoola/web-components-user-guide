System.register(['./chunk-8c17ff1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var List = /** @class */ (function () {
                function List(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    this.type = '';
                    this.classes = function () {
                        var _a;
                        return _a = {
                                list: true
                            },
                            _a["list--" + _this.type] = _this.type !== '',
                            _a;
                    };
                }
                List.prototype.render = function () {
                    if (this.type === 'ol') {
                        return (h("ol", { class: this.classes() }, h("slot", null)));
                    }
                    else {
                        return (h("ul", { class: this.classes() }, h("slot", null)));
                    }
                };
                Object.defineProperty(List, "style", {
                    get: function () { return "\@charset \"UTF-8\";\n.list {\n  list-style: none;\n}\n\n::slotted(li) {\n  padding-top: var(--space-xs) !important;\n  padding-bottom: var(--space-xs) !important;\n  margin-bottom: var(--space-sm);\n}\n\n.list--ol ::slotted(li) {\n  counter-increment: li;\n}\n.list--ol ::slotted(li)::before {\n  content: \".\" counter(li);\n  color: var(--color-primary);\n  font-weight: 700;\n  display: inline-block;\n  width: 1em;\n  margin-left: -1.5em;\n  margin-right: 0.5em;\n  text-align: right;\n  direction: rtl;\n}\n\n.list--ul {\n  margin-left: -1em;\n}\n.list--ul ::slotted(li)::before {\n  color: var(--color-primary);\n  content: \"●\";\n  display: inline-block;\n  width: 1em;\n  margin-left: -1em;\n}\n\n.list--bordered {\n  width: 100%;\n  margin-left: -2em;\n}\n.list--bordered ::slotted(*) {\n  border-bottom: 1px solid #d3d3d4 !important;\n}\n\@supports (--css: variables) {\n  .list--bordered ::slotted(*) {\n    border-bottom: 1px solid var(--color-contrast-low) !important;\n  }\n}\n\n.list--icon {\n  margin-left: -1em;\n  list-style: none;\n}\n.list--icon ::slotted(li) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.list.list--dashed {\n  margin-left: -1em;\n}\n\n.list--dashed ::slotted(li) {\n  margin-bottom: 0;\n  padding: 0 !important;\n}\n.list--dashed ::slotted(li)::before {\n  display: inline-block;\n  content: \"-\";\n  width: 1em;\n  margin-left: -1em;\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return List;
            }());
            exports('e_list', List);
        }
    };
});
