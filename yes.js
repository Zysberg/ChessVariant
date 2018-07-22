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




