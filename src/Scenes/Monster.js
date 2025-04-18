 //using phaser input
       // var keyObjectsmile = scene.input.keyboard.addKey("S"); // Get key object
        //var keyObjectfangs = scene.input.keyboard.addKey("F"); // Get key object

        //var isdownsmile = keyObjectsmile.isDown;

       // var isdownfangs = keyObjectfangs.isDown;


class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        //left leg
        this.lLegX = 350;
        this.lLegY = 500;
        //right leg
        this.rLegX = 250;
        this.rLegY = 500;
        //left arm
        this.lArmX = 400;
        this.lArmY = 450;
        //right arm
        this.rArmX = 200;
        this.rArmY = 450;

        this.keyS;
        this.keyF;
        this.keyA;
        this.keyD;
    }

    
    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
        
        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redA.png");
       
       //legs
        my.sprite.lLeg = this.add.sprite(this.bodyX + 50, this.bodyY + 150, "monsterParts", "leg_redA.png");
        my.sprite.rLeg = this.add.sprite(this.bodyX - 50, this.bodyY + 150, "monsterParts", "leg_redA.png");
        my.sprite.rLeg.flipX = true;
        
        //arms
        my.sprite.lArm = this.add.sprite(this.bodyX + 100, this.bodyY + 100, "monsterParts", "arm_whiteA.png");
        my.sprite.rArm = this.add.sprite(this.bodyX - 100, this.bodyX + 150, "monsterParts", "arm_whiteB.png");
        my.sprite.rArm.flipX = true;

        //mouth
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY + 20, "monsterParts", "mouthE.png");
       my.sprite.mouthTeeth = this.add.sprite(this.bodyX, this.bodyY + 20, "monsterParts", "mouthF.png");
       my.sprite.mouthTeeth.visible = false;

       //eyes
       my.sprite.leye = this.add.sprite(this.bodyX + 50, this.bodyY - 30, "monsterParts", "eye_cute_light.png");
       my.sprite.reye = this.add.sprite(this.bodyX - 50, this.bodyY - 40, "monsterParts", "eye_cute_light.png");

       //ears
       my.sprite.lEar = this.add.sprite(this.bodyX + 80, this.bodyY -80, "monsterParts", "detail_dark_ear.png");
       my.sprite.rEar = this.add.sprite(this.bodyX - 80, this.bodyY -80, "monsterParts", "detail_dark_ear.png");
       my.sprite.rEar.flipX = true;

       //keys
       this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
       this.keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
       this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
       this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);



    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if(this.keyS.isDown) {
            my.sprite.mouthTeeth.visible = false;
            my.sprite.mouth.visible = true;
        }
        else if(this.keyF.isDown) {
            my.sprite.mouthTeeth.visible = true;
            my.sprite.mouth.visible = false;
        } 
        else if(this.keyA.isDown) {
            for (const move in my.sprite) {
                my.sprite[move].x -=1;
            }
        } 
        else if(this.keyD.isDown) {
            for (const move in my.sprite) {
                my.sprite[move].x +=1;
            }
        }
        //my.sprite.mouth.x +=5;
        
    }

}