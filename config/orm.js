const connection = require("./connection.js");

// Object Relational Mapper (ORM)

const orm = {
	selectAll: function(tableName) {
		let queryString = `SELECT * FROM ${tableName};`;
		connection.query(queryString, (err, result) => {
			if (err) throw err;

			console.log(result);
			return result;
		});
  	},
	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result) {
	  		if (err) {
				throw err;
	  		}
	  		cb(result);
		});
  	},
  	updateOne: function(table, objColVals, condition, cb) {
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			cb(result);
		});
  	}
};

module.exports = orm;