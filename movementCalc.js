function remInvalidSpaces(arr){
	for (var i;i<arr;i++){
		var atI = arr[i];
		atI = atI.substring(1);
	}
}

function getRC(param){
		var Pos = param.Pos;
		var RC = [Pos[1] - '0',Pos[3] - '0'];
		return RC;
}

function calcAA(param){
	var RC = getRC(param);
	var movement = ["g"+(RC[0]+1)+","+RC[1], "g"+(RC[0]-1)+","+RC[1], "g"+RC[0]+","+(RC[1]+1), "g"+RC[0]+","+(RC[1]-1)];
	remInvalidSpaces(movement);
	param.movement = movement;
}

function calcS(param){
	var RC = getRC(param);
	var movement=[];
	if (Pos.isW){
		movement = ["g"+(RC[0]-1)+" "+(RC[1]-1),	"g"+(RC[0])+" "+(RC[1]-1),	"g"+(RC[0]-1)+" "+(RC[1]-1)];
	}
	else{
		movement = ["g"+(RC[0]-1)+" "+(RC[1]+1),	"g"+(RC[0])+" "+(RC[1]+1),	"g"+(RC[0]-1)+" "+(RC[1]+1)];
	}
	param.movement = movement;
}