var game = new Game(800, 600, "Game");

var level, levelno;

var levels=[
[{
	type: "platform",
	x: 100,
	y: 200,
	w: 100,
	h: 200,	
},{
	type: "platform",
	x: 300,
	y: 200,
	w: 100,
	h: 200,
},{
	type: "platform",
	x: 450,
	y: 200,
	w: 50,
},{
	type: "platform",
	x: 545,
	y: 200,
	w: 100,
},{
	type: "platform",
	x: 700,
	y: 250,
	w: 50,
},{
	type: "platform",
	x: 800,
	y: 300,
	w: 50,
},{
	type: "platform",
	x: 900,
	y: 350,
	w: 150,
},{
	type: "platform",
	x: 1150,
	y: 290,
	w: 50,
},{
	type: "platform",
	x: 1300,
	y: 240,
	w: 50,
},{
	type: "platform",
	x: 1350,
	y: 200,
	w: 100,
},{
	type: "movingplatform",
	x: 1500,
	y: 250,
	w: 150,
	xdelta: 0,
	ydelta: 100,
	xspeed: 0,
	yspeed: 1,	
},{
	type: "platform",
	x: 1700,
	y: 400,
	w: 100,
},{
	type: "platform",
	x: 1850,
	y: 400,
	w: 50,
},{
	type: "endcave",
	x: 2000,
	y: 400,
	w: 300,
}],[{
	type: 'platform',
	x: 100,
	y: 200,
	w: 100,
},{
	type: 'platform',
	x: 250,
	y: 200,
	w: 100,
},{
	type: 'movingplatform',
	x: 400,
	y: 200,
	w: 150,
	xspeed: 1,
	yspeed: 0,
	xdelta: 150,
	ydelta: 0,
},{
	type: 'platform',
	x: 750,
	y: 200,
	w: 75,
},{
	type: 'platform',
	x: 900,
	y: 250,
	w: 50,
},{
	type: 'platform',
	x: 1000,
	y: 200,
	w: 50,
},{
	type: 'platform',
	x: 1100,
	y: 250,
	w: 50,
},{
	type: 'platform',
	x: 1200,
	y: 200,
	w: 50,
},{
	type: 'movingplatform',
	x: 1300,
	y: 200,
	w: 150,
	xspeed: 0,
	yspeed: 1,
	xdelta: 0,
	ydelta: 100,
},{
	type: 'platform',
	x: 1550,
	y: 300,
	w: 100,
},{
	type: 'platform',
	x: 1725,
	y: 250,
	w: 100,
},{
	type: 'platform',
	x: 1900,
	y: 200,
	w: 50,
},{
	type: 'movingplatform',
	x: 2050,
	y: 200,
	w: 100,
	xspeed: 2,
	yspeed: 0,
	xdelta: 100,
	ydelta: 0,
},{
	type: 'platform',
	x: 2400,
	y: 200,
	w: 100,
},{
	type: 'endcave',
	x: 2600, 
	y: 200,
	w:100
}
],[{
	type: 'platform',	
	x: 0,
	y: 200,
	w: 100,
},{
	type: 'platform',
	x: 100,
	y: 200,
	w: 100,
},{
	type: 'platform',
	x: 250,
	y: 250,
	w: 150,
},{
	type: 'platform',
	x: 450,
	y: 300,
	w: 100, 
},{
	type: 'platform',
	x: 600,
	y: 350,
	w: 100,
},{
	type: 'platform',
	x: 750,
	y: 200,
	w: 100
},{
	type: 'platform',
	x: 875,
	y: 250,
	w: 100,
},{
	type: 'platform',
	x: 1050,
	y: 300,
	w: 100,
},{
	type: 'platform',
	x: 1200,
	y: 350,
	w: 100,
},{
	type: 'pipe',
	x: 1375,
	y: 600,
},{
	type: 'platform',
	x: 1450,
	y: 200,
	w: 200,
},{
	type: 'platform',
	x: 1750,
	y: 200,
	w: 100,
},{
	type: 'platform', 
	x: 1950,
	y: 200,
	w: 100,
},{
	type: 'movingplatform',
	x: 2050,
	y: 250,
	w: 100,
	xdelta: 100,
	ydelta: 0,
	xspeed: 2,
	yspeed: 0,
},{
	type: 'movingplatform',
	x: 2300,
	y: 200,
	w: 100,
	xdelta: 0,
	ydelta: 100,
	xspeed: 0,
	yspeed: 2,
},{
	type: 'platform',
	x: 20,
	y: 200,
	w: 100,
},{
	type: 'oilpipe',
	x: 2400,
	y: 600,
	oilrate: 0.8
},{
	type: 'platform',
	x: 2500,
	y: 200,
	w: 100,
},{
	type: 'oilpipe',
	x: 2600, 
	y: 600,
	oilrate: 0.8
},{
	type: 'platform',
	x: 2700,
	y: 200,
	w: 100,
},{
	type: 'platform',
	x: 2850,
	y: 250, 
	w: 100,
},{
	type: 'endcave',
	x: 3050, 
	y: 200,
	w:100
}],[{
	type: 'platform',
	x: 0, 
	y: 200,
	w: 100
},{
	type: 'platform',
	x: 150,
	y: 200,
	w: 50
},{
	type: 'platform',
	x: 250,
	y: 200,
	w: 50,
},{
	type: 'platform',
	x: 350,
	y: 250,
	w: 50,
},{
	type: 'platform',
	x: 450,
	y: 300,
	w: 50,
},{
	type: 'platform', 
	x: 550,
	y: 375,
	w: 100,
},{
	type: 'movingplatform',
	x: 750,
	y: 250,
	w: 50,
	xdelta: 100,
	ydelta: 0,
	xspeed: 2,
	yspeed: 0,
},{
	type: 'platform',
	x: 950,
	y: 325,
	w: 50,
},{
	type: 'movingplatform',
	x: 1050, 
	y: 375,
	w: 75, 
	xdelta: 100,
	ydelta: 25,
	xspeed: 2,
	yspeed: 1,
},{
	type: 'oilpipe',
	x: 1250,
	y: 700,
	oilrate: 1.15,
},{
	type: 'platform', 
	x: 1275,
	y: 225,
	w: 150,
},{
	type: 'movingplatform',
	x: 1550,
	y: 225,
	w: 50, 
	xdelta: 0,
	ydelta: 125,
	xspeed: 0,
	yspeed: 1.5,
},{
	type: 'oilpipe',
	x: 1600,
	y: 700,
	oilrate: 2,
},{ 
	type: 'movingplatform',
	x: 1700,
	y: 250, 
	w: 100,
	xdelta: 100,
	ydelta: 0,
	xspeed: 2,
	yspeed: 0,
},{
	type: 'platform',
	x: 2000,
	y: 200, 
	w: 100,
},{
	type: 'platform',
	x: 2150,
	y: 250, 
	w: 50,
},{
	type: 'slippingplatform',
	x: 2250,
	y: 300, 
	w: 50,
},{ 
	type: 'platform',
	x: 2350, 
	y: 250,
	w: 50,
},{ 
	type: 'movingplatform',
	x: 2450,
	y: 200,
	w: 100,
	xdelta: 100,
	ydelta: 0,
	xspeed: 2,
	yspeed: 0,
},{ 
	type: 'movingplatform',
	x: 2650,
	y: 250,
	w: 100, 
	xdelta: 250,
	ydelta: 0,
	xspeed: 1.5,
	yspeed: 0,
},{
	type: 'oilpipe',
	x: 2700,
	y: 700, 
	oilrate: 3,
},{
	type: 'endcave',
	x: 3100,
	y: 400,
	w: 100,
	h: 300,
}],[{
	type: "platform",
	x: 0,
	y: 200,
	w: 100,
},{
	type: "platform",
	x: 100,
	y: 200,
	w: 100,
},{
	type: "platform",
	x: 250,
	y: 250,
	w: 100,
},{
	type: "movingplatform",
	x: 350,
	y: 300,
	w: 75,
	xdelta: 150,
	ydelta: 0,
	xspeed: 2,
	yspeed: 0,
},{
	type: "platform",
	x: 600,
	y: 250,
	w: 100,
},{
	type: "oilpipe",
	x: 450,
	y: 600,
	w: 100,
	oilrate: 2,
},{
	type: "platform",
	x: 750,
	y: 200,
	w: 150,
},{ 
	type: "movingplatform",
	x: 900,
	y: 200,
	w: 150,
	xdelta: 100,
	ydelta: 0,
	xspeed: 1,
	yspeed: 0,
},{
	type: "platform",
	x: 1300,
	y: 200,
	w: 50,
},{
	type: "movingplatform",
	x: 1400,
	y: 200,
	w: 50,
	xdelta: 0,
	ydelta: 75,
	xspeed: 0,
	yspeed: 2,
},{
	type: "platform",
	x: 1500,
	y: 300,
	w: 50,
},{
	type: "movingplatform",
	x: 1600,
	y: 350,
	w: 50,
	xdelta: 100,
	ydelta: 75,
	xspeed: 1,
	yspeed: 1,
},{
	type: "platform",
	x: 1750,
	y: 400,
	w: 100,
},{
	type: "movingplatform",
	x: 1900,
	y: 250,
	w: 100,
	ydelta: 150,
	xdelta: 0,
	xspeed: 0,
	yspeed: 2,
},{
	type: "movingplatform",
	x: 2100,
	y: 300,
	w: 100,
	ydelta: -150,
	xdelta: 0,
	xspeed: 0,
	yspeed: 2,
},{
	type: "movingplatform",
	x: 2250,
	y: 200,
	w: 100,
	ydelta: 150,
	xdelta: 0,
	xspeed: 0,
	yspeed: 2,
},{
	type: "movingplatform",
	x: 2350,
	y: 250,
	w: 100,
	ydelta: 0,
	xdelta: 250,
	xspeed: 1,
	yspeed: 0,
},{
	type: "movingplatform",
	x: 2750,
	y: 200,
	w: 150,
	ydelta: 200,
	xdelta: 0,
	xspeed: 0,
	yspeed: 2,
},{
	type: "slippingplatform",
	x: 2700,
	y: 300,
	w: 150,
},{
	type: "platform",
	x: 2950,
	y: 450,
	w: 100,
},{
	type: "platform",
	x: 3100,
	y: 400,
	w: 50,
},{
	type: "platform",
	x: 3250,
	y: 450,
	w: 100,
},{
	type:"breakingplatform",
	x:	3400,
	y:	400,
	w: 100,
	breaktime: 1.5,
},{
	type: "platform",
	x: 3550,
	y: 450,
	w: 100,
},{
	type: "endcave",
	x: 3750,
	y: 400,
	w: 100,
}
]
];

