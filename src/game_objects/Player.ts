/**
 * Player
 */
class Player extends egret.Shape {

    private static instance: Player;
    public static getInstance(): Player {
        return Player.instance;
    }

    private jumpHeight: number;
    private jumpTime: number;

    private landed: boolean = true;

    private color: number;

    constructor(jumpHeight: number, jumpTime: number, color: number) {
        super();

        this.jumpHeight = jumpHeight;
        this.jumpTime = jumpTime;

        this.color = color;

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

        Player.instance = this;
    }

    private onAddToStage(): void {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

        this.graphics.beginFill(this.color);
        this.graphics.drawRect(0, 0, this.width, this.height);
        this.graphics.endFill();
    }

    public jump(): void {
        // 只有在落地的情况下才能起跳
        if (this.landed) {
            var self = this;
            let initialY = this.y;

            // 落地时的回调回调函数
            let land = function () {
                self.landed = true;
            }

            // 跳到最高点时的回调函数，开始往下掉落
            let fall = function () {
                egret.Tween.get(self).to({ y: initialY }, self.jumpTime, egret.Ease.quadIn).call(land);
            }

            // 起跳
            this.landed = false;
            egret.Tween.get(self).to({ y: initialY - self.jumpHeight }, self.jumpTime, egret.Ease.quadOut).call(fall);
        }
    }

    public die(): void {
        GameScene.getInstance().endGame();

        this.playerDeathAnimation();
    }

    private playerDeathAnimation(): void {
        var self = this;
        let initialY = this.y;

        let fall = function () {
            if (self && self.stage) {
                let target = { y: self.stage.stageHeight + self.height };
                let jumpSpeed = self.jumpHeight / self.jumpTime;
                let fallDistance = target.y - self.y;
                let fallDuration = fallDistance / jumpSpeed;

                egret.Tween.get(self).to(target, fallDuration, egret.Ease.quadIn);
            }
        }

        egret.Tween.get(self).to({ y: initialY - self.jumpHeight }, self.jumpTime, egret.Ease.quadOut).call(fall);
    }

}