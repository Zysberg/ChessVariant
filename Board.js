//Declaring variables


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

//creates Ground Cell
function createGroundCell(i, j) {
    var cell = document.createElement("td");
    cell.setAttribute("id", i + " " + j);
    cell.setAttribute("align","center");
    // var cellText = document.createTextNode("");
    // cell.appendChild(cellText);
    cellColor(cell,i,j);
    cell.addEventListener("mouseout", function() {cellColor(cell,i,j);})
    cell.addEventListener("mouseover", function() {this.setAttribute("style", "background-color:#aaaaaa")});
    cell.addEventListener("click", function(){this.setAttribute("style","background-color:#777777")})
    return cell;
}

//Creates SkyCell
function createSkyCell(i,j){
	var cell1 = document.createElement("td");
	cell1.setAttribute("id",i+" "+j);
	cell1.setAttribute("align","center");
	var cellText1 = document.createTextNode("");
	cell1.appendChild(cellText1);
	cell1.addEventListener("click", function(){this.setAttribute("style","background-color:#777777")});
	cell1.addEventListener("mouseout",function(){this.style=""})
	 return cell1;
}



//Calls Necessary Functions
makeBoard();
