var canvas, canvasContext;

var yellowcar = new myclass();
var bluecar = new myclass();

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	
	colorRect(0,0,canvas.width,canvas.height,'Blue')
loadingpic();
	colorText("Loading Images...",canvas.width/2,canvas.height/2,'red')
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

	setupInput();
	
	levelload(levelList[levelNow])
	carImageLoad();
	
}

function nextlevel(){
	levelNow++;
	if(levelNow>= levelList.length){
		levelNow=0;
	}
	levelload(levelList[levelNow])
}
function levelload(level){
	trackGrid = level.slice();
	yellowcar.reset(carPic2,"Green Car");
	bluecar.reset(carPic,"Blue Car");
	
	
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	yellowcar.move();
bluecar.move();
	carTrackHandling(yellowcar);
	carTrackHandling(bluecar);
}



function drawAll() {
	
	drawTracks();
	yellowcar.draw(); //switch oder to draw track first
	bluecar.draw();
} 