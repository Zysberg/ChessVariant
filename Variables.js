var groundBoard = document.getElementById("groundTable");
var skyBoard = document.getElementById("skyTable");
var hMove = document.getElementById("hMove");

var wDir = "Images/White/White", bDir = "Images/Black/Black";
var wAAimg = wDir+"AA.png", bAAimg = bDir+"AA.png";
var wBimg =  wDir+"B.png", bBimg =  bDir+"B.png";
var wDimg =  wDir+"D.png", bDimg =  bDir+"D.png";
var wFimg = wDir+"F.png", bFimg = bDir+"F.png";
var wHVimg = wDir+"HV.png", bHVimg = bDir+"HV.png";
var wHVSimg = wDir+"HVS.png", bHVSimg = bDir+"HVS.png";
var wJimg = wDir+"J.png", bJimg = bDir+"J.png";
var wLUVimg = wDir+"LUV.png", bLUVimg = bDir+"LUV.png";
var wLUVSimg = wDir+"LUVS.png", bLUVSimg = bDir+"LUVS.png";
var wSimg = wDir+"S.png", bSimg = bDir+"S.png";
var wTTimg = wDir+"TT.png", bTTimg = bDir+"TT.png";



//Soldiers, Anti-Air guns, Light Utility Vehicles
var blackSs = [], whiteSs = [], blackAAs = [],whiteAAs = [], blackLUVs = [],whiteLUVs = [], whiteTTs = [], blackTTs = [], whiteHVs = [], blackHVs = [];

for (var i = 0;i<10;i++){
    if (i<2){
        //AAs
        var bAA = document.createElement("IMG"); bAA.src = bAAimg;
        var wAA = document.createElement("IMG"); wAA.src = wAAimg;
        var blackPos = (i==0 ? "g0 0":"g0 9"), whitePos =  (i==0 ? "g9 0":"g9 9");
        whiteAAs[i] = MovablePiece("AA",true,6,whitePos,wAA,[]); 
        blackAAs[i] = MovablePiece("AA",false,6,blackPos,bAA,[]); 

        //LUVs
        var bLUV = document.createElement("IMG"); bLUV.src = bLUVimg;
        var wLUV = document.createElement("IMG"); wLUV.src = wLUVimg;
        blackPos = (i==0 ? "g1 1":"g1 8"); whitePos = (i==0 ? "g8 1":"g8 8");
        whiteLUVs[i] = CarriablePiece("LUV",true,3,whitePos,wLUV,[]);
        blackLUVs[i] = CarriablePiece("LUV",false,3,blackPos,bLUV,[]);

        var bHV = document.createElement("IMG"); bHV.src = bHVimg;
        var wHV = document.createElement("IMG"); wHV.src = wHVimg;
        blackPos = (i==0 ? "g0 3": "g0 6"); whitePos = (i==0? "g9 3":"g9 6");
        whiteHVs[i] = CarriablePiece("HV",true,5,whitePos,wHV,[]);
        blackHVs[i] = CarriablePiece("HV",false,5,blackPos,bHV,[]);
    }

    if (i<3){
        var bT = document.createElement("IMG"); bT.src = bTTimg;
        var wT = document.createElement("IMG"); wT.src = wTTimg;
        var blackPos = (i==0 ? "g0 2" : (i==1) ? "g0 4": "g0 7"); var whitePos = (i==0 ? "g9 2" : (i==1) ? "g9 5": "g9 7");
        blackTTs[i] = MovablePiece("TT ",false,7,blackPos,bT,[]);
        whiteTTs[i] = MovablePiece("TT",true,7,whitePos,wT,[]);
    }


    var bS = document.createElement("IMG"); bS.src = bSimg;
    var blackPos = (i==1 || i==8 ? "g"+0+" "+i:"g"+1+" "+i); 
    blackSs[i] = MovablePiece("S",false,2,blackPos,bS,[]);

    var wS = document.createElement("IMG"); wS.src = wSimg; 
    whitePos = (i==1 || i==8 ? "g"+9+" "+i:"g"+8+" "+i);
    whiteSs[i] = MovablePiece("S",true,2,whitePos,wS,[]);
}


//Flags
var bFHTML = document.createElement("IMG"); bFHTML.src = bFimg;
var bF = Piece("F", false,10,"g0 5",bFHTML);

var wFHTML = document.createElement("IMG"); wFHTML.src = wFimg;
var wF = Piece("F", true, 10, "g9 4", wFHTML);