var objects = [];
var camerax = 0;
var platform_sprite;
var water_sprite;
var cloud_sprite;
var pipe_sprite, oil_sprite, cave_sprite;
var sun_sprite, sun;
var keyboard;
var left, right, up;
var bear;
var lt = 0;
var bg_timer = new Timer(1100);
var bgaudio;

function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

function Timer(interval, callback) {
    this.target = 0;
    this.interval = interval;
	this.callback = callback || function() {};
}

Timer.prototype.tick = function() {
    var ct = game.getGameTime();
    if (this.target <= ct) {
        this.target = ct + this.interval;
        return true;
    } else {
        return false;
    }
}

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

    if (this.object.getX() < 800) {
        this.object.child.scale.x -= 1 / Math.pow(this.object.getX(), 1.2)
    }
    if (this.object.child.scale.x < 0.05) {
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
    this.object.setX(this.x - camerax + this.xdelta / 2 * (1 + Math.sin(this.xspeed * game.getGameTime() / 1000)));
    this.object.setY(this.y + this.ydelta / 2 * (1 + Math.sin(this.yspeed * game.getGameTime() / 1000)));
}

function Bear(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.sprite = sprite;
    this.jump = false;
	this.vxm = 1;
	this.oil_timer = new Timer(5000);
	this.sliding = false;
}

