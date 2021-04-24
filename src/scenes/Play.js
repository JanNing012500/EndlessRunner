class Play extends Phaser.Scene {
    constructor() {
        super("playScene"); 
    }

    preload() {
        // Load these Images and Sprites 
        this.load.image("player", "./assets/person.png");

        // Change background Colour
        this.stage.backgroundColor = "#00ffff"; 

        // add Character Sprite
        this.player = this.add.sprite(game.width * .2, ground.y25, "player");


    }

}