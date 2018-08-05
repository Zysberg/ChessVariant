# Stratos' Game
A turn-based tactical board game.

## Background
Stratos' Game, in essence, is a combination of Stratego, Sid Meier's Ace Patrol, and Chess. The objective of the player is to capture (or destroy) the oponent's flag. 

### How to Play
Each turn consists of two legal moves, except on white's first turn, in which white makes 1 legal move.

##### Movement
Simply click on the piece you want to move, then click to a space within the range of movment. To know which spaces a piece is able to move to, click on the "Highlight Movement" checkbox. To deselect the piece, click on an empty cell not within the range of movement.

##### Carrying/Deploying
Certain pieces can 'Carry' others. Simply move a carriable piece to a piece within range. Because you are carrying a piece, that combined piece may have a wider range of movement! To unequip the piece, hold down the 'D' key, then selected the combined piece, click on a blue cell to drop the carried piece.

##### Dealing Damage
Hold the 'F' key while clicking on a piece; then click on one of the red-highlighted squares. Each piece has a different range of attack!

### Important Gameplay Mechanics

##### Two Boards
The light-blue board is supposedly 'on top' of the green and dark green board, certain pieces can deal damage to the other board. 

##### 'Plane Movement'
Orientation of the pieces on the light-blue square is crucial to how the piece moves.

##### 'Plane Crashes'
If two of any-colored pieces on the light-blue board occupy the same space, they are both removed from the game and deal damage to any piece of the dark green board within a 1-space radius.


### Potential Updates

*Refactoring, debugging, and optimizing for cleaner code
*Including different pieces & gameplay elements
 -'Paratrooper plane'
 -'Refueling system'
 -'Trench system'
 -Add health of captured Pieces to captor.
 -Storing moves if only making 1 move per turn.
 -Allow for custom starting positions/formations
