export const mockRecipes = [
  {
    id: 1,
    name: "Pasta Bolognese",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    author: "Joshua Timpac",
    description:
      "A hearty and satisfying Italian dish made with ground beef, tomatoes, onions, and pasta. Perfect for a quick weeknight dinner or a special occasion.",
    rating: 4.5,
    calories: 500,
    duration: "60",
    difficulty: "Medium",
    category: "Dinner",
    cuisine: "Italian",
    servings: 4,
    ingredients: [
      { id: 1, name: "Penne Pasta", quantity: 1, unit: "lb" },
      { id: 2, name: "Ground Beef", quantity: 1, unit: "lb" },
      {
        id: 3,
        name: "Canned Crushed Tomatoes",
        quantity: 28,
        unit: "ounces",
      },
      { id: 4, name: "Yellow Onion", quantity: 1, unit: "medium" },
      { id: 5, name: "Garlic", quantity: 3, unit: "cloves" },
    ],
    instructions: [
      {
        step: 1,
        instruction: "Bring a pot of water to a boil and cook the pasta",
      },
      {
        step: 2,
        instruction: "Brown the beef in a pan and add the onion and garlic",
      },
      {
        step: 3,
        instruction: "Add the tomatoes to the pan and cook for 10 minutes",
      },
      {
        step: 4,
        instruction:
          "Combine the pasta and the sauce in the pan and cook for an additional 2 minutes",
      },
    ],
  },
  {
    id: 2,
    name: "Grilled Cheese Sandwich",
    image:
      "https://plus.unsplash.com/premium_photo-1739906794633-71adada97314?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Jane Doe",
    description:
      "A classic comfort food that is easy to make and always satisfying. Perfect for a quick lunch or a comforting dinner.",
    rating: 4.5,
    calories: 300,
    duration: "60",
    difficulty: "Medium",
    category: "Lunch",
    cuisine: "American",
    servings: 4,
    ingredients: [
      { id: 1, name: "Bread", quantity: 2, unit: "slices" },
      { id: 2, name: "Cheese", quantity: 2, unit: "slices" },
      { id: 3, name: "Butter", quantity: 2, unit: "tablespoons" },
    ],
    instructions: [
      {
        step: 1,
        instruction: "Butter the bread on both sides",
      },
      {
        step: 2,
        instruction: "Place the cheese in between the bread",
      },
      {
        step: 3,
        instruction:
          "Grill the sandwich until the cheese is melted and the bread is toasted",
      },
    ],
  },
];
export const getRecipeById = (id: number) => {
  return mockRecipes.find((recipe) => recipe.id === id);
};
