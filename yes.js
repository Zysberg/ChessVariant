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

//Helper functions for processing action events
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

function resetAndSwitch(){
 turnCounter=0;
 selectedCellID = "";
 movedCellID = "";
 selectedActionCellID = "";
 selectedPiece = undefined;
 selectedCellMovement = [];
 selectedCellDamage = [];
 isWhite = (isWhite==true) ? false:true;
}

function move(cell){
  if (selectedPiece.rank.includes("J")||selectedPiece.rank.includes("B")){
    selectedPiece.orientation = rotateJB(selectedPiece.Pos,cell.attr('id'));
    var rotate;
    switch(selectedPiece.orientation) {
      case 1:
          rotate = 0;
          break;
      case 2:
          rotate = 90;
          break;
      case 3:
          rotate = 180;
          break;
      default:
          rotate = 270;
          console.log("help");
  } 
    console.log(rotate); 
    selectedPiece.html.style.transform = "rotate("+rotate+"deg)";
  }
  selectedPiece.Pos = cell.attr('id');
  cell.append(selectedPiece.html);
}

function bindSoldierWithCarriablePiece(isWhite,thisID){
  var thisIDhtml = document.getElementById(thisID);
  selectedPiece.Soldier = (isWhite==true) ? White.find(obj => obj.Pos == thisIDhtml.getAttribute("id")):Black.find(obj => obj.Pos == thisIDhtml.getAttribute("id"));            
  selectedPiece.Soldier.Pos = "";
  selectedPiece.rank = selectedPiece.rank.substring(0,selectedPiece.rank.length-1)+"S"+selectedPiece.rank.charAt(selectedPiece.rank.length-1);
  //switch html & html2 b = [a, a = b][0];
  removeChild(thisIDhtml,false);
  movedCellID = selectedPiece.Pos;
  removeChild(document.getElementById(movedCellID),false);
  thisIDhtml.append(selectedPiece.html2);  
  selectedPiece.Pos = thisID;
}

function unbindSoldier(jQthis){
          var getS = selectedPiece.Soldier;
          getS.Pos = jQthis.attr("id");
          selectedPiece.Soldier = undefined;
            empty(document.getElementById(selectedPiece.Pos));
            console.log( document.getElementById(selectedPiece.Pos));
            document.getElementById(selectedPiece.Pos).appendChild(selectedPiece.html);
            jQthis.append(getS.html);
            //switch html&html2 first
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
    resetAndSwitch();
  }
}

function empty(node){
while (node.hasChildNodes()) {
  node.removeChild(node.firstChild);
}
}

var DKEY = false;
var FKEY = false;

$(window).keydown(function(evt) {
  if (evt.which == 68) { // ctrl
    DKEY = true;
  }
  if (evt.which ==70){
    FKEY=true;
  }}).keyup(function(evt) {
  if (evt.which == 68) { // ctrl
    DKEY = false;
  }
  if (evt.which ==70){
    FKEY=false;
  }});

//User interaction
$('#groundTable tr,#skyTable tr').each(function(){
    $(this).find('td').each(function(){
    	$(this).click(function(){

        //darkens selected cell
    		$(this).attr("style","background-color:#777777");

        //DEPLOYMENT
        if (selectedCellDeploy.length>0){
            unbindSoldier($(this));
        }

        //MOVEMENT
        //check to see if this id is within movement or deploy
        if (!(existsinArray($(this).attr("id"),selectedCellMovement))&&!(existsinArray($(this).attr("id"),selectedCellDeploy))) {
          selectedCellMovement = [],selectedCellDeploy = [];
          //calls the Piece Object at the position
      		if (isWhite){selectedPiece = White.find(obj => obj.Pos == $(this).attr("id"));}
          else{selectedPiece = Black.find(obj => obj.Pos == $(this).attr("id"));}
          selectedCellID = $(this).attr('id');
          console.log(selectedPiece);

          //check to see if deployable
          if (DKEY&&(!(typeof(selectedPiece)==='undefined'))&&(selectedPiece.rank.includes("HVS")||selectedPiece.rank.includes("LUVS"))){
            selectedCellDeploy = remInvalidSpaces(cardinal(selectedPiece.Pos),selectedPiece.Pos,"HVS");
            selectedCellDeploy.forEach(function(elm){document.getElementById(elm).setAttribute("style","background-color:#0000FF");});
          }
          else{
            //collects and highlights available places to move piece
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
    	  }

        else if (selectedCellDeploy==0){
          //defining the action of movement here    
          if ( $(this).children().length > 0 ) {
            //If player wants to carry a soldier with HV or LUV
            if ((selectedPiece.rank.includes("HV")||selectedPiece.rank.includes('LUV'))&&(convert2htmlID($(this)).firstChild.getAttribute("src").includes('WhiteS'))||convert2htmlID($(this)).firstChild.getAttribute("src").includes('BlackS')){
              if (selectedPiece.Soldier==""){
                bindSoldierWithCarriablePiece(isWhite,$(this).attr('id'));
              }
            }
            else{$(this).empty(); move($(this));//To capture a piece 
            }
          }
        else{move($(this));}//To move a piece    
        tick();
      }
      //MOVEMENT


      });
    });
});




