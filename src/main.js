let config = {
    type: Phaser.CANVAS, 
    width: 480, 
    height: 640,
    scene: [ Play ]
}

let game = new Phaser.Game(config);

// set UI size
let borderUISize = game.config.height / 20; 
let borderPadding = borderUISize / 2; 


// Keybindings
let keyLEFT, keyRIGHT, keySPACE; 