class Piece{
	constructor(){
		this.name = null;
		this.health = null;
		this.damage = null;
		this.x = null;
		this.y = null;
		this.svg = null;
	}

	constructor(name,health,damage,x,y,svg){
		this.name = name;
		this.health = health;
		this.damage = damage;
		this.x = x;
		this.y = y;
		this.svg = svg;
	}

	
	get name(){return thisname;}
	get health(){return health;}
	get damage(){return damage;}
	get x(){return x;}
	get y(){return y;}
	get svg(){return svg;}

	set name(name){this.name=name;}
	set health(health){this.health=health}
	set damage(damage){this.damage = damage}

	ChangeXY(x,y){
		this.x = x;
		this.y = y;
	}
}

class MovablePiece extends Piece{
	constructor(){
		super();
		this.movement = null;
	}

	constructor(name,health,damage,x,y,svg,movement){
		super(name,health,damage,x,y,svg);
		this.movement = movement;
	}

	set movement(movement){this.movement = movement;}
	get movement(){this.movement = movement;}
}

class CarriablePiece extends MovablePiece{
	constructor(){
		super();
		this.soldier = null;
	}
	constructor(name,health,damage,x,y,svg,movement){
		super(name,health,damage,x,y,svg,movement);
		this.soldier = null;
	}

	set Soldier(soldier){this.soldier = soldier;}
	get Soldier(soldier){this.soldier = soldier;}

	removeSoldier(){
		Soldier soldier = this.Soldier;
		setSoldier(null);
		return soldier;
	}
}


//damage - damage piece can deal
//movement - array of potential legal moves to put your piece
//Position - Row,Column
//svg - String to draw shape of svg


//var Flag = new Piece();

//var Soldier = new MovablePiece();

//Utility Vehicle
//Light Utility Vehicle+Armored Personal Carrier
//var  UV = extend MovablePiece, {Soldier: null});


//var Tank = extend(MovablePiece);

//Anti-Air Gunner
//var AAG = extend(MovablePiece);