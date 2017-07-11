var game = new Game(800, 600, "Game");

var objects = [];
var camerax = 0;
var platform_sprite;
var water_sprite;
var keyboard;
var left, right, up;
var bear;

function Platform(x, y, w, h, sprite) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.sprite = sprite;
}

Platform.prototype.create = function() {
	this.object = this.sprite.create(this.x, this.y, this.w, this.h);
	this.object.setImmovable(true);
}

Platform.prototype.update = function() {
	this.object.setX(this.x - camerax);
	
	if(this.object.getX() < 800) {
		this.object.child.scale.x -= 100 / Math.pow(this.object.getX(), 1.8)
	}
	if(this.object.child.scale.x < 0.05) {
		objects.splice(objects.indexOf(this), 1);
		this.object.kill();
	}
}

function MovingPlatform(x, y, w, h, sprite, xdelta, ydelta, xspeed, yspeed) {
	Platform.call(this, x, y, w, h, sprite);
	this.xdelta = xdelta;
	this.ydelta = ydelta;
	this.xspeed = xspeed;
	this.yspeed = yspeed;
}

MovingPlatform.prototype.create = Platform.prototype.create;

MovingPlatform.prototype.update = function() {
	Platform.prototype.update.call(this);
	this.object.setX(this.x - camerax + this.xdelta/2 * (1 + Math.sin(this.xspeed * game.getGameTime() / 1000)));
	this.object.setY(this.y + this.ydelta/2 * (1 + Math.sin(this.yspeed * game.getGameTime() / 1000)));
}

function Bear(x, y, sprite) {
	this.x = x;
	this.y = y;
	this.vx = 0;
	this.sprite = sprite;
	this.jump = false;
}

Bear.prototype.create = function() {
	this.object = this.sprite.create(this.x, this.y);
	this.sprite.addAnimation("right", [0, 1, 2, 3, 4, 5, 6, 7], 15);
	this.sprite.addAnimation("left", [8, 9, 10, 11, 12, 13, 14], 15);
	this.object.setGravityY(200);
}

Bear.prototype.update = function() {
	if (right.isDown()) {
		this.object.playAnimation("right");
		this.object.setStopFrame(0);
		this.vx = 160;
	} else if (left.isDown()) {
		this.object.playAnimation("left");
		this.object.setStopFrame(8);
		this.vx = -40;
	} else {
		this.vx = 0;
		this.object.stop();
	}
	
	if (this.object.getY() > 600-140) {
		game.pause();
	}
	
	this.x += this.vx/60;
	this.object.setX(this.x - camerax);
	game.checkCollision(this.object, platform_sprite, (function() {
		if (up.isDown() && this.jump == false) {
			this.jump = true;
			this.object.setVelocityY(-120);
		} else {
			this.jump = false;
		}
	}).bind(this));
}

function standard_platform(x, y, w, h) {
		return new MovingPlatform(x, y, w, h, platform_sprite, 0, 5, 1, 4)
}

function preload() {
	platform_sprite = new Sprite("img/tundra.png");
	water_sprite = new Sprite("img/iceWater.png");
	bear_sprite = new Sprite("img/bear2.png", 77, 85);
	
	bear = new Bear(250, 100, bear_sprite);
	
	objects.push(bear);
	for (var i = 0; i < 15; i++) {
		objects.push(standard_platform(Math.random()*2400, 450, 200, 100));
	}
	
	game.loadBackgroundImage("bg","img/bg.png");
	
	keyboard = new Keyboard();
	left = keyboard.createLeftKey();
	right = keyboard.createRightKey();
	up = keyboard.createUpKey();
}

function create() {
	game.setBackgroundImage("bg");
	
	x = water_sprite.create(0, 600-140);
	x.setX(-70);
	
	for (var i = 0; i < 15; i++) {
		water_sprite.create(i*70, 600-140);
	}
	
	for (object of objects) {
		object.create();
	}
}

function update() {
	camerax++;

	water_sprite.setVelocityX(20*Math.cos(game.getGameTime()/500));
	
	for (object of objects) {
		object.update();
	}
}