Bear.prototype.create = function() {
    this.object = this.sprite.create(this.x, this.y );
    this.sprite.addAnimation("right", [0, 1, 2, 3, 4, 5, 6, 7], 15);
    this.sprite.addAnimation("left", [8, 9, 10, 11, 12, 13, 14], 15);
    this.object.setGravityY(200);
}

Bear.prototype.update = function() {
    if (right.isDown()) {
        this.object.playAnimation("right");
        this.object.setStopFrame(0);
        this.vx = 150*this.vxm;
    } else if (left.isDown()) {
        this.object.playAnimation("left");
        this.object.setStopFrame(8);
        this.vx = -150*this.vxm + 60;
    } else if (!this.sliding) {
        this.vx = 0;
        this.object.stop();
    }
	
	if (this.sliding) {
		this.vx = 400;
	}

    if (this.object.getY() > 600 - 140) {
		window.location="gameend.html?back=" + encodeURIComponent(window.location);
    }

    this.x += this.vx / 60;
    this.object.setX(this.x - camerax);
    game.checkCollision(this.object, platform_sprite, (function(bear, platform) {
        if (up.isDown() && this.jump == false && platform.getY() > this.object.getY()) {
            this.jump = true;
            this.object.setVelocityY(-160);
        } else {
            this.jump = false;
        }
    }).bind(this));
	game.checkCollision(this.object, fragileplatform_sprite, (function(bear, platform) {
        if (up.isDown() && this.jump == false && platform.getY() > this.object.getY()) {
            this.jump = true;
            this.object.setVelocityY(-160);
        } else {
            this.jump = false;
        }
    }).bind(this));
	game.checkCollision(this.object, slidingplatform_sprite, (function(bear, platform) {
        if (up.isDown() && this.jump == false && platform.getY() > this.object.getY()) {
            this.jump = true;
            this.object.setVelocityY(-160);
        } else {
            this.jump = false;
        }
    }).bind(this));
	
	this.sliding = false;
	game.checkOverlap(this.object, slidingplatform_sprite, (function() {
		this.sliding = true;
	}).bind(this));
	
	if (this.vxm < 1 && this.oil_timer.tick()) {
		this.vxm = 1;
	}
}

