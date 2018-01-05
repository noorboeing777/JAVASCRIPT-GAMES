

const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.4;
const REVERSE_POWER = 0.3;
const TURN_RATE = 0.05;

function myclass(){
	this.x = 75;
	this.y = 75;
	this.ang = 0;
	this.speed = 0;
	this.mycar;
	this.name = "default"
	
this.keyHeld_Gas = false;
this.keyHeld_Reverse = false;
this.keyHeld_TurnLeft = false;
this.keyHeld_TurnRight = false;
		this.up;
		this.down;
		this.right;
		this.left	
	
	this.setupInput = function(upkey,rightkey,downkey,leftkey){
		this.up = upkey;
		this.down =downkey;
		this.right=rightkey;
		this.left=leftkey
	}

this.reset = function(whichpic,	carname) {
	this.name = carname
	this.mycar = whichpic;
	this.speed = 0;
	for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {
			var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
			if(trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
				trackGrid[arrayIndex] = TRACK_ROAD;
				this.ang = -Math.PI/2;
			
				this.x = eachCol * TRACK_W + TRACK_W/2;
				this.y = eachRow * TRACK_H + TRACK_H/2;
					return;//to make sure one car scan then second car scan
			}
		}
	}
}

this.move = function() {
	this.speed *= GROUNDSPEED_DECAY_MULT;

	if(this.keyHeld_Gas) {
		this.speed += DRIVE_POWER;
	}
	if(this.keyHeld_Reverse) {
		this.speed -= REVERSE_POWER;
	}
	if(Math.abs(this.speed)> 0.4){ //abs make sure it work in reverse
	if(this.keyHeld_TurnLeft) {
		this.ang -= TURN_RATE;
	}
	if(this.keyHeld_TurnRight) {
		this.ang += TURN_RATE;
	}
}


	

	this.x += Math.cos(this.ang) * this.speed;
	this.y += Math.sin(this.ang) * this.speed;
}

this.draw = function() {
	if(carPicLoaded) {
		drawBitmapCenteredWithRotation(this.mycar, this.x,this.y, this.ang);
		
	}
}
}