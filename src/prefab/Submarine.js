class Submarine extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, wid, len) {
        super(scene, x, y, texture, frame, wid, len);

        this.width = wid;
        this.height = len;
        // add objects to scene
        scene.add.existing(this);
        this.moveSpeed = 8;
    }

    update() {
        if(keyLEFT.isDown && this.x >= borderUISize) {
            this.x -= this.moveSpeed;
        } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width/2) {
            this.x += this.moveSpeed;
        }
    }


    
    reset(pos) { 
        
        

        this.y = borderUISize - 42 ;
        this.x = game.config.width/2;
    }
    
}