class credits extends Phaser.Scene {
	constructor() {
		super("credits");
	}

    preload() {
<<<<<<< HEAD
        this.load.image('tutorialbackground1', './assets/tutorialbackgroundNEW.png');
=======
        this.load.image('tutorialbackground1', './assets/Donecredits.png');
>>>>>>> 4485815f18ef0bd4f1d3fe9a72a953b179cebb0f
        this.load.image('MenuButton', './assets/MenuButton.png')
    }

    create() {
      
        //background image
        this.backgroundImage = this.add.sprite(this.centerX(), this.centerY(), 'tutorialbackground1');

        //back to menu
        this.MenuButton = this.add.sprite(this.centerX()+150, this.centerY() + 275, 'MenuButton').setInteractive();
        
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