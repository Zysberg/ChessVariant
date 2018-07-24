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
    element.orientation= 3;
    element.movement = calcB(element.Pos,3);
  }
});

White.forEach(function(element) {
  if (element.rank.includes("S")){
        element.movement = calcS(element.Pos,true);
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

        //darkens selected cell
    		$(this).attr("style","background-color:#777777");

        //check to see if this id is within movement TODO
        // if (!selectedCellMovement.contains($(this).attr("id"))){
        //   selectedCellMovement.forEach(function(elm){})
        // }

        //calls the Piece Object at the position
        if (typeof(selectedPiece) ==='undefined'){
    		    if (isWhite){
              selectedPiece = White.find(obj => obj.Pos == $(this).attr("id"));console.log(selectedPiece);
           }
            else{
              selectedPiece = Black.find(obj => obj.Pos == $(this).attr("id"));
            }
        }

        //has to check if the piece is defined in order to get the movement
        if (typeof(selectedPiece) !=='undefined'){
          selectedCellMovement = selectedPiece.movement;
            selectedPiece.movement.forEach(function(elm){
              document.getElementById(elm).setAttribute("style","background-color:#ffff00"); //highlight movement
              // document.getElementById(elm).setAttribute("class","hMovement");
            })
        }
        selectedPiece = undefined;
    	});
    });
})