function Cloud(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = sprite;
}

Cloud.prototype.create = function() {
    var r = Math.random();
    this.object = this.sprite.create(this.x, this.y, 260 * r, 134 * r);
    this.w = 260 * r;
    this.object.setVelocityX(-50 * r);
}

Cloud.prototype.update = function() {
    this.object.setVelocityY(4 * Math.cos(game.getGameTime() / 500 + this.w / 100));

    if (this.object.getX() < -this.w) {
        this.object.kill();
        objects.splice(objects.indexOf(this), 1);
        var cloud = new Cloud(800, 50, cloud_sprite);
        cloud.create();
        objects.push(cloud);
    }
}

function Pipe(x, y, w, h, sprite, speed) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.sprite = sprite;
	this.timer = new Timer(speed);
}

Pipe.prototype.create = function() {
	this.object = this.sprite.create(this.x, this.y, this.w, this.h);
}

Pipe.prototype.update = function() {
	this.object.setX(this.x - camerax);
	
	if (this.timer.tick()) {
		var drop = new OilDrop(this.x + this.w / 2, this.y + this.h, oil_sprite);
		drop.create();
		objects.push(drop);
	}
}

function OilDrop(x, y, sprite) {
	this.x = x;
	this.y = y;
	this.sprite = sprite;
}

OilDrop.prototype.create = function() {
	this.object = this.sprite.create(this.x - camerax, this.y, 10, 20);
	this.sprite.setGravityY(200);
}

OilDrop.prototype.update = function() {
	this.object.setX(this.x - camerax);
	game.checkCollision(bear.object, this.object, (function() {
		this.object.kill();
		objects.splice(objects.indexOf(this), 1);
		bear.vxm = 0.5;
		bear.oil_timer.tick();
	}).bind(this));
}


function Cave(x, y, sprite) {
	this.x = x;
	this.y = y;
	this.sprite = sprite;
}

Cave.prototype.create = function() {
	this.object = this.sprite.create(this.x, this.y);
}

Cave.prototype.update = function() {
	this.object.setX(this.x - camerax);
	
	game.checkCollision(this.object, bear.object, function() {
		if (levelno < 4) {
			window.location = "game.html?level=" + (levelno + 1) + "&audio=" + bgaudio.currentTime;
		} else {
			window.location = "donate.html";
		}
	});
}

function FragilePlatform(x, y, w, h, sprite, delay) {
	MovingPlatform.call(this, x, y, w, h, sprite, 0, 5, 1, 4);
	this.delay = delay;
}

FragilePlatform.prototype.create = MovingPlatform.prototype.create;

FragilePlatform.prototype.update = function () {
	MovingPlatform.prototype.update.call(this);
	game.checkCollision(bear.object, this.object, (function(bear, platform) {
		game.world.time.events.add(this.delay, this.trigger, this);
	}).bind(this));
}

