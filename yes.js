function placePiece(obj){
	var cell = document.getElementById(obj.Pos);
	cell.appendChild(obj.html);
}

for (var j = 0; j<10; j++){
	if (j<2){
		placePiece(whiteAAs[j]);
		placePiece(blackAAs[j]);
	}
	placePiece(blackSs[j]);
	placePiece(whiteSs[j]);
}

placePiece(bF);
placePiece(wF);
