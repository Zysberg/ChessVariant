function remInvalidSpaces(arr,Pos,rank){
	//First, remove the out-of-bounds spaces
	for (var s = 0; s<arr.length; s++){
		var AtS = arr[s].substring(1);
		AtS = AtS.split(" ");
		if (AtS[0].length>1 ||AtS[1].length>1){
			arr.splice(s,1);
			s--;
			continue;
		}

		//Second remove any Spaces occupied by Allies, with few exceptions
		var PosHTML = document.getElementById(Pos), AtSHTML = document.getElementById(arr[s]);
		if (document.getElementById(arr[s]).firstChild){
			if (rank.includes("HV")||rank.includes("LUV")){
				if (AtSHTML.firstChild.src.includes("WhiteS")&&PosHTML.firstChild.src.includes("White")){
					continue;
				}
				else if (AtSHTML.firstChild.src.includes("BlackS")&&PosHTML.firstChild.src.includes("Black")){
					continue;
				}
			}
			else{
				if (AtSHTML.firstChild.src.includes("White") && PosHTML.firstChild.src.includes("White")){
					arr.splice(s,1); s--;
				}
				if (AtSHTML.firstChild.src.includes("Black") && PosHTML.firstChild.src.includes("Black")){
					arr.splice(s,1);s--;
				}
			}
		}
	}
	return arr;
}

function getRC(Pos){
		var RC = [Pos[1] - '0',Pos[3] - '0'];
		return RC;
}

function calcAA(Pos){
	var RC = getRC(Pos);
	var movement = ["g"+(RC[0]+1)+" "+RC[1], "g"+(RC[0]-1)+" "+RC[1], "g"+RC[0]+" "+(RC[1]+1), "g"+RC[0]+" "+(RC[1]-1)];
	movement = remInvalidSpaces(movement,Pos,"AA");
	return movement;
}

function calcS(Pos,isW){
	var RC = getRC(Pos);
	var movement=[];
	if (Pos.isW){
		movement = ["g"+(RC[0]-1)+" "+(RC[1]-1),	"g"+(RC[0])+" "+(RC[1]-1),	"g"+(RC[0]-1)+" "+(RC[1]-1)];
	}
	else{
		movement = ["g"+(RC[0]-1)+" "+(RC[1]+1),	"g"+(RC[0])+" "+(RC[1]+1),	"g"+(RC[0]-1)+" "+(RC[1]+1)];
	}
	movement = remInvalidSpaces(movement,Pos,"S");
	return movement;
}

function calcLUV(Pos,isW){
	var RC = getRC(Pos);
	var isW = LUV.isW;
	var movement = [];
	if (document.getElementById(Pos).firstChild.src.includes("S")){
		for (var i=0;i<10;i++){
			movement.push("g"+RC[0]+" "+i);
			movement.push("g"+i+" "+RC[1]);
			movement.push("g"+(RC[0]+i)+""+(RC[1]+i));
			movement.push("g"+(RC[0]-i)+""+(RC[1]+i));
			movement.push("g"+(RC[0]+i)+""+(RC[1]-i));
			movement.push("g"+(RC[0]-i)+""+(RC[1]-i));
		}
	}
	else{
		if (isW){
			if (document.getElementById("g"+(RC[0]+1)+" "+RC[1]).firstChild.src == wDir+"S.png"){movement.push("g"+(RC[0]+1)+" "+RC[1]);}
			if (document.getElementById("g"+(RC[0])+" "+(RC[1]+1)).firstChild.src == wDir+"S.png"){movement.push("g"+(RC[0])+" "+(RC[1]+1));}
			if (document.getElementById("g"+(RC[0]-1)+" "+(RC[1])).firstChild.src == wDir+"S.png"){movement.push("g"+(RC[0]-1)+" "+(RC[1]));}
			if (document.getElementById("g"+(RC[0])+" "+(RC[1]-1)).firstChild.src == wDir+"S.png"){movement.push("g"+(RC[0])+" "+(RC[1]-1));}
		}
		else{
			if (document.getElementById("g"+(RC[0]+1)+" "+RC[1]).firstChild.src == bDir+"S.png"){movement.push("g"+(RC[0]+1)+" "+RC[1]);}
			if (document.getElementById("g"+(RC[0])+" "+(RC[1]+1)).firstChild.src == bDir+"S.png"){movement.push("g"+(RC[0])+" "+(RC[1]+1));}
			if (document.getElementById("g"+(RC[0]-1)+" "+(RC[1])).firstChild.src == bDir+"S.png"){movement.push("g"+(RC[0]-1)+" "+(RC[1]));}
			if (document.getElementById("g"+(RC[0])+" "+(RC[1]-1)).firstChild.src == bDir+"S.png"){movement.push("g"+(RC[0])+" "+(RC[1]-1));}
		}
	}
	movement = remInvalidSpaces(movement,Pos,"LUV");
	return movement;
}

