// BASIC PLAYER CLASS
// game.PlayerEntity both letters get to be capital because it it a class
// init: function is our fucntion constructor
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

			this.body.setVelocity(5, 0);

	},

	update: function(){
		if(me.input.isKeyPressed("right")){

			this.body.vel.x += this.body.accel.x * me.timer.tick;
		}
		else{
			this.body.vel.x = 0;
		}

		this.body.vel.update(delta);
		return true;
	}
});