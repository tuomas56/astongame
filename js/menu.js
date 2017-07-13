/////////////////////////////////////////////////////////////////
///////////////	Global Variables  //////////////////////////////
///////////////////////////////////////////////////////////////
var game = new Game(800, 600, "Polar Dash");
var levelnumber;
var bgmusic;




/////////////////////////////////////////////////////////////////
///////////////	Functions //////////////////////////////////////
///////////////////////////////////////////////////////////////


function preload() {
	game.loadBackgroundImage("background", "img/Background.png");
	game.loadBackgroundImage("levelSelect","img/LevelSelectBackground.png");
	playbutton = new Button("img/PLAY.png", 350, 100, 290, 420);
	quitbutton = new Button("img/QUIT.png", 350, 100, 600, 455);
	levelbutton = new Button("img/LEVEL.png", 350, 100, 70, 425);
	logobutton = new Button("img/logo.png", 350, 100, 120, 30);
	
	level1button = new Button("img/Level1.png", 350, 100, 235, 35);
	level2button = new Button("img/Level2.png", 350, 100, 120, 225);
	level3button = new Button("img/Level3.png", 350, 100, 530, 195);
	level4button = new Button("img/Level4.png", 350, 100, 10, 425);
	level5button = new Button("img/Level5.png", 350, 100, 440, 415);
	
	bgmusic = new Audio("audio/menu.mp3");
}

function create() {
	
	bgmusic.play();
	game.setBackgroundImage("background", 800, 600, 0, 0);
	
	playbutton.createButton();
	quitbutton.createButton();
	levelbutton.createButton();
	logobutton.createButton();
	
	levelbutton.addDownAction(levelSelect, 0);
	quitbutton.addDownAction(function() {alert("Why would you quit? You monster. You are condemning the innocent polar bears to death.");}, 0)
	playbutton.addDownAction(btn1_update, 0);
}


function update() {

}

function levelSelect() {
	playbutton.buttonChild.kill();
	quitbutton.buttonChild.kill();
	levelbutton.buttonChild.kill();
	logobutton.buttonChild.kill();
	
	game.setBackgroundImage("levelSelect", 800, 550, 0, 0);
	level1button.createButton();
	level2button.createButton();
	level3button.createButton();
	level4button.createButton();
	level5button.createButton();
	
	level1button.addDownAction(btn1_update,0);
	level2button.addDownAction(btn2_update,0);
	level3button.addDownAction(btn3_update,0);
	level4button.addDownAction(btn4_update,0);
	level5button.addDownAction(btn5_update,0);
}

function btn1_update() {
	window.location = "game.html?level=0&audio=0";
}
function btn2_update() {
	window.location = "game.html?level=1&audio=0";
}
function btn3_update() {
	window.location = "game.html?level=2&audio=0";
}
function btn4_update() {
	window.location = "game.html?level=3&audio=0";
}
function btn5_update() {
	window.location = "game.html?level=4&audio=0";
}