var roadPic = document.createElement("img");
var wallPic = document.createElement("img");

const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;

var theArena =  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				 1, 1, 1, 1, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 1, 1, 1, 1,
				 1, 1, 1, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 1, 1, 1,
				 1, 1, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 4, 0, 1, 1,
				 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 1,
				 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1,
				 1, 5, 2, 2, 5, 1, 0, 0, 0, 5, 0, 0, 0, 0, 5, 5, 5, 0, 0, 1,
				 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 5, 0, 0, 0, 0, 5, 0, 5, 1,
				 1, 5, 3, 3, 5, 1, 0, 0, 5, 1, 1, 0, 0, 5, 0, 0, 0, 0, 0, 1,
				 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 5, 0, 5, 0, 0, 5, 0, 5, 1,
				 1, 0, 0, 0, 0, 1, 1, 0, 5, 0, 1, 0, 0, 5, 0, 0, 0, 0, 0, 1,
				 1, 1, 0, 0, 5, 5, 5, 0, 1, 0, 5, 0, 0, 5, 0, 5, 5, 0, 1, 1,
				 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
				 1, 1, 1, 1, 5, 5, 5, 1, 1, 1, 0, 0, 5, 0, 5, 0, 1, 1, 1, 1,
				 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var slamZone =  [1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1,
				 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				 1, 0, 5, 1, 1, 1, 1, 1, 5, 0, 0, 5, 1, 1, 1, 1, 1, 5, 0, 1,
				 1, 0, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 0, 1,
				 1, 0, 1, 4, 4, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 4, 4, 1, 0, 1,
				 1, 0, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 0, 1,
				 1, 0, 1, 4, 4, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 4, 4, 1, 0, 1,
				 1, 2, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 1, 2, 1,
				 1, 1, 5, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 5, 1, 1,
				 1, 0, 0, 0, 1, 0, 1, 4, 4, 4, 4, 4, 4, 1, 0, 1, 0, 0, 0, 1,
				 5, 0, 5, 0, 5, 0, 1, 4, 5, 3, 3, 5, 4, 1, 0, 5, 0, 5, 0, 5,
				 1, 0, 1, 0, 0, 0, 1, 4, 1, 0, 0, 1, 4, 1, 0, 0, 0, 1, 0, 1,
				 1, 0, 1, 1, 1, 1, 1, 1, 5, 0, 0, 5, 1, 1, 1, 1, 1, 1, 0, 1,
				 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1];

var oldLevel =  [4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
				 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
				 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
				 1, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 1,
				 1, 0, 0, 1, 1, 0, 0, 1, 4, 4, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 5, 0, 0, 1, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 5, 0, 0, 1, 0, 0, 1, 0, 0, 1,
				 1, 2, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1,
				 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
				 0, 3, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
				 0, 3, 0, 0, 0, 0, 1, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
				 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 4];

var levelList = [theArena, slamZone, oldLevel];
var levelNow = 0;
var trackGrid =[]

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TREE = 4;
const GOAL = 3;
const FLAG = 5



function isWallAtColRow(col, row) {
	if(col >= 0 && col < TRACK_COLS &&
		row >= 0 && row < TRACK_ROWS) {
		 var trackIndexUnderCoord = rowColToArrayIndex(col, row);
		 return (trackGrid[trackIndexUnderCoord] != TRACK_ROAD);
	} else {
		return false;
	}
}

function carTrackHandling(newcar) {
	var carTrackCol = Math.floor(newcar.x / TRACK_W);
	var carTrackRow = Math.floor(newcar.y / TRACK_H);
	var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

	if(carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
		carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {

		if(isWallAtColRow( carTrackCol,carTrackRow )) {
			if(trackGrid[trackIndexUnderCar]== TREE){
				newcar.speed *= 0.7;
			}
			else if(trackGrid[trackIndexUnderCar]== GOAL){
				
				$('#b').text(newcar.name)
				nextlevel();
			}
			else{
			this.x -= Math.cos(this.ang) * this.speed;
			this.y -= Math.sin(this.ang) * this.speed;

			newcar.speed *= -0.7;
			}
		} // end of track found
	} // end of valid col and row
} // end of carTrackHandling func

function rowColToArrayIndex(col, row) {
	return col + TRACK_COLS * row;
}

function drawTracks() {

	for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {

			var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 

			if(trackGrid[arrayIndex] == TRACK_ROAD) {
				canvasContext.drawImage(roadPic,
					TRACK_W*eachCol,TRACK_H*eachRow);
			} else if(trackGrid[arrayIndex] == TRACK_WALL) {
				canvasContext.drawImage(wallPic,
					TRACK_W*eachCol,TRACK_H*eachRow);
			} else if(trackGrid[arrayIndex] == TREE) {
				canvasContext.drawImage(treePic,
					TRACK_W*eachCol,TRACK_H*eachRow);
		} else if(trackGrid[arrayIndex] == FLAG) {
				canvasContext.drawImage(flagPic,
					TRACK_W*eachCol,TRACK_H*eachRow);	
		} else if(trackGrid[arrayIndex] == GOAL) {
				canvasContext.drawImage(goalPic,
					TRACK_W*eachCol,TRACK_H*eachRow);	
		}
	} // end of for each row

} // end of drawTracks func}
}

