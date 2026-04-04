const menuItems = [
  // =========================
  // COFFEE
  // =========================
  {
    id: 1,
    name: "Cappuccino",
    price: 180,
    desc: "Rich espresso with steamed milk foam.",
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Coffee"
  },
  {
    id: 2,
    name: "Latte",
    price: 200,
    desc: "Smooth milk coffee with creamy texture.",
    image: "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Coffee"
  },
  {
    id: 3,
    name: "Mocha",
    price: 220,
    desc: "Chocolate-flavored coffee delight.",
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Coffee"
  },
  {
    id: 4,
    name: "Espresso",
    price: 140,
    desc: "Strong and bold coffee shot.",
    image: "https://images.pexels.com/photos/434213/pexels-photo-434213.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Coffee"
  },
  {
    id: 5,
    name: "Americano",
    price: 170,
    desc: "Espresso diluted with hot water.",
    image: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Coffee"
  },
{
  id: 6,
  name: "Flat White",
  price: 210,
  desc: "Velvety espresso with microfoam milk.",
  image: "https://images.pexels.com/photos/6205779/pexels-photo-6205779.jpeg?auto=compress&cs=tinysrgb&w=800",
  category: "Coffee"
},

  // =========================
  // COLD DRINKS
  // =========================
  {
    id: 7, name: "Cold Coffee", price: 160, 
    desc: "Chilled coffee with whipped cream.", 
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80", 
    category: "Cold Drinks" 
  },
  {
    id: 8,
    name: "Chocolate Shake",
    price: 190,
    desc: "Thick and creamy chocolate shake.",
    image: "https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Cold Drinks"
  },
  {
    id: 9,
    name: "Iced Americano",
    price: 170,
    desc: "Refreshing chilled espresso drink.",
    image: "https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Cold Drinks"
  },
 {
  id: 10,
  name: "Vanilla Frappé",
  price: 230,
  desc: "Creamy blended vanilla coffee drink.",
  image: "https://images.pexels.com/photos/5946963/pexels-photo-5946963.jpeg?auto=compress&cs=tinysrgb&w=800",
  category: "Cold Drinks"
},
 {
  id: 11,
  name: "Caramel Frappe",
  price: 240,
  desc: "Blended caramel coffee with whipped cream.",
  image: "https://images.pexels.com/photos/5946972/pexels-photo-5946972.jpeg?auto=compress&cs=tinysrgb&w=800",
  category: "Cold Drinks"
},
  // =========================
  // TEA
  // =========================
  {
  id: 12,
  name: "Masala Chai",
  price: 90,
  desc: "Traditional Indian tea with spices.",
  image: "https://images.pexels.com/photos/1627933/pexels-photo-1627933.jpeg?auto=compress&cs=tinysrgb&w=800",
  category: "Tea"
},
  {
    id: 13,
    name: "Green Tea",
    price: 100,
    desc: "Light and refreshing antioxidant tea.",
    image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Tea"
  },
  {
    id: 14,
    name: "Lemon Tea",
    price: 110,
    desc: "Fresh black tea with lemon twist.",
    image: "https://images.pexels.com/photos/1493080/pexels-photo-1493080.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Tea"
  },
  {
  id: 15,
  name: "Elaichi Tea",
  price: 95,
  desc: "Aromatic cardamom infused tea.",
  image: "https://images.pexels.com/photos/5946637/pexels-photo-5946637.jpeg?auto=compress&cs=tinysrgb&w=800",
  category: "Tea"
},

  // =========================
  // BAKERY
  // =========================
  {
    id: 16,
    name: "Croissant",
    price: 130,
    desc: "Buttery flaky croissant.",
    image: "https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=800",
    category: "Bakery"
  },
  { 
    id: 17, 
    name: "Blueberry Muffin", 
    price: 140,
     desc: "Soft muffin with blueberry filling.", 
     image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=80", 
     category: "Bakery" 
    },
  {
    id: 18,
    name: "Banana Bread",
    price: 150,
    desc: "Moist banana loaf slice.",
    image: "https://images.pexels.com/photos/830894/pexels-photo-830894.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Bakery"
  },
  {
    id: 19,
    name: "Cinnamon Roll",
    price: 170,
    desc: "Soft roll with cinnamon glaze.",
    image: "https://images.pexels.com/photos/1756061/pexels-photo-1756061.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Bakery"
  },
  {
    id: 20,
    name: "Chocolate Donut",
    price: 120,
    desc: "Classic donut with chocolate glaze.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
    category: "Bakery"
  },

  // =========================
  // DESSERTS
  // =========================
  {
    id: 21,
    name: "Brownie",
    price: 120,
    desc: "Warm chocolate brownie.",
    image: "https://images.pexels.com/photos/2067436/pexels-photo-2067436.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Desserts"
  },
  {
    id: 22,
    name: "Cheesecake",
    price: 220,
    desc: "Creamy cheesecake with biscuit base.",
    image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Desserts"
  },
  {
    id: 23,
    name: "Chocolate Lava Cake",
    price: 250,
    desc: "Warm cake with gooey chocolate center.",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Desserts"
  },
  {
    id: 24,
    name: "Tiramisu Cup",
    price: 230,
    desc: "Coffee layered Italian dessert.",
    image: "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Desserts"
  },
  {
    id: 25,
    name: "Ice Cream Sundae",
    price: 180,
    desc: "Vanilla ice cream with chocolate syrup.",
    image: "https://images.pexels.com/photos/1352245/pexels-photo-1352245.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Desserts"
  },

  // =========================
  // SNACKS
  // =========================
  {
    id: 26,
    name: "Cheese Sandwich",
    price: 150,
    desc: "Toasted sandwich with melted cheese.",
    image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800&q=80",
    category: "Snacks"
  },
  {
    id: 27,
    name: "Veg Club Sandwich",
    price: 190,
    desc: "Layered sandwich packed with fresh veggies.",
    image: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Snacks"
  },
  {
    id: 28,
    name: "French Fries",
    price: 140,
    desc: "Crispy golden fries with dip.",
    image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Snacks"
  },
  {
    id: 29,
    name: "Garlic Bread",
    price: 160,
    desc: "Toasted garlic bread with herbs.",
    image: "https://media.istockphoto.com/id/1136429305/photo/stuffed-garlic-bread.jpg?s=2048x2048&w=is&k=20&c=w1WHJZVduPf437iWfRB7n_yA-wA-5jlBZcyIX6I7VtA=",
    category: "Snacks"
  },
  {
    id: 30,
    name: "Paneer Wrap",
    price: 210,
    desc: "Soft wrap stuffed with spicy paneer filling.",
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Snacks"
  },

  // =========================
  // MEALS
  // =========================
  {
    id: 31,
    name: "Pasta Alfredo",
    price: 260,
    desc: "Creamy white sauce pasta.",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Meals"
  },
  {
    id: 32,
    name: "Penne Arrabbiata",
    price: 250,
    desc: "Spicy red sauce pasta with herbs.",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Meals"
  },
  {
    id: 33,
    name: "Veg Burger",
    price: 220,
    desc: "Loaded burger with crispy veggie patty.",
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Meals"
  },
  {
    id: 34,
    name: "Margherita Pizza",
    price: 320,
    desc: "Cheesy pizza with tomato and basil.",
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Meals"
  },
  {
    id: 35,
    name: "Paneer Rice Bowl",
    price: 280,
    desc: "Flavored rice topped with grilled paneer.",
    image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Meals"
  }
];