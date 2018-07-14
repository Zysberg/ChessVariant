var Orientation = 1;

var BoardArr = [
    [, , , , ],
    [, , , , ],
    [, , , , ],
    [, , , , ],
    [, , , , ],
    [, , , , ],
    [, , , , ],
    [, , , , ],
    [, , , , ],
    [, , , , ]
];

var groundBoard = document.getElementById("groundTable");
var skyBoard = document.getElementById("skyTable");
var hMove = document.getElementById("hMove");

var whiteAA = document.createElement("IMG");
whiteAA.src = "Images/White/WhiteAA.png";
var whiteAA2 = document.createElement("IMG");
whiteAA2.src = whiteAA.src;

groundBoard.getChildren().getElementById("3 4").appendChild(whiteAA);
groundBoard.getElementById("5 7").appendChild(whiteAA);


var wAA = new MovablePiece();
wAA.Pos = 3+" "+4;
wAA.name = "AA";
wAA.health = 5;
wAA.svg = whiteAA;
movement = calcAA(wAA);
range = 5;

var Pieces = [];
