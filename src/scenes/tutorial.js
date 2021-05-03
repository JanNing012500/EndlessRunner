class tutorial extends Phaser.Scene {
	constructor() {
		super("tutorial");
	}

    preload() {
        this.load.image('tutorialbackground', './assets/tutorialbackground.png');
        this.load.image('MenuButton', './assets/MenuButton.png')
    }

    create() {

        let tutConfig = {
            fonFamily: 'Courier', 
            fontSize: '24px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
            top: 5,
            bottom: 5,
            },
            fixedWidth: 450
            
        }
      
        //background image
        this.backgroundImage = this.add.sprite(this.centerX(), this.centerY(), 'tutorialbackground');

        //back to menu
<<<<<<< HEAD
        this.MenuButton = this.add.sprite(this.centerX(), this.centerY() + 250, 'MenuButton').setInteractive();

        // Add Tutorial Text
        this.add.text(game.config.width / 20 , game.config.height / 5 - borderUISize - borderPadding, 'Press ← to move left and Right', tutConfig).setOrigin(0);
=======
        this.MenuButton = this.add.sprite(this.centerX(), this.centerY() + 275, 'MenuButton').setInteractive();
>>>>>>> bc8c9f7ac6c1d4f7749cd089213829d78b321d13
        
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