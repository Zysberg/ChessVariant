//Declaring variables


//Generates the Board
function makeBoard() {
    for (var i = 0; i < 10; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 10; j++) {
            var cell = createCell(i, j);
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
function createCell(i, j) {
    var cell = document.createElement("td");
    cell.setAttribute("id", i + " " + j);
    cell.setAttribute("align","center");
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
//
document.getElementById('0 2').appendChild(blackS);

document.getElementById('1 2').appendChild(blackS1);

document.getElementById('0 3').appendChild(whiteS);

document.getElementById('1 3').appendChild(whiteS1);
//
document.getElementById('0 4').appendChild(blackHV);

document.getElementById('1 4').appendChild(blackHV1);

document.getElementById('0 5').appendChild(whiteHV);

document.getElementById('1 5').appendChild(whiteHV1);
//
document.getElementById('0 6').appendChild(blackT);

document.getElementById('1 6').appendChild(blackT1);

document.getElementById('0 7').appendChild(whiteT);

document.getElementById('1 7').appendChild(whiteT1);
//
document.getElementById('0 8').appendChild(blackD);

document.getElementById('1 8').appendChild(blackD1);

document.getElementById('0 9').appendChild(whiteD);

document.getElementById('1 9').appendChild(whiteD1);
//
document.getElementById('6 4').appendChild(whiteF);

document.getElementById('7 5').appendChild(blackF);
//
document.getElementById('7 1').appendChild(blackJ);

document.getElementById('8 1').appendChild(blackJ1);

document.getElementById('7 2').appendChild(whiteJ);

document.getElementById('8 2').appendChild(whiteJ1);

document.getElementById('7 7').appendChild(blackJ2);

document.getElementById('8 7').appendChild(blackJ3);

document.getElementById('7 8').appendChild(whiteJ2);

document.getElementById('8 8').appendChild(whiteJ3);