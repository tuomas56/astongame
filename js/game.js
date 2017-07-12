var game = new Game(800, 600, "Game");

var level = [{
    type: 'platform',
    x: 450,
    y: 450,
    w: 200,
    h: 100
}];

var objects = [];
var camerax = 0;
var platform_sprite;
var water_sprite;
var cloud_sprite;
var sun_sprite, sun;
var keyboard;
var left, right, up;
var bear;
var lt = 0;
var bg_timer = new Timer(1000);

function Timer(interval) {
    this.target = 0;
    this.interval = interval;
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
        this.object.child.scale.x -= 100 / Math.pow(this.object.getX(), 1.8)
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

    if (this.object.getY() > 600 - 140) {
        game.pause();
    }

    this.x += this.vx / 60;
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

function standard_platform(x, y, w, h) {
    return new MovingPlatform(x, y, w, h, platform_sprite, 0, 5, 1, 4)
}

function moving_platform(x, y, w, h, xdelta, ydelta, xspeed, yspeed) {
    return new MovingPlatform(x, y, w, h, platform_sprite, xdelta, ydelta, xspeed, yspeed);
}

function preload() {
    platform_sprite = new Sprite("img/tundra.png");
    water_sprite = new Sprite("img/iceWater.png");
    bear_sprite = new Sprite("img/bear2.png", 77, 85);
    cloud_sprite = new Sprite("img/cloud.png");
    sun_sprite = new Sprite("img/sun.png");

    bear = new Bear(250, 100, bear_sprite);

    objects.push(bear);
    for (object of level) {
        switch (object.type) {
            case 'platform':
                objects.push(standard_platform(object.x, object.y, object.w, object.h));
                break;
            case 'movingplatform':
                objects.push(moving_platform(object.x, object.y, object.w, object.h,
                    object.xdelta, object.ydelta, object.xspeed, object.yspeed));
                break;
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

    camerax += dt * 50 / 1000;

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
}