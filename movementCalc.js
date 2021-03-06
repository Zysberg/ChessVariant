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

		if (!(rank.includes("J"))&&!(rank.includes("B"))){

			//Second remove any Spaces occupied by Allies, with few exceptions
			var PosHTML = document.getElementById(Pos), AtSHTML = document.getElementById(arr[s]);
			if (document.getElementById(arr[s]).firstChild){
					if ((rank.includes("HV0"))||rank.includes("HV1")||rank.includes("LUV0")||rank.includes("LUV1")){
						if (AtSHTML.firstChild.src.includes("WhiteS")&&PosHTML.firstChild.src.includes("White")){
							continue;
						}
						else if (AtSHTML.firstChild.src.includes("BlackS")&&PosHTML.firstChild.src.includes("Black")){
							continue;
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
	}
	return arr;
}

function getRC(Pos){
		var RC = [Pos[1] - '0',Pos[3] - '0'];
		return RC;
}

function cardinal(Pos){
	var RC = getRC(Pos);
	return ["g"+(RC[0])+" "+(RC[1]-1),"g"+(RC[0])+" "+(RC[1]+1), "g"+(RC[0]+1)+" "+(RC[1]),"g"+(RC[0]-1)+" "+(RC[1])];
}

function isNotOccupied(string){
	var dd = document.getElementById(string);
	return !dd.hasChildNodes();
}

function calcAA(Pos){
	var RC = getRC(Pos);
	var movement = cardinal(Pos);
	movement = remInvalidSpaces(movement,Pos,"AA");
	return movement;
}

function calcS(Pos,isW){
	var RC = getRC(Pos);
	var movement=[];
	if (isW){
		movement = ["g"+(RC[0]-1)+" "+(RC[1]-1),	"g"+(RC[0]-1)+" "+(RC[1]),	"g"+(RC[0]-1)+" "+(RC[1]+1)];
	}
	else{
		movement = ["g"+(RC[0]+1)+" "+(RC[1]-1),	"g"+(RC[0]+1)+" "+(RC[1]),	"g"+(RC[0]+1)+" "+(RC[1]+1)];
	}
	movement = remInvalidSpaces(movement,Pos,"S");
	return movement;
}

function inBounds(R,C){
	if ((R<10)&&(C<10)&&(R>-1)&&(C>-1)){
		return true;
	}
	return false;
}

function calcLUV(Pos,hasS,rank){
	var RC = getRC(Pos);
	var movement = [];
	//console.log(document.getElementById(Pos).firstChild.src.includes("S"));
	if (document.getElementById(Pos).firstChild.src.includes("S")){
		var stopN = false,stopE=false, stopW=false, stopS = false;
		var stopNE = false, stopNW = false, stopSE = false, stopSW=false;
		for (var i=1;i<10;i++){
			if ((inBounds(RC[0]-i,RC[1]))&&(isNotOccupied('g'+(RC[0]-i)+" "+RC[1]))&&!stopN){movement.push('g'+(RC[0]-i)+" "+RC[1]);} else{stopN=true;};		
			if ((inBounds(RC[0]+i,RC[1]))&&(isNotOccupied('g'+(RC[0]+i)+" "+RC[1]))&&!stopS){movement.push('g'+(RC[0]+i)+" "+RC[1]);} else{stopS=true;};
			if ((inBounds(RC[0],RC[1]+i))&&(isNotOccupied('g'+RC[0]+" "+(RC[1]+i)))&&!stopE){movement.push('g'+RC[0]+" "+(RC[1]+i));} else{stopE=true;}
			if ((inBounds(RC[0],RC[1]-i))&&(isNotOccupied('g'+RC[0]+" "+(RC[1]-i)))&&!stopW){movement.push('g'+RC[0]+" "+(RC[1]-i));} else{stopW=true;}
			if ((inBounds(RC[0]+i,RC[1]-i))&&(isNotOccupied('g'+(RC[0]+i)+" "+(RC[1]-i)))&&!stopSW){movement.push('g'+(RC[0]+i)+" "+(RC[1]-i));} else{stopSW=true;}
			if ((inBounds(RC[0]-i,RC[1]-i))&&(isNotOccupied('g'+(RC[0]-i)+" "+(RC[1]-i)))&&!stopNW){movement.push('g'+(RC[0]-i)+" "+(RC[1]-i));} else{stopNW=true;}
			if ((inBounds(RC[0]-i,RC[1]+i))&&(isNotOccupied('g'+(RC[0]-i)+" "+(RC[1]+i)))&&!stopSE){movement.push('g'+(RC[0]-i)+" "+(RC[1]+i));} else{stopSE=true;}
			if ((inBounds(RC[0]+i,RC[1]+i))&&(isNotOccupied('g'+(RC[0]+i)+" "+(RC[1]+i)))&&!stopNE){movement.push('g'+(RC[0]+i)+" "+(RC[1]+i));} else{stopNE=true;}
		}
	}
	else{
		movement.push("g"+(RC[0]-1)+" "+(RC[1]-1));
		movement.push("g"+(RC[0]+1)+" "+(RC[1]+1));
		movement.push("g"+(RC[0]-1)+" "+(RC[1]+1));
		movement.push("g"+(RC[0]+1)+" "+(RC[1]-1));
		var conc = cardinal(Pos);
		movement = movement.concat(conc);
	}
	if (hasS){movement = remInvalidSpaces(movement,Pos,"LUVS");}
	else{movement = remInvalidSpaces(movement,Pos,rank)};
	return movement;
}

function calcHV(Pos,rank){
	var RC = getRC(Pos);
	var movement = [];
	//Standard Moves
	movement = cardinal(Pos);

	//If its carrying a soldier
	if (document.getElementById(Pos).firstChild.src.includes("S")){
		movement.push("g"+(RC[0])+" "+(RC[1]-3));
		movement.push("g"+(RC[0])+" "+(RC[1]+3));
		movement.push("g"+(RC[0]+3)+" "+(RC[1]));
		movement.push("g"+(RC[0]-3)+" "+(RC[1]));

		movement.push("g"+(RC[0]+1)+" "+(RC[1]+2));
		movement.push("g"+(RC[0]-1)+" "+(RC[1]-2));

		movement.push("g"+(RC[0]+1)+" "+(RC[1]-2));
		movement.push("g"+(RC[0]-1)+" "+(RC[1]+2));

		movement.push("g"+(RC[0]-2)+" "+(RC[1]+1));
		movement.push("g"+(RC[0]+2)+" "+(RC[1]-1));

		movement.push("g"+(RC[0]+2)+" "+(RC[1]+1));
		movement.push("g"+(RC[0]-2)+" "+(RC[1]-1));
	}
	else{
		movement.push("g"+(RC[0]-1)+" "+(RC[1]-1));
		movement.push("g"+(RC[0]+1)+" "+(RC[1]+1));
		movement.push("g"+(RC[0]+1)+" "+(RC[1]-1));
		movement.push("g"+(RC[0]-1)+" "+(RC[1]+1));
	}
	movement = remInvalidSpaces(movement,Pos,rank);
	return movement;
}

function calcT(Pos){
	var RC = getRC(Pos);
	var movement = [];

	for (var i = -2; i<3; i++){
		movement.push("g"+(RC[0]+1)+" "+(RC[1]+i));
		movement.push("g"+(RC[0]-1)+" "+(RC[1]+i));
		movement.push("g"+(RC[0]+i)+" "+(RC[1]+1));
		movement.push("g"+(RC[0]+i)+" "+(RC[1]-1));
	}

	movement = remInvalidSpaces(movement,Pos,"T");
	return movement;
}

function calcJ(Pos,Dir){	//N=1, E=2, S=3, W=4
	var RC = getRC(Pos);			
	var movement = [];
	if (Dir ==3){
		for (var i=-2;i<3;i++){
			if (i==-1||i==1){
				movement.push("s"+(RC[0])+" "+(RC[1]+i));
			}
			if (i==0){
				for (var j = 2; j>-1;j--){
					if (j==-1 || j==0){continue;}
					movement.push("s"+(RC[0]+j)+" "+(RC[1]));
				}
			}
			movement.push("s"+(RC[0]-1)+" "+(RC[1]+i));
		}
	}
	else if (Dir == 4){
		for (var i=-1;i<4;i++){
			if (i==0){
				movement.push("s"+(RC[0]+1)+" "+RC[1]);
				movement.push("s"+(RC[0]-1)+" "+RC[1]);
				continue;
			}
			if (i==1){
				for (var j = -2; j<3;j++){
					if (j==1){continue;}
					movement.push("s"+(RC[0]+j)+" "+(RC[1]+1));
				}
			}
			movement.push("s"+(RC[0])+" "+(RC[1]+i));
		}
	}

	else if (Dir ==1){
		for (var i=-2;i<3;i++){
			if (i==-1||i==1){
				movement.push("s"+(RC[0])+" "+(RC[1]+i));
			}
			if (i==0){
				for (var j = 1; j>-3;j--){
					if (j==0){continue;}
					movement.push("s"+(RC[0]+j)+" "+(RC[1]));
				}
			}
			movement.push("s"+(RC[0]+1)+" "+(RC[1]+i));
		}
	}

	else if (Dir==2){
		for (var i=-3;i<2;i++){
			if (i==0){
				movement.push("s"+(RC[0]+1)+" "+(RC[1]));
				movement.push("s"+(RC[0]-1)+" "+RC[1]);
				continue;
			}
			if (i==-1){
				for (var j = -2; j<3;j++){
					if (j==0){continue;}
					movement.push("s"+(RC[0]+j)+" "+(RC[1]-1));
				}
			}
			movement.push("s"+(RC[0])+" "+(RC[1]+i));
		}
	}
	movement = remInvalidSpaces(movement,Pos,"J");
	return movement;
}

function calcB(Pos,Dir){
	var RC = getRC(Pos);			
	var movement = [];
	if (Dir == 1){
		movement.push("s"+(RC[0])+" "+(RC[1]-1));
		movement.push("s"+(RC[0])+" "+(RC[1]+1));
		movement.push("s"+(RC[0]-1)+" "+RC[1]);
		movement.push("s"+(RC[0]-2)+" "+RC[1]);
	}

	if (Dir == 2){
		movement.push("s"+(RC[0]-1)+" "+(RC[1]));
		movement.push("s"+(RC[0]+1)+" "+(RC[1]));
		movement.push("s"+(RC[0])+" "+(RC[1]+1));
		movement.push("s"+(RC[0])+" "+(RC[1]+2));
	}

	if (Dir == 3){
		movement.push("s"+(RC[0])+" "+(RC[1]-1));
		movement.push("s"+(RC[0])+" "+(RC[1]+1));
		movement.push("s"+(RC[0]+1)+" "+(RC[1]));
		movement.push("s"+(RC[0]+2)+" "+(RC[1]));
	}
	if (Dir == 4){
		movement.push("s"+(RC[0]-1)+" "+(RC[1]));
		movement.push("s"+(RC[0]+1)+" "+(RC[1]));
		movement.push("s"+(RC[0])+" "+(RC[1]-1));
		movement.push("s"+(RC[0])+" "+(RC[1]-2));
	}
	movement = remInvalidSpaces(movement,Pos,"B");
	return movement;
}

function calcMovement(SelectedPiece){
	if (SelectedPiece.rank.includes("LUV")){
		return calcLUV(SelectedPiece.Pos,false,SelectedPiece.rank);
	}
	if (SelectedPiece.rank.includes("HV")){
		return calcHV(SelectedPiece.Pos,SelectedPiece.rank);
	}
	if (SelectedPiece.rank.includes("S")){
		return calcS(SelectedPiece.Pos,SelectedPiece.isW);
	}
	if (SelectedPiece.rank.includes("TT")){
		return calcT(SelectedPiece.Pos);
	}
	if (SelectedPiece.rank.includes("AA")){
		return calcAA(SelectedPiece.Pos);
	}
	if (SelectedPiece.rank.includes("J")){
		return calcJ(SelectedPiece.Pos,SelectedPiece.orientation);
	}
	if (SelectedPiece.rank.includes("B")){
		return calcB(SelectedPiece.Pos,SelectedPiece.orientation);
	}
}

function rotateJB(from,to){
	var fromRC = getRC(from);
	var toRC = getRC(to);
	var toR = toRC[0]-fromRC[0], absR = Math.abs(toR); console.log(absR);
	var toC = toRC[1]-fromRC[1], absC = Math.abs(toC); console.log(absC);
	if (absC<absR){return (toR>0) ? 3:1;}
	return (toC>0) ? 2:4;
}


function calcDelployment(Pos){
	return remInvalidSpaces(cardinal(Pos),Pos,"S");
}