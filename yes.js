/**

Maybe have players choose different pieces/formations


Paratrooper Plane/Air-base system/refueling system?/Artillery

Trench System such that when formed, movement becomes [0], but singular 'soldiers' cannot move past them, nor deal dmg, but vehicles can do dmg. Must decide on orientation of trench.


**/ 



//This is where I'll figure out how to move pieces...

var selectedCellID = "";
var selectedCellMovement = [];
var groundBoard = document.getElementById("groundTable");
$('#groundTable tr').each(function(){
    $(this).find('td').each(function(){

    	$(this).click(function(){
    		$(this).attr("style","background-color:#777777");
    		//Save the movement array for valid pieces
    	});

	// cell.addEventListener('mousedown',function(){
	// 	//get Movement Array through finding Object with Pos== cell ID
	// 	if (hMove.checked){

	// 	}
	// });

	// cell.addEventListener('mouseout',)

        //do your stuff, you can use $(this) to get current cell
    })
})




