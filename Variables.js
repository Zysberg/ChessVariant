var groundBoard = document.getElementById("groundTable");
var skyBoard = document.getElementById("skyTable");
var hMove = document.getElementById("hMove");

var wDir = "Images/White/White", bDir = "Images/Black/Black";

//Soldiers, Anti-Air guns, Light Utility Vehicles
var blackSs = [], whiteSs = [], blackAAs = [],whiteAAs = [], blackLUVs = [],whiteLUVs = [], whiteTTs = [], blackTTs = [], whiteHVs = [], blackHVs = [], blackJs = [], whiteJs =[]; 

//Flags
var bF = generatePiece("F",false,"P",10,"g0 5",0);
var wF = generatePiece("F",true,"P", 10, "g9 4",0);

for (var i = 0;i<10;i++){
    var blackPos;
    var whitePos;
    if (i<2){
        //AAs
        blackPos = (i==0 ? "g0 0":"g0 9"), whitePos =  (i==0 ? "g9 0":"g9 9");
        whiteAAs[i] = generatePiece("AA",true,"M",6,whitePos,i);
        blackAAs[i] = generatePiece("AA",false,"M",6,blackPos,i);

        //LUVs
        blackPos = (i==0 ? "g1 1":"g1 8"); whitePos = (i==0 ? "g8 1":"g8 8");
        whiteLUVs[i] = generatePiece("LUV",true,"C",3,whitePos,i);
        blackLUVs[i] = generatePiece("LUV",false,"C",3,blackPos,i);

        //HVs
        blackPos = (i==0 ? "g0 3": "g0 6"); whitePos = (i==0? "g9 3":"g9 6");
        whiteHVs[i] = generatePiece("HV",true,"C",5,whitePos,i);
        blackHVs[i] = generatePiece("HV",false,"C",5,blackPos,i);
    }

    if (i<3){
        //TTs
        blackPos = (i==0 ? "g0 2" : (i==1) ? "g0 4": "g0 7"); whitePos = (i==0 ? "g9 2" : (i==1) ? "g9 5": "g9 7");
        blackTTs[i] = generatePiece("TT",false,"M",7,blackPos,i);
        whiteTTs[i] = generatePiece("TT",true,"M",7,whitePos,i);
    }

    if (i<5){
        whitePos = (i==0 ? "s8 1" : (i==1)? "s8 3": (i==2)? "s7 4": (i==3)? "s8 5": "s8 8");
        blackPos = (i==0 ? "s1 1": (i==1)? "s1 4": (i==2)? "s2 5":(i==3)? "s1 6": "s1 8");
        whiteJs[i] = generatePiece("J",true,"M",4,whitePos,i);
        blackJs[i] = generatePiece("J",false,"M",4,blackPos,i);

    }

    blackPos = (i==1 || i==8 ? "g"+0+" "+i:"g"+1+" "+i); 
    blackSs[i] = generatePiece("S",false,"M",2,blackPos,i);
 
    var whitePos = (i==1 || i==8 ? "g"+9+" "+i:"g"+8+" "+i);
    whiteSs[i] = generatePiece("S",true,"M",2,whitePos,i);

}

//Bombers
var bB = generatePiece("B",false,"M",6,"s1 5",0);
var wB = generatePiece("B",true,"M",6,"s8 4",0);

var Black = blackSs.concat(blackAAs,blackLUVs,blackTTs,blackHVs,blackJs);
var White = whiteSs.concat(whiteAAs,whiteLUVs,whiteTTs,whiteHVs,whiteJs);
