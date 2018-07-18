//TODO: change object methods such that you do not need to create custom methods

function Piece(rank,isW,health,Pos,html){
	var obj = {};
	obj.rank = rank;
	obj.isW = isW;
	obj.health = health;
	obj.Pos = Pos;
	obj.html = html;
	obj.html2 = null;
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


function generatePiece(rank,isW,MCP,health,pos){
   	var html = document.createElement("IMG");
    html.src = ((isW) ? wDir:bDir)+rank+".png";
    if ((pos.indexOf('s')>-1) && (!isW)){
        html.style.transform = "rotate(180deg)";
    }
    if (MCP=="M"){
        return MovablePiece(rank,isW,health,pos,html,[]);
    }
    if (MCP=="C"){
    	// var html2
        return CarriablePiece(rank,isW,health,pos,html,[]);
    }
    return Piece(rank,isW,health,pos,html);
}