//Strategy Design Principle
function dRemInvalidSpaces(arr){
	console.log(arr);
	//First, remove the out-of-bounds spaces
	for (var s = 0; s<arr.length; s++){
		var AtS = arr[s].substring(1);
		AtS = AtS.split(" ");
		if (AtS[0].length>1 ||AtS[1].length>1){
			arr.splice(s,1);
			s--;
			continue;
		}
	}
	return arr;
};

function dCalcS(Pos, isW){ return calcS(Pos,isW);}

function dCalcLUV(Pos,isW){
	if (document.getElementById(Pos).firstChild.src.includes("S")){
		return calcS(Pos,isW);	
	}
	return [];
}

function dCalcHV(Pos,isW){
	var RC = getRC(Pos);
	var damage =[];
	if (document.getElementById(Pos).firstChild.src.includes("S")){
		for (var i= -2; i<3;i++){
			if (i==-1||i==1){
				damage.push("g"+(RC[0]+i)+" "+(RC[1]+1));
				damage.push("g"+(RC[0]+i)+" "+(RC[1]-1));
				continue;
			}
			if (i==0){
				damage.push("g"+(RC[0]+2)+" "+(RC[1]));
				damage.push("g"+(RC[0]-2)+" "+(RC[1]));
				continue;
			}
			damage.push("g"+(RC[0])+" "+(RC[1]+i));
		}
	}
	return dRemInvalidSpaces(damage);
}

function dCalcT(Pos){
	var RC = getRC(Pos);
	var damage =[];
	for (var i = -3;i<4;i++){
		damage.push("g"+(RC[0]+1)+" "+(RC[1]+i));
		damage.push("g"+(RC[0]+1)+" "+(RC[1]-i));
		damage.push("g"+(RC[0]+i)+" "+(RC[1]+1));
		damage.push("g"+(RC[0]+i)+" "+(RC[1]-1));
		if (i>-3&&i<3){
			damage.push("g"+(RC[0]+i)+" "+(RC[1]+2));
			damage.push("g"+(RC[0]+i)+" "+(RC[1]-2));
			if (i!=0){
				damage.push("g"+(RC[0]+i)+" "+(RC[1]));
			}
		}
	}
	return  dRemInvalidSpaces(damage);
}

function dCalcAA(Pos){
	var RC = getRC(Pos);
	var damage =[];
	for (var i =-3;i<4;i++){
		damage.push("s"+(RC[0]+1)+" "+(RC[1]+i));
		damage.push("s"+(RC[0]-1)+" "+(RC[1]+i));
		damage.push("s"+(RC[0])+" "+(RC[1]+i));
		damage.push("s"+(RC[0]+i)+" "+(RC[1]));
		damage.push("s"+(RC[0]+i)+" "+(RC[1]+1));
		damage.push("s"+(RC[0]+i)+" "+(RC[1]-1));
	}
	damage.push("s"+(RC[0]+2)+" "+(RC[1]-2));
	damage.push("s"+(RC[0]-2)+" "+(RC[1]-2));
	damage.push("s"+(RC[0]+2)+" "+(RC[1]+2));
	damage.push("s"+(RC[0]-2)+" "+(RC[1]+2));

	return dRemInvalidSpaces(damage);
}

function dCalcJ(Pos, Dir){ 
	var damage = [], RC = getRC(Pos);
	if (Dir == 1){
		for (var i=-1;i<2;i++){
			damage.push("s"+(RC[0]-3)+" "+(RC[1]+i));
			damage.push("s"+(RC[0]-2)+" "+(RC[1]+i));
		}
	damage.push("s"+(RC[0]-1)+" "+(RC[1]));
	}
	if (Dir == 2){
		for (var i=1;i<4;i++){
			damage.add("s"+(RC[0])+" "+(RC[1]+i));
			if (i>1){
				damage.add("s"+(RC[0]+1)+" "+(RC[1]+i));
				damage.add("s"+(RC[0]-1)+" "+(RC[1]+i));
			}
		}
	}
	if (Dir ==3){
		for (var i=-1;i<2;i++){
			damage.push("s"+(RC[0]+3)+" "+(RC[1]+i));
			damage.push("s"+(RC[0]+2)+" "+(RC[1]+i));
		}
		damage.push("s"+(RC[0]+1)+" "+(RC[1]));
	}
	if (Dir ==4){
		for (var i=1;i<4;i++){
			damage.add("s"+(RC[0])+" "+(RC[1]-i));
			if (i>1){
				damage.add("s"+(RC[0]+1)+" "+(RC[1]-i));
				damage.add("s"+(RC[0]-1)+" "+(RC[1]-i));
			}
		}
	}
	return  dRemInvalidSpaces(damage);
}

function dCalcB(Pos,Dir){
	var RC = getRC(Pos);
	var damage =[];
	damage.push("g"+RC[0]+" "+RC[1]);
	if (Dir ==1){
		damage.push("s"+(RC[0]-1)+" "+(RC[1]-1)); 	damage.push("s"+(RC[0]-1)+" "+(RC[1]));  	damage.push("s"+(RC[0]-1)+" "+(RC[1]+1));
	}
	if (Dir==2){
		damage.push("s"+(RC[0]-1)+" "+(RC[1]+1)); 	damage.push("s"+(RC[0]+1)+" "+(RC[1]+1));  	damage.push("s"+RC[0]+" "+(RC[1]+1));
	}
	if (Dir ==3){
		damage.push("s"+(RC[0]+1)+" "+(RC[1]-1)); 	damage.push("s"+(RC[0]+1)+" "+(RC[1]));  	damage.push("s"+(RC[0]+1)+" "+(RC[1]+1));
	}
	if (Dir==4){
		damage.push("s"+(RC[0]-1)+" "+(RC[1]-1)); 	damage.push("s"+(RC[0]+1)+" "+(RC[1]-1));  	damage.push("s"+RC[0]+" "+(RC[1]-1));
	}
	return dRemInvalidSpaces(damage);
}


//Factory Design Principle
function dCalc(SelectedPiece){
	if (SelectedPiece.rank.includes("LUV")){
		return dCalcLUV(SelectedPiece.Pos,SelectedPiece.isW);
	}
	if (SelectedPiece.rank.includes("HV")){
		return dCalcHV(SelectedPiece.Pos,SelectedPiece.isW);
	}
	if (SelectedPiece.rank.includes("S")){
		return dCalcS(SelectedPiece.Pos,SelectedPiece.isW);
	}
	if (SelectedPiece.rank.includes("TT")){
		return dCalcT(SelectedPiece.Pos,SelectedPiece.isW);
	}
	if (SelectedPiece.rank.includes("AA")){
		return dCalcAA(SelectedPiece.Pos,SelectedPiece.isW);
	}
	if (SelectedPiece.rank.includes("J")){
		return dCalcJ(SelectedPiece.Pos,SelectedPiece.orientation);
	}
	if (SelectedPiece.rank.includes("B")){
		return dCalcB(SelectedPiece.Pos,SelectedPiece.orientation);
	}
	if (SelectedPiece.rank.includes("AA")){
		return dCalcAA(SelectedPiece.Pos);
	}
}