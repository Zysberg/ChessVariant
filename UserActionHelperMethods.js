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
 selectedCellDeploy = [];
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
  } 
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
  selectedPiece.html = [selectedPiece.html2, selectedPiece.html2 = selectedPiece.html][0];
  //switch html & html2 b = [a, a = b][0];
  removeChild(thisIDhtml,false);
  movedCellID = selectedPiece.Pos;
  removeChild(document.getElementById(movedCellID),false);
  thisIDhtml.append(selectedPiece.html);  
  selectedPiece.Pos = thisID;
  tick();
}

function unbindSoldier(jQthis){
          var getS = selectedPiece.Soldier;
          getS.Pos = jQthis.attr("id");
          selectedPiece.Soldier = undefined;
          selectedPiece.html = [selectedPiece.html2, selectedPiece.html2 = selectedPiece.html][0];
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
    if (isWhite){$('.Turn').attr('style','background-color:#FFFFFF;')}
    else{$('.Turn').attr('style','background-color:#000000;')}
  }
}

function flicker (jThis){
  window.setTimeout(function(){jThis.attr("style","background-color: #741A1A;")},1000);
  window.setTimeout(function(){jThis.attr("style","background-color: #FF0000;")},1000);
  window.setTimeout(function(){jThis.attr("style","background-color: #741A1A;")},1000);
}

function empty(node){while (node.hasChildNodes()) {node.removeChild(node.firstChild);}}

function checkWinCondition(jThis){
  if ((jThis).attr('id')==('g0 5')||(jThis).attr('id')==('g9 4')){
    gameOver();
  }
}


function gameOver(){
   $('#ground').empty();
   $('#sky').empty();
   if (isWhite){$("#Game").text("WHITE WINS")}
   else{$("#Game").text("BLACK WINS")}
}

var DKEY = false, FKEY = false;

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


function damageChild(Pos){
  document.getElementById(Pos).setAttribute("style","background-color:#741A1A;");
  if (document.getElementById(Pos).hasChildNodes()){
    var P = (typeof(White.find(obj => obj.Pos == Pos))=== 'undefined') ?  Black.find(obj => obj.Pos == Pos) : White.find(obj => obj.Pos == Pos);
    P.health-=2;
    //console.log("Attacked: "+Pos);
    if (P.health<1){
      empty(document.getElementById(Pos));
    }
  }
}

  function planeCrash(Pos){
    var RC = getRC(Pos);
    for (var i=-1;i<2;i++){
      damageChild("g"+(RC[0])+" "+(RC[1]+i));
      damageChild("g"+(RC[0]-1)+" "+(RC[1]+i)); 
      damageChild("g"+(RC[0]+1)+" "+(RC[1]+i)); 
    }
  }