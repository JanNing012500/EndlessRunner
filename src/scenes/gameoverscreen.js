class gameoverscreen extends Phaser.Scene {
	constructor() {
		super("gameoverscreen");
	}

    preload() {
        this.load.image('gameoverbackground', './assets/gameoverbackground.png');
        this.load.image('tryagainButton', './assets/tryagainButton.png');
        this.load.image('MenuButton', './assets/MenuButton.png')
    }

    create() {
      
        //background image
        this.backgroundImage = this.add.sprite(this.centerX(), this.centerY(), 'gameoverbackground');

        //play again
        this.tryagainButton = this.add.sprite(this.centerX(), this.centerY() - 50, 'tryagainButton').setInteractive();
        
        this.tryagainButton.on('pointerdown', function () {
			this.scene.start('playScene');
		}, this);


        //menu
        this.MenuButton = this.add.sprite(this.centerX(), this.centerY() + 250, 'MenuButton').setInteractive();
        
        this.MenuButton.on('pointerdown', function () {
			this.scene.start('gameMenu');
		}, this);
	}



    centerX() {
        return this.sys.game.config.width / 2;
    }
    centerY() {
        return this.sys.game.config.height / 2;
    }

};