class Submarine extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, wid, len) {
        super(scene, x, y, texture, frame, wid, len);

        // add objects to scene
        scene.add.existing(this);
    }
}