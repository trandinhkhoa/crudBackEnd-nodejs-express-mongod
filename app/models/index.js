const dbConfig = require("../config/db.config.js");

// In terms of Node.js, `mongodb` is the native "driver" for interacting with a mongodb instance
// `mongoose` is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks
// what is a "object modeling tool" ???
// what is a "driver" ???
const mongoose = require("mongoose");

// what is global ???
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.tutorials = require("./tutorial.model.js")(mongoose)
// what does module.export do ???
// what is Inteface in javascript ???
module.exports = db;