var carPic = document.createElement("img");
var carPic2 = document.createElement("img");
var carPicLoaded = false;

var roadPic = document.createElement("img");
var wallPic = document.createElement("img");
var goalPic = document.createElement("img");
var treePic = document.createElement("img");
var flagPic = document.createElement("img");



function carImageLoad() {
	carPic.onload = function() {
		carPicLoaded = true;
	}
	carPic.src = "player1car.png";
	carPic2.src = "player2car.png";
}

function trackLoadImages() {
	roadPic.src = "track_road.png";
	wallPic.src = "track_wall.png";
	treePic.src = "track_tree.png";
	goalPic.src = "track_goal.png";
	flagPic.src = "track_flag.png";
}

function loadingpic(){
	carImageLoad();
	trackLoadImages()
}