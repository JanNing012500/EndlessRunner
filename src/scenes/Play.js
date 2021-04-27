class Play extends Phaser.Scene {
    constructor() {
        super("playScene"); 
    }

    preload() {
        // load images/tiles
        this.load.image('submarine', './assets/Submarine.png');
        this.load.image('smallFish', './assets/fish.png');
        this.load.image('ocean', './assets/ocean.png');
    }

    create() {
        this.ocean = this.add.tileSprite(0, 0, 480, 640, 'ocean').setOrigin(0,0);
        this.p1Sub = new Submarine(this, game.config.width/2, borderUISize - 42, 'submarine', 0, 42, 30).setOrigin(0.5, 0);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // add 3 fish at different locations;
        this.fish1 = new Fish(this, 0 * 60 + borderUISize, game.config.height, 'smallFish', 0, 60, 16).setOrigin(0.5, 0);
        this.fish2 = new Fish(this, 1 * 60 + borderUISize, game.config.height, 'smallFish', 0, 60, 16).setOrigin(0.5, 0);
        this.fish3 = new Fish(this, 4 * 60 + borderUISize, game.config.height, 'smallFish', 0, 60, 16).setOrigin(0.5, 0);
        this.fish4 = new Fish(this, 5 * 60 + borderUISize, game.config.height, 'smallFish', 0, 60, 16).setOrigin(0.5, 0);
    }

    update() {
        // Scrolling Background
        this.ocean.tilePositionY += 5;
        this.p1Sub.update();
        var arr1 = [0, 1, 4, 5];
        if (this.fish1.y <= 0 - this.fish1.height + 1) {
            arr1 = this.generateRandom();
        }
        this.fish1.update(arr1[0]);
        this.fish2.update(arr1[1]);
        this.fish3.update(arr1[2]);
        this.fish4.update(arr1[3]);





        
        if(this.checkCollision(this.p1Sub, this.fish1)) {
            this.p1Sub.reset(); 
            //this.shipExplode(this.ship5); 
            //this.clock.delay += 3000;
        }

        if(this.checkCollision(this.p1Sub, this.fish2)) {
            this.p1Sub.reset(); 
           //this.shipExplode(this.ship5); 
            //this.clock.delay += 3000;
        }

        if(this.checkCollision(this.p1Sub, this.fish3)) {
            this.p1Sub.reset(); 
            //this.shipExplode(this.ship5); 
            //this.clock.delay += 3000;
        }

        if(this.checkCollision(this.p1Sub, this.fish4)) {
            this.p1Sub.reset(); 
            //this.shipExplode(this.ship5); 
            //this.clock.delay += 3000;
        }


        
    }



    checkCollision(Fish, Submarine) {
        // simple AABB checking
        if( Submarine.x < Fish.x + Fish.width &&
            Submarine.x + Submarine.width > Fish.x &&
            Submarine.y < Fish.y + Fish.height &&
            Submarine.height + Submarine.y > Fish.y) {
                return true;
            } else {
                return false;
            }
    }
    
    shipExplode(Submarine) {
        ship.alpha = 0; 
        let boom = this.add.sprite(ship.x, ship.y, 'explosion').setOrigin(0, 0); 
        boom.anims.play('explode'); 
        game.settings.gameTimer = game.settings.gameTimer + 2; 
        boom.on('animationcomplete', () => {
            ship.reset(); 
            ship.alpha = 1; 
            boom.destroy(); 
        }); 
        this.p1Score += ship.points; 
        this.scoreLeft.text = this.p1Score;
        this.sound.play('sfx_explosion');
    }


    generateRandom() {
        const n = 4;
        const arr = [];

        do {
            const num = Math.floor(Math.random() * 6);

            if (!arr.includes(num)) {
                arr.push(num);
            }
        } while (arr.length < n);
        // returns a randopm integer 0 to 5 with no repeat;
        
        return arr;
    }

}