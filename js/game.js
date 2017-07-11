var game = new Game(800, 600, "Game");

var objects = [];
var camerax = 0;
var platform_sprite;
var water_sprite;

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
	this.object.setX(this.x);
	
	if(this.object.getX() - camerax < 800) {
		this.object.child.scale.x -= 100 / Math.pow(this.object.getX() - camerax, 2)
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
	this.object.setX(this.x + this.xdelta/2 * (1 + Math.sin(this.xspeed * game.getGameTime() / 1000)));
	this.object.setY(this.y + this.ydelta/2 * (1 + Math.sin(this.yspeed * game.getGameTime() / 1000)));
}

function preload() {
	platform_sprite = new Sprite("img/tundra.png");
	water_sprite = new Sprite("img/iceWater.png");
	
	objects.push(new MovingPlatform(200, 450, 200, 100, platform_sprite, 200, 5, 1, 4));
}

function create() {
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
	water_sprite.setVelocityX(20*Math.cos(game.getGameTime()/500));
	
	for (object of objects) {
		object.update();
		object.object.child.x -= camerax;
	}
}