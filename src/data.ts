import { MenuCategory, Review, OpeningHour } from "./types";

export const categories: MenuCategory[] = [
  {
    id: "party-deals",
    name: "Party Deals",
    items: [
      {
        id: "party-meal-deal",
        name: "Party Meal Deal",
        price: 33.00,
        description: "6 Pieces of Chicken, 2 Chips, 1 Portion of Nuggets (6), 1 Portion of Cocktail Sausages (10), 1 Sauce, 1 Large Drink"
      }
    ]
  },
  {
    id: "specials",
    name: "Specials",
    items: [
      {
        id: "9th-lough-share-box",
        name: "The 9th Lough Share Box",
        price: 35.00,
        description: "Dublin's ultimate takeaway treat, loaded with all of our community favourites to share."
      },
      {
        id: "swifty-box",
        name: "The Swifty Box",
        price: 8.50,
        description: "Chips, Curry Sauce, Cod Portion, Chicken Fillet"
      },
      {
        id: "munch-box",
        name: "Munch Box",
        price: 9.50,
        description: "3 Mini Battered Sausages, 3 Chicken Wings, 3 Chicken Tenders, 3 Potato Cakes"
      },
      {
        id: "mad-box",
        name: "Mad Box",
        price: 8.00,
        description: "Chips, Chicken Breast, Crispy Bacon, Taco Sauce & Lettuce in a Tray"
      },
      {
        id: "odd-box",
        name: "The Odd Box",
        price: 8.50,
        description: "Steak, Chicken Fillet, Chips, Lettuce, Cabbage, Chilli & Garlic Sauce"
      },
      {
        id: "off-the-wall",
        name: "Off The Wall",
        price: 8.00,
        description: "Kebab Meat, Chicken Breast, Chips, Cheese, Garlic & Chilli Sauce in a Tray"
      },
      {
        id: "chicken-balls-special",
        name: "Chicken Balls Special",
        price: 8.00,
        description: "4 Chicken Balls, Chips, Small Curry Sauce"
      },
      {
        id: "stonner-kebab",
        name: "The Stonner Kebab",
        price: 6.00,
        description: "Legendary TikTok viral sensation: Pork Sausage wrapped in spiced Kebab Meat in a delicious golden batter."
      },
      {
        id: "chicken-gravy-special",
        name: "Chicken Gravy",
        price: 2.50,
        description: "Fabulous secret-recipe southern savory chicken gravy, the perfect dip."
      }
    ]
  },
  {
    id: "chips",
    name: "Chips & Loaded Chips",
    items: [
      {
        id: "chips-plain",
        name: "Chips",
        price: 4.50,
        description: "Our signature chunky hand-cut Maris Piper chips, fried to a beautiful crisp golden brown."
      },
      {
        id: "taco-chips",
        name: "Taco Chips",
        price: 8.50,
        description: "Gourmet chips topped with rich seasoned taco beef and cheese.",
        allergens: ["Gluten"]
      },
      {
        id: "garlic-chips",
        name: "Garlic Chips",
        price: 6.50,
        description: "Freshly cooked chips drizzled with creamy house-made garlic sauce."
      },
      {
        id: "garlic-chips-cheese",
        name: "Garlic Chips with Cheese",
        price: 8.00,
        description: "Creamy garlic sauce with a generous layer of grated irish cheddar.",
        allergens: ["Milk"]
      },
      {
        id: "garlic-chips-cheese-bacon",
        name: "Garlic Chips with Cheese & Bacon",
        price: 9.00,
        description: "Supercharged loaded chips with cheese, bacon bits, and signature garlic sauce.",
        allergens: ["Milk"]
      },
      {
        id: "curry-chips",
        name: "Curry Chips",
        price: 7.00,
        description: "Chips smothered in our warm, beautifully spiced curry sauce.",
        allergens: ["Gluten", "Celery", "Mustard"]
      },
      {
        id: "curry-chips-cheese",
        name: "Curry Chips with Cheese",
        price: 8.00,
        description: "Our legendary spicy curry sauce balanced with rich melted cheese.",
        allergens: ["Gluten", "Milk", "Celery", "Mustard"]
      },
      {
        id: "cheese-chips",
        name: "Cheese Chips",
        price: 7.00,
        description: "Melted premium Irish cheese over freshly triple-cooked chips.",
        allergens: ["Milk"]
      },
      {
        id: "chip-roll",
        name: "Chip Roll with a choice of Sauce",
        price: 7.00,
        description: "Freshly baked roll stuffed with golden chips and your choice of house sauces.",
        allergens: ["Gluten", "Milk"]
      },
      {
        id: "chips-steak-onions-pepper",
        name: "Chips, Steak, Onions & Pepper Sauce",
        price: 9.00,
        description: "Hearty and deeply satisfying loaded chips topped with tender rib steak pieces, sauteed baby onions, and velvet pepper gravy.",
        allergens: ["Milk"]
      }
    ]
  },
  {
    id: "burgers",
    name: "Burgers",
    items: [
      {
        id: "9th-lough-special-burger",
        name: "9th Lough Special Burger",
        price: 8.50,
        description: "Our signature double stack with cheese, crispy bacon, onions, relish, and garlic-chilli sauce."
      },
      {
        id: "qtr-pounder",
        name: "Qtr Pounder",
        price: 6.00,
        description: "Flame-grilled classic 100% Irish beef quarter pounder with fresh salad and dressing."
      },
      {
        id: "qtr-pounder-cheese",
        name: "Qtr Pounder with Cheese",
        price: 6.50,
        description: "Flame-grilled quarter pounder paired with melted premium Cheddar cheese."
      },
      {
        id: "qtr-pounder-cheese-bacon",
        name: "Qtr Pounder with Cheese & Bacon",
        price: 8.00,
        description: "Loaded quarter pounder with crispy Irish streaky bacon and classic double cheese."
      },
      {
        id: "gary-burger",
        name: "Gary Burger",
        price: 8.00,
        description: "Quarter pounder topped with savory kebab meat, double cheese, lettuce, and our spicy chilli & garlic sauce combination."
      },
      {
        id: "d-burger",
        name: "D'Burger",
        price: 8.00,
        description: "Tender kebab meat, grilled golden chicken breast, cheese, lettuce, and homemade garlic & chilli sauces."
      },
      {
        id: "p-burger",
        name: "P'Burger",
        price: 8.00,
        description: "Gourmet beef quarter pounder, tender grilled chicken breast, double cheese, fresh crispy lettuce, and garlic-chilli drizzle."
      },
      {
        id: "skylander",
        name: "Skylander Burger",
        price: 8.50,
        description: "Golden chicken breast fillet, crispy smoked bacon, lettuce, sweet onions, double cheese, and custom chilli & garlic sauce."
      },
      {
        id: "radius-burger",
        name: "Radius Burger",
        price: 9.00,
        description: "A monster stack with chicken breast, double beef patties, crispy bacon, iceberg lettuce, and a rich garlic-chilli sauce."
      },
      {
        id: "battered-cheese-burger",
        name: "Battered Cheese Burger",
        price: 6.00,
        description: "Beef burger patty coated in crisp golden beer-batter, deep-fried."
      },
      {
        id: "battered-cheese-burger-bun",
        name: "Battered Cheese Burger in a Bun",
        price: 8.00,
        description: "Deep-fried battered beef burger served in a warm brioche bun with ketchup and salad."
      },
      {
        id: "bun-burger",
        name: "Bun Burger",
        price: 3.30,
        description: "Standard single deck beef burger served in a warm sesame bun."
      },
      {
        id: "cheese-burger",
        name: "Cheese Burger",
        price: 3.50,
        description: "Classic flame-grilled burger topped with melted cheese."
      },
      {
        id: "salad-burger",
        name: "Salad Burger",
        price: 4.00,
        description: "Beef burger topped with juicy tomatoes, onions, lettuce, and mayonnaise."
      },
      {
        id: "double-burger",
        name: "Double Burger",
        price: 5.50,
        description: "Double the beef patties, double the satisfaction."
      },
      {
        id: "chicken-burger",
        name: "Chicken Burger",
        price: 6.00,
        description: "Deep-fried breaded crispy chicken burger served with lettuce and mayonnaise."
      },
      {
        id: "chicken-fillet-burger",
        name: "Chicken Fillet Burger",
        price: 7.50,
        description: "Crispy southern-fried chicken breast fillet with melted cheese, fresh lettuce, and mayo."
      },
      {
        id: "whirly-burger",
        name: "Whirly Burger",
        price: 7.50,
        description: "Spiral battered pork burger with custom spice seasoning inside a bun with salad."
      },
      {
        id: "kebab-burger",
        name: "Kebab Burger",
        price: 7.50,
        description: "A bun loaded with our spit-roasted kebab meat, salad, and choice of sauce."
      },
      {
        id: "veggie-burger",
        name: "Veggie Burger",
        price: 5.00,
        description: "Wholesome seasoned vegetable patty in a sesame bun with crisp farm lettuce."
      }
    ]
  },
  {
    id: "meal-deals",
    name: "Meal Deals (Includes Chips & Drink)",
    items: [
      {
        id: "mixed-kebab-meal",
        name: "Mixed Kebab Meal",
        price: 16.00,
        description: "Combination of Doner and Chicken kebab, served with freshly cut chips and a cold can of drink."
      },
      {
        id: "kebab-meal",
        name: "Kebab Meal",
        price: 14.50,
        description: "Choose either Doner or Chicken Fillet kebab, served with golden chips and a soft drink."
      },
      {
        id: "wrap-meal",
        name: "Wrap Meal",
        price: 13.50,
        description: "Flour wrap stuffed with Doner or Chicken, chips, and a canned beverage."
      },
      {
        id: "chicken-fillet-burger-meal",
        name: "Chicken Fillet Burger Meal",
        price: 13.50,
        description: "Southern-fried Chicken Fillet burger, freshly fried chips, and a soft drink."
      },
      {
        id: "qtr-pounder-cheese-meal",
        name: "Quarter Pounder Cheese Meal",
        price: 13.00,
        description: "Gourmet Quarter Pounder with Cheese, hot chips, and any can of soft drink."
      },
      {
        id: "qtr-pounder-cheese-bacon-meal",
        name: "Quarter Pounder Cheese & Bacon Meal",
        price: 14.00,
        description: "Stack of bacon and cheese quarter-pounder, chunky chips, and a soft drink."
      },
      {
        id: "cod-meal-deal",
        name: "Cod Meal Deal",
        price: 16.00,
        description: "Fresh Fillet of Cod in golden crispy batter, served with chips and a canned drink."
      },
      {
        id: "batter-sausage-meal-deal",
        name: "Batter Sausage Meal Deal",
        price: 9.50,
        description: "Two golden battered Irish sausages, chips, and choice of soft drink."
      },
      {
        id: "chicken-tender-meal-deal",
        name: "Chicken Tender Meal Deal",
        price: 12.50,
        description: "4 Crispy chicken breast tenders, homemade dipping chips, and a canned beverage."
      },
      {
        id: "9th-lough-special-meal-deal",
        name: "9th Lough Special Meal Deal",
        price: 13.50,
        description: "A deluxe specialty burger with chips and a refreshing soft drink."
      }
    ]
  },
  {
    id: "kids-menu",
    name: "Kids Menu (Includes Chips & Capri Sun)",
    items: [
      {
        id: "kids-nuggets",
        name: "Kids Meal Chicken Nuggets",
        price: 6.50,
        description: "4 Quality chicken breast nuggets, mini chips, and a Capri Sun juice pouch."
      },
      {
        id: "kids-bun-burger",
        name: "Kids Meal Bun Burger",
        price: 6.50,
        description: "Classic kid-sized beef burger, mini chips, and a cold Capri Sun."
      },
      {
        id: "kids-fish-goujons",
        name: "Kids Meal Fish Goujons",
        price: 6.50,
        description: "Lightly battered fresh cod strips, mini chips, and a Capri Sun."
      },
      {
        id: "kids-sausages",
        name: "Kids Meal Cocktail Sausages",
        price: 6.50,
        description: "8 Juicy cocktail sausages, golden mini chips, and a Capri Sun."
      }
    ]
  },
  {
    id: "sauces",
    name: "Sauces & Dips",
    items: [
      {
        id: "sauce-curry",
        name: "Curry Sauce",
        price: 3.50,
        description: "Warm, thick and aromatic, beautifully spiced authentic Irish chipper curry sauce.",
        allergens: ["Gluten", "Celery", "Mustard"]
      },
      {
        id: "sauce-kebab",
        name: "Kebab Sauce",
        price: 3.50,
        description: "Creamy garlic, yogurt, and herb combination perfect for drippings."
      },
      {
        id: "sauce-garlic",
        name: "Garlic Sauce",
        price: 2.80,
        description: "House special rich, pungent and super creamy garlic mayonnaise."
      },
      {
        id: "sauce-taco",
        name: "Taco Sauce",
        price: 2.80,
        description: "Spiced, tangy dressing that makes loaded chips absolutely perfect."
      },
      {
        id: "sauce-chilli",
        name: "Chilli Sauce",
        price: 2.80,
        description: "Our famous fiery red hot pepper sauce with just the right amount of kick."
      },
      {
        id: "sauce-burger",
        name: "Burger Sauce",
        price: 2.80,
        description: "Sweet, tangy pink burger relish with fine herbs."
      },
      {
        id: "sauce-bbq",
        name: "BBQ Sauce",
        price: 2.80,
        description: "Rich, dark smoky sweet barbecue sauce.",
        allergens: ["Crustaceans"]
      },
      {
        id: "sauce-cajun",
        name: "Cajun Sauce",
        price: 2.80,
        description: "Creamy, moderately spiced creole seasoning sauce.",
        allergens: ["Gluten"]
      },
      {
        id: "sauce-sweet-chilli",
        name: "Sweet Chilli Sauce",
        price: 2.80,
        description: "A bright sweet and sour sauce blended with hot red chillies."
      },
      {
        id: "sauce-pepper",
        name: "Pepper Sauce",
        price: 2.80,
        description: "Thick cracked black pepper gravy with a creamy milk base.",
        allergens: ["Milk"]
      },
      {
        id: "sauce-blue-cheese",
        name: "Blue Cheese Sauce",
        price: 2.80,
        description: "Creamy premium Mayo blended with chunks of tangy blue cheese.",
        allergens: ["Milk"]
      },
      {
        id: "sauce-sticky-bbq",
        name: "Sticky BBQ Sauce",
        price: 2.80,
        description: "Viscous, sweet honey-barbecue glaze for wings and ribs.",
        allergens: ["Gluten"]
      },
      {
        id: "sauce-hot-spicy",
        name: "Hot & Spicy Sauce",
        price: 2.80,
        description: "Extreme heat sauce for the daring diner."
      },
      {
        id: "sauce-vinegar",
        name: "Bottle of Vinegar",
        price: 4.00,
        description: "Take the classic Irish chipper smell home with a full bottle."
      },
      {
        id: "sauce-ranch",
        name: "Ranch Sauce",
        price: 2.80,
        description: "Tangy buttermilk herbs dressing."
      },
      {
        id: "sauce-dynamite",
        name: "Dynamite Sauce",
        price: 2.50,
        description: "Zesty spicy mayo recipe.",
        outOfStock: true
      },
      {
        id: "sauce-mayo",
        name: "Tub Mayonnaise",
        price: 2.80,
        description: "Classic cool whipped premium mayonnaise."
      },
      {
        id: "sauce-chicken-gravy",
        name: "Chicken Gravy",
        price: 2.50,
        description: "Fabulous custom southern chicken gravy."
      },
      {
        id: "sauce-tartare",
        name: "Tartare Sauce",
        price: 2.50,
        description: "Creamy egg sauce packed with pickles & capers."
      }
    ]
  },
  {
    id: "wraps-baguettes",
    name: "Wraps & Baguettes",
    items: [
      {
        id: "doner-wrap",
        name: "Doner Wrap",
        price: 6.00,
        description: "Lashings of doner kebab meat rolled in flatbread with salad and sauce.",
        allergens: ["Gluten"]
      },
      {
        id: "chicken-wrap",
        name: "Chicken Wrap",
        price: 6.00,
        description: "Crispy chicken breast sections tightly wrapped with lettuce, red onions, and mayo.",
        allergens: ["Gluten"]
      },
      {
        id: "mixed-wrap",
        name: "Mixed Wrap",
        price: 7.00,
        description: "Duo of Doner meat and chicken tenders loaded with fresh salad and garlic-chilli drizzle.",
        allergens: ["Gluten"]
      },
      {
        id: "steak-wrap",
        name: "Steak Wrap",
        price: 6.00,
        description: "Grilled sirloin steak pieces with fried onions wrapped to perfection.",
        allergens: ["Gluten"]
      },
      {
        id: "rib-steak-wrap",
        name: "Rib Steak Wrap",
        price: 6.00,
        description: "Juicy ribs steak shredded and seasoned in a warm toasted tortilla wrap.",
        allergens: ["Gluten"]
      },
      {
        id: "chicken-baguette",
        name: "Chicken Baguette",
        price: 6.50,
        description: "Crusty baguette loaded with deep-fried chicken tenders, farm salad, and selection of sauce.",
        allergens: ["Gluten"]
      },
      {
        id: "doner-baguette",
        name: "Doner Baguette",
        price: 6.50,
        description: "Long baguette stuffed with spit-roasted doner kebab shavings, red onion, lettuce, and garlic sauce.",
        allergens: ["Gluten"]
      },
      {
        id: "steak-baguette",
        name: "Steak Baguette",
        price: 6.50,
        description: "Rustic French baguette layered with grilled steak strips and sautéed sweet onions.",
        allergens: ["Gluten"]
      },
      {
        id: "mixed-baguette",
        name: "Mixed Baguette",
        price: 7.50,
        description: "Stuffed to the brim with both steak, kebab, and chicken fillets.",
        allergens: ["Gluten"]
      },
      {
        id: "popcorn-chicken-baguette",
        name: "Popcorn Chicken Baguette",
        price: 6.00,
        description: "Bite-sized seasoned popcorn chicken filled in a crusty hot roll with cheese and taco sauce.",
        allergens: ["Gluten"]
      }
    ]
  },
  {
    id: "chicken",
    name: "Southern Fried Chicken Boxes",
    items: [
      {
        id: "junior-box",
        name: "Junior Box",
        price: 6.50,
        description: "1 golden crispy piece of chicken served with signature fresh chips."
      },
      {
        id: "junior-breast-box",
        name: "Junior Breast Box",
        price: 7.50,
        description: "1 premium succulent Southern Fried Chicken Breast served with golden-fried chips."
      },
      {
        id: "snack-box",
        name: "Snack Box",
        price: 8.50,
        description: "2 custom selected pieces of crispy hot chicken with freshly cut chips."
      },
      {
        id: "lunch-box",
        name: "Lunch Box",
        price: 10.50,
        description: "3 pieces of pressure-fried southern chicken with freshly cut Irish chips."
      },
      {
        id: "dinner-box",
        name: "Dinner Box",
        price: 13.50,
        description: "4 massive pieces of our crispy seasoned chicken with lots of hand-cut chips."
      },
      {
        id: "family-box",
        name: "Family Box",
        price: 20.00,
        description: "7 pieces of pressure-fried chicken, and 2 generous portions of fresh chips."
      },
      {
        id: "chicken-piece",
        name: "Chicken Leg/Wing/Thigh",
        price: 3.00,
        description: "A single piece of freshly pressure fried southern chicken."
      },
      {
        id: "southern-fried-breast",
        name: "Southern Fried Breast",
        price: 5.00,
        description: "Succulent, high-grade chicken breast coated in our signature recipe of 11 herbs and spices."
      },
      {
        id: "popcorn-chicken-box",
        name: "Popcorn Chicken Box",
        price: 7.50,
        description: "A serving of crispy popcorn chicken pieces accompanied by warm golden chips."
      },
      {
        id: "popcorn-chicken-plain",
        name: "Popcorn Chicken",
        price: 5.50,
        description: "A plentiful basket of addictive, seasoned popped chicken breast bites.",
        allergens: ["Gluten", "Milk"]
      },
      {
        id: "roast-breast",
        name: "Roast Breast",
        price: 7.00,
        description: "Oven roast tender chicken breast.",
        allergens: ["Sulphur Dioxide & Sulphites"]
      },
      {
        id: "chicken-balls",
        name: "Chicken Balls",
        price: 7.00,
        description: "6 crispy battered, standard Irish sweet and savory chicken breast balls.",
        allergens: ["Gluten"]
      },
      {
        id: "chicken-tenders-plain",
        name: "Chicken Tenders",
        price: 6.00,
        description: "Premium breaded southern style fingers of select white meat chicken breast.",
        allergens: ["Gluten"]
      },
      {
        id: "chicken-goujons-spicy",
        name: "Chicken Goujons Spicy",
        price: 6.00,
        description: "Crispy fiery, spicy coated long cut chicken tenderloins.",
        allergens: ["Gluten", "Celery"]
      },
      {
        id: "chicken-nuggets-plain",
        name: "Chicken Nuggets",
        price: 4.50,
        description: "6 pieces of high-quality bite-sized fried breaded chicken nuggets.",
        allergens: ["Gluten"]
      },
      {
        id: "crispy-chicken-wings-special",
        name: "Crispy Chicken Wings",
        price: 9.00,
        description: "Seasoned crispy fried deep-fried chicken wings served with a complimentary cup of Garlic sauce.",
        allergens: ["Celery"]
      },
      {
        id: "chicken-wings",
        name: "Chicken Wings",
        price: 9.50,
        description: "Plump, delicious chicken wings glazed with choice of sauce."
      },
      {
        id: "boneless-chicken-wings",
        name: "Boneless Chicken Wings",
        price: 8.50,
        description: "Battered and pressure-fried chicken wing bites without bones."
      }
    ]
  },
  {
    id: "kebabs",
    name: "Kebabs",
    items: [
      {
        id: "doner-kebab",
        name: "Doner Kebab",
        price: 9.00,
        description: "Thinly sliced, roasted lamb doner in warm pocket flatbread with crisp and fresh mixed salads, covered in garlic & chilli sauce.",
        allergens: ["Gluten", "Crustaceans"]
      },
      {
        id: "taco-kebab",
        name: "Taco Kebab",
        price: 9.00,
        description: "Lamb doner meat combined with spicy ground taco beef, topped with rich homemade taco sauce.",
        allergens: ["Gluten"]
      },
      {
        id: "chicken-fillet-kebab",
        name: "Chicken Fillet Kebab",
        price: 9.00,
        description: "Seasoned, flame-grilled chicken breast fillets inside pitta bread with specialized kebab sauce.",
        allergens: ["Gluten", "Sesame Seeds"]
      },
      {
        id: "jumbo-kebab",
        name: "Jumbo Kebab",
        price: 10.50,
        description: "Gigantic version of our standard lamb doner kebab for the ultimate appetite. Highly recommended by locals!",
        allergens: ["Gluten", "Crustaceans"]
      },
      {
        id: "mixed-kebab",
        name: "Mixed Kebab",
        price: 10.50,
        description: "Can't decide? Savor the mix of shaved tender lamb doner and marinated grilled chicken.",
        allergens: ["Gluten", "Crustaceans"]
      },
      {
        id: "steak-kebab",
        name: "Steak Kebab",
        price: 9.00,
        description: "Sliced succulent steak pieces grilled together with onions and packed inside fresh pitta flatbread.",
        allergens: ["Gluten"]
      },
      {
        id: "rib-steak-kebab",
        name: "Rib Steak Kebab",
        price: 9.00,
        description: "Tender rib-steak grilled strip topped with crisp cabbage and house kebab sauce.",
        allergens: ["Gluten", "Crustaceans"]
      },
      {
        id: "veggie-kebab",
        name: "Veggie Kebab",
        price: 7.00,
        description: "Crispy grilled halloumi cheese and seasoned roasted garden vegetables with crisp salads in flatbread.",
        allergens: ["Gluten"]
      },
      {
        id: "chip-kebab",
        name: "Chip Kebab",
        price: 6.50,
        description: "Fresh chips stuffed in a warm pocket wrap with lettuce, onions, and garlic-chilli drizzle.",
        allergens: ["Gluten"]
      },
      {
        id: "kebab-tray",
        name: "Kebab Tray",
        price: 8.50,
        description: "A generous bed of fresh chips covered in juicy doner meat, smothered with melted cheese and sauces."
      },
      {
        id: "steak-kebab-tray",
        name: "Steak Kebab Tray",
        price: 8.50,
        description: "A loaded plastic tray containing grilled tender steak strips over crisp chips, hot onions, and pepper sauces."
      },
      {
        id: "chicken-kebab-tray",
        name: "Chicken Kebab Tray",
        price: 8.50,
        description: "Grilled or fried golden chicken strips laid over our signature chipper chips with cheese and sauces."
      },
      {
        id: "mix-kebab-tray",
        name: "Mix Kebab Tray",
        price: 9.50,
        description: "Chips topped with lamb doner, grilled chicken, and steak pieces, finished with custom garlic & chilli sauce."
      },
      {
        id: "mix-kebab-meal-kebab",
        name: "Mix Kebab Meal",
        price: 16.00,
        description: "Includes our premium mixed kebab, a side of hot golden chips, and a cold bottle of drink."
      },
      {
        id: "pitta-bread-side",
        name: "Pitta bread",
        price: 1.00,
        description: "Warm, lightly toasted single flat pitta pocket."
      }
    ]
  },
  {
    id: "fish",
    name: "Fresh Fish & Seafood",
    items: [
      {
        id: "fresh-fillet-cod",
        name: "Fresh Fillet of Cod",
        price: 9.50,
        description: "Premium coldwater Atlantic cod fillet in crisp golden-battered crust, Cooked to order.",
        allergens: ["Gluten"]
      },
      {
        id: "smoked-cod",
        name: "Smoked Cod",
        price: 9.50,
        description: "Local tradition. Deep-fried golden beer-battered smoked cod steak.",
        allergens: ["Gluten"]
      },
      {
        id: "cod-portion",
        name: "Cod Portion",
        price: 6.00,
        description: "Mid-sized serving of freshly-battered cod fish.",
        allergens: ["Gluten"]
      },
      {
        id: "scampi",
        name: "Scampi",
        price: 6.50,
        description: "8 deep-fried breaded bite-sized Dublin Bay prawns, with homemade tartare sauce.",
        allergens: ["Gluten"]
      },
      {
        id: "fish-box-meal",
        name: "Fish Box",
        price: 9.50,
        description: "Fresh cod pieces, chips, lemon segment, and a side of homemade tartare sauce.",
        allergens: ["Gluten"]
      },
      {
        id: "fish-goujons",
        name: "Fish Goujons",
        price: 6.50,
        description: "Crispy golden battered strips of white cod fish, perfect for a light snack."
      }
    ]
  },
  {
    id: "general",
    name: "Classic Sides & Sausages",
    items: [
      {
        id: "plain-sausage",
        name: "Plain Sausage",
        price: 2.00,
        description: "Local jumbo pork sausage deep fried to golden caramelization.",
        allergens: ["Gluten", "Sulphur Dioxide & Sulphites"]
      },
      {
        id: "battered-sausage",
        name: "Battered Sausage",
        price: 3.50,
        description: "Premium pork sausage rolled in our custom light yeast batter and deep fried until puffy & crispy.",
        allergens: ["Gluten", "Sulphur Dioxide & Sulphites"]
      },
      {
        id: "cocktail-sausages",
        name: "Cocktail Sausages",
        price: 4.50,
        description: "Portion of 10 juicy bite-sized mini pork cocktail sausages.",
        allergens: ["Gluten", "Sulphur Dioxide & Sulphites"]
      },
      {
        id: "sausage-box",
        name: "Sausage Box",
        price: 6.50,
        description: "A serving of plain sausages over our freshly-cut golden chipper chips.",
        allergens: ["Gluten", "Sulphur Dioxide & Sulphites"]
      },
      {
        id: "mini-battered-sausage-box",
        name: "Mini Battered Sausage Box",
        price: 6.50,
        description: "Battered cocktail sausages served on a bed of fresh hot chips.",
        allergens: ["Gluten", "Sulphur Dioxide & Sulphites"]
      },
      {
        id: "onion-rings",
        name: "Onion Rings",
        price: 4.00,
        description: "Crispy beer battered sweet thick sliced direct cut onion rings.",
        allergens: ["Gluten"]
      },
      {
        id: "wagon-wheel",
        name: "Wagon Wheel Onion Ring",
        price: 2.50,
        description: "Giant custom single-battered oversized onion rings.",
        allergens: ["Gluten"]
      },
      {
        id: "potato-cakes",
        name: "Potato Cakes",
        price: 4.50,
        description: "Traditional grid-battered savory potato cakes with cream cheese.",
        allergens: ["Gluten"]
      },
      {
        id: "battered-mushrooms",
        name: "Battered Mushrooms",
        price: 4.50,
        description: "Fresh field portobello button mushrooms coated in crispy yeast batter.",
        allergens: ["Gluten"]
      },
      {
        id: "garlic-mushrooms",
        name: "Garlic Mushrooms",
        price: 5.00,
        description: "Yeast battered fried mushrooms layered in garlic mayonnaise.",
        allergens: ["Gluten"]
      },
      {
        id: "battered-burger-side",
        name: "Battered Burger",
        price: 4.50,
        description: "Spiced burger patty fully battered and deep-fried without bun.",
        allergens: ["Gluten", "Crustaceans", "Milk"]
      },
      {
        id: "spice-burger",
        name: "Spice Burger",
        price: 4.00,
        description: "The classic Irish delicacy! Seasoned minced beef and grain patty coated in crisp dark crumbs.",
        allergens: ["Gluten", "Crustaceans"]
      },
      {
        id: "curry-roll",
        name: "Curry Roll",
        price: 4.50,
        description: "Piping-hot roll loaded with dense house-made chip shop curry sauce.",
        allergens: ["Gluten", "Mustard"]
      },
      {
        id: "rib-steak-plain",
        name: "Rib Steak",
        price: 3.00,
        description: "Flame-grilled rib patty brushed with dark sweet barbecue glaze.",
        allergens: ["Crustaceans"]
      },
      {
        id: "rib-roll",
        name: "Rib Roll",
        price: 5.00,
        description: "Barbecue rib patty inside a warm bun with sweet burger relish.",
        allergens: ["Gluten", "Crustaceans"]
      },
      {
        id: "hot-dog-plain",
        name: "Hot Dog",
        price: 5.00,
        description: "Jumbo hotdog sausage in a soft finger bun with ketchup and mustard.",
        allergens: ["Gluten"]
      },
      {
        id: "chilli-dog-plain",
        name: "Chilli Dog",
        price: 5.00,
        description: "Gourmet hot dog loaded with hot chilli mince beef and relish.",
        allergens: ["Gluten"]
      },
      {
        id: "spring-roll-plain",
        name: "Spring Roll",
        price: 5.00,
        description: "Savoury vegetable and shredded meat crispy Chinese pancake.",
        allergens: ["Gluten", "Crustaceans", "Celery"]
      },
      {
        id: "steak-kidney-pie",
        name: "Steak & Kidney Pie",
        price: 4.00,
        description: "Individual golden puff pastry crust filled with meat gravy.",
        allergens: ["Gluten", "Milk"]
      }
    ]
  },
  {
    id: "drinks",
    name: "Cold Drinks",
    items: [
      { id: "coca-cola", name: "Coca-Cola", price: 2.35, description: "330ml Can" },
      { id: "diet-coke", name: "Diet Coke", price: 2.35, description: "330ml Can" },
      { id: "coke-zero", name: "Coke Zero", price: 2.35, description: "330ml Can" },
      { id: "fanta-orange", name: "Fanta Orange", price: 2.35, description: "330ml Can" },
      { id: "fanta-lemon", name: "Fanta Lemon Can", price: 2.35, description: "330ml Can - Includes €0.15 DRS deposit." },
      { id: "7up", name: "7Up", price: 2.00, description: "330ml Can" },
      { id: "club-orange", name: "Club Orange Bottle", price: 2.95, description: "500ml Bottle - Includes €0.15 DRS deposit." },
      { id: "diet-7up", name: "Diet 7Up Bottle", price: 2.95, description: "500ml Bottle - Includes €0.15 DRS deposit." },
      { id: "lucozade", name: "Lucozade", price: 2.80, description: "380ml Bottle" },
      { id: "rock-shandy", name: "Rock Shandy Bottle", price: 2.95, description: "500ml Bottle - Includes €0.15 DRS deposit." },
      { id: "water", name: "Water", price: 2.15, description: "500ml Spring water bottle - Includes €0.15 DRS deposit." },
      { id: "capri-sun", name: "Capri Sun", price: 1.50, description: "200ml kid's drink pouch" },
      { id: "fanta-exotic", name: "Fanta Exotic Can", price: 2.50, description: "330ml Can" }
    ]
  }
];

