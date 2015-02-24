var game;
(function (game) {
    var XFKLayer = (function () {
        function XFKLayer() {
            /**
            *  加载进度
            */
            this.LoadingView = new LoadingUI();
        }
        Object.defineProperty(XFKLayer, "Ins", {
            get: function () {
                if (this.ins == null)
                    this.ins = new XFKLayer();
                return this.ins;
            },
            enumerable: true,
            configurable: true
        });
        XFKLayer.prototype.LoadingViewOnOff = function () {
            if (this.Stage.contains(this.LoadingView)) {
                this.Stage.removeChild(this.LoadingView);
            }
            else {
                this.Stage.addChild(this.LoadingView);
                this.LoadingView.x = (this.Stage.width - this.LoadingView.width) >> 1; //设置居中
            }
        };
        XFKLayer.prototype.SetLoadingView = function (current, total) {
            this.LoadingView.setProgress(current, total);
        };
        XFKLayer.prototype.init = function () {
            //游戏场景层，游戏场景相关内容可以放在这里面（可以单独提取出来）。
            this.GameLayer = new egret.DisplayObjectContainer();
            this.GameLayer.name = "gameLayer";
            this.Stage.addChild(this.GameLayer);
            this.BgLayer = new egret.DisplayObjectContainer();
            this.BgLayer.name = "bgLayer";
            this.GameLayer.addChild(this.BgLayer);
            this.NpcLayer = new egret.DisplayObjectContainer();
            this.NpcLayer.name = "NpcLayer";
            this.GameLayer.addChild(this.NpcLayer);
            this.DecorationLayer = new egret.DisplayObjectContainer();
            this.DecorationLayer.name = "DecorationLayer";
            this.GameLayer.addChild(this.DecorationLayer);
            this.UiLayer = new egret.DisplayObjectContainer();
            this.UiLayer.name = "UiLayer";
            this.Stage.addChild(this.UiLayer);
            //GUI的组件必须都在这个容器内部,UIStage会始终自动保持跟舞台一样大小。
            this.GuiLayer = new egret.gui.UIStage();
            this.GuiLayer.name = "GuiLayer";
            this.Stage.addChild(this.GuiLayer);
        };
        XFKLayer.prototype.OnLoad = function (parent) {
            this.Stage = parent;
            this.init();
        };
        return XFKLayer;
    })();
    game.XFKLayer = XFKLayer;
    XFKLayer.prototype.__class__ = "game.XFKLayer";
})(game || (game = {}));
//# sourceMappingURL=XFKLayer.js.map