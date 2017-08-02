const orm = require('../config/orm.js');

// Burger ORM
const burger = {
	// Get all burgers
  all: function(cb) {
    orm.selectAll('burgers', (res) => {
      cb(res);
    });
	},
	
	// Update a burger
	update: function(id,cb) {
		orm.update('burgers', id, (res) => {
			cb(res);
		});
	},

	// Create a burger
	create: function(name, cb) {
		orm.create('burgers', name, (res) => {
			cb(res);
		});
	}
}

module.exports = burger;