export const reviews: Review[] = [
  {
    id: "rev-1",
    author: "Paddy Keena",
    rating: 5,
    timeAgo: "6 months ago",
    comment: "The nicest chipper in Dublin so far and good portions for your money would highly recommend this one foods absolutely delicious never had a bad experience 🇮🇪☘️☺️",
    tags: ["nicest chipper", "good portions", "highly recommend", "delicious"]
  },
  {
    id: "rev-2",
    author: "David Whittaker",
    rating: 5,
    timeAgo: "9 months ago",
    comment: "Amazing fish and chips 👍best I have had in a long time. Sat outside waiting till ready and the lady brought the food out when it was ready… top notch. Chicken gravy to die for. Excellent.",
    tags: ["best fish & chips", "chicken gravy", "excellent service", "top notch"]
  },
  {
    id: "rev-3",
    author: "Rafal Platek",
    rating: 5,
    timeAgo: "5 months ago",
    comment: "The best fish and chips in Dublin. That's the way it should be done. Heaven in your mouth.",
    tags: ["heaven in your mouth", "best in dublin", "fish & chips"]
  },
  {
    id: "rev-4",
    author: "Thomas V",
    rating: 5,
    timeAgo: "7 months ago",
    comment: "One of the best chippers I've had! Never seen a chipper so busy but food was really good and great service!",
    tags: ["great service", "very busy", "best chipper"]
  },
  {
    id: "rev-5",
    author: "Christine Nugent",
    rating: 5,
    timeAgo: "9 months ago",
    comment: "An absolutely fabulous family-owned business would highly recommend them. They do great deals and lovely food. The staff are amazing very friendly and very nice",
    tags: ["family-owned", "friendly staff", "fab deals"]
  },
  {
    id: "rev-6",
    author: "Atonal Media",
    rating: 5,
    timeAgo: "7 years ago",
    comment: "I don't even know where to begin, the menu is the best chipper menu I've ever seen and won't see another one like it. I drive from one side of Dublin to the other just to get it! The staff are all sound and the price of the food is fantastic.",
    tags: ["best chipper menu", "staff are sound", "fantastic prices"]
  },
  {
    id: "rev-7",
    author: "Ger Behan",
    rating: 5,
    timeAgo: "a year ago",
    comment: "This is the best chippy in Dublin. All food cooked freshly, the biggest Ray I ever got in a chipper. Go try this place for yourself, you won't be disappointed 😋",
    tags: ["cooked freshly", "best chippy", "huge ray"]
  },
  {
    id: "rev-8",
    author: "Monika Pociute",
    rating: 5,
    timeAgo: "a year ago",
    comment: "The staff were very nice, and it seems like they have fun doing what they do. TikTok brought us here to try the Stonner Kebab. We got 4 and some sauce, and the lad behind the counter was sound and threw in a load of chips, too. Absolutely delicious!",
    tags: ["stonner kebab", "tiktok viral", "highly customer friendly", "generous"]
  },
  {
    id: "rev-9",
    author: "amanda haskins",
    rating: 5,
    timeAgo: "2 years ago",
    comment: "Delicious food. Ordered online Friday and the food arrived piping hot and with lots of sauce as I requested. Delivery driver was so friendly and arrived within the hour. Highly recommended to all.",
    tags: ["piping hot", "fast delivery", "extra sauce"]
  },
  {
    id: "rev-10",
    author: "Gerry O Connor",
    rating: 5,
    timeAgo: "2 months ago",
    comment: "Best chipper in Dublin. Spotless clean.",
    tags: ["spotless clean", "best chipper"]
  },
  {
    id: "rev-11",
    author: "Michael Burke",
    rating: 5,
    timeAgo: "3 months ago",
    comment: "Best takeaway in Clondalkin/Ballyfermot area.",
    tags: ["clondalkin local", "best takeaway"]
  },
  {
    id: "rev-12",
    author: "mike mckeown",
    rating: 5,
    timeAgo: "a year ago",
    comment: "All good, friendly enough staff, nice food. One of the rare places where the garlic cheese and chips is not one solid lump of melted cheese.",
    tags: ["garlic cheese chips", "friendly staff", "nice food"]
  }
];

export const openingHours: OpeningHour[] = [
  { day: "Monday", hours: "4:30 pm - 10:00 pm" },
  { day: "Tuesday", hours: "4:30 pm - 10:00 pm" },
  { day: "Wednesday", hours: "4:30 pm - 10:00 pm" },
  { day: "Thursday", hours: "4:30 pm - 10:00 pm" },
  { day: "Friday", hours: "4:30 pm - 10:00 pm" },
  { day: "Saturday", hours: "4:30 pm - 10:00 pm" },
  { day: "Sunday", hours: "4:30 pm - 10:00 pm" }
];

export const contacts = {
  phone: "014573267",
  addressAddressLine1: "1 St Patrick's Rd",
  addressArea: "Clondalkin, Dublin 22, D22 F662, Ireland",
  lat: 53.3228919,
  lng: -6.3888392,
  mapUrl: "https://www.google.com/maps/place/The+9th+Lough/@53.3228919,-6.3888392,17z"
};
