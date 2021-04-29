class gameMenu extends Phaser.Scene {
	constructor() {
		super("gameMenu");
	}

    preload() {
        this.load.image('background1', './assets/MenuBackground.png');
        this.load.image('startButton', './assets/startbutton.png');

    }

    create() {
      
        
        this.backgroundImage = this.add.sprite(this.centerX(), this.centerY(), 'background1');

    
       
		this.startButton = this.add.sprite(this.centerX(), this.centerY() - 50, 'startButton').setInteractive();
        
    
        this.startButton.on('pointerdown', function () {
			this.scene.start('playScene');
		}, this);
	}
    centerX() {
        return this.sys.game.config.width / 2;
    }
    centerY() {
        return this.sys.game.config.height / 2;
    }

};
