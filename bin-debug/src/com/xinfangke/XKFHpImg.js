var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var game;
(function (game) {
    var XFKHpImg = (function (_super) {
        __extends(XFKHpImg, _super);
        function XFKHpImg() {
            _super.call(this);
            this.hpWidth = 44;
        }
        XFKHpImg.prototype.OnLoad = function (parent) {
            this.parentSprite = parent;
            this.init();
        };
        XFKHpImg.prototype.OnRelease = function () {
            if (this.parent != null) {
                this.parent.removeChild(this);
            }
            while (this.numChildren > 0) {
                this.removeChildAt(0);
            }
            this.parentSprite = null;
        };
        XFKHpImg.prototype.init = function () {
            this.hpBg = new egret.Bitmap();
            this.hpBg.texture = RES.getRes("spritehpbg_png");
            this.hp = new egret.Bitmap();
            this.hp.texture = RES.getRes("spritehp_png");
            this.hp.x = 1;
            this.hp.y = 1;
            this.addChild(this.hpBg);
            this.addChild(this.hp);
        };
        XFKHpImg.prototype.sethp = function (cnum, mnum) {
            this.hp.width = game.CommonFunction.numPrecentage(cnum, mnum, this.hpWidth);
            this.hp.x = 1;
            this.hp.y = 1;
            if (this.parent == null) {
                this.parentSprite.addChild(this);
                this.x = -this.width >> 1;
                this.y = -40;
            }
        };
        return XFKHpImg;
    })(game.BaseDecoration);
    game.XFKHpImg = XFKHpImg;
    XFKHpImg.prototype.__class__ = "game.XFKHpImg";
})(game || (game = {}));
//# sourceMappingURL=XKFHpImg.js.map