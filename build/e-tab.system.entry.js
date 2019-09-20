System.register(['./chunk-8c17ff1d.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var Tab = /** @class */ (function () {
                function Tab(hostRef) {
                    registerInstance(this, hostRef);
                    this.classes = function () {
                        return {
                            tab: true
                        };
                    };
                }
                Tab.prototype.render = function () {
                    return (h("div", { class: this.classes() }, h("slot", null)));
                };
                Object.defineProperty(Tab, "style", {
                    get: function () { return ".tab {\n  width: 100%;\n  display: block;\n  font-size: var(--text-base-size);\n}"; },
                    enumerable: true,
                    configurable: true
                });
                return Tab;
            }());
            exports('e_tab', Tab);
        }
    };
});
