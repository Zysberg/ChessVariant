 /**

Maybe have players choose different pieces/formations

Paratrooper Plane/Air-base system/refueling system?/Artillery

drop a bomb from air , creates trench?
Trench System such that when formed, movement becomes [0], but singular 'soldiers' cannot move past them, nor deal dmg, but vehicles can do dmg. Must decide on orientation of trench.

Add health of captured pieces to captor.\

store moves if moving only 1/turn, cap 4-5

because of radii of movement of pieces, consider making board bigger for start of game

either have predecided aerial formations/ snake draft positions

**/ 



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
        if (!(existsinArray($(this).attr("id"),selectedCellMovement))&&!(existsinArray($(this).attr("id"),selectedCellDeploy)) &&!(existsinArray(($(this).attr("id")),selectedCellDamage))) {
          selectedCellMovement = [],selectedCellDeploy = [];
          //calls the Piece Object at the position
      		if (isWhite){selectedPiece = White.find(obj => obj.Pos == $(this).attr("id"));}
          else{selectedPiece = Black.find(obj => obj.Pos == $(this).attr("id"));}
          selectedCellID = $(this).attr('id');

          //check to see if deployable
          if (DKEY&&(!(typeof(selectedPiece)==='undefined'))&&(selectedPiece.rank.includes("HVS")||selectedPiece.rank.includes("LUVS"))){
            selectedCellDeploy = remInvalidSpaces(cardinal(selectedPiece.Pos),selectedPiece.Pos,"HVS");
            selectedCellDeploy.forEach(function(elm){document.getElementById(elm).setAttribute("style","background-color:#0000FF");});
          }

          if (FKEY&&(!(typeof(selectedPiece)==='undefined'))){
            selectedCellDamage = dRemInvalidSpaces(dCalc(selectedPiece));
            selectedCellDamage.forEach(function(elm){document.getElementById(elm).setAttribute("style","background-color:#FF0000");});
          }
          else{
            //collects and highlights available places to move piece
            if (typeof(selectedPiece) !=='undefined'){
              selectedPiece.movement = calcMovement(selectedPiece);
              selectedCellMovement = selectedPiece.movement;
              selectedPiece.movement.forEach(function(elm){
                if (document.getElementById("hMove").checked&&!DKEY&&!FKEY){
                  document.getElementById(elm).setAttribute("style","background-color:#ffff00"); //highlight movement
                }
              });
            }
          }
    	  }

        else if (selectedCellDeploy==0){ //==0 same as ==[]
          if (selectedCellDamage.length>0){
            flicker($(this));
            var dmgPiece={};

            if (isWhite){dmgPiece = Black.find(obj => obj.Pos == $(this).attr("id"));}
            else{dmgPiece = White.find(obj => obj.Pos == $(this).attr("id"));}
            if ((typeof(dmgPiece) !=='undefined')){
                tick();
            }
            dmgPiece.health = dmgPiece.health-1;
            if (selectedPiece.rank.includes("B")){
              dmgPiece.health=dmgPiece.health-4;
            }
            if (dmgPiece.rank.includes("J")||dmgPiece.rank.includes("B")){
              dmgPiece.health-=1;
            }
            if (dmgPiece.health<1){
              $(this).empty();
              if (dmgPiece.rank.includes('F')){
               gameOver();
              }
              else if(dmgPiece.rank.includes("J")||dmgPiece.rank.includes("B")){
                planeCrash($(this.attr("id")));
              }
            }
        }
          //defining the action of movement here    
          else if ( $(this).children().length > 0 ) {
            //If player wants to carry a soldier with HV or LUV
            if ((selectedPiece.rank.includes("HV")||selectedPiece.rank.includes('LUV'))&&(convert2htmlID($(this)).firstChild.getAttribute("src").includes('WhiteS'))||convert2htmlID($(this)).firstChild.getAttribute("src").includes('BlackS')){
              if (selectedPiece.Soldier==""){
                bindSoldierWithCarriablePiece(isWhite,$(this).attr('id'));
              }
            }
            else{
              //Capturing Pieces
              $(this).empty(); 
              move($(this)); 
              if ($(this).attr("id").includes("s")){
                $(this).empty();
                //Plane captures other plane
                planeCrash($(this).attr("id"));
              }
              checkWinCondition($(this));
              tick();//To capture a piece 
            }
          }
          else{move($(this)); checkWinCondition($(this)); tick();}//To move a piece    
      }
      });
    });
});




