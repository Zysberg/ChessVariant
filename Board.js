//Generates the Board
function makeBoard() {
    for (var i = 0; i < 10; i++) {
        var row = document.createElement("tr");
        var row1 = document.createElement("tr");
        for (var j = 0; j < 10; j++) {
            var cell = createGroundCell(i, j);
            var cell1 = createSkyCell(i,j);
            row.appendChild(cell);
            row1.appendChild(cell1);
        }
        groundBoard.appendChild(row);
        skyBoard.appendChild(row1);
    }
}

//Color Helper
function cellColor(cell,i,j){
	    if ((i + j) % 2 == 0) {cell.setAttribute("style", "background-color: #195919")} 
	    else {cell.setAttribute("style", "background-color: #339933")}
}

//Creates General Cell
function createCell(GS,i,j){
	var cell = document.createElement("td");
    cell.setAttribute("id",GS+""+i + " " + j);
    cell.setAttribute("align","center");
    cell.addEventListener("click", function(){this.setAttribute("style","background-color:#777777")});
    return cell;
}

//creates Ground Cell
function createGroundCell(i, j) {
	var cell = createCell('g',i,j);
    cellColor(cell,i,j);
    cell.addEventListener("mouseout", function() {cellColor(cell,i,j);})
    cell.addEventListener("mouseover", function() {this.setAttribute("style", "background-color:#aaaaaa")});
    return cell;
}

//Creates SkyCell
function createSkyCell(i,j){
	var cell1 = createCell('s',i,j);
	cell1.addEventListener("mouseout",function(){this.style=""})
	return cell1;
}

//Puts Pieces on the Board
function placePiece(obj){
	var cell = document.getElementById(obj.Pos);
	cell.appendChild(obj.html);
	if (obj.html2&&(!obj.rank.includes("LUV"))&&(!obj.rank.includes("HV"))){
		var cell2 = document.getElementById("s"+obj.Pos.substring(1));
		cell2.appendChild(obj.html2);
	}
}




//Calls Necessary Functions
makeBoard();

for (var i = 0; i<Black.length;i++){
		placePiece(Black[i]);
		placePiece(White[i]);
}