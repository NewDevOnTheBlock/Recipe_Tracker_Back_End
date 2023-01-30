exports.seed = async function(knex) {
  return knex("recipes").insert([
    {
      name: "Pizza",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
      cuisine: "Italian",
      link: "https://thefoodcharlatan.com/homemade-pizza-recipe/"
    },
    {
      name: "Fried Chicken",
      image_url: "https://thestayathomechef.com/wp-content/uploads/2016/06/Fried-Chicken-4-1.jpg",
      cuisine: "Southern",
      link: "https://thestayathomechef.com/fried-chicken/"
    },
    {
      name: "Meatloaf",
      image_url: "https://www.budgetbytes.com/wp-content/uploads/2021/09/Classic-Meatloaf-side.jpg",
      cuisine: "American",
      link: "https://www.beefitswhatsfordinner.com/recipes/recipe/55558/classic-beef-meatloaf"
    },
  ])
};