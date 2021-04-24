let config = {
    type: Phaser.CANVAS, 
    width: 640, 
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);
//hello 123
// set UI size
let borderUISize = game.config.height / 15; 
let borderPadding = borderUISize / 3; 
let starSpeed = 4; 

// Keybindings
let keyF, keyR, keyLeft, keyRight, keyUp, keyDown; 