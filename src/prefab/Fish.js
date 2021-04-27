class Fish extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, wid, len) {
        super(scene, x, y, texture, frame, wid, len);

        // add object to existing scene
        scene.add.existing(this);

        this.width = wid;
        this.height = len;
        this.moveSpeed = 5;
    }

    update(pos) {
        this.y -= this.moveSpeed;

        if(this.y <= 0 - this.height) {
            this.y = game.config.height;
            this.x = (pos * 60) + borderUISize;
        }
    }

    //position reset
    reset() {
        this.x = game.config.width;
    }
}