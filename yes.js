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

function convert2htmlID(jQ){
  return document.getElementById(jQ.attr('id'));
}

function existsinArray(arg, arr){
    for (var i =0; i<arr.length;i++){
        if (arr[i] == arg){
            return true;
        }
    }
    return false;
}

function resetAndSwitch(Turn){
 selectedCellID = "";
 movedCellID = "";
 selectedActionCellID = "";
 selectedPiece = undefined;
 selectedCellMovement = [];
 selectedCellDamage = [];
    if (Turn){
        isWhite = (isWhite ? false:true);
    }
}

function bindSoldierWithCarriablePiece(isWhite,thisID){
  var thisIDhtml = document.getElementById(thisID);
  selectedPiece.Soldier = (isWhite) ? White.find(obj => obj.Pos == thisIDhtml.getAttribute("id")):Black.find(obj => obj.Pos == thisIDhtml.getAttribute("id"));            
  selectedPiece.Soldier.Pos = "";
  removeChild(thisIDhtml,false);
  movedCellID = selectedPiece.Pos;
  removeChild(document.getElementById(movedCellID),false);
  var temp = selectedPiece.html;
  selectedPiece.html = selectedPiece.html2;
  selectedPiece.html2 = selectedPiece.html;
  thisIDhtml.append(selectedPiece.html);  
  selectedPiece.Pos = thisID;
}

function removeChild(html,isJQ){
  if (!isJQ){
    while (html.firstChild) {
     html.removeChild(html.firstChild);
    }
    return;
  }
  removeChild(html,true);
}

//This is where I'll figure out how to move pieces...


$('#groundTable tr,#skyTable tr').each(function(){
    $(this).find('td').each(function(){
    	$(this).click(function(){

        //darkens selected cell
    		$(this).attr("style","background-color:#777777");
        //check to see if this id is within movement
        console.log()
        if ((typeof(selectedPiece)==='undefined')||!(existsinArray($(this).attr("id"),selectedCellMovement))){
          console.log($(this).attr("id"), selectedCellMovement);
          selectedCellMovement = [];

          //calls the Piece Object at the position
      		if (isWhite){selectedPiece = White.find(obj => obj.Pos == $(this).attr("id"));}
          else{selectedPiece = Black.find(obj => obj.Pos == $(this).attr("id"));}
          selectedCellID = $(this).attr('id');

          //has to check if the piece is defined in order to get the movement
          if (typeof(selectedPiece) !=='undefined'){
            selectedPiece.movement = calcMovement(selectedPiece);
            selectedCellMovement = selectedPiece.movement;
            console.log(selectedPiece);
              selectedPiece.movement.forEach(function(elm){
                if (document.getElementById("hMove").checked){
                  document.getElementById(elm).setAttribute("style","background-color:#ffff00"); //highlight movement
                }
              });
          }
    	  }
        else{
          //defining the action of movement here    
          if ( $(this).children().length > 0 ) {
            //If player wants to carry a soldier with HV or LUV
            if ((selectedPiece.rank.includes("HV")||selectedPiece.rank.includes('LUV'))&&selectedPiece.isW&&convert2htmlID($(this)).firstChild.getAttribute("src").includes('WhiteS')){
              bindSoldierWithCarriablePiece(isWhite,$(this).attr('id'));
            }
            else{
              //To capture a piece
              removeChild($(this),true);
              selectedPiece.Pos = $(this).attr('id');
              $(this).append(selectedPiece.html);
            }
          }
          else{
            //To move a piece          
            selectedPiece.Pos = $(this).attr('id');
            $(this).append(selectedPiece.html);
          }
        selectedPiece = undefined;
        selectedCellMovement = [];

        }
      });
    });
});




