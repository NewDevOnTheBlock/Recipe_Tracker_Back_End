// import express and cors libraries
const express = require("express")
const cors = require("cors")
// import routers
const recipesRouter = require("./recipes/recipes.router")
// create an express instance
const app = express()
// ======================== Still needs to be done ============================= //
// import error handlers
const notFound = require("./errors/routeNotFound")
const errorHandler = require("./errors/errorHandler")
// ============================================================================= //
// enable cors on the app
app.use(cors())
// allow express to accept a JSON payload
app.use(express.json())
// enable cors on the app
const router = express.Router()
router.get("/", cors(), (req, res) => {
    res.json({ message: "Welcome! You can access the data using the '/recipes' route"})
})
// create routes for access
// 1) home route
app.use("/", router)
// 2) recipes route
app.use("/recipes", recipesRouter)
// 3) route not found
app.use(notFound)
// 4) error hander
app.use(errorHandler)

module.exports = app;