FragilePlatform.prototype.trigger = function() {
	this.object.kill();
}

function standard_platform(x, y, w, h) {
    return new MovingPlatform(x, 600 - y, w, 500, platform_sprite, 0, 5, 1, 4)
}

function fragile_platform(x, y, w, h, delay) {
	return new FragilePlatform(x, 600 - y, w, 500, fragileplatform_sprite, 1000*delay);
}

function moving_platform(x, y, w, h, xdelta, ydelta, xspeed, yspeed) {
    return new MovingPlatform(x, 600 - y, w, 500, platform_sprite, xdelta, ydelta, xspeed, yspeed);
}

function sliding_platform(x, y, w, h) {
	return new MovingPlatform(x, 600 - y, w, 500, slidingplatform_sprite, 0, 5, 1, 4)
}

function pipe(x, y, speed) {
	return new Pipe(x, 600 - y, 90, 173, pipe_sprite, 1000*speed);
}

function cave(x, y) {
	return new Cave(x, 600 - y, cave_sprite);
}

function preload() {
	
	levelno = eval(getParameterByName("level"));
	level = levels[levelno];
	
	bgaudio = new Audio("audio/level.mp3");
	bgaudio.play();
	bgaudio.currentTime = eval(getParameterByName("audio"));
	
	splash_audio = new Audio("audio/splash.mp3");
	
    platform_sprite = new Sprite("img/tundra.png");
    water_sprite = new Sprite("img/iceWater.png");
    bear_sprite = new Sprite("img/bear2.png", 53, 31);
    cloud_sprite = new Sprite("img/cloud.png");
    sun_sprite = new Sprite("img/sun.png");
	pipe_sprite = new Sprite("img/pipe.png");
	oil_sprite = new Sprite("img/oil.png");
	cave_sprite = new Sprite("img/cave.png");
	fragileplatform_sprite = new Sprite("img/fragile.png");
	slidingplatform_sprite = new Sprite("img/sliding.png");

    bear = new Bear(250, 300, bear_sprite);

    objects.push(bear);
    for (object of level) {
        switch (object.type) {
            case 'platform':
                objects.push(standard_platform(object.x, object.y, object.w, object.h));
                break;
            case 'movingplatform':
                objects.push(moving_platform(object.x, object.y, object.w, object.h,
                    object.xdelta, -object.ydelta, object.xspeed, object.yspeed));
                break;
			case 'oilpipe':
				objects.push(pipe(object.x, object.y, object.oilrate));
				break;
			case 'endcave':
				objects.push(cave(object.x, object.y));
				break;
			case 'breakingplatform':
				objects.push(fragile_platform(object.x, object.y, object.w, object.h, object.breaktime));
				break;
			case 'slidingplatform':
				objects.push(sliding_platform(object.x, object.y, object.w, object.h));
        }
    }

    for (i = 0; i < 3; i++) {
        objects.push(new Cloud(Math.random() * 800, 50, cloud_sprite));
    }

    game.loadBackgroundImage("bg", "img/bg.png");

    keyboard = new Keyboard();
    left = keyboard.createLeftKey();
    right = keyboard.createRightKey();
    up = keyboard.createUpKey();
}

function create() {
    sun = sun_sprite.create(0, 0, 300, 300);
    game.setBackgroundImage("bg");

    x = water_sprite.create(0, 600 - 140);
    x.setX(-70);

    for (var i = 0; i < 12; i++) {
        water_sprite.create(i * 70, 600 - 140);
    }

    for (object of objects) {
        object.create();
    }
	
    sun.child.anchor.setTo(0.5, 0.5);
}

function update() {
    dt = game.getGameTime() - lt;
    lt += dt;

    camerax += dt * 100 / 1000;

    sun.setAngle(game.getGameTime() / 300);

    water_sprite.setVelocityX(-60 + 20 * Math.cos(game.getGameTime() / 500));

    if (bg_timer.tick()) {
        var c = water_sprite.children;
        water_sprite.create(c[c.length - 1].getX() + 68, 600 - 140);
        c[0].kill();
    }

    for (object of objects) {
        object.update();
    }
	
	game.world.world.bringToTop(water_sprite.group);
}