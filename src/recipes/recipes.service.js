const knex = require("../db/connection")

// query for all recipes
function list() {
    return knex("recipes").select("*")
}
// create a new recipe
function create(newRecipe) {
    return knex("recipes")
        .insert(newRecipe)
        .returning("*")
        .then(createdRecords => createdRecords[0])
}
// read a specific recipe by ID
function read(recipe_id) {
    return knex("recipes")
        .select("*")
        .where({ recipe_id })
        .first()
}
// update a specific recipe by ID
function update(updatedRecipe) {
    return knex("recipes")
        .select("*")
        .where({ recipe_id: updatedRecipe.recipe_id})
        .update(updatedRecipe, "*")
        .then(updatedRecords => updatedRecords[0])
}
// delete a specific recipe by ID
function destroy(recipe_id) {
    return knex("recipes")
        .where({ recipe_id })
        .del()
}

module.exports = {
    list,
    create,
    read,
    update,
    delete: destroy,
}