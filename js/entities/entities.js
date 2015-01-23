// BASIC PLAYER CLASS
// game.PlayerEntity both letters get to ne capital because it it a class
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
	},

	update: function(){


	}
});