//TODO: change object methods such that you do not need to create custom methods

function Piece(rank,isW,health,Pos,html){
	var obj = {};
	obj.rank = rank;
	obj.isW = isW;
	obj.health = health;
	obj.Pos = Pos;
	obj.html = html;
	return obj;
}

function MovablePiece(rank,isW,health,Pos,html,movement){
	var obj = Piece(rank,isW,health,Pos,html);
	obj.movement = movement;
	obj.damage = null; //TODO
	return obj;
}

function CarriablePiece(rank,isW,health,Pos,html,movement){
	var obj = MovablePiece(rank,isW,health,Pos,html,movement);
	obj.Soldier = "";
	obj.SoldierRange= []; //Same as calculating AA movement;
	return obj;
}
