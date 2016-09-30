var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner');

// var pg = require('pg');
// var client = new pg.Client(db);
// client.connect();
// console.log(client);



module.exports = db;
