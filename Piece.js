function Piece(svg){
	var obj = {};
	obj.name = "";
	obj.health = -1;
	obj.damage = null; //TODO
	obj.Pos = "";
	obj.svg = svg;
	return obj;
}

function MovablePiece(svg){
	var returnMe = Piece(svg);
	returnMe.movement = [];
	return returnMe;
}

function CarriablePiece(svg){
	var returnMe = MovablePiece(svg);
	returnMe[Soldier] = null;
	returnMe[SoldierRange]= [];
}
