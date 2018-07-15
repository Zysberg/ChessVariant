var groundBoard = document.getElementById("groundTable");
var skyBoard = document.getElementById("skyTable");
var hMove = document.getElementById("hMove");

wDir = "Images/White/White";
bDir = "Images/Black/Black";

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

var wTimg = wDir+"T.png", wTimg = bDir+"T.png";


//Soldiers, Anti-Air guns, Light Utility Vehicles
var blackSs = [], whiteSs = [], blackAAs = [],whiteAAs = [];

var blackLUVs = [];

for (var i = 0;i<10;i++){
    if (i<2){
        //AAs
        var bAA = document.createElement("IMG"); bAA.src = bAAimg;
        var wAA = document.createElement("IMG"); wAA.src = wAAimg;
        whiteAAs[i] = AA(wAA,true); whiteAAs[i].Pos = (i==0 ? "g9 0":"g9 9");
        blackAAs[i] = AA(bAA,false); blackAAs[i].Pos = (i==0 ? "g0 0":"g0 9");

        //LUVs
        var bLUV = document.createElement("IMG"); bLUV.src = bLUVimg;
        var wLUV = document.createElement("IMG"); wLUV.src = wLUVimg;
    }

    var bS = document.createElement("IMG"); bS.src = bSimg; blackSs[i] = S(bS,false);
    var wS = document.createElement("IMG"); wS.src = wSimg; whiteSs[i] = S(wS,true);
    blackSs[i].Pos = (i==1 || i==8 ? "g"+0+" "+i:"g"+1+" "+i);
    whiteSs[i].Pos = (i==1 || i==8 ? "g"+9+" "+i:"g"+8+" "+i);
}


//Flags
var bFHTML = document.createElement("IMG"); bFHTML.src = bFimg;
var bF = new F(bFHTML,false);
bF.Pos = "g0 5";

var wFHTML = document.createElement("IMG"); wFHTML.src = wFimg;
var wF = new F(wFHTML,true);
wF.Pos = "g9 4";

