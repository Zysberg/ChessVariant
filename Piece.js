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

function MovablePiece(rank,isW,health,Pos,html,movement,html2){
	var obj = Piece(rank,isW,health,Pos,html);
	obj.movement = movement;
	obj.damage = null; //TODO
	obj.html2 = html2;
	return obj;
}

function CarriablePiece(rank,isW,health,Pos,html,movement,html2){
	var obj = MovablePiece(rank,isW,health,Pos,html,movement);
	obj.Soldier = "";
	obj.SoldierRange= []; //Same as calculating AA movement;
	obj.html2 = html2;
	return obj;
}


function generatePiece(rank,isW,MCP,health,pos){
   	var html = document.createElement("IMG");
    html.src = ((isW) ? wDir:bDir)+rank+".png";
    if ((pos.indexOf('s')>-1) && (!isW)){
        html.style.transform = "rotate(180deg)";
    }
    if (MCP=="M"){
    	if (rank=="AA"){
    		var html2 = document.createElement("IMG");
    		html2.src = ((isW) ? wDir:bDir)+"D.png";
    		return MovablePiece(rank,isW,health,pos,html,[],html2);
    	}
        return MovablePiece(rank,isW,health,pos,html,[]);
    }
    if (MCP=="C"){
    	var html2 = document.createElement("IMG");
    	html2.src = ((isW) ? wDir:bDir)+rank+"S.png";
        return CarriablePiece(rank,isW,health,pos,html,[],html2);
    }
    return Piece(rank,isW,health,pos,html);
}