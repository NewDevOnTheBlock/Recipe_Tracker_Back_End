// create an express router
const router = require("express").Router();
// import recipes controller
const controller = require("./recipes.controller")
// import method not allowed
const methodNotAllowed = require("../errors/methodNotAllowed")
// define API endpoints

// 2) recipe read route
// includes: 
// - read for reading a specific recipe by id
// - put for updating a specific recipe by id
// - delete for deleting a specific recipe by id
router.route("/:recipe_id")
.get(controller.read)
.put(controller.update)
.delete(controller.delete)
.all(methodNotAllowed)

// 1) recipes list route
    // includes:
        // - list for reading all recipes
        // - post for adding new recipes
        // - method not allowed for all others
router.route("/")
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed)
    
module.exports = router;