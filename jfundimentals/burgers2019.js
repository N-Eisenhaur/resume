let burgerData = [
    {
      "restaurant": "2 Doors Down",
      "address": "1533 Barrington Street",
      "url": "http://go2doorsdown.com",
      "price": "$6.00",
      "name": "The Greek Burger",
      "desc": "A PEI beef patty, Annapolis Valley feta, tzatziki, tomato mint chutney and onion slaw on a sesame bun.",
      "categories": [
        "NS Ingredients", 
        "Gluten Free",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "3Sixty at Casino Nova Scotia",
      "address": "1983 Upper Water Street",
      "url": "https://casinonovascotia.com",
      "price": "$17.00",
      "name": "Pork-U-Pineapple Burger",
      "desc": "A 6-oz Angus beef patty loaded up with thick bacon and fried pineapple, topped with applewood smoked cheddar, Sriracha mayo, BBQ sweet chili relish and jalapeno, topped with a fried egg. Served on a pretzel bun.",
      "categories": [
        "$1.00 to Feed NS",
        "Comes with Side",
        "Gluten Free"
      ]
    },
    {
      "restaurant": "aFrite Restaurant",
      "address": "1360 Lower Water Street",
      "url": "https://afrite.ca",
      "price": "$15.00",
      "name": "Caesar Burger",
      "desc": "Rim-salted AAA sirloin, Clamato ketchup, spicy bean relish, house-smoked bacon, asiago, vodka-pickled celery.",
      "categories": [
        "$2.00 to Feed NS",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Agricola Street Brasserie",
      "address": "2540 Agricola Street",
      "url": "https://rcr.ca/restaurants/agricola-street-brasserie/",
      "price": "$15.00",
      "name": "Brasserie Burger",
      "desc": "House-ground Atlantic beef, cheddar cheese sauce, hickory-smoked bacon, balsamic onion jam, herb aioli, lettuce and house pickles on a toasted bun.",
      "categories": [
        "$3.00 to Feed NS",
        "NS Ingredients",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Antojo Tacos + Tequila",
      "address": "1667 Argyle Street",
      "url": "http://legendaryhospitality.ca ",
      "price": "$18.00",
      "name": "Al Pastor",
      "desc": "Getaway Farms pork shoulder, anato seed and recado roja seasoning, morita tomato jam, grilled pineapple, cilantro lime aioli, served with house-made totopos and tatamada salsa on a 24 Carrots Bakery torta bun.",
      "categories": [
        "$2.00 to Feed NS",
        "NS Ingredients",
        "Comes with Side"
      ]
    },
    {
      "restaurant": "Ardmore Tea Room",
      "address": "6499 Quinpool Road",
      "url": "https://facebook.com/Ardmoretearoom",
      "price": "$6.00",
      "name": "Cinnamon Roll Burger",
      "desc": "A sausage patty with a fried egg, cheese, \"Acadian\" maple mayo on a cinnamon roll bun.",
      "categories": [
        "NS Ingredients",
        "Comes with Side"
      ]
    },
    {
      "restaurant": "The Armview Restaurant & Lounge",
      "address": "7156 Chebucto Road",
      "url": "https://thearmview.com",
      "price": "$16.00",
      "name": "A Spicy Burger With No Name",
      "desc": "Atlantic beef patty, habanero relish, Cajun bacon jam, crispy onions, jalapeno Jack cheese, Hurricane BBQ Sauce served on a challah bun.",
      "categories": [
        "$2.00 to Feed NS",
        "Comes with Side",
        "Take-Out",
        "Gluten Free",
        "Dairy Free",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Athens Restaurant",
      "address": "6273 Quinpool Road",
      "url": "https://athensrestaurant.com",
      "price": "$6.00",
      "name": "Greek Burger",
      "desc": "1/4-pound ground chuck, tsatziki, feta, tomato, Kalamata olives, oregano on a premium bun.",
      "categories": [
        "Take-Out"
      ]
    },
    {
      "restaurant": "The Auction House ",
      "address": "1726 Argyle Street ",
      "url": "https://auctionhousehalifax.com",
      "price": "$6.00",
      "name": "Asiago Luego",
      "desc": "All-beef patty grilled to perfection, topped with bacon, tomato jam and drizzled with an asiago cheese sauce.",
      "categories": []
    },
    {
      "restaurant": "The Barrington Steakhouse & Oyster Bar",
      "address": "1662 Barrington Street ",
      "url": "https://barringtonsteakhouse.ca",
      "price": "$16.00",
      "name": "Burg-Ducken",
      "desc": "Fresh Atlantic beef patty, duck confit, crispy chicken skin, orange slaw, cilantro and hoisin.",
      "categories": [
        "$2.00 to Feed NS",
        "Chicken",
        "Take-Out",
        "Gluten Free",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "Bâton Rouge",
      "address": "1877 Hollis Street",
      "url": "https://batonrouge.ca",
      "price": "$16.00",
      "name": "The Jalapeno Melt",
      "desc": "Premium beef, smoked bacon, coated in a three-cheese cream sauce, topped with sizzling mushrooms and onions, jalapenos, garlic mayo and arugula.",
      "categories": [
        "$2.00 to Feed NS",
        "Comes with Side",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Battery Park BeerBar & Eatery",
      "address": "62 Ochterloney Street",
      "url": "https://batterypark.ca",
      "price": "$12.00",
      "name": "The Dartmouth Donair Burger",
      "desc": "Thinly sliced donair meat, mozzarella, mortadella, red donair sauce and drunken onions.",
      "categories": [
        "$1.00 to Feed NS",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Beaver Bank Station ",
      "address": "991 Windgate Drive",
      "url": "http://beaverbankstation.com",
      "price": "$9.00",
      "name": "The Station Burger",
      "desc": "Hand-pressed Angus beef, lettuce, pickles, onions and tomatoes on a soft kaiser bun with Station Sauce.",
      "categories": [
        "$1.00 to Feed NS",
        "Gluten Free"
      ]
    },
    {
      "restaurant": "The Bicycle Thief",
      "address": "1475 Lower Water Street",
      "url": "https://bicyclethief.ca",
      "price": "$20.00",
      "name": "The Pastore",
      "desc": "Lamb burger with salsa verde aioli, confit tomato ketchup, flash-fried red onion rings and provolone cheese on a handmade bun.",
      "categories": [
        "$5.00 to Feed NS",
        "Comes with Side",
        "Substitutions allowed"
      ]
    },
    {
      "restaurant": "Big Leagues Pub",
      "address": "920 Cole Harbour Road",
      "url": "http://bigleagues.ca",
      "price": "$6.00",
      "name": "The Blue Bayou",
      "desc": "6-oz Cajun-rubbed ground chuck patty with fried onions, lettuce, tomato and Cajun sauce, topped with a creamy blue cheese crumble (vegetarian option available).",
      "categories": [
        "Substitutions allowed"
      ]
    },
    {
      "restaurant": "Black Sheep Restaurant",
      "address": "1569 Dresden Row",
      "url": "http://blacksheephalifax.com",
      "price": "$18.00",
      "name": "Three Little Pigs",
      "desc": "Spiced Oulton's pork, pancetta, cicerone, fried egg, smoked Beemster, chimichurri, sesame bun.",
      "categories": [
        "$3.00 to Feed NS",
        "NS Ingredients",
        "Comes with Side",
        "Take-Out",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Bluenose II Restaurant",
      "address": "1824 Hollis Street",
      "url": "http://bluenose.ca",
      "price": "$8.00",
      "name": "1/2-Pound Bluenose Aioli Cheese Burger",
      "desc": "Bluenose 1/2-pound burger, cheese, bacon, tomatoes, lettuce and special aioli sauce on a sesame seed bun.",
      "categories": [
        "$1.00 to Feed NS",
        "Take-Out",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "BOOMburger",
      "address": "64 Delllridge Lane",
      "url": "https://boomburger.ca",
      "price": "$8.49",
      "name": "Bonfire Burger",
      "desc": "Spicy Sriracha, Cows cheese, quality local Oulton's beef, sweet pickles, grilled onions and specialty BBQ potato chips.",
      "categories": [
        "$1.00 to Feed NS",
        "NS Ingredients",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Brewster's Bar & Grill",
      "address": "961 Bedford Highway",
      "url": "https://brewstersbarandgril.ca",
      "price": "$6.00",
      "name": "Brew \"Boar\"ger",
      "desc": "Boar burger topped with goat cheese, arugula, fig jam and Granny Smith apples.",
      "categories": [
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Brightwood Golf and Country Club",
      "address": "227 School Street",
      "url": "https://brightwood.ns.ca",
      "price": "$6.00",
      "name": "The Brightwood",
      "desc": "Applewood-smoked beef burger with Monterey Jack and crispy jalapeno and dill pickle slaw.",
      "categories": [
        "Substitutions allowed",
        "Take-Out",
        "Gluten Free",
        "Dairy Free",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "The British Bulldog Gastropub",
      "address": "912 Cole Harbour Road",
      "url": "https://www.british-bulldog-gastropub.com/",
      "price": "$6.00",
      "name": "007 Bond, Burger Bond",
      "desc": "7-oz local ground chuck, double slices of smoked cheddar, double smoked bacon, crispy onions, sweet chili jam and deep-fried brie.",
      "categories": [
        "Gluten Free"
      ]
    },
    {
      "restaurant": "The Brooklyn Warehouse",
      "address": "2795 Windsor Street",
      "url": "http://brooklynwarehouse.ca/",
      "price": "$14.00",
      "name": "The Brooklyn Donair Burger",
      "desc": "House-made donair meatloaf, roasted-tomato relish, raw onion, Hickory Sticks and donair sauce aioli.",
      "categories": [
        "$1.00 to Feed NS",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Bubba Ray's Sports Bar",
      "address": "7071 Bayers Road, 1658 Bedford Highway",
      "url": "https://bubbarays.com",
      "price": "$8.00",
      "name": "Philly Cheese Burger",
      "desc": "6-oz house-made patty, grilled onions and Philly cheese sauce served on an artisan burger bun topped with a pickle strip.",
      "categories": [
        "$1.00 to Feed NS",
        "Substitutions allowed",
        "Take-Out"
      ]
    },
    {
      "restaurant": "The Butcher’s Block Pub & Eatery",
      "address": "540 Southgate Drive",
      "url": "https://Butchersblockpub.com",
      "price": "$15.50",
      "name": "The Crunchy Clucker",
      "desc": "Southern-style fried chicken with lettuce, tomato, mayo and cheddar.",
      "categories": [
        "$1.00 to Feed NS",
        "Chicken",
        "Comes with Side",
        "Take-Out",
        "Dairy Free",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Byblos Lebanese Cuisine",
      "address": "644 Portland Street",
      "url": "http://bybloscuisine.ca",
      "price": "$6.99",
      "name": "Habibi Burger",
      "desc": "Spiced and grilled AAA grass-fed beef ground in-house, topped with smoked gouda, double-smoked Chris Brothers bacon, local homemade onion crisp, pickled hot banana pepper and house-made BBQ sauce on an East Coast Bakery brioche bun.",
      "categories": [
        "$1.00 to Feed NS",
        "NS Ingredients",
        "Take-Out",
        "Gluten Free",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "The Canteen on Portland",
      "address": "22 Portland Street",
      "url": "https://www.thecanteen.ca/",
      "price": "$18.00",
      "name": "The Canteen Double Cheeseburger",
      "desc": "Two all-beef patties, melted havarti, special sauce, lettuce, dill pickles and frizzled onions on a house-made sesame bun.",
      "categories": [
        "$1.00 to Feed NS",
        "Comes with Side",
        "Gluten Free",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "Canvas Resto Lounge",
      "address": "1583 Brunswick Street",
      "url": "https://cambridgesuiteshalifax.com/dining.php",
      "price": "$8.00",
      "name": "#Eggstraburger",
      "desc": "Grilled beef burger with bacon onion jam, spicy tomato chutney, deep-fried 64° egg yolk on a toasted Ace bun.",
      "categories": [
        "$1.00 to Feed NS",
        "Substitutions allowed",
        "Take-Out",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "The Carleton",
      "address": "1685 Argyle Street",
      "url": "https://thecarleton.ca",
      "price": "$10.00",
      "name": "The Mañana Burger",
      "desc": "PEI beef topped with smoked cheddar, a fried egg, peameal bacon, habanero aioli and pickled peppers, on a croissant bun.",
      "categories": [
        "$1.00 to Feed NS",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Celtic Corner Public House",
      "address": "69 Alderney Drive",
      "url": "http://celticcorner.ca",
      "price": "$6.00",
      "name": "Celtic 1/2-Pound Angus",
      "desc": "8-oz Angus ground chuck steak burger with real cheddar and choice of salad toppings.",
      "categories": [
        "Take-Out",
        "Dairy Free",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Chameleon Cafe & Supper Club",
      "address": "7071 Bayers Road",
      "url": "https://chameleoncatering.ca",
      "price": "$14.50",
      "name": "Chameleon Sicilian Burger",
      "desc": "6-oz chorizo and beef patty with capicola, roasted pepper mayo, provolone cheese, tomato jam, served with Chameleon Magic Fries.",
      "categories": [
        "$3.00 to Feed NS",
        "NS Ingredients",
        "Comes with Side",
        "Take-Out",
        "Gluten Free",
        "Dairy Free",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Cheese Curds Gourmet Burgers + Poutinerie",
      "address": "277 Lacewood Drive , 507 Larry Uteck Boulevard , 600 Windmill Road, 380 Pleasant Street",
      "url": "https://cheesecurdsburgers.com",
      "price": "$12.00",
      "name": "Cheesy Fondue Crunch Burger",
      "desc": "100% beef patty with breaded mozzarella, cheddar cheese sauce, red onion, tomato and lettuce.",
      "categories": [
        "$1.00 to Feed NS",
        "Substitutions allowed"
      ]
    },
    {
      "restaurant": "The Chickenburger",
      "address": "1531 Bedford Highway",
      "url": "https://chickenburger.com",
      "price": "$6.00",
      "name": "Nach Yo Burger",
      "desc": "Brioche bun topped with guacamole, fresh red onion, homemade beef patty, chorizo sausage, Monterey Jack cheddar, salsa, Doritos and chipotle mayo.",
      "categories": [
        "NS Ingredients",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Chives Canadian Bistro",
      "address": "1537 Barrington Street",
      "url": "http://chives.ca",
      "price": "$21.00",
      "name": "Short Rib Mushroom Swiss Melt",
      "desc": "A ground and braised beef short rib burger, steak spice, HP mushrooms, mozzarella, Emmental, crispy onions, smoked aioli, arugula on a brioche bun.",
      "categories": [
        "$5.00 to Feed NS",
        "NS Ingredients",
        "Comes with Side",
        "Substitutions allowed",
        "Gluten Free",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "Clay West Bar & Grill",
      "address": "120 Susie Lake Crescent ",
      "url": "https://facebook.com/claywesthalifax/",
      "price": "$6.00",
      "name": "Maple Bacon Cheeseburger",
      "desc": "Canadian beef, toasted bun, American cheese, candied maple bacon, mildly spicy ketchup and a house-made pickle.",
      "categories": [
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Darrell's Restaurant",
      "address": "5576 Fenwick Street",
      "url": "https://darrellsrestaurants.com",
      "price": "$6.00",
      "name": "Peanut Butter Burger",
      "desc": "Certified Angus beef topped with whole cheddar, bacon, tomato, crisp lettuce, delicious condiments and peanut butter.",
      "categories": [
        "Gluten Free",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Dee Dee's Ice Cream",
      "address": "5668 Cornwallis Street",
      "url": "http://deedees.ca",
      "price": "$8.00",
      "name": "Spicy Black Bean Sweet Potato Burger",
      "desc": "Sweet potato black bean burger on a house-made potato bun with jalapeno crema, pickled red onion and lettuce.",
      "categories": [
        "$1.00 to Feed NS",
        "NS Ingredients",
        "Vegetarian",
        "Vegan",
        "Take-Out",
        "Gluten Free",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "Doolittle’s Sports Bar & Grill",
      "address": "90 Tacoma Drive",
      "url": "http://doolittles.ca",
      "price": "$6.00",
      "name": "Chipotle Philly Burger",
      "desc": "Seasoned sliced rib eye with fried mushrooms, onions, green pepper and cheese on a bun with chipotle mayo and banana pepper.",
      "categories": [
        "Take-Out"
      ]
    },
    {
      "restaurant": "Durty Nelly's Authentic Irish Pub",
      "address": "1645 Argyle Street",
      "url": "http://durtynellys.ca",
      "price": "$15.00",
      "name": "The Pickle Back",
      "desc": "Pickle-brined fried chicken, shredded iceberg and purple cabbage, house-pickled veg, chipotle ranch on a grilled brioche bun.",
      "categories": [
        "Chicken",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "East of Grafton Tavern",
      "address": "1580 Argyle Street",
      "url": "https://rcr.ca/restaurants/east-of-grafton-tavern/",
      "price": "$13.00",
      "name": "EOG Burger",
      "desc": "House-ground brisket, Oulton’s bacon, charred scallion and dill pickle relish, cheddar cheese and fancy sauce.",
      "categories": [
        "$3.00 to Feed NS",
        "NS Ingredients",
        "Take-Out",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Economy Shoe Shop",
      "address": "1663 Argyle Street",
      "url": "https://economyshoeshop.ca",
      "price": "$11.99",
      "name": "Montreal Smoked Meat Burger",
      "desc": "Seasoned beef patty, topped with Montreal smoked meat, house-made sauerkraut, Swiss cheese, pickles and a house-made sweet Dijon mayo, served on a kaiser bun.",
      "categories": [
        "$1.00 to Feed NS",
        "Substitutions allowed",
        "Take-Out"
      ]
    },
    {
      "restaurant": "elements on hollis",
      "address": "1181 Hollis Street",
      "url": "http://elementsonhollis.ca",
      "price": "$17.00",
      "name": "El Trumpo's Wall: Donald’s Mexican/American Burger",
      "desc": "Mexican-spiced beef and pork patty, crispy bacon, American cheddar, Frank’s RedHot pico de gallo, guacamole ranch dressing, lettuce, tomato and crispy tortilla chips.",
      "categories": [
        "$1.00 to Feed NS",
        "Comes with Side"
      ]
    },
    {
      "restaurant": "Eliot & Vine",
      "address": "2305 Clifton Street",
      "url": "https://eliotandvine.com",
      "price": "$20.00",
      "name": "The Far East Coast Burger",
      "desc": "Sous vide 8-oz Angus beef patty, gochujang and maple glazed pork belly, kewpie mayo, raclette cheese, charred onions and quick pickles, on an Ace Bakery bun.",
      "categories": [
        "$5.00 to Feed NS",
        "NS Ingredients",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Elle's Bistro",
      "address": "1678 Barrington Street",
      "url": "https://ellesbistro.com",
      "price": "$6.00",
      "name": "Jalapeno Beer Cheeseburger",
      "desc": "Local beef marinated in Saltbox stout, topped with Propeller IPA cheese sauce, beer-candied bacon, jalapenos and an onion ring.",
      "categories": [
        "NS Ingredients",
        "Take-Out"
      ]
    },
    {
      "restaurant": "enVie - A Vegan Kitchen",
      "address": "5775 Charles Street",
      "url": "https://enviehalifax.com",
      "price": "$15.00",
      "name": "Sweet 'N' Slawcy Burger",
      "desc": "A house-made seitan patty, toasted sesame slaw, garlic chili aioli, hoisin ketchup, topped with sweet pickles and green onion on a sesame bun.",
      "categories": [
        "$2.00 to Feed NS",
        "NS Ingredients",
        "Vegetarian",
        "Vegan",
        "Comes with Side",
        "Substitutions allowed",
        "Take-Out",
        "Gluten Free",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "Esquire Restaurant ",
      "address": "772 Bedford Highway",
      "url": "https://esquirerestaurant.ca",
      "price": "$6.00",
      "name": "Whiskey Business",
      "desc": "Burger patty topped with Forty Creek BBQ sauce and a homemade coleslaw.",
      "categories": []
    },
    {
      "restaurant": "Evan’s Seafood",
      "address": "2 Ochterloney Street",
      "url": "https://evansfreshseafoods.com",
      "price": "$7.00",
      "name": "Classic Fish Burger",
      "desc": "Evan's delicious local-caught haddock, lettuce, tomato and house-made tartar sauce piled high on a perfectly toasted kaiser bun.",
      "categories": [
        "$1.00 to Feed NS",
        "NS Ingredients",
        "Fish",
        "Take-Out"
      ]
    },
    {
      "restaurant": "The Exchange on Hollis",
      "address": "1579 Hollis Street",
      "url": "https://xoh.ca",
      "price": "$18.00",
      "name": "Munchie Burger",
      "desc": "A beef patty with cheese, lettuce, tomato, onion, chipotle BBQ sauce and Hickory Sticks.",
      "categories": [
        "$1.00 to Feed NS",
        "Comes with Side",
        "Take-Out",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "The Foggy Goggle",
      "address": "2057 Gottingen Street",
      "url": "https://www.thefoggygoggle.ca/",
      "price": "$8.00",
      "name": "All Inclusive Burger",
      "desc": "Vegan kidney bean and chilies patty with roasted carrot salsa and almond lemon aioli.",
      "categories": [
        "$1.00 to Feed NS",
        "Vegetarian",
        "Vegan",
        "Take-Out",
        "Gluten Free",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "Gahan House Nova Centre",
      "address": "Rogers Square, Nova Center, Downtown Halifax",
      "url": "https://halifax.gahan.ca",
      "price": "$15.00",
      "name": "Not Gahan For Long",
      "desc": "Atlantic beef burger, aged cheddar baked mac & cheese, Sydney Street Stout pulled pork and beer pickles on a brioche bun.",
      "categories": [
        "$2.00 to Feed NS",
        "Substitutions allowed",
        "Take-Out",
        "Gluten Free"
      ]
    },
    {
      "restaurant": "Gio",
      "address": "1725 Market Street",
      "url": "https://giohalifax.com",
      "price": "$8.00",
      "name": "Gio's 10 Little Things",
      "desc": "Beef patty, Oulton's pork belly, Monterey Jack, bechamel, jalapenos, garlic aioli, pickled zucchini, pepperoncino, red cabbage slaw and red onion.",
      "categories": [
        "$1.00 to Feed NS",
        "NS Ingredients"
      ]
    },
    {
      "restaurant": "The Great Wall Restaurant",
      "address": "1649 Bedford Row",
      "url": "http://thegreatwall.ca",
      "price": "$14.95",
      "name": "Hing Wah Burger",
      "desc": "Hand-chopped ground beef with pan-fried egg well done, topped with lettuce, tomato, carrots, onions and pine nuts.",
      "categories": [
        "$1.00 to Feed NS",
        "NS Ingredients",
        "Comes with Side",
        "Substitutions allowed",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Hali Deli Old World Delicatessen",
      "address": "2389 Agricola Street",
      "url": "https://halideli.com",
      "price": "$6.00",
      "name": "Hali Burger",
      "desc": "Fresh double-ground local beef patty topped with local all-beef salami, slow simmered caramelized onions and our own House Russian Mayo, all on a grilled onion bun.",
      "categories": [
        "NS Ingredients",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Halifax Alehouse",
      "address": "1717 Brunswick Street",
      "url": "https://halifaxalehouse.com",
      "price": "$12.00",
      "name": "Crispy Californian Chicken",
      "desc": "Breaded chicken topped with bacon, crispy battered avocado and sweet chili sour cream, served on a two-seed brioche bun.",
      "categories": [
        "$1.00 to Feed NS",
        "Chicken"
      ]
    },
    {
      "restaurant": "Hamachi Kita",
      "address": "5537 Young Street",
      "url": "http://hamachikita.com",
      "price": "$12.00",
      "name": "Spicy Tuna And Avocado Sushi Burger",
      "desc": "Spicy tuna, topped with Sriracha and sweet chili mayo, unagi sauce, sliced avocado, thinly sliced red cabbage and fresh kale, on a crispy rice bun.",
      "categories": [
        "$2.00 to Feed NS"
      ]
    },
    {
      "restaurant": "Harbour City Bar and Grill",
      "address": "1990 Barrington Street",
      "url": "https://hotelhalifax.ca",
      "price": "$15.00",
      "name": "Kiwi Burger",
      "desc": "All-beef patty, bacon, caramelized onions, smoked avocado aioli, beetroot, lettuce and a sunny side up egg on a brioche bun.",
      "categories": [
        "$1.00 to Feed NS",
        "NS Ingredients",
        "Comes with Side",
        "Take-Out",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Harbourstone Sea Grill & Pour House",
      "address": "1919 Upper Water Street",
      "url": "https://marriott.com/hotel-restaurants/yhzmc-halifax-marriott-harbourfront-hotel/harbourstone/5470933/home-page.mi",
      "price": "$17.00",
      "name": "The Whole Hog Burger",
      "desc": "Spiced-coffee-rubbed local pork burger with applewood stuffing, Meadowbrook smoked pig cheeks, Berwick salt roast pork belly, scrunchions, house-made bacon jam and spicy aioli.",
      "categories": [
        "$1.00 to Feed NS"
      ]
    },
    {
      "restaurant": "Heartwood ",
      "address": "6250 Quinpool Road, 3061 Gottingen Street",
      "url": "https://iloveheartwood.ca",
      "price": "$6.00",
      "name": "The Unburger",
      "desc": "Chickpea patty, lettuce, pickled beets, vegan goat cheese and spicy mustard served on a sourdough bun.",
      "categories": [
        "NS Ingredients",
        "Vegetarian",
        "Vegan",
        "Take-Out",
        "Gluten Free",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "HFX Sports Bar & Grill",
      "address": "1721 Brunswick Street",
      "url": "https://hfxsports.com",
      "price": "$13.00",
      "name": "Chicken & Waffle Burger",
      "desc": "Bacon and cheddar stuffed 6-oz Angus burger, baked into a Belgian waffle, topped with homemade chicken tenders and maple syrup.",
      "categories": [
        "$1.00 to Feed NS",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "HopYard Beer Bar",
      "address": "2103 Gottingen Street",
      "url": "https://hopyard.ca",
      "price": "$14.00",
      "name": "The Hip Hop",
      "desc": "Two 3-oz beef patties, gouda, beer gravy, Hop mayo, IPA pickle relish, tomato cider ketchup, Sugar Shack bacon on a classic bun.",
      "categories": [
        "$1.00 to Feed NS",
        "Substitutions allowed",
        "Take-Out"
      ]
    },
    {
      "restaurant": "The Hub Too",
      "address": "55 Tacoma Drive",
      "url": null,
      "price": "$6.00",
      "name": "The French Onion Beer Burger",
      "desc": "Fresh all-beef patty topped with Swiss cheese, loaded with caramelized beer onions on a toasted garlic butter bun with homemade Dijon mayo.",
      "categories": [
        "$1.00 to Feed NS",
        "NS Ingredients",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Il Trullo Ristorante",
      "address": "102 - 67 King's Wharf Place",
      "url": "https://iltrullo.ca",
      "price": "$15.00",
      "name": "Squitto Alla Griglia",
      "desc": "Italian-spiced bacon and sausage burger with sweet pepper compote, basil aioli, crispy leeks, provolone and arugula on a bun.",
      "categories": [
        "$2.00 to Feed NS",
        "Comes with Side",
        "Take-Out",
        "Gluten Free",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "Jamaica Vibes Restaurant",
      "address": "5640 Spring Garden Road",
      "url": "jamaicavibesrestaurant.com",
      "price": "$13.00",
      "name": "Vibes Burger",
      "desc": "Fresh 7-oz ground beef patty seasoned with Jamaica Vibes jerk marinade, jerked on a smoked grill, then dipped in thick oxtail gravy and layered with pineapple cheese, lettuce, tomato, onion and bits of spicy jerked chicken, served on a Jamaican-style coco bun.",
      "categories": [
        "$1.00 to Feed NS",
        "Comes with Side",
        "Take-Out"
      ]
    },
    {
      "restaurant": "John's Lunch",
      "address": "352 Pleasant Street",
      "url": "https://m.facebook.com/pages/category/Seafood-Restaurant/Johns-Lunch-110984875632088/",
      "price": "$9.99",
      "name": "M M M M…Burger",
      "desc": "Local ground beef, deep-fried mozza slab, grilled mushrooms and mayo.",
      "categories": [
        "$1.00 to Feed NS",
        "Substitutions allowed",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Johnny K's Authentic Donairs",
      "address": "5246 Blowers Street",
      "url": "http://johnnyksdonair.com",
      "price": "$6.00",
      "name": "Donair Burger",
      "desc": "Thinly sliced PEI beef shaved from Johnny K’s handmade donair, topped with freshly chopped tomatoes, onions and sweet donair sauce.",
      "categories": [
        "Substitutions allowed",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Jungle Jim's Eatery",
      "address": "189 Chain Lake Drive",
      "url": "https://junglejims.ca",
      "price": "$6.00",
      "name": "Chimi Burger",
      "desc": "6-oz char-grilled ground sirloin patty, topped with house-made chimichurri mayo and spicy deep-fried onions, bacon, cheddar, lettuce and tomato.",
      "categories": []
    },
    {
      "restaurant": "Katch Seafood",
      "address": "1560 Grafton Street, 7001 Mumford Road, 5201 Duke Street",
      "url": "http://katchseafood.ca",
      "price": "$7.00",
      "name": "Fish 'N' Chips Burger",
      "desc": "Local, fresh caught beer battered haddock, red cabbage, pico de gallo and Hickory Sticks, made with our homemade tartar sauce on a butter-toasted bun.",
      "categories": [
        "$1.00 to Feed NS",
        "NS Ingredients",
        "Fish",
        "Take-Out",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Kempster's Cookhouse & Eatery",
      "address": "3644 Kempt Road",
      "url": "https://kempsterscookhouse.ca",
      "price": "$6.00",
      "name": "East Coast Kitchen Party",
      "desc": "Beef burger topped with smoked bacon tomato marmalade, beer BBQ sauce, lettuce, tomato and onion.",
      "categories": []
    },
    {
      "restaurant": "King of Donair",
      "address": "6420 Quinpool Road",
      "url": "https://kingofdonair.ca",
      "price": "$6.00",
      "name": "Garlieburger",
      "desc": "Donair meat sandwiched between two slices of garlic fingers, smothered in Donair sauce.",
      "categories": [
        "Take-Out"
      ]
    },
    {
      "restaurant": "Krave Burger",
      "address": "5680 Spring Garden Road",
      "url": "http://kraveburger.com",
      "price": "$6.00",
      "name": "Bacon Jam Cheeseburger",
      "desc": "Grass-fed beef, ground in-house, topped with real cheddar, pickles, Krave Sauce and sweet-and-smokey bacon jam on a butter-toasted bun.",
      "categories": [
        "NS Ingredients",
        "Take-Out",
        "Gluten Free"
      ]
    },
    {
      "restaurant": "Kusina Express at Bearly's House of Blues & Ribs",
      "address": "1269 Barrington Street",
      "url": "https://bearlys.ca",
      "price": "$12.00",
      "name": "Adobo Burger",
      "desc": "Classic Filipino adobo-flavoured grilled patty, topped with onion, tomato, lettuce, cheese, cream mushroom sauce and BBQ pork belly.",
      "categories": [
        "$1.00 to Feed NS",
        "Comes with Side"
      ]
    },
    {
      "restaurant": "La Frasca Cibi & Vini",
      "address": "5650 Spring Garden Road",
      "url": "http://lafrasca.ca",
      "price": "$20.00",
      "name": "La Dulce Vita",
      "desc": "AAA tenderloin burger, crisp prosciutto, apple, fennel slaw, parmigiano-dusted bun, dulce de leche spread and black pepper fries.",
      "categories": [
        "$5.00 to Feed NS",
        "Comes with Side",
        "Substitutions allowed",
        "Take-Out"
      ]
    },
    {
      "restaurant": "La Piazza Ristorante ",
      "address": "6430 Chebucto Road",
      "url": "http://lapiazzarestocafe.com",
      "price": "$15.00",
      "name": "Burger By Chef G",
      "desc": "Fresh local beef, ground in-house, topped with Swiss cheese, caramelized red onions and Mediterranean harissa sauce.",
      "categories": [
        "$1.00 to Feed NS",
        "NS Ingredients",
        "Comes with Side",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Lakeside Bar & Grill",
      "address": "250 St. Margarets Bay Road",
      "url": "https://chocolatelakehotel.com",
      "price": "$6.00",
      "name": "Lakeside Diner Burger",
      "desc": "Oultons Farm’s ground beef patty topped with fried onions, cheese, bacon, ketchup, mustard and pickle.",
      "categories": [
        "Take-Out",
        "Gluten Free",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Lazeezo Gourmet Burgers",
      "address": "480 Parkland Drive",
      "url": "@lazeezo_bla instagram",
      "price": "$9.99",
      "name": "Lazeezo",
      "desc": "Two beef patties, mozza cheese, cheddar cheese, hash browns, grilled tomatoes and onions, mayo, ketchup, mustard and spicy chipotle mayo.",
      "categories": [
        "$1.00 to Feed NS",
        "Substitutions allowed",
        "Take-Out",
        "Gluten Free"
      ]
    },
    {
      "restaurant": "Le Bistro by Liz",
      "address": "1333 South Park Street",
      "url": "https://lebistrohalifax.com/",
      "price": "$6.00",
      "name": "Crispy Haddock Burger",
      "desc": "Fresh Nova Scotia haddock in a panko crust topped with sharp cheddar, lettuce, tomato, red onion and house-made tartar sauce on a brioche bun.",
      "categories": [
        "NS Ingredients",
        "Fish",
        "Take-Out",
        "Dairy Free",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Lemon Tree Restaurant",
      "address": "1532 Queen Street, 805 Bedford Highway",
      "url": "https://lemontreerestaurant.ca",
      "price": "$12.00",
      "name": "Maya Burger",
      "desc": "Veggie burger with lentil, baby spinach, fried eggplant, choice of garlic yogurt sauce or hummus and sliced tomatoes served on a whole grain burger bun.",
      "categories": [
        "$1.00 to Feed NS",
        "Vegetarian",
        "Vegan",
        "Comes with Side",
        "Take-Out",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "Lion's Head Tavern & Grill",
      "address": "3081 Robie Street",
      "url": "https://lionshead.ca",
      "price": "$12.00",
      "name": "The Bolognese Burger",
      "desc": "Our 5-oz Angus chuck patty on a sesame bun, smothered in a house-made bolognese, topped with mozzarella cheese and finished with light mayo and shredded romaine lettuce.",
      "categories": [
        "$1.00 to Feed NS",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Little Fish Oyster Bar ",
      "address": "1740 Argyle Street ",
      "url": "https://littlefishoysterbar.ca",
      "price": "$6.00",
      "name": "Surf & Turf",
      "desc": "Beef burger topped with crispy jalapeno popcorn shrimp, watermelon, goat cheese, almonds and baconnaise.",
      "categories": []
    },
    {
      "restaurant": "The Local",
      "address": "2037 Gottingen Street",
      "url": "https://www.instagram.com/thelocalhfx/",
      "price": "$7.00",
      "name": "The Jiminy Cricket",
      "desc": "A sustainable cricket/beef blend patty with Jiminy sauce on a cricket flour bun.",
      "categories": [
        "$1.00 to Feed NS",
        "Take-Out",
        "Dairy Free",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "The Loose Cannon",
      "address": "1566 Argyle Street ",
      "url": "http://theloosecannon.ca",
      "price": "$16.00",
      "name": "The Kilted Camel",
      "desc": "Seasoned camel burger, toasted focaccia bun, crispy onions, beer cheese, roasted veggies, homemade smoky ketchup and relish.",
      "categories": [
        "$1.00 to Feed NS",
        "Comes with Side",
        "Take-Out",
        "Dairy Free",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Lot Six Bar & Restaurant",
      "address": "1685 Argyle Street",
      "url": "http://lotsix.ca",
      "price": "$16.00",
      "name": "Pepper Don't Preach",
      "desc": "Peppered beef patty with stout caramelized onion, mushroom duxelles, hot Dijon aioli, Appenzeller Swiss and fresh spinach.",
      "categories": [
        "$2.00 to Feed NS",
        "Comes with Side",
        "Substitutions allowed",
        "Take-Out",
        "Gluten Free",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "M&J's Eatery & Catering",
      "address": "813 Bedford Highway",
      "url": "https://www.mjseatery.com/",
      "price": "$14.95",
      "name": "LGBT (Lettuce, Gouda or Guac, Bacon, Tomato) Burger",
      "desc": "Easily customizable house-made meatloaf burger with lettuce, guac, bacon and tomato.",
      "categories": [
        "$1.25 to Feed NS",
        "NS Ingredients",
        "Comes with Side",
        "Substitutions allowed",
        "Take-Out",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "Mappatura Bistro",
      "address": "5883 Spring Garden Road",
      "url": "mappaturabistro.ca",
      "price": "$16.00",
      "name": "Squid Pro Quo",
      "desc": "Terry's flash-fried calamari, spicy tomato, black olives, beer and provolone fondue, milk bun, crunchy slaw.",
      "categories": [
        "$2.00 to Feed NS",
        "Fish",
        "Comes with Side"
      ]
    },
    {
      "restaurant": "The Maxwell's Plum",
      "address": "1600 Grafton Street",
      "url": "https://themaxwellsplum.com",
      "price": "$7.00",
      "name": "Sliders",
      "desc": "Five all-beef sliders topped with sauteed onions on mini burger buns.",
      "categories": [
        "$1.00 to Feed NS",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Mexi's Halifax",
      "address": "5472 Spring Garden Road",
      "url": "https://mexicalirosas.com",
      "price": "$6.00",
      "name": "Best Little Burger In Texas",
      "desc": "Our Texas chili with a fajita-spiced burger patty topped with avocado crema, Jack cheese, charred corn, pickled onion and purple cabbage on a garlic toasted bun.",
      "categories": []
    },
    {
      "restaurant": "Mezza Lebanese Kitchen",
      "address": "1558 Barrington Street",
      "url": "http://mezzalebanesekitchen.com",
      "price": "$6.00",
      "name": "Chicken Shawarma Burger",
      "desc": "Our signature rotisserie-roasted, thinly sliced all-white chicken, topped with lettuce, tomatoes, pickles, pickled turnips and Mezza’s signature garlic sauce.",
      "categories": [
        "Chicken",
        "Substitutions allowed",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Montes Showbar Grill",
      "address": "245 Waverley Road",
      "url": "https://montes.ca",
      "price": "$6.00",
      "name": "Nacho Burger",
      "desc": "7-oz jalapeno-infused all-beef patty loaded with peppers, onions, tomatoes and cheese, topped with salsa/sour cream, jalapenos and crushed tortilla chips.",
      "categories": []
    },
    {
      "restaurant": "Murphy's On The Water",
      "address": "1751 Lower Water Street ",
      "url": null,
      "price": "$6.00",
      "name": "Baked Salmon Fillet Burger",
      "desc": "A lightly breaded salmon fillet, baked and topped with Asian-inspired slaw and arugula, finished with avocado remoulade and served on a brioche bun.",
      "categories": [
        "Moosehead special"
      ]
    },
    {
      "restaurant": "The Narrows Bistro",
      "address": "101 Wyse Road ",
      "url": "https://doubletree.com",
      "price": "$12.00",
      "name": "Maple Island Burger",
      "desc": "Grilled Angus beef burger with smoked cheddar, maple-cured bacon, Thousand Island slaw and maple bacon aioli on a potato scallion bun.",
      "categories": [
        "$1.00 to Feed NS",
        "Take-Out",
        "Gluten Free"
      ]
    },
    {
      "restaurant": "Niche Lounge",
      "address": "1505 Barrington Street",
      "url": "https://www.nichelounge.com/",
      "price": "$16.95",
      "name": "Tipsy Wilbur Beef Burger",
      "desc": "Grilled hand-formed burger, spicy tomato and beer bacon jam, jalapeno aioli, arugula, cheddar cheese and fried shallots.",
      "categories": [
        "$2.00 to Feed NS",
        "Comes with Side",
        "Take-Out",
        "Gluten Free"
      ]
    },
    {
      "restaurant": "Oasis Pub & Eatery",
      "address": "6575 Spring Garden Road",
      "url": "https://oasishfx.com",
      "price": "$6.00",
      "name": "The Brother Burger",
      "desc": "Brothers pepperoni and beef patty, topped with crispy wing battered onions, honey mustard and smoky cheddar on a sesame bun.",
      "categories": [
        "NS Ingredients",
        "Substitutions allowed",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Off the Grill",
      "address": "392 Pleasant Street ",
      "url": "https://offthegrill.ca",
      "price": "$6.00",
      "name": "Chicken Bacon Mushroom Alfredo Burger",
      "desc": "Pulled chicken tossed in Alfredo sauce and topped with mushrooms and bacon, served on a potato scallion bun.",
      "categories": [
        "Chicken",
        "Take-Out"
      ]
    },
    {
      "restaurant": "The Old Apothecary Bakery & Cafe",
      "address": "1549 Barrington Street",
      "url": "https://theoldapothecary.com",
      "price": "$7.00",
      "name": "Big Mac(aron)",
      "desc": "A dessert burger with a flavour combo of chocolate, vanilla, bacon, maple, bourbon and peanut butter.",
      "categories": [
        "$1.00 to Feed NS",
        "NS Ingredients"
      ]
    },
    {
      "restaurant": "The Old Triangle Irish Alehouse",
      "address": "5136 Prince Street",
      "url": "http://oldtriangle.com/halifax",
      "price": "$15.00",
      "name": "Chorizo Burger",
      "desc": "6-oz beef and chorizo patty, grilled and topped with caramelized onions, roasted red peppers and provolone cheese, tucked into a sesame seed kaiser bun with garlic aioli.",
      "categories": [
        "$5.00 to Feed NS",
        "Comes with Side",
        "Take-Out",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Parkside Pub and Smokehouse",
      "address": "14 Highfield Park Drive",
      "url": "http://parksidepubandsmokehouse.com",
      "price": "$6.00",
      "name": "Smokey And The Bandit",
      "desc": "7-oz local ground chuck topped with Diablo house-smoked pulled pork, smoked provolone cheese, dressed with a honey lime aioli and lettuce, served on a sesame seed bun. ",
      "categories": [
        "NS Ingredients",
        "Gluten Free"
      ]
    },
    {
      "restaurant": "Patrons Bar & Grill",
      "address": "27 Dellridge Lane",
      "url": "https://patrons902.ca",
      "price": "$11.00",
      "name": "The Albatross Burger",
      "desc": "Beef and bacon patty with caramelized onions, root beer BBQ sauce, dill ranch sauce, melted cheddar, lettuce, tomato and a fried pickle on a Cajun cheddar biscuit.",
      "categories": [
        "$1.00 to Feed NS",
        "NS Ingredients",
        "Take-Out",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Pete's Frootique & Fine Foods",
      "address": "1595 Bedford Highway",
      "url": "https://petes.ca/",
      "price": "$6.00",
      "name": "Smokin' Wagyu Burger",
      "desc": "A Wagyu patty topped with applewood cheddar, house-smoked thick-cut bacon, onion marmalade, Sriracha mayo, lettuce and tomato on a brioche bun. Bedford location only. ",
      "categories": [
        "Gluten Free",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "Piatto Pizzeria + Enoteca",
      "address": "1299 Hollis Street",
      "url": "https://www.piattopizzeria.com/",
      "price": "$15.00",
      "name": "Espresso Supreme Burger",
      "desc": "Espresso-infused ground beef, espresso BBQ sauce, whiskey-glazed caramelized onions, crisp pancetta and smoked mozzarella on toasted ciabatta bun.",
      "categories": [
        "$1.00 to Feed NS",
        "Comes with Side"
      ]
    },
    {
      "restaurant": "Pilot's Pub",
      "address": "10 Atlantic Street",
      "url": "https://pilotspub.net",
      "price": "$9.00",
      "name": "Whiskey Blues Burger",
      "desc": "Fresh 6-oz beef patty with bacon, caramelized onions, blue cheese and our homemade JD Whiskey BBQ sauce.",
      "categories": [
        "$2.00 to Feed NS",
        "Take-Out",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "The Pint Public House",
      "address": "1575 Argyle Street",
      "url": "http://halifax.thepint.ca/",
      "price": "$9.00",
      "name": "Mamma Mia Burger",
      "desc": "Our homemade burger patty on a brioche bun, topped with marinara sauce, roasted red peppers, crispy fried onions and melted mozzarella cheese.",
      "categories": [
        "$1.00 to Feed NS",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "The Press Gang Restaurant & Oyster Bar",
      "address": "5218 Prince Street",
      "url": "http://thepressgang.ca",
      "price": "$25.00",
      "name": "Jumping Jack",
      "desc": "House-made sesame bun with ground kangaroo patty, bacon tomato jam and jalapeno Monterey Jack cheese.",
      "categories": [
        "$2.00 to Feed NS",
        "Comes with Side"
      ]
    },
    {
      "restaurant": "Primal Kitchen",
      "address": "1463 Brenton Street",
      "url": "http://primalhfx.ca",
      "price": "$15.00",
      "name": "The Black Widow",
      "desc": "Wild boar, smoked bacon, black bun, crispy onion ring, red cabbage gochujang slaw, chimilantro, stout beernaise.",
      "categories": [
        "$1.00 to Feed NS",
        "NS Ingredients",
        "Take-Out",
        "Dairy Free",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Rasa: Flavours of India",
      "address": "1542 Birmingham Street",
      "url": "https://rasarestaurant.ca",
      "price": "$16.50",
      "name": "Chapli Lamb Kebab Burger",
      "desc": "Lamb kebab burger, with a mix of lettuce, cucumber and tomatoes in hung curd and mint chutney.",
      "categories": [
        "$1.00 to Feed NS",
        "Comes with Side",
        "Take-Out",
        "Gluten Free",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Real Fake Meats",
      "address": "2278 Gottingen Street",
      "url": "https://realfakemeats.com",
      "price": "$12.00",
      "name": "The Overflow",
      "desc": "Seitan patty topped with vegan cheeze string poutine, skewered with sliced apple, pickle chip, peanut butter and raisin chocolate thingy and a gummy.",
      "categories": [
        "$1.00 to Feed NS",
        "Vegetarian",
        "Vegan",
        "Take-Out",
        "Gluten Free",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "Redwood Grill",
      "address": "30 Fairfax Drive",
      "url": "https://redwoodgrill.ca",
      "price": "$6.00",
      "name": "Pico Loco",
      "desc": "Grilled beef burger topped with havarti cheese and dressed with crispy nachos, pico de gallo, guacamole and a dollop of sour cream.",
      "categories": []
    },
    {
      "restaurant": "Reilly's",
      "address": "313 Prince Albert Road",
      "url": "https://facebook.com/ReillysLounge/",
      "price": "$6.00",
      "name": "Hearthstone Ultimate Burger",
      "desc": "1/2-pound burger topped with sauteed onions and mushrooms, lettuce, tomato, bacon, mozza and our famous onion ring.",
      "categories": [
        "Take-Out",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Relish Gourmet Burgers",
      "address": "6024 Quinpool Road",
      "url": "https://relishhalifax.com",
      "price": "$6.00",
      "name": "The Wack is Back (AKA The Trademark Infringement Burger)",
      "desc": "Local beef (or vegetarian) patty, lettuce, pickles, cheese, house relish, onions, secret sauce on a Fancy Lebanese Bakery bun.",
      "categories": [
        "NS Ingredients",
        "Substitutions allowed",
        "Take-Out",
        "Gluten Free",
        "Dairy Free",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Rinaldo’s",
      "address": "2186 Windsor Street",
      "url": "https://rinaldos.ca",
      "price": "$14.00",
      "name": "The Big Kahuna Burger",
      "desc": "House-baked bun, Getaway Farms beef, grilled pineapple, house-made teriyaki, American cheese, crispy onions, bacon, lettuce and mayo.",
      "categories": [
        "$1.00 to Feed NS",
        "NS Ingredients",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Riverside Pub & Eatery",
      "address": "1552 Bedford Highway",
      "url": "https://riversidepub.ca",
      "price": "$6.00",
      "name": "River Ringer",
      "desc": "House-made burger topped with lettuce, tomato, onion and Cajun-spiced onion rings and drizzled with an aioli.",
      "categories": []
    },
    {
      "restaurant": "Robie St. Station",
      "address": "2394 Robie Street",
      "url": "http://robiestreetstation.com/",
      "price": "$6.00",
      "name": "RSS \"Remedy\" Burger",
      "desc": "A classic breakfast sausage patty, fried egg, hash brown and tomato on a butter-bathed biscuit.",
      "categories": [
        "Take-Out"
      ]
    },
    {
      "restaurant": "Rockbottom BrewPub",
      "address": "5686 Spring Garden Road ",
      "url": "https://rockbottombrewpub.ca",
      "price": "$15.00",
      "name": "That's My Jam",
      "desc": "In-house ground short rib, brisket and inside round beef, topped with bacon jam, smoked cheddar, crispy onions, chipotle mayo, lettuce, tomato and pickles.",
      "categories": [
        "$2.00 to Feed NS",
        "Comes with Side",
        "Gluten Free"
      ]
    },
    {
      "restaurant": "Roxbury Urban Dive Bar ",
      "address": "1743 Grafton Street ",
      "url": "https://roxburyhfx.com",
      "price": "$6.00",
      "name": "A Burger Wit Da Hoodie",
      "desc": "Beef burger topped with crispy spicy chicken wontons and drizzled with a gochujang sauce.",
      "categories": []
    },
    {
      "restaurant": "RumbleFish Food Co.",
      "address": "2736 Robie Street",
      "url": "http://rumblefishfood.com",
      "price": "$17.00",
      "name": "The Dork Burger",
      "desc": "Braised duck leg, spiced Oulton’s pork, beer mustard, garlic mayo, crispy onions, spent grain bun.",
      "categories": [
        "$2.00 to Feed NS",
        "NS Ingredients",
        "Comes with Side",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Sea Smoke Restaurant & Bar",
      "address": "1477 Lower Water Street",
      "url": "https://seasmokehalifax.com",
      "price": "$14.00",
      "name": "Sumo Burger",
      "desc": "Teriyaki glazed 6-oz AAA ground chuck patty, tempura onion rings, Asian slaw, wasabi aioli, on a toasted brioche bun.",
      "categories": [
        "$2.00 to Feed NS",
        "Comes with Side",
        "Gluten Free",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "Seamus David's Pub",
      "address": "21 Logie Almond Close",
      "url": "http://seamusdavidspub.ca",
      "price": "$15.00",
      "name": "The Crossing",
      "desc": "8-oz house-made fresh beef burger with Sriracha mayo, crispy jalapenos and onions, cheddar cheese and crunchy coleslaw served with a pickle.",
      "categories": [
        "$1.00 to Feed NS",
        "Comes with Side",
        "Substitutions allowed",
        "Take-Out",
        "Gluten Free",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Seasons by Atlantica",
      "address": "1980 Robie Street Halifax",
      "url": "http://seasonsbyatlantica.com",
      "price": "$8.00",
      "name": "Bacon Jam Picnic Burger",
      "desc": "6-oz burger with crispy bacon jam, lettuce, tomato and BBQ mayo with homemade slaw, jalapeno havarti on an egg kaiser.",
      "categories": [
        "$1.00 to Feed NS",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Ship Victory Restaurant & Lounge",
      "address": "400 Windmill Road",
      "url": "http://theshipvictory.com",
      "price": "$11.99",
      "name": "Victory Burger",
      "desc": "Fresh burger on a sesame bun with cheese, bacon, lettuce, tomato, pickle, onion and our own in-house Victory Sauce.",
      "categories": [
        "$1.00 to Feed NS",
        "Comes with Side",
        "Substitutions allowed",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Shivani's Kitchen",
      "address": "1209 Marginal Road",
      "url": "https://shivaniskitchen.ca/",
      "price": "$11.00",
      "name": "Butter Chicken Burger",
      "desc": "Delicious tandoori chicken topped with butter chicken sauce, crisp lettuce and tomatoes, served on a freshly baked naan bread.",
      "categories": [
        "$2.00 to Feed NS",
        "Chicken",
        "Comes with Side"
      ]
    },
    {
      "restaurant": "Split Crow Pub",
      "address": "1855 Granville Street",
      "url": "https://splitcrow.com",
      "price": "$6.00",
      "name": "Patty Murphy Melt",
      "desc": "Two 3-oz patties with caramelized onions and cheddar, between grilled sourdough garlic bread, with Thousand Island dressing for dippin'.",
      "categories": [
        "Comes with Side",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Staggers Pub & Grub",
      "address": "26 Portland Street",
      "url": "https://www.facebook.com/StaggersDebandBob/",
      "price": "$6.00",
      "name": "Latino Caliente Combinado",
      "desc": "Latino meets Canuck in this specially spiced beef and pork patty, served on a toasted garlicky bun with an avocado aioli, topped with a sweet 'n' spicy pepper salsa.",
      "categories": [
        "Take-Out",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Station Six Food and Drink ",
      "address": "247 Herring Cove Road ",
      "url": "https://Stationsix.ca",
      "price": "$17.00",
      "name": "The Southern Standard",
      "desc": "Classic beef patty with BBQ brisket, with deep-fried smoked cheddar, creamy slaw and house-made pickles.",
      "categories": [
        "$1.00 to Feed NS",
        "Comes with Side",
        "Gluten Free"
      ]
    },
    {
      "restaurant": "Stayner’s Wharf Pub & Grill",
      "address": "5075 George Street ",
      "url": "https://staynerswharf.com",
      "price": "$16.00",
      "name": "The Moochacho Burger",
      "desc": "Beef brisket burger topped with a crispy corn tortilla with chili, chicken and cheddar. With chipotle mayo, pickled jalapenos and pico de gallo. ",
      "categories": [
        "$2.00 to Feed NS",
        "Gluten Free"
      ]
    },
    {
      "restaurant": "Steak and Stein Family Restaurants",
      "address": "6061 Young Street, 620 Portland Street",
      "url": "https://steakandstein.ca",
      "price": "$6.00",
      "name": "The Stein Derby Burger",
      "desc": "The Stein Burger, enhanced with our signature Derby Sauce, topped with cheese, onion curls and drizzled with our house-made root beer BBQ sauce.",
      "categories": [
        "Take-Out"
      ]
    },
    {
      "restaurant": "Stillwell Beer Bar",
      "address": "1672 Barrington Street",
      "url": "http://barstillwell.com",
      "price": "$17.00",
      "name": "The Garides Burger",
      "desc": "6-week dry-aged Getaway Farms ground beef, olive oil-poached shrimp, goat milk feta, red onion, cucumber, olive tapenade.",
      "categories": [
        "$2.00 to Feed NS",
        "NS Ingredients",
        "Comes with Side",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "Stubborn Goat Gastropub",
      "address": "1579 Grafton Street",
      "url": "http://legendaryhospitality.ca",
      "price": "$18.00",
      "name": "The Nutty Mushroom",
      "desc": "Plant-based walnut and mushroom patty, arugula, chickpea mayonnaise, red pepper relish, brioche bun.",
      "categories": [
        "$2.00 to Feed NS",
        "NS Ingredients",
        "Vegetarian",
        "Vegan",
        "Comes with Side",
        "Take-Out",
        "Gluten Free",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "Studio East Food + Drink",
      "address": "6021 Cunard Street",
      "url": "http://studioeastfood.ca",
      "price": "$12.00",
      "name": "Mangalitsa Burger",
      "desc": "Free-range braised Mangalitsa pork with lemongrass, chicken pate, crispy bacon, mozzarella, daikon apple slaw, Gochujang mayo, cilantro and Thai basil.",
      "categories": [
        "$1.00 to Feed NS",
        "Take-Out",
        "Gluten Free",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "Taco Lina’s",
      "address": "2605 Agricola Street",
      "url": "https://tacolinas.ca",
      "price": "$14.00",
      "name": "The Nacho Burger",
      "desc": "Getaway Farms beef, queso cheese sauce, avocado, pico de gallo, pickled jalapeno, crushed house-made “Doritos” and spicy mayo.",
      "categories": [
        "$1.00 to Feed NS",
        "NS Ingredients",
        "Take-Out"
      ]
    },
    {
      "restaurant": "TEMPO Food + Drink",
      "address": "1875 Barrington Street",
      "url": "http://tempofooddrink.com",
      "price": "$15.00",
      "name": "The Oxford",
      "desc": "Beef patty topped with applewood smoked cheddar, sake-marinated pork belly, bacon, Sriracha glaze and Nova Scotia blueberry pepper chutney.",
      "categories": [
        "$1.00 to Feed NS",
        "Comes with Side",
        "Substitutions allowed",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "Tony’s Famous Donairs & Pizza",
      "address": "2390 Robie Street",
      "url": "https://www.tonysdonair.ca/",
      "price": "$6.00",
      "name": "Tony’s Famous Donair Burger",
      "desc": "Thinly sliced donair meat topped with diced tomatoes and onions and, of course, Tony’s Famous Donair Sauce drizzled on top and bottom, on a burger bun toasted with garlic butter and mozzarella cheese.",
      "categories": [
        "$1.00 to Feed NS",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Trendz Restaurant & Wine Bar",
      "address": "15 Spectacle Lake Drive",
      "url": "https://trendzcafe.ca",
      "price": "$10.00",
      "name": "Trendz Burger",
      "desc": "Nova Scotia ground beef with butter chicken sauce, tandoori vegetables, pear chutney and lettuce, served on a toasted brioche bun.",
      "categories": [
        "$2.00 to Feed NS",
        "NS Ingredients",
        "Take-Out",
        "Gluten Free"
      ]
    },
    {
      "restaurant": "True North Diner",
      "address": "1658 Bedford Highway",
      "url": "https://truenorthdiner.com",
      "price": "$6.00",
      "name": "Twist & Shout",
      "desc": "Burger patty topped with maple berry sauce, pulled pork, jalapeno cheese, bacon and an espresso bacon jam.",
      "categories": []
    },
    {
      "restaurant": "Unchained Kitchen",
      "address": "2606 Agricola Street",
      "url": "https://unchainedkitchen.ca",
      "price": "$16.00",
      "name": "Country Ham Burger With Ciao Ciao & UK Frites",
      "desc": "Smoked country ham burger with homemade ciao ciao and dill pickle remoulade on a pretzel bun.",
      "categories": [
        "$2.00 to Feed NS",
        "Comes with Side",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Upstreet BBQ Brewhouse",
      "address": "612 Windmill Road",
      "url": "https://upstreetBBQbrewhouse.com",
      "price": "$18.00",
      "name": "Smoked Brisket Burger",
      "desc": "Pulled BBQ brisket with smoked cheddar, pickled onions, horseradish mayo on a spent grain bun.",
      "categories": [
        "$2.00 to Feed NS",
        "Comes with Side",
        "Take-Out"
      ]
    },
    {
      "restaurant": "Vandal Doughnuts",
      "address": "2150 Gottingen Street",
      "url": "https://vandaldoughnuts.com",
      "price": "$9.50",
      "name": "The Birthday Sex",
      "desc": "A 5-oz beef patty with melted cheddar cheese, spicy chipotle sauce, mixed greens and crispy bacon, and a glazed doughnut bun with rainbow sprinkles.",
      "categories": [
        "$1.00 to Feed NS"
      ]
    },
    {
      "restaurant": "Verano Food Purveyors",
      "address": "1871 Hollis Street",
      "url": "http://veranofoodhfx.ca",
      "price": "$10.00",
      "name": "El Jefe",
      "desc": "Pork al pastor patty with melting cheese, pineapple picadillo and tatemado jalapeno and avocado salsa.",
      "categories": [
        "$1.00 to Feed NS",
        "Take-Out",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "The Watch That Ends The Night",
      "address": "15 King's Wharf Place",
      "url": "https://www.thewatchthatendsthenight.com/",
      "price": "$10.00",
      "name": "Meatball Marinara Burger",
      "desc": "Ground beef meatballs, sweet basil marinara sauce and mozzarella on a garlic buttered bun.",
      "categories": [
        "$1.00 to Feed NS",
        "Take-Out",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "Wild Leek Food & Juice Bar",
      "address": "2156 Windsor Street",
      "url": "https://wildleek.ca",
      "price": "$11.00",
      "name": "Seitan Hero",
      "desc": "Grilled seitan burger with house-made cheeze, crispy fried onions and fresh arugula, served with artichoke aioli on a toasted bun.",
      "categories": [
        "$1.00 to Feed NS",
        "Vegan",
        "Comes with Side",
        "Moosehead special"
      ]
    },
    {
      "restaurant": "The Wooden Monkey",
      "address": "1707 Grafton Street, 88 Alderney Drive ",
      "url": "https://thewoodenmonkey.ca",
      "price": "$9.00",
      "name": "Apple Bacon And Brie Burger",
      "desc": "A free-range beef and apple sausage patty topped with brie, grilled leeks, chipotle BBQ sauce, organic greens, bacon, sliced apple and roasted garlic aioli.",
      "categories": [
        "$1.00 to Feed NS",
        "NS Ingredients",
        "Take-Out",
        "Gluten Free",
        "Dairy Free"
      ]
    },
    {
      "restaurant": "Your Father's Moustache",
      "address": "5686 Spring Garden Road",
      "url": "http://yourfathersmoustache.ca/",
      "price": "$15.00",
      "name": "The Urban Sombrero",
      "desc": "A blackened 7-oz patty, ground in-house and topped with cheddar cheese, crispy avocado, tortilla strips and pico de gallo and a creamy salsa.",
      "categories": [
        "$2.00 to Feed NS",
        "Comes with Side",
        "Gluten Free"
      ]
    }
  ]

 
