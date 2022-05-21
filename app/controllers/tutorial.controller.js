// what is a "controller" ???

const db = require("../models");
const Tutorial = db.tutorials;

// what export.#functionname does ?

//Create and Save a new Tutorial
exports.create = (req, res) => {
  let msg = "Create and Save a new Tutorial";
  console.log(msg);
  res.json({ message: msg});
};

// Retrieve all Tutorials from the database
exports.findAll = (req, res) => {
  let msg = "Retrieve all Tutorials from the database";
  console.log(msg);
  res.json({ message: msg});
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  let msg = "Find all published Tutorials";
  console.log(msg);
  res.json({ message: msg});
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  let msg = "Find a single Tutorial with an id";
  console.log(msg);
  res.json({ message: msg});
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  let msg = "Update a Tutorial by the id in the request";
  console.log(msg);
  res.json({ message: msg});
};

// Delete a Tutorial by the id in the request
exports.delete = (req, res) => {
  let msg = "Delete a Tutorial by the id in the request";
  console.log(msg);
  res.json({ message: msg});
};

// Delete all Tutorials from the database
exports.deleteAll = (req, res) => {
  let msg = "Delete all Tutorials from the database";
  console.log(msg);
  res.json({ message: msg});
};
