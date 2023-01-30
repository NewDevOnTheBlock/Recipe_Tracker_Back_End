// migrate up: create the table and columns for recipes
exports.up = function(knex) {
  return knex.schema.createTable("recipes", (table) => {
    table.increments("recipe_id").primary()
    table.string("name").notNullable()
    table.string("image_url")
    table.string("cuisine").notNullable()
    table.string("link").notNullable()
    table.timestamps(true, true)
  })
};

// migrate down: drop the table and columns for recipes
exports.down = function(knex) {
  return knex.schema.dropTable("recipes")
};