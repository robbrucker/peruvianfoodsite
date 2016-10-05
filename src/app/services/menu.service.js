/*var app = angular.module("menu.service", []);
app.factory('menuService', function() {
    var menu = {
        getAppetizers: function () {
            return [
      
                {
                    foodType: "Peruvian",
                    name: "Ceviche de Pescado",
                    description: "Pieces of fish marinated in lime juice and special Peruvian spices, mixed with onion and cilantro. Served with sweet potatoes and corn.",
                    price: "13.99",
                    dishType: "Appetizers"
                },
                {
                    foodType: "Peruvian",
                    name: "Papa a la Huancaina",
                    description: "Sliced potatoes covered w/ special creamy Creole cheese and yellow pepper served on a bed of potatoes and garnished w/ olive and hard boiled egg.",
                    price: "8.99",
                    dishType: "Appetizers",
                    isVegetarian: true
                },
                {
                    foodType: "Peruvian",
                    name: "Ensalada Quipu",
                    description: "Salad with lettuce, tomatoes, cucumbers, avocado, olive, onions, carrots, and fresh cheese.",
                    price: "7.99",
                    dishType: "Appetizers",
                    isVegetarian: true
                },
                {
                    foodType: "Peruvian",
                    name: "Quinua Salad",
                    description: "Quinua, spinach, carrots, peppers, cucumbers, olives and balsamic dressing",
                    price: "10.99",
                    dishType: "Appetizers",
                    isVegetarian: true
                },
                {
                    foodType: "Peruvian",
                    name: "Choclo con Queso",
                    description: "Peruvian corn on a cob served with fresh cheese on the side",
                    price: "6.99",
                    dishType: "Appetizers",
                    isVegetarian: true
                },
                {
                    foodType: "Peruvian",
                    name: "Salchipapas ",
                    description: "Sliced hot dog with French fries",
                    price: "8.99",
                    dishType: "Appetizers"
                }
            ];
        },
        getEntrees: function() {
            return [
                {
                    foodType: "Peruvian",
                    name: "Lomo Saltado",
                    description: "Very delicious and juicy sliced tender of Top Sirloin Steak sautéed w/ onions, tomatoes, and spices mixed with French fries. Served w/ rice.",
                    price: "15.99",
                    dishType: "Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Pollo Saltado ",
                    description: "Strips of chicken sauteed w/ onions, tomatoes, peppers, spices mixed w/ fries, served w/ rice.",
                    price: "14.99",
                    dishType: "Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Bisteck Encebollado",
                    description: "Delicious grilled Top Sirloin Steak w/ a juice sauce based on onions, tomatoes and spices. Served w/ rice and Peruvian beans.",
                    price: "16.99",
                    dishType: "Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Bisteck a lo Pobre",
                    description: "Juice grilled Top Sirloin Steak, served w/ French fries, sweet plantains, rice and fried eggs.",
                    price: "18.99",
                    dishType: "Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Tacu Tacu W/ Steak",
                    description: "tacu tacu consists of a rice and beans pancake with steak served on top.",
                    price: "16.99",
                    dishType: "Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Tacu Tacu ",
                    description: "tacu tacu consists of a rice and beans pancake",
                    price: "12.99",
                    dishType: "Entrees",
                    isVegetarian: true
                },

                {
                    foodType: "Peruvian",
                    name: "Aji De Gallina",
                    description: "",
                    price: "14.99",
                    dishType: "Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Arroz Chaufa W/ Steak or Chicken",
                    description: "Peruvian fried rice mixed w/ scallions, veggies, eggs & soy sauce. Served w/ chicken or beef.",
                    price: "15.99",
                    dishType: "Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Arroz Chaufa",
                    description: "Peruvian fried rice mixed w/ scallions, veggies, eggs & soy sauce. ",
                    price: "15.99",
                    dishType: "Entrees",
                    isVegetarian: true
                },
                {
                    foodType: "Peruvian",
                    name: "Saltado Vegetariano",
                    description: "Our vegetarian version of Lomo Saltado, same tasty flavor but w/o meat",
                    price: "8.99",
                    dishType: "Entrees",
                    isVegetarian: true
                },
                {
                    foodType: "Peruvian",
                    name: "Lomo Saltado de Tofu",
                    description: "Our vegetarian version of Lomo Saltado, same tasty flavor but with Tofu instead of meat",
                    price: "13.99",
                    dishType: "Entrees",
                    isVegetarian: true
                },
                {
                    foodType: "Peruvian",
                    name: "Tallarin con Espinaca",
                    description: "Noodles in spinach sauce, creamy and tasty.",
                    price: "8.99",
                    dishType: "Entrees",
                    isVegetarian: true
                },
                {
                    foodType: "Peruvian",
                    name: "Tallarin Saltado Vegetariano",
                    description: "Our classic saltado with noodles",
                    price: "9.99",
                    dishType: "Entrees",
                    isVegetarian: true
                },
                {
                    foodType: "Peruvian",
                    name: "Tallarin Saltado de Carne ",
                    description: "Sautéed spaghetti w/ sliced tender of Top Sirloin Steak, onion, tomatoes, peppers & soy sauce.",
                    price: "14.99",
                    dishType: "Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Arroz con Mariscos ",
                    description: "Peruvian style seafood paella.",
                    price: "18.99",
                    dishType: "Seafood Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Pescado Frito",
                    description: "Fried Fish, served with rice, yucca (cassava) and homemade onions salad.",
                    price: "14.99",
                    dishType: "Seafood Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Arroz Chaufa de Camarones ",
                    description: "Peruvian shrimp fried rice mixed w/ scallions, eggs, veggies and soy sauce.",
                    price: "17.99",
                    dishType: "Seafood Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Sudado de pescado",
                    description: "Peruvian fish stew with an assortment of spices and unique preparation.",
                    price: "15.99",
                    dishType: "Seafood Entrees"
                }

            ];
        },
        getSides: function() {
            return [

                {
                    foodType: "Peruvian",
                    name: "French fries ",
                    description: "",
                    price: "3.99",
                    dishType: "Sides"
                },
                {
                    foodType: "Peruvian",
                    name: "Rice",
                    description: "",
                    price: "3.99",
                    dishType: "Sides"
                },
                {
                    foodType: "Peruvian",
                    name: "Salad W/ Advocado",
                    description: "",
                    price: "4.99",
                    dishType: "Sides"
                },
                {
                    foodType: "Peruvian",
                    name: "Beans",
                    description: "",
                    price: "3.99",
                    dishType: "Sides"
                },
                {
                    foodType: "Peruvian",
                    name: "Yucca",
                    description: "",
                    price: "3.99",
                    dishType: "Sides"
                },
                {
                    foodType: "Peruvian",
                    name: "Mixed Veggies",
                    description: "",
                    price: "3.99",
                    dishType: "Sides"
                },
                {
                    foodType: "Peruvian",
                    name: "Broccoli",
                    description: "",
                    price: "3.99",
                    dishType: "Sides"
                }
            ];
        }
    };
    return menu;
}); */