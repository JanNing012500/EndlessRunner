let config = {
    type: Phaser.CANVAS, 
    width: 480, 
    height: 640,
    scene: [ Play ]
}

let game = new Phaser.Game(config);

// set UI size
let borderUISize = game.config.height / 8; // 60 pixel


// Keybindings
let keyLEFT, keyRIGHT, keySPACE; 