angular.module('routerApp')
	.factory('recipeFactory', [recipeFact])
	
function recipeFact(){

    // Creating the constructor function for the test recipes
	function fullRecipe(name, ingredients, prepTime, cookTime, readyIn, directions) {
		this.name = name;
		this.ingredients = ingredients;
		this.prepTime = prepTime;
		this.cookTime = cookTime;
		this.readyIn = readyIn;
		this.directions = directions;
	}
	
	var spicyGarlicLimeChicken = new fullRecipe('Spicy Garlic Lime Chicken', ['salt', 'pepper', 'cayenne pepper', 'paprika', 'garlic powder', 'onion powder', 'thyme', 'parsley', 'boneless skinless chicken breast', '2 tablespoons butter', 'olive oil', 'lime juice'], '5 minutes', '20 minutes', '25 minutes', ['In a small bowl, mix together salt, pepper, cayenne, paprika, garlic powder, onion powder, thyme, and parsely. Sprinkle spice micture generously on both sides of chicken breasts.', 'Heat butter and olive oil in a large skillet over medium heat. Saute chicken until golden brown, about 6 minutes on each side. Sprinkle with garlic powder and lime juice. Cook 5 minutes, stirring frequently to coat evenly with sauce.']);
    
    return {
		// Constructors
		fullRecipe 	: fullRecipe,
    }
}


