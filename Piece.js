//"Strategy" Design Principle
function Piece(rank,isW,health,Pos,html){
	var obj = {};
	obj.rank = rank;
	obj.isW = isW;
	obj.health = health;
	obj.Pos = Pos;
	obj.html = html;
	return obj;
}

function F(Pos,isW,html,html2){
	var obj = Piece("F",isW,10,Pos,html);
	obj.html2 = html2;
    obj.movement = [];
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
	obj.SoldierRange= [];
	obj.html2 = html2;
	return obj;
}

function FlyingPiece(rank,isW,health,Pos,html,movement,orientation){
    var obj = Piece(rank,isW,health,Pos,html);
    obj.movement = movement;
    obj.orientation = orientation; //1=N, 2=E, 3=S, 4=W;
    obj.damage = null; //TODO
    return obj;
}

//"Factory" Design Principle
function generatePiece(rank,isW,MCP,health,pos,ID){
   	var html = document.createElement("IMG");
   	html.setAttribute("class",(rank+ID));
    html.src = ((isW) ? wDir:bDir)+rank+".png";
    if ((pos.indexOf('s')>-1) && (!isW)){
        html.style.transform = "rotate(180deg)";
    }
    if (MCP=="M"){
    	// if (rank=="AA"){
    	// 	var html2 = document.createElement("IMG");
    	// 	html2.src = ((isW) ? wDir:bDir)+"D.png";
    	// 	html2.setAttribute("class",(rank+ID));
    	// 	return MovablePiece(rank,isW,health,pos,html,[],html2);
    	// }
        return MovablePiece(rank+ID,isW,health,pos,html,[]);
    }
    if (MCP=="C"){
    	var html2 = document.createElement("IMG");
    	html2.src = ((isW) ? wDir:bDir)+rank+"S.png";
        return CarriablePiece(rank+ID,isW,health,pos,html,[],html2);
    }

    if (rank=="F"){
    	var html2 = document.createElement("IMG");
    	html2.src = ((isW) ? wDir:bDir)+"T.png";
    	return F(pos,isW,html,html2);
    }

    if(rank=="J"){
        var Ori = ((isW) ? 1:3);
        return FlyingPiece(rank,isW,health,pos,html,[],Ori);
    }
    return Piece(rank+ID,isW,health,pos,html);
}
