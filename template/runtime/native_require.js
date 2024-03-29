
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/res/res.js",
	"libs/modules/tween/tween.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/SupportCode.js",
	"bin-debug/configs/BackgroundConfig.js",
	"bin-debug/configs/ObstacleConfig.js",
	"bin-debug/configs/ObstacleFactoryConfig.js",
	"bin-debug/configs/PlayerConfig.js",
	"bin-debug/configs/RemarkConfig.js",
	"bin-debug/configs/ScoreLabelConfig.js",
	"bin-debug/events/GameLifeCycleEvent.js",
	"bin-debug/events/GameObjectEvent.js",
	"bin-debug/game_objects/Background.js",
	"bin-debug/game_objects/Obstacle.js",
	"bin-debug/game_objects/Player.js",
	"bin-debug/game_objects/Stack.js",
	"bin-debug/scenes/GameScene.js",
	"bin-debug/scenes/ScoresScene.js",
	"bin-debug/scenes/WelcomeScene.js",
	"bin-debug/utils/ObstacleFactory.js",
	"bin-debug/utils/Utility.js",
	//----auto game_file_list end----
];

var window = this;

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 60,
		scaleMode: "showAll",
		contentWidth: 1136,
		contentHeight: 640,
		showPaintRect: false,
		showFPS: false,
		fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};