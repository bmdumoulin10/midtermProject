angular.module('routerApp',['ui.router'])
  .config(configRouter)
  .controller('homeCtrl', homeController)
  .controller('myPantryCtrl', myPantryController)
  .controller('searchRecipesCtrl', searchRecipesController)
  .controller('myGroceryListCtrl', myGroceryListController)
  .controller('myCookBookCtrl', myCookBookController)

configRouter.$inject = ['$stateProvider', '$urlRouterProvider']
myPantryController.$inject = ['$state','$window']
searchRecipesController.$inject = ['$state', '$http', '$window']
myGroceryListController.$inject = ['$state', '$window']
myCookBookController.$inject = ['$state', '$window']


  function configRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl as hCtrl'
      })
      .state('myPantry',{
        url: '/myPantry',
        templateUrl: 'partials/myPantry.html',
        controller: 'myPantryCtrl as pCtrl'
      })
      .state('searchRecipes',{
        url: '/searchRecipes',
        templateUrl: 'partials/searchRecipes.html',
        controller: 'searchRecipesCtrl as sCtrl'
      })
      .state('searchRecipes.recipeInfo', {
        templateUrl: 'partials/recipeInfo.html',
      })
      .state('myGroceryList',{
        url: '/myGroceryList',
        templateUrl: 'partials/myGroceryList.html',
        controller: 'myGroceryListCtrl as gCtrl'
      })
      .state('myCookBook',{
        url: '/myCookBook',
        templateUrl: 'partials/myCookBook.html',
        controller: 'myCookBookCtrl as cCtrl'
      })
    $urlRouterProvider.otherwise('/')
  }

  //controller functions

  //home controller
  function homeController(){
    var hCtrl = this
    hCtrl.title = "Home Controller"
  }

  //myPantry controller
  function myPantryController($state,$window){
    var pCtrl = this
    pCtrl.title = "My Pantry Controller"

    // $window.localStorage.getItem('pantryIngredients.split()')

  //   pCtrl.userIngredient = [strings]
  //
  //   pCtrl.newProtein = ''
  //   pCtrl.newProduce = ''
  //   pCtrl.newGrain = ''
  //   pCtrl.newDairy = ''
  //
  //   pCtrl.addIngredient = function(){
  //     pCtrl.enterProtein.push([newProtein])
  //     pCtrl.enterProduce.push([newProduce])
  //     pCtrl.enterGrain.push([newGrain])
  //     pCtrl.enterDairy.push([newDairy])
  //   }
  //
  //   pCtrl.newProtein = ''
  //   pCtrl.newProduce = ''
  //   pCtrl.newGrain = ''
  //   pCtrl.newDairy = ''
  //
  //   pCtrl.removeIngredient = function(index){
  //       pCtrl.enterProtein.splice(index,1)
  //       pCtrl.enterProduce.splice(index,1)
  //       pCtrl.enterGrain.splice(index,1)
  //       pCtrl.enterDairy.splice(index,1)
  //   }
  // }
    pCtrl.userIngredients = []
  // adding and removing proteins

    var saveProtein = $window.localStorage.getItem('pantryProteins')

    pCtrl.enterProtein = saveProtein === null? []: saveProtein.split(',')

    pCtrl.newProtein = ''

    pCtrl.addProtein = function(){
      pCtrl.enterProtein.push(pCtrl.newProtein)
      pCtrl.userIngredients.push(pCtrl.newProtein)

      pCtrl.newProtein = ''
      $window.localStorage.setItem('pantryProteins', pCtrl.enterProtein)
      $window.localStorage.setItem('pantryIngredients', pCtrl.userIngredients.join(',') )
      console.log(pCtrl.enterProtein)
      console.log(pCtrl.userIngredients)
    }

    pCtrl.removeProtein = function(index){
        pCtrl.enterProtein.splice(index,1)
        pCtrl.userIngredients.splice(index,1)

        $window.localStorage.setItem('pantryProteins', pCtrl.enterProtein)
        $window.localStorage.setItem('pantryIngredients', pCtrl.userIngredients.join(',') )
    }

  // adding and removing produce
    var saveProduce = $window.localStorage.getItem('pantryProduce')

    pCtrl.enterProduce = saveProduce === null? []: saveProduce.split(',')

    pCtrl.newProduce = ''

    pCtrl.addProduce = function(){
      pCtrl.enterProduce.push(pCtrl.newProduce)
      pCtrl.userIngredients.push(pCtrl.newProduce)

      pCtrl.newProduce = ''

      $window.localStorage.setItem('pantryProduce', pCtrl.enterProduce)
      $window.localStorage.setItem('pantryIngredients', pCtrl.userIngredients.join(',') )
      console.log(pCtrl.enterProduce)
      console.log(pCtrl.userIngredients)
    }

    pCtrl.removeProduce = function(index){
        pCtrl.enterProduce.splice(index,1)
        pCtrl.userIngredients.splice(index,1)

        $window.localStorage.setItem('pantryProduce', pCtrl.enterProduce)
        $window.localStorage.setItem('pantryIngredients', pCtrl.userIngredients.join(',') )
    }

    // adding and removing grains
    var saveGrain = $window.localStorage.getItem('pantryGrains')

    pCtrl.enterGrain = saveGrain === null? []: saveGrain.split(',')

    pCtrl.newGrain = ''

    pCtrl.addGrain = function(){
      pCtrl.enterGrain.push(pCtrl.newGrain)
      pCtrl.userIngredients.push(pCtrl.newGrain)

      pCtrl.newGrain = ''

      $window.localStorage.setItem('pantryGrains', pCtrl.enterGrain)
      $window.localStorage.setItem('pantryIngredients', pCtrl.userIngredients.join(',') )
      console.log(pCtrl.enterGrain)
      console.log(pCtrl.userIngredients)
    }

    pCtrl.removeGrain = function(index){
        pCtrl.enterGrain.splice(index,1)
        pCtrl.userIngredients.splice(index,1)

        $window.localStorage.setItem('pantryGrains', pCtrl.enterGrain)
        $window.localStorage.setItem('pantryIngredients', pCtrl.userIngredients.join(',') )
    }

    // adding and removing dairy
    var saveDairy = $window.localStorage.getItem('pantryDairy')

    pCtrl.enterDairy = saveDairy === null? []: saveDairy.split(',')

    pCtrl.newDairy = ''

    pCtrl.addDairy = function(){
      pCtrl.enterDairy.push(pCtrl.newDairy)
      pCtrl.userIngredients.push(pCtrl.newDairy)

      pCtrl.newDairy = ''

      $window.localStorage.setItem('pantryDairy', pCtrl.enterDairy)
      $window.localStorage.setItem('pantryIngredients', pCtrl.userIngredients.join(',') )
      console.log(pCtrl.enterDairy)
      console.log(pCtrl.userIngredients)
    }

    pCtrl.removeDairy = function(index){
        pCtrl.enterDairy.splice(index,1)
        pCtrl.userIngredients.splice(index,1)

        $window.localStorage.setItem('pantryDairy', pCtrl.enterDairy)
        $window.localStorage.setItem('pantryIngredients', pCtrl.userIngredients.join(',') )
    }


    //
    // console.log(userIngredients)


    // pCtrl.nutsSeeds = [' Almond Butter',' Almonds', ' Cashews', ' Chia Seeds', ' Hazelnuts (filberts)', ' Mixed Nuts', ' Peanut Butter', ' Peanuts', ' Pecans', ' Pistachios', ' Pumpkin Seeds', ' Sesame Seeds', ' Sunflower Seeds', ' Walnuts']
    // pCtrl.meats = [' Ground Beef', ' Ground Pork', ' Ground Sausage', ' Bison', ' Rabbit', ' Venison', ' Beef', ' Ham', ' Lamb', ' Pork', ' Chicken', ' Duck', ' Goose', ' Ground Chicken', ' Turkey', '  Ground Turkey', ' Chicken Cold Cuts', ' Ham Cold Cuts', ' Turkey Cold Cuts']
    // pCtrl.seafood = [' Clams', ' Crab', ' Crayfish', ' Lobster', ' Mussels', ' Oysters', ' Scallops', ' Shrimp', ' Calamari', ' Catfish', ' Cod', ' Haddock', ' Halibut', ' Salmon', ' Snapper', ' Tilapia', ' Trout', ' Tuna', ' Anchovies', ' Sardines']
    // pCtrl.soyProducts = [' Tempeh', ' Tofu', ' Veggie Burgers']
    // pCtrl.beansPeas = [' Bean Burgers', ' Black Beans', ' Black-Eyed Peas', ' Chickpeas (Garbanzo Beans)', ' Edamame', ' Falafel', ' Hummus (Chickpea Spread)', ' Kidney Beans', ' Lentils', ' Lima Beans (Mature)', ' Navy Beans', ' Pinto Beans', ' Soy Beans', ' Split Peas', ' White Beans']
    // pCtrl.eggs = [' Chicken Eggs', ' Duck Eggs']
    // pCtrl.vegetables1 = [' Arugula', ' Bok Choy', ' Broccoli', ' Collard Greens', ' Kale', ' Mixed Greens', ' Mustard Greens', ' Radicchio', ' Romaine Lettuce', ' Spinach', ' Turnip Greens']
    // pCtrl.vegetables2 = [' Corn', ' Lima Beans', ' Green Peas', ' Plantains', ' Potatoes', ' Water Chestnuts']
    // pCtrl.vegetables3 = [' Acorn Squash', ' Butternut Squash', ' Carrot Juice', ' Carrots', ' Chili Peppers', ' Pumpkin', ' Sweet Red Peppers', ' Red Bell Peppers', ' Sweet Potatoes', ' Tomato Juice', ' Tomatoes', ' Yams']
    // pCtrl.vegetables4 = [' Green Beans', ' Green Peppers', ' Iceberg Lettuce', ' Mushrooms', ' Okra', ' Onions', ' Radishes', ' Red Cabbage', ' Scallions', ' Snow Peas', ' Tomatillos', ' Turnips', ' Wax Beans', ' Yellow Squash', ' Zucchini', ' Celery', ' Cucumbers', ' Eggplant', 'Garlic']
    // pCtrl.vegetables5 = [' Alfalfa Sprouts', ' Artichokes', ' Asparagus', ' Avocado', ' Bean Sprouts', ' Beets', ' Brussels Sprouts', ' Cabbage', ' Cauliflower']
    // pCtrl.fruits1 = [' Cantaloupe', ' Honeydew', ' Watermelon', ' Blackberries', ' Blueberries', ' Cranberries', ' Currants', ' Goji Berries', ' Raspberries', ' Strawberries', ' Cranberry Juice', ' Apple juice', ' Orange Juice', ' Grape Juice', ' Grapefruit Juice', ' Pineapple Juice', ' Pomegrante Juice', ' Prune Juice', ' Cherries', ' Pomegranates', ' Papaya']
    // pCtrl.fruits2 = [' Figs', ' Plums', ' Fruit Cocktail (mixed fruit)', ' Grapefruit', ' Prunes', ' Guava', ' Starfruit', ' Kiwi Fruit', ' Tangerines', ' Lemons', ' Limes', ' Mangoes', ' Nectarines', ' Apples', ' Oranges', ' Apricots', ' Bananas', ' Peaches', ' Pears', ' Persimmons', ' Dates', ' Pineapples']
    // pCtrl.dairy1 = [' Milk', ' Lactose-Free Milks', ' Puddings', ' Frozen Yogurt', ' Ice Cream', ' Sherbert', ' Almond Milk', ' Coconut Milk', ' Rice Milk', ' Soymilk', ' Yogurt', ' Soy Yogurt', ' Cheddar Cheese', ' Mozzarella Cheese', ' Swiss Cheese', ' Parmesan Cheese', ' Ricotta Cheese', ' Cottage Cheese', ' American Cheese', ' Cheese Spreads']
    // pCtrl.grains = [' Brown Rice', ' Buckwheat', ' Oatmeal', ' Popcorn', ' Quinoa', ' Rolled Oats', ' Cornmeal', ' Rye', ' Bread', ' Buns and Rolls', ' Tortillas', ' Wild Rice']
    // pCtrl.oils = [' Vegetable Oil', ' Extra Virgin Olive Oil', ' Butter', ' Margarine', ' Grapeseed Oil', ' Coconut Oil', ' Salad Dressings', ' Fish Oil']

    // pCtrl.checkedNuts = []
    //
    // pCtrl.myPantry = function(){
    //   if(pCtrl.checkedNuts[$index] === true){
    //     pCtrl.checkedNuts.push(pCtrl.checked[$index])
    //   }
    //   console.log('a', pCtrl)
    // }
    // var pantryItems = document.getElementsByTagName('input')

    // pCtrl.check = function(){

    //     pantryItems.checked = true
    // }

    // pCtrl.myPantry = function(){
    //     if(pCtrl.check === true){
    //       pCtrl.savedPantry.push(pantryItems.value)
    //     }
    // }
    // pCtrl.myPantry = function(){
    //     var pantryItems = document.getElementsByTagName('input')
    //       for(var i=0; i < pCtrl.savedPantry.length; i++){
    //         if(pantryItems[i].type === 'checkbox')
    //           pantryItems[i].onclick = pCtrl.savedPantry.push(pantryItems)
    //       }
    //       console.log(pCtrl.savedPantry)
    // }
}

  //searchRecipes controller
  function searchRecipesController($state, $http, $window){
    var sCtrl = this
    sCtrl.search = ''
    var pantrySearch = $window.localStorage.getItem('pantryIngredients')
    var apiEndpoint = 'http://food2fork.com/api/search?key={ENTER KEY}&q='
    sCtrl.title = "Search Recipes"
    sCtrl.recipeIndex = []

    // sCtrl.recipes = [
    //   {
    //     name: 'Spicy Garlic Lime Chicken',
    //     ingredients: ['salt', 'pepper', 'cayenne pepper', 'paprika', 'garlic powder', 'onion powder', 'thyme', 'parsley', 'boneless skinless chicken breast', '2 tablespoons butter', 'olive oil', 'lime juice'],
    //     prepTime: '5 minutes',
    //     cookTime: '20 minutes',
    //     readyIn: '25 minutes',
    //     directions: ['In a small bowl, mix together salt, pepper, cayenne, paprika, garlic powder, onion powder, thyme, and parsely. Sprinkle spice micture generously on both sides of chicken breasts.', 'Heat butter and olive oil in a large skillet over medium heat. Saute chicken until golden brown, about 6 minutes on each side. Sprinkle with garlic powder and lime juice. Cook 5 minutes, stirring frequently to coat evenly with sauce.']
    //   }]

      sCtrl.searchRecipes = function(){
        console.log('searching for recipes....');

        $http.get(apiEndpoint + encodeURIComponent(sCtrl.search))
          //.then(success, oops)
          .then(function(response){
            sCtrl.recipeIndex = response.data.recipes
          }, function(error){
            console.error(error)
        })
      sCtrl.search = ''
      }

      sCtrl.searchRecipesByPantry = function(){
        console.log('searching for recipes....');

        $http.get(apiEndpoint + encodeURIComponent(pantrySearch))
          //.then(success, oops)
          .then(function(response){
            sCtrl.recipeIndex = response.data.recipes
          }, function(error){
            console.error(error)
        })
      }

      // $http.get(apiEndpoint + encodeURIComponent(sCtrl.search))
      //   //.then(success, oops)
      //   .then(function(response){
      //     sCtrl.recipeIndex = response.data.recipes
      //   }, function(error){
      //     console.error(error)
      // })
  }

  //myGroceryList controller
  function myGroceryListController($state, $window){
    var gCtrl = this
    gCtrl.title = "My Grocery List"

    var saveList = $window.localStorage.getItem('savedList')

    gCtrl.enterItemNeeded = saveList === null? []: saveList.split(',')

    gCtrl.newItem = ''

    gCtrl.myGroceryList = function(){
      gCtrl.enterItemNeeded.push(gCtrl.newItem)

      gCtrl.newItem = ''

      $window.localStorage.setItem('savedList',gCtrl.enterItemNeeded)

      console.log(gCtrl.enterItemNeeded)
    }

    gCtrl.remove = function(index){
        gCtrl.enterItemNeeded.splice(index,1)
        console.log(gCtrl.enterItemNeeded)

        $window.localStorage.setItem('savedList',gCtrl.enterItemNeeded)
    }
  }


  //myCookBook controller
  function myCookBookController($state, $window){
    var cCtrl = this
    cCtrl.title = "My Cookbook"
    var saveCookbook = $window.localStorage.getItem('savedCookbook')

    cCtrl.enterRecipe = saveCookbook === null? []: JSON.parse(saveCookbook)
      // {
      //     name: 'Welcome to your cookbook',
      //     directions: 'Enter your personal recipes above and click "Add Recipe" to get started!'
      // },

    cCtrl.newName = ''
    cCtrl.newDirections = ''

    cCtrl.addRecipe = function(){
      if(cCtrl.newName !== '' && cCtrl.newDirections !== ''){
      cCtrl.enterRecipe.push({
          name: cCtrl.newName,
          directions: cCtrl.newDirections
      })}
      else{
          alert('Please complete both fields in order to add a new recipe')
      }

      cCtrl.newName = ''
      cCtrl.newDirections = ''

      $window.localStorage.setItem('savedCookbook',JSON.stringify(cCtrl.enterRecipe))


      console.log(cCtrl.enterRecipe)
    }

    cCtrl.remove = function(index){
        cCtrl.enterRecipe.splice(index,1)
    }
  }
