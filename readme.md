# Recipe Tracker App BACK-END

## Purpose:
To create a back end for the recipe tracker app, which will allow users to perform crud operations on a PostgreSQL DB,
this app will communicate with a React.js front-end web application so that a user can:
- see their list of recipes
- create a new recipe to add to the list
- read a specific recipe
- update a specific recipe
- delete a specific recipe

## Libraries:
- Knex.js: for database queries
- Express.js
- Cors
- dotenv
- path
- nodemon

## Routes: 
- "/recipes" - home route, displays all recipes
- "/recipes/:recipe_id" - view a specific recipe

## Notes:


### to do: 
- Add my error files [ ]
- complete my controller + service functions [X]
- edit my knexfile.js to include the database_url [X]
- add important files to my .env file and .gitignore file [X]
- add code to my server.js file [X]
- add code to my connection.js file [X]
- perform table migrations on my Database [X]
- perform table seeding on my Database [X]