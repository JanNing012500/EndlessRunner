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
        this.tryagainButton = this.add.sprite(this.centerX(), this.centerY()+20, 'tryagainButton').setInteractive();
        
        this.tryagainButton.on('pointerdown', function () {
			this.scene.start('playScene');
		}, this);


        //back to menu
        this.MenuButton = this.add.sprite(this.centerX(), this.centerY() + 250, 'MenuButton').setInteractive();
        
        this.MenuButton.on('pointerdown', function () {
			this.scene.start('gameMenu');
		}, this);

        /* fix this
        // Create the SFX to show you lost by blowing up your ship
        this.deathSound = this.sound.add('deagame_over_sfx', {volume: .5}); 
        this.deathSound.play(); 
        */
	}



    centerX() {
        return this.sys.game.config.width / 2;
    }
    centerY() {
        return this.sys.game.config.height / 2;
    }

};