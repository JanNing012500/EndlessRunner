class gameMenu extends Phaser.Scene {
	constructor() {
		super("gameMenu");
	}

    preload() {
        this.load.image('background1', './assets/MenuBackground.png');
        this.load.image('startButton', './assets/startbutton.png');
        this.load.image('tutorialButton', './assets/tutorialbuttonnew.png');
        this.load.image('creditsbutton', './assets/creditsbuttonnew.png');

    }

    create() {
      
        //background image
        this.backgroundImage = this.add.sprite(this.centerX(), this.centerY(), 'background1');

    
       //start button 
		this.startButton = this.add.sprite(this.centerX(), this.centerY() - 50, 'startButton').setInteractive();
        
        this.startButton.on('pointerdown', function () {
			this.scene.start('playScene');
		}, this);


        //tutorial button
        this.tutorialButton = this.add.sprite(this.centerX(), this.centerY() + 40, 'tutorialButton').setInteractive();
        
        this.tutorialButton.on('pointerdown', function () {
			this.scene.start('tutorial');
		}, this);

        //credits button
        this.creditsbutton = this.add.sprite(this.centerX(), this.centerY() + 300, 'creditsbutton').setInteractive();
        
        this.creditsbutton.on('pointerdown', function () {
			this.scene.start('credits');
		}, this);
	}



    centerX() {
        return this.sys.game.config.width / 2;
    }
    centerY() {
        return this.sys.game.config.height / 2;
    }

};
