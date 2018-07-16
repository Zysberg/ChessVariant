function remInvalidSpaces(arr){
	for (var i;i<arr;i++){
		arrI = arr[i].split(" ");
		if (arrI<'0'||arrI>'9'){
			delete arr[i];
			i--;
		}
	}
}

function calcAA(param){
	var Pos = param.Pos;
	var pX =Pos[0] - '0', pY = Pos[2] - '0';
	var movement = [(pX+1)+","+pY,(pX-1)+","+pY,pX+","+(pY+1),pX+","+(pY-1)];
	remInvalidSpaces(movement);
	param.movement = movement;
}

function calcS(param){
	var Pos = param.Pos;
	if (Pos.isW){

	}
	else{
		
	}
}