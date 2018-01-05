const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

const KEY_W = 87;
const KEY_A = 68;
const KEY_S = 83;
const KEY_D = 65;


var mouseX = 0;
var mouseY = 0;

function setupInput() {
	canvas.addEventListener('mousemove', updateMousePos);

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);
	yellowcar.setupInput(KEY_UP_ARROW,KEY_RIGHT_ARROW,KEY_DOWN_ARROW,KEY_LEFT_ARROW)
	bluecar.setupInput(KEY_W,KEY_D,KEY_S,KEY_A)
}

function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;

	// cheat / hack to test car in any position
	/*carX = mouseX;
	carY = mouseY;
	carSpeedX = 4;
	carSpeedY = -4;*/
}

function key(whichCar,event,set){
	if(event.keyCode == whichCar.left) {
		whichCar.keyHeld_TurnLeft = set;
	}
	if(event.keyCode == whichCar.right) {
		whichCar.keyHeld_TurnRight = set;
	}
	if(event.keyCode == whichCar.up) {
		whichCar.keyHeld_Gas = set;
	}
	if(event.keyCode == whichCar.down) {
		whichCar.keyHeld_Reverse = set;
	}
}
function keyPressed(evt) {
 key(yellowcar,evt,true);
	key(bluecar,evt,true);
	

	evt.preventDefault();
}

function keyReleased(evt) {
 key(yellowcar,evt,false);
	key(bluecar,evt,false);
}