// BASIC PLAYER CLASS
// game.PlayerEntity both letters get to be capital because it it a class
// init: function is our function constructor
// init: function initializes player
// this._super means reaching to the constructor of the entity
// spriteheight and spritewidth are telling us what the size of the image is
// new me.Rect is the rectangle the player can walk into
game.PlayerEntity = me.Entity.extend({
	init: function(x, y, settings) {
			this._super(me.Entity, 'init', [x, y, {
				image: "player",
				width: 64,
				height: 64,
				spritewidth: "64",
				spriteheight: "64",
				getShape: function() {
					return(new me.Rect (0, 0, 64, 64)).toPolygon();
				}
			}]);

			this.body.setVelocity(5, 20);

			this.renderable.addAnimation("idle", [78]);
			this.renderable.addAnimation("walk", [117, 118, 119, 120, 121, 123, 124, 125], 80);

			this.renderable.setCurrentAnimation("idle");
	},

	update: function(delta){
			if(me.input.isKeyPressed("right")){
			// adds the pos. of my x by adding the velocity defined above in
			// setVelocity() and multiplying it by me.timer.tick
			// me.timer.tick makes the movement smooth
			this.body.vel.x += this.body.accel.x * me.timer.tick;
			this.flipX(true);
			// flips character
			// animates the character
		}
		else{
			this.body.vel.x = 0;
		}
   if(this.body.vel.x !== 0) {
	if(!this.renderable.isCurrentAnimation("walk")){
		this.renderable.setCurrentAnimation("walk");
	}
	}else{
		this.renderable.setCurrentAnimation("idle");
	}




	this.body.update(delta);

	this._super(me.Entity, "update", [delta]);
	return true;
}
});