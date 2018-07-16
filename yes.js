function placePiece(obj){
	var cell = document.getElementById(obj.Pos);
	cell.appendChild(obj.html);
}

for (var j = 0; j<10; j++){
	if (j<2){
		placePiece(whiteAAs[j]);
		placePiece(blackAAs[j]);
		placePiece(whiteLUVs[j]);
		placePiece(blackLUVs[j]);
		placePiece(whiteHVs[j]);
		placePiece(blackHVs[j]);
	}
	if (j<3){
		placePiece(whiteTTs[j]);
		placePiece(blackTTs[j]);
	}
	placePiece(blackSs[j]);
	placePiece(whiteSs[j]);
}

placePiece(bF);
placePiece(wF);