function calcHV(Pos,isW){
	var RC = getRC(Pos);
	var movement = [];
	//Standard Moves
	movement.push("g"+(RC[0]-1)+" "+(RC[1]-1));
	movement.push("g"+(RC[0]-1)+" "+(RC[1]+1));
	movement.push("g"+(RC[0]+1)+" "+(RC[1]+1));
	movement.push("g"+(RC[0]+1)+" "+(RC[1]-1));

	movement.push("g"+(RC[0]+2)+" "+(RC[1]+1));
	movement.push("g"+(RC[0]+1)+" "+(RC[1]+2));

	movement.push("g"+(RC[0]-2)+" "+(RC[1]-1));
	movement.push("g"+(RC[0]-1)+" "+(RC[1]-2));

	movement.push("g"+(RC[0]-2)+" "+(RC[1]+1));
	movement.push("g"+(RC[0]-1)+" "+(RC[1]+2));

	movement.push("g"+(RC[0]+2)+" "+(RC[1]-1));
	movement.push("g"+(RC[0]+1)+" "+(RC[1]-2));

	//If its carrying a soldier
	if (document.getElementById(Pos).firstChild.src.includes("S")){
		movement.push("g"+(RC[0]+2)+" "+(RC[1]+2));
		movement.push("g"+(RC[0]+2)+" "+(RC[1]-2));
		movement.push("g"+(RC[0]-2)+" "+(RC[1]+2));
		movement.push("g"+(RC[0]-2)+" "+(RC[1]-2));


		movement.push("g"+(RC[0]+3)+" "+(RC[1]+1));
		movement.push("g"+(RC[0]+1)+" "+(RC[1]+3));

		movement.push("g"+(RC[0]-3)+" "+(RC[1]-1));
		movement.push("g"+(RC[0]-1)+" "+(RC[1]-3));

		movement.push("g"+(RC[0]-3)+" "+(RC[1]+1));
		movement.push("g"+(RC[0]-1)+" "+(RC[1]+3));

		movement.push("g"+(RC[0]+3)+" "+(RC[1]-1));
		movement.push("g"+(RC[0]+1)+" "+(RC[1]-3));
	}

	movement = remInvalidSpaces(movement,Pos,"HV");
	return movement;
}

function calcT(Pos,isW){
	var RC = getRC(Pos);
	var movement = [];

	movement.push("g"+RC[0]+" "+(RC[1]+2));
	movement.push("g"+RC[0]+" "+(RC[1]-2));
	movement.push("g"+(RC[0]+2)+" "+(RC[1]));
	movement.push("g"+(RC[0]-2)+" "+(RC[1]));

	movement.push("g"+(RC[0]-1)+" "+(RC[1]+2));
	movement.push("g"+(RC[0]-1)+" "+(RC[1]-2));
	
	movement.push("g"+(RC[0]+1)+" "+(RC[1]+2));
	movement.push("g"+(RC[0]+1)+" "+(RC[1]-2));

	movement.push("g"+(RC[0]-2)+" "+(RC[1]+1));
	movement.push("g"+(RC[0]-2)+" "+(RC[1]-1));

	movement.push("g"+(RC[0]+2)+" "+(RC[1]+1));
	movement.push("g"+(RC[0]+2)+" "+(RC[1]-1));

	movement = remInvalidSpaces(movement,Pos,"T");
	return movement;
}