var game;
(function (game) {
    var XFKConfig = (function () {
        function XFKConfig() {
            /**
            * 用户金钱
            */
            this.Glob = 0;
            /**
            * 当前怪物的进度
            */
            this.Count = 0;
        }
        Object.defineProperty(XFKConfig, "Ins", {
            get: function () {
                if (this.ins == null)
                    this.ins = new XFKConfig();
                return this.ins;
            },
            enumerable: true,
            configurable: true
        });
        XFKConfig.prototype.addGlob = function (value) {
            this.Glob = this.Glob + value;
        };
        return XFKConfig;
    })();
    game.XFKConfig = XFKConfig;
    XFKConfig.prototype.__class__ = "game.XFKConfig";
})(game || (game = {}));
//# sourceMappingURL=XKFConfig.js.map