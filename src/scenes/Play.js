class Play extends Phaser.Scene {
    constructor() {
        super("playScene"); 
    }

    preload() {
        // load images/tiles
        this.load.image('submarine', './assets/Submarine.png');
        this.load.image('ocean', './assets/ocean.png');
    }

    create() {
        this.ocean = this.add.tileSprite(0, 0, 480, 640, 'ocean').setOrigin(0,0);
        this.p1Sub = new Submarine(this, game.config.width/2, borderUISize - borderPadding, 'submarine', 64, 32).setOrigin(0.5, 0);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
    }

    update() {
        // Scrolling Background
        this.ocean.tilePositionY += 5;
        this.p1Sub.update();
    }

}