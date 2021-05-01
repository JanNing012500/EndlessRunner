class credits extends Phaser.Scene {
	constructor() {
		super("credits");
	}

    preload() {
        //this.load.image('tutorialbackground', './assets/tutorialbackground.png');
        this.load.image('MenuButton', './assets/MenuButton.png')
    }

    create() {
      
        //background image
        //this.backgroundImage = this.add.sprite(this.centerX(), this.centerY(), 'tutorialbackground');

        //back to menu
        this.MenuButton = this.add.sprite(this.centerX(), this.centerY() +250, 'MenuButton').setInteractive();
        
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