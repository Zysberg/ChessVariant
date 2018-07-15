//TODO: change object methods such that you do not need to create custom methods

function Piece(html){
	var obj = {};
	obj.isW= false;
	obj.health = -1;
	obj.Pos = "";
	obj.html = html;
	return obj;
}

function MovablePiece(html){
	var returnMe = Piece(html);
	returnMe.damage = null; //TODO
	returnMe.movement = [];
	return returnMe;
}

function CarriablePiece(html){
	var returnMe = MovablePiece(html);
	returnMe.Soldier = null;
	returnMe.SoldierRange= [];
}

function S(imgHTML,team){
	var obj = new MovablePiece();
	obj.isW = team;
	obj.health = 2;
	obj.damage = 1;
	obj.html = imgHTML;
	return obj;
}

function F(imgHTML,team){
	var obj = new Piece();
	obj.isW = team;
	obj.health = 7;
	obj.html = imgHTML;
	return obj;
}

function AA(imgHTML, team){
	var obj = new MovablePiece();
	obj.isW = team;
	obj.health = 4;
	obj.damage = 2;
	obj.html = imgHTML;
	return obj;
}
