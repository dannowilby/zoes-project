import Phaser from 'phaser';

import zoe_sprite from './assets/zoe_spritesheet.png';

const preload = function()
{

	this.load.spritesheet("zoe", zoe_sprite, { frameWidth: 64, frameHeight: 64 });
/*
    this.load.setBaseURL('https://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
    */
}

const create = function()
{

	const spritesheet_width = 13;
	const ssw = 11 * spritesheet_width;
	const animation_length = 8;

	this.anims.create({
		key: 'zoe',
		duration: 250,
		frames: this.anims.generateFrameNumbers('zoe', { start: ssw, end: ssw + animation_length }),
		repeat: -1
	});

	const z = this.add.sprite(100, 100, 'zoe');
	z.play('zoe');

	/*
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
    */
}

const update = function() {

}

const config = {
    	type: Phaser.AUTO,
	scale: {
		mode: Phaser.Scale.FIT,
    		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 800,
		height: 600,
	},
	autoFocus: true,
    	physics: {
        	default: 'arcade',
        	arcade: {
            		gravity: { y: 500 }
        	}
    	},
    	scene: {
		key: 'main',
        	preload: preload,
        	create: create,
		update: update,
    	}
};

const game = new Phaser.Game(config);
