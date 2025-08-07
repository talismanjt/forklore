export const mockRecipes = [
  {
    id: 1,
    name: "Pasta Bolognese",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ingredients: ["Pasta", "Beef", "Tomatoes", "Onion", "Garlic"],
    instructions: [
      "Bring a pot of water to a boil and cook the pasta",
      "Brown the beef in a pan and add the onion and garlic",
      "Add the tomatoes to the pan and cook for 10 minutes",
      "Combine the pasta and the sauce in the pan and cook for an additional 2 minutes",
    ],
  },
  {
    id: 2,
    name: "Grilled Cheese Sandwich",
    image:
      "https://plus.unsplash.com/premium_photo-1739906794633-71adada97314?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Bread", "Cheese", "Butter"],
    instructions: [
      "Butter the bread on both sides",
      "Place the cheese in between the bread",
      "Grill the sandwich until the cheese is melted and the bread is toasted",
    ],
  },
];
export const getRecipeById = (id: number) => {
  return mockRecipes.find((recipe) => recipe.id === id);
};
