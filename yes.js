
function placePiece(obj){
	var cell = document.getElementById(obj.Pos);
	cell.appendChild(obj.html);
}

for (var i = 0; i<Black.length;i++){
		console.log(Black[i]);
		placePiece(Black[i]);
		placePiece(White[i]);
}
console.log(wF);
placePiece(wF);
placePiece(bF);
placePiece(wB);
placePiece(bB);