// import service file for db queries
const service = require("./recipes.service")
// import asyncErrorBoundary for catching asynchronous errors
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

// validation middleware:

// recipe exists - confirms existence of recipe upon a request, returns an error if one doesn't exist
async function recipeExists(req, res, next) {
    const { recipe_id } = req.params;
    const recipe = await service.read(recipe_id)

    if (recipe) {
        res.locals.recipe = recipe;
        return next()
    }

    return next({
        status: 404,
        message: `A recipe with an ID of ${ recipe_id } cannot be found.`
    })
}

// route handlers

// - for route "/"
// 1) list all recipe
async function list(_req, res) {
    const data = await service.list()
    res.json({ data })
}

// 2) create a new recipe
async function create(req, res) {
    const data = await service.create(req.body.data)
    res.status(201).json({ data })
}

// - for route "/:recipe_id"
// 3) read a specific recipe by ID
function read(_req, res) {
    res.json({ data: res.locals.recipe })
}

// 4) update a specific recipe by ID
async function update(req, res) {
    const updatedRecipe = {
        ...res.locals.recipe,
        ...req.body.data,
        recipe_id: res.locals.recipe.recipe_id
    }

    const data = await service.update(updatedRecipe)

    res.json({ data })
}

// 5) delete a specific recipe by ID
async function destroy(_req, res) {
    await service.delete(res.locals.recipe.recipe_id)
    res.sendStatus(204)
}

module.exports = {
    list: asyncErrorBoundary(list),
    create: [asyncErrorBoundary(create)],
    read: [asyncErrorBoundary(recipeExists), read],
    update: [asyncErrorBoundary(recipeExists), update],
    delete: [asyncErrorBoundary(recipeExists), destroy]
}