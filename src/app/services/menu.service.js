var app = angular.module("menu.service", []);
app.factory('menuService', function() {
    var menu = {
        getAppetizers: function () {
            return [
      
                {
                    foodType: "Peruvian",
                    name: "Ceviche de Pescado",
                    description: "Pieces of fish marinated in lime juice and special Peruvian spices, mixed with onion and cilantro. Served with sweet potatoes and corn.",
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Ceviche_de_pescado_y_langostinos_05082009.JPG/1280px-Ceviche_de_pescado_y_langostinos_05082009.JPG',
                    price: "13.99",
                    dishType: "Appetizers"
                },
                {
                    foodType: "Peruvian",
                    name: "Papa a la Huancaina",
                    english_name: "Huancaina Style Potatos",
                    description: "Sliced potatoes covered w/ special creamy Creole cheese and yellow pepper served on a bed of potatoes and garnished w/ olive and hard boiled egg.",
                    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Cuisine_Peru_Papa_a_la_Huancaina.jpg",
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
                    english_name: "Corn with Cheese",
                    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Comida_peruana.jpg",
                    description: "Peruvian corn on a cob served with fresh cheese on the side",
                    price: "6.99",
                    dishType: "Appetizers",
                    isVegetarian: true
                },
                {
                    foodType: "Peruvian",
                    name: "Salchipapas ",
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Lima_salchipapas.jpg",
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
                    english_name: "Beef in Stir Fry",
                    image: "https://c2.staticflickr.com/4/3290/2731310686_15aa97638a_b.jpg",
                    image_by: "https://www.flickr.com/photos/dongkwan/",
                    image_by_name: "dongkwan",
                    description: "Very delicious and juicy sliced tender of Top Sirloin Steak sautéed w/ onions, tomatoes, and spices mixed with French fries. Served w/ rice.",
                    price: "15.99",
                    dishType: "Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Pollo Saltado ",
                    english_name: "Chicken in Stir Fry",
                    description: "Strips of chicken sauteed w/ onions, tomatoes, peppers, spices mixed w/ fries, served w/ rice.",
                    price: "14.99",
                    dishType: "Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Bisteck Encebollado",
                    image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Bistek_Tagalog-02.jpg",
                    english_name: "Sirloin Steak winith Veggies",
                    description: "Delicious grilled Top Sirloin Steak w/ a juice sauce based on onions, tomatoes and spices. Served w/ rice and Peruvian beans.",
                    price: "16.99",
                    dishType: "Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Bisteck a lo Pobre",
                    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bistec_a_lo_pobre_(11246262064).jpg/1280px-Bistec_a_lo_pobre_(11246262064).jpg",
                    description: "Juice grilled Top Sirloin Steak, served w/ French fries, sweet plantains, rice and fried eggs.",
                    price: "18.99",
                    dishType: "Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Tacu Tacu W/ Steak",
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tacu-tacu_Superba_09012010.jpg",
                    description: "tacu tacu consists of a rice and beans pancake with steak served on top.",
                    price: "16.99",
                    dishType: "Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Tacu Tacu ",
                    image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tacu-tacu_Superba_09012010.jpg",
                    description: "tacu tacu consists of a rice and beans pancake",
                    price: "12.99",
                    dishType: "Entrees",
                    isVegetarian: true
                },

                {
                    foodType: "Peruvian",
                    name: "Aji De Gallina",
                    english_name: "Chili Chicken",
                    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Aj%C3%AD_de_gallina_-_Tradicional.jpg",
                    description: "",
                    price: "14.99",
                    dishType: "Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Arroz Chaufa W/ Steak or Chicken",
                    english_name: "Peruvian-Chinese Style Rice with Steak or Chicken",
                    description: "Peruvian fried rice mixed w/ scallions, veggies, eggs & soy sauce. Served w/ chicken or beef.",
                    price: "15.99",
                    dishType: "Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Arroz Chaufa",
                    english_name: "Peruvian-Chinese Style Rice",
                    description: "Peruvian fried rice mixed w/ scallions, veggies, eggs & soy sauce. ",
                    price: "15.99",
                    dishType: "Entrees",
                    isVegetarian: true
                },
                {
                    foodType: "Peruvian",
                    name: "Saltado Vegetariano",
                    english_name: "Stir Fry With No Meat",
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
                    name: "Causa Limeña",
                    description: "Tuna and Advocado Between Peruvian Style Potatoes",
                    image: " https://c2.staticflickr.com/4/3422/3984409669_78a9afef16_b.jpg",
                    image_by: "https://www.flickr.com/photos/patcito/",
                    image_by_name: "patcito",
                    price: "10.99",
                    dishType: "Entrees",
                    isVegetarian: true
                },

                {
                    foodType: "Peruvian",
                    name: "Tallarin con Espinaca",
                    english_name: "Spinach Noodles",
                    description: "Noodles in spinach sauce, creamy and tasty.",
                    price: "8.99",
                    dishType: "Entrees",
                    isVegetarian: true
                },
                {
                    foodType: "Peruvian",
                    name: "Tallarin Saltado Vegetariano",
                    english_name: "Stir Fry and Vegetables",
                    description: "Our classic saltado with noodles",
                    price: "9.99",
                    dishType: "Entrees",
                    isVegetarian: true
                },
                {
                    foodType: "Peruvian",
                    name: "Tallarin Saltado de Carne ",
                    english_name: "Noodles With Meat",
                    description: "Sautéed spaghetti w/ sliced tender of Top Sirloin Steak, onion, tomatoes, peppers & soy sauce.",
                    price: "14.99",
                    dishType: "Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Arroz con Mariscos ",
                    english_name: "Rice with seafood",
                    description: "Peruvian style seafood paella.",
                    price: "18.99",
                    dishType: "Seafood Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Pescado Frito",
                    english_name: "Fried Fish",
                    description: "Fried Fish, served with rice, yucca (cassava) and homemade onions salad.",
                    price: "14.99",
                    dishType: "Seafood Entrees"
                },
                {
                    foodType: "Peruvian",
                    name: "Arroz Chaufa de Camarones ",
                    english_name: "Peruvian-Chinese Style Rice with Shrimp",
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
});