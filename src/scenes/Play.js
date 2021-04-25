class Play extends Phaser.Scene {
    constructor() {
        super("playScene"); 
    }

    preload() {
        // Load these Images and Sprites 
        this.load.image("player", "./assets/person.png");

        // Change background Colour
        game.stage.backgroundColor = "#00ffff"; 

        // add Character Sprite
        this.player = game.add.sprite(game.width * .2, ground.y25, "player");


    }

}