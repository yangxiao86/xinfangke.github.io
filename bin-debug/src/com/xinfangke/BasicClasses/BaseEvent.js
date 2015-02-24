var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var game;
(function (game) {
    var BaseEvent = (function (_super) {
        __extends(BaseEvent, _super);
        function BaseEvent(type, bubbles, cancelable) {
            _super.call(this, type, bubbles, cancelable);
        }
        /**
        *  激活,创建一个子弹
        */
        BaseEvent.gm_activation_bullet = "gm_activation_bullet";
        /**
        *  移动结束(敌方到达目标点)
        */
        BaseEvent.gm_moveEnd = "gm_moveEnd";
        /**
        *  我方总部血量有变化触发
        */
        BaseEvent.gm_headquarters_hpChange = "gm_headquarters_hpChange";
        /**
        *  有敌方单位死亡时触发
        */
        BaseEvent.gm_monster_death = "gm_monster_death";
        return BaseEvent;
    })(egret.Event);
    game.BaseEvent = BaseEvent;
    BaseEvent.prototype.__class__ = "game.BaseEvent";
})(game || (game = {}));
//# sourceMappingURL=BaseEvent.js.map