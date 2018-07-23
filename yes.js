/**

Maybe have players choose different pieces/formations

Paratrooper Plane/Air-base system/refueling system?/Artillery

drop a bomb from air , creates trench?
Trench System such that when formed, movement becomes [0], but singular 'soldiers' cannot move past them, nor deal dmg, but vehicles can do dmg. Must decide on orientation of trench.

Add health of captured pieces to captor.\

If to Jets get to the same space, then they are not only out of game, but do dmg to ground

store moves if moving only 1/turn, cap 4-5

bobsled-lookin mfs just buff soldier mobility.

HMVs have dmg radius of solders, but when soldiers paired, deals higher radius of damage

because of radii of movement of pieces, consider making board bigger for start of game

either have predecided aerial formations/ snake draft positions

**/ 
Black.forEach(function(element) {
  if (element.rank.includes("S")){
        element.movement = calcS(element.Pos,false);
  }
  if (element.rank.includes("HV")){
    element.movement = calcHV(element.Pos);
  }
  if (element.rank.includes("LUV")){
    element.movement = calcLUV(element.Pos);
  }
  if (element.rank.includes("TT")){
    element.movement = calcT(element.Pos);
  }
  if (element.rank.includes("AA")){
    element.movement = calcAA(element.Pos);
  }
  if (element.rank.includes("J")){
    element.orientation= 1;
    element.movement = calcJ(element.Pos,1);
  }
  if (element.rank.includes("B")){
    element.orientation= 1;
    element.movement = calcB(element.Pos,1);
  }
});

White.forEach(function(element) {
  if (element.rank.includes("S")){
        element.movement = calcS(element.Pos,false);
  }
  if (element.rank.includes("HV")){
    element.movement = calcHV(element.Pos);
  }
  if (element.rank.includes("LUV")){
    element.movement = calcLUV(element.Pos);
  }
  if (element.rank.includes("TT")){
    element.movement = calcT(element.Pos);
  }
  if (element.rank.includes("AA")){
    element.movement = calcAA(element.Pos);
  }
  if (element.rank.includes("J")){
    element.orientation= 1;
    element.movement = calcJ(element.Pos,1);
  }
  if (element.rank.includes("B")){
    element.orientation= 1;
    element.movement = calcB(element.Pos,1);
  }
});
function existsinArray(arg, arr){
    for (var i =0; i<arr.length;i++){
        if (arr[i] = arg){
            return true;
        }
    }
    return false;
}

function resetAndSwitch(Turn){
    selectedPiece = {};
    selectedCellID = "";
    selectedActionCellID = "";
    selectedCellMovement = [];
    selectedCellDamage = [];
    if (Turn){
        isWhite = (isWhite ? false:true);
    }
}


//This is where I'll figure out how to move pieces...

$('#groundTable tr,#skyTable tr').each(function(){
    $(this).find('td').each(function(){
    	$(this).click(function(){
            if(selectedCellID==""){
                selectedCellID = "#"+$(this).attr('id');
                console.log(selectedCellID);
            }
            else{selectedActionCellID =  $(this).attr('id'); }
    		$(this).attr("style","background-color:#777777");
                if (selectedActionCellID!=""){
                    if (existsinArray(selectedActionCellID,selectedCellMovement)){
                        $(selectedActionCellID).empty();
                        $(selectedActionCellID).append(selectedPiece.html);
                        selectedPiece.Pos = selectedActionCellID;
                        resetAndSwitch(true);
                    }
                }

               else if (isWhite&&selectedCellID==""){
                    selectedPiece = White.find(function(obj){return obj.Pos === selectedCellID});
                    if (selectedPiece==undefined){selectedPiece={}; selectedCellID = ""}
                    else{
                        selectedCellMovement = selectedPiece.movement;
                        console.log(selectedCellMovement);
                    }

               }
               else if (selectedCellID!=""){
                    selectedPiece = Black.find(function(obj){return obj.Pos === selectedCellID});
                    if (selectedPiece==undefined){selectedPiece={};}
               }


            if ($('#hMove').is(':checked')){
                for(var el in selectedCellMovement){
                    $("#"+selectedActionCellID).attr("style","background-color:#ffff00");
                }
            }
    		//Save the movement array for valid pieces
    	});
    });
})




