
const recipes = {
    recipe1: {
        title: "Spaghetti",
        description: "Ingredients.",
        ingredients: [
            "Spaghetti",
            "Tomato Sauce:",
            "Meat:",
            "Vegetables",
            "Spices",
            "Cheese",
            "Hot Dogs, Ground Pork",
        ],
        image: "recipe1.jpg" 
    },
    recipe2: {
        title: "Philippine Adobo",
        description: "Ingredients:.", 
        ingredients: [
            "Meat Must be Pork or Chicken",
            "Sauce/Merinade",
            "Soy Sauce",
            "Vinegar",
            "Garlic",
            "Bay Leaves",
            "Black Pepper",
            "Water, oil And Sugar",
            "Onion",
        ],
        image: "recipe2.jpg" 
    },
    
};




function openRecipe(recipeId) {
    const recipe = recipes[recipeId];
    if (recipe) {
        document.getElementById("modal-recipe-title").innerText = recipe.title;
        document.getElementById("modal-recipe-description").innerHTML = recipe.description;

        
        const ingredientsList = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
        document.getElementById("modal-recipe-ingredients").innerHTML = `<ul>${ingredientsList}</ul>`;
        
        document.getElementById("modal-recipe-image").src = recipe.image;
        document.getElementById("recipe-modal").style.display = "block";
    }
}

function closeModal() {
    document.getElementById("recipe-modal").style.display = "none";
}
window.onclick = function(event) {
    const modal = document.getElementById("recipe-modal");
    if (event.target === modal) {
        closeModal();
    }
};