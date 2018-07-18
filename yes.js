/**

Maybe have players choose different pieces/formations


Paratrooper Plane/Air-base system/refueling system?/Artillery

Trench System such that when formed, movement becomes [0], but singular 'soldiers' cannot move past them, nor deal dmg, but vehicles can do dmg. Must decide on orientation of trench.


**/ 



function placePiece(obj){
	var cell = document.getElementById(obj.Pos);
	cell.appendChild(obj.html);
	if (obj.html2&&obj.rank!="LUV"&&obj.rank!="HV"){
		var cell2 = document.getElementById("s"+obj.Pos.substring(1));
		cell2.appendChild(obj.html2);
	}
}

for (var i = 0; i<Black.length;i++){
		placePiece(Black[i]);
		placePiece(White[i]);
}
placePiece(wF);
placePiece(bF);
placePiece(wB);
placePiece(bB);