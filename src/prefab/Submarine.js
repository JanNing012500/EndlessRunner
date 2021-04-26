class Submarine extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, wid, len) {
        super(scene, x, y, texture, wid, len);

        this.width = wid;
        this.height = len;
        // add objects to scene
        scene.add.existing(this);
        this.moveSpeed = 4;
    }

    update() {
        if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
            this.x -= this.moveSpeed;
        } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed;
        }
    }
}