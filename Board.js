//Declaring variables


//Generates the Board
function makeBoard() {
    for (var i = 0; i < 10; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 10; j++) {
            var cell = color(i, j);
            row.appendChild(cell);
        }
        htmlBoard.appendChild(row);
    }
}

//Color Helper
function cellColor(cell,i,j){
	    if ((i + j) % 2 == 0) {
            cell.setAttribute("style", "background-color: #195919")
        } else {
            cell.setAttribute("style", "background-color: #339933")
        }
}

//Controls color of cells
function color(i, j) {
    var cell = document.createElement("td");
    cell.setAttribute("id", i + " " + j);
    var cellText = document.createTextNode("");
    cell.appendChild(cellText);
    cellColor(cell,i,j);
    cell.addEventListener("mouseout", function() {cellColor(cell,i,j);})
    cell.addEventListener("mouseover", function() {this.setAttribute("style", "background-color:#aaaaaa")});
    cell.addEventListener("click", function(){this.setAttribute("style","background-color:#777777")})
    return cell;
}



//Calls Necessary Functions
makeBoard();
document.getElementById('0 0').appendChild(blackAA1);

document.getElementById('1 0').appendChild(blackAA);


document.getElementById('0 1').appendChild(whiteAA1);

document.getElementById('1 1').appendChild(whiteAA);