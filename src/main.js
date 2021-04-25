let config = {
    type: Phaser.CANVAS, 
    width: 480, 
    height: 640,
    scene: [ Play ]
}

let game = new Phaser.Game(config);

// set UI size
let borderUISize = game.config.height / 15; 
let borderPadding = borderUISize / 3; 


// Keybindings
let keyF, keyR, keyLeft, keyRight, keyUp, keyDown; 