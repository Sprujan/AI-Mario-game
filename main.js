function preload() {
	jump = loadSound("jump.wav");
	mario_kick = loadSound("kick.wav");
	mariodie = loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	gameover = loadSound("gameover.wav");
	mario_coin = loadSound("coin.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent("canvas");
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("camera_view");
	pose = ml5.poseNet(video, modeLoaded);
	pose.on('pose', gotResults);
}

function modeLoaded(){
	console.log("model has loaded successfully");
}

function gotResults(results){
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game();
}