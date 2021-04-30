let config = {
    type: Phaser.CANVAS, 
    width: 480,
    height: 640,
    scene: [ gameMenu, tutorial, gameoverscreen, Play ]
}

let game = new Phaser.Game(config);

// set UI size
let borderUISize = game.config.width / 8; // 60 pixel
let borderPadding = borderUISize / 2;


// Keybindings
let keyLEFT, keyRIGHT, keySPACE; 