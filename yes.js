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
 turnCounter=0;
 selectedCellID = "";
 movedCellID = "";
 selectedActionCellID = "";
 selectedPiece = undefined;
 selectedCellMovement = [];
 selectedCellDamage = [];
    if (Turn){
        isWhite = (isWhite==true ? false:true);
    }
}

function move(cell){
  selectedPiece.Pos = cell.attr('id');
  cell.append(selectedPiece.html);
}

function bindSoldierWithCarriablePiece(isWhite,thisID){
  var thisIDhtml = document.getElementById(thisID);
  selectedPiece.Soldier = (isWhite) ? White.find(obj => obj.Pos == thisIDhtml.getAttribute("id")):Black.find(obj => obj.Pos == thisIDhtml.getAttribute("id"));            
  selectedPiece.Soldier.Pos = "";
  selectedPiece.rank = selectedPiece.rank.substring(0,selectedPiece.rank.length-1)+"S"+selectedPiece.rank.charAt(selectedPiece.rank.length-1);
  console.log(selectedPiece.rank);
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
  html.empty();
}

function tick(){
  turnCounter++;
  if (turnCounter==2){
    resetAndSwitch(true);
  }
}

//This is where I'll figure out how to move pieces...


$('#groundTable tr,#skyTable tr').each(function(){
    $(this).find('td').each(function(){
    	$(this).click(function(){
        //darkens selected cell
    		$(this).attr("style","background-color:#777777");




        //MOVEMENT


        //check to see if this id is within movement
        if ((typeof(selectedPiece)==='undefined')||!(existsinArray($(this).attr("id"),selectedCellMovement))){
          selectedCellMovement = [];

          //calls the Piece Object at the position
      		if (isWhite){selectedPiece = White.find(obj => obj.Pos == $(this).attr("id"));}
          else{selectedPiece = Black.find(obj => obj.Pos == $(this).attr("id"));}
          selectedCellID = $(this).attr('id');
          console.log(selectedPiece.rank);

          //has to check if the piece is defined in order to get the movement
          if (typeof(selectedPiece) !=='undefined'){
            selectedPiece.movement = calcMovement(selectedPiece);
            selectedCellMovement = selectedPiece.movement;
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
            if ((selectedPiece.rank.includes("HV")||selectedPiece.rank.includes('LUV'))&&convert2htmlID($(this)).firstChild.getAttribute("src").includes('WhiteS')){
              if (selectedPiece.Soldier==""){
                bindSoldierWithCarriablePiece(isWhite,$(this).attr('id'));
              }
            }
            else{
              //To capture a piece
              $(this).empty();
              move($(this));
            }
          }
        else{ move($(this));}             //To move a piece    
        tick();
      }
      //MOVEMENT
      });
    });
});




