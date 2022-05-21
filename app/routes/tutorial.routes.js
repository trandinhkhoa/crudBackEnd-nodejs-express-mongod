const { router } = require("express/lib/application");

// what does module.exports do ???
module.exports = app => {
  const tutorial = require("../controllers/tutorial.controller.js");
  var router = require("express").Router();
  //Create a new Tutorial
  router.post("/", tutorial.create);
  // Retrieve all tutorials
  router.get("/", tutorial.findAll);
  // Retrieve all published tutorials
  router.get("/published", tutorial.findAllPublished);
  // Retrieve a single tutorial with id
  router.get("/:id", tutorial.findOne);
  // Update a single tutorial with id
  router.put("/:id", tutorial.update);
  // delete a single tutorial with id
  router.delete("/:id", tutorial.delete);
  // delete all tutorials
  router.delete("/", tutorial.deleteAll);

  // what does this line do ???
  app.use('/api/tutorials', router);
}