export interface MenuItem {
  name: string;
  price: number;
  description: string;
}

export interface MenuSubCategory {
  name: string;
  items: MenuItem[];
}

export interface MenuCategory {
  name: string;
  subcategories: MenuSubCategory[];
}

export const menuData: MenuCategory[] = [
  {
    name: "Hot Coffee",
    subcategories: [
      {
        name: "Coffee",
        items: [
          { name: "Espresso", price: 86, description: "Coffee Shot" },
          { name: "Black Coffee", price: 96, description: "Espresso Shot Diluted With Water" },
          { name: "Dark Irish", price: 104, description: "Americano With Notes of Irish Flavour" },
          { name: "Cappuccino", price: 119, description: "Espresso Shot With Steamed and Frothed Milk" },
          { name: "Café Latte", price: 134, description: "Espresso Shot with Steamed Milk and Foam" },
          { name: "Café Mocha", price: 144, description: "Latte with notes of Chocolate" },
          { name: "Caramel Latte", price: 174, description: "Latte With Notes of Caramel Flavour" },
          { name: "Irish Latte", price: 174, description: "Latte With Notes of Irish Flavour" },
          { name: "Hazelnut Latte", price: 174, description: "Latte With Notes of Hazelnut Flavour" },
          { name: "Vanilla Latte", price: 174, description: "Latte With Notes of Vanilla Flavour" },
          { name: "Hazelnut Cappuccino", price: 164, description: "Cappuccino With Notes of Hazelnut Flavour" },
          { name: "Irish Cappuccino", price: 164, description: "Cappuccino with Notes of Irish Flavour" },
          { name: "Vanilla Cappuccino", price: 164, description: "Cappuccino with Notes of Vanilla Flavour" },
        ],
      },
    ],
  },
  {
    name: "Cold Coffee",
    subcategories: [
      {
        name: "Cold Coffee",
        items: [
          { name: "Iced Americano", price: 124, description: "A Shot of Rich Espresso Topped With Iced Cold Water" },
          { name: "Iced Latte", price: 145, description: "A Shot of Rich Espresso Topped With Milk and Ice" },
          { name: "Frappe Delight", price: 164, description: "Classic Cold Coffee With A Blend of Ice Cream, Milk and Espresso Shot" },
          { name: "Dark Chocolate Frappe", price: 190, description: "Classic Cold Coffee With Notes of Chocolate" },
          { name: "Choco Chip Frappe", price: 190, description: "Classic Cold Frappe With Notes of Cookies Crumbs" },
        ],
      },
      {
        name: "Frappe",
        items: [
          { name: "Caramel Frappe", price: 190, description: "Classic Cold Coffee With Notes Of Caramel" },
          { name: "Iced Mocha", price: 190, description: "A Shot of Rich Espresso Topped With Milk Ice and Notes of Chocolate" },
          { name: "Hazelnut Frappe", price: 190, description: "Classic Cold Coffee With Notes of Hazelnut" },
          { name: "Irish Frappe", price: 190, description: "Classic Cold Coffee With Notes of Irish Flavour" },
        ],
      },
    ],
  },
  {
    name: "Beverages",
    subcategories: [
      {
        name: "Spritzer",
        items: [
          { name: "Mojito Mint", price: 164, description: "A refreshing drink with notes of mint, sugar and topped with soda water" },
          { name: "Green Apple Soda", price: 164, description: "A refreshing drink with notes of green apple topped with soda water" },
          { name: "Masala Lemonade", price: 164, description: "A refreshing sweet, fizzy drink with notes of mint and Indian spices" },
          { name: "Berry Spritzer", price: 164, description: "A refreshing drink with hint of lavender and notes of lime with strawberry" },
        ],
      },
      {
        name: "Slushes",
        items: [
          { name: "Blood Red", price: 150, description: "A cool and refreshing slushy drink with notes of infused sweet orange" },
          { name: "Cool Blister", price: 150, description: "A cool and refreshing slushy drink with notes of mint and lime" },
          { name: "Green Apple Mint Splash", price: 150, description: "A cool and refreshing slushy drink with notes of green apple and mint" },
        ],
      },
      {
        name: "Ice Teas",
        items: [
          { name: "Lemon Mint", price: 164, description: "A refreshing tea with notes of lemon and mint" },
          { name: "Peach Bliss", price: 164, description: "A refreshing tea with notes of peach flavour" },
          { name: "Hibiscus", price: 164, description: "A refreshing tea with infusion from crimson of hibiscus flower" },
        ],
      },
    ],
  },
  {
    name: "Shakes",
    subcategories: [
      {
        name: "Shakes",
        items: [
          { name: "Mango Shake", price: 160, description: "A rich blend of ice cream, milk and mango crush" },
          { name: "Strawberry Shake", price: 160, description: "A rich blend of ice cream, milk and strawberry crush" },
          { name: "Badam Milk Shake", price: 180, description: "A rich blend of ice cream, milk and hand crafted badam mix" },
          { name: "Oreo Delight", price: 180, description: "A rich blend of ice cream, milk, oreo with notes of chocolate" },
          { name: "Kitkat Break", price: 180, description: "A rich blend of ice cream, milk, kitkat with notes of coco" },
          { name: "Blue Berry Shake", price: 180, description: "A rich blend of ice cream, milk and blueberry flavour" },
          { name: "Butter Scotch Shake", price: 180, description: "A rich blend of ice cream, milk and notes of butterscotch flavour" },
          { name: "Brownie Blast Shake", price: 194, description: "A rich blend of ice cream, milk and crushed choco brownie" },
          { name: "Rose Faluda", price: 184, description: "A rich blend of ice cream, milk and hint of rose faluda crush" },
        ],
      },
    ],
  },
  {
    name: "Food",
    subcategories: [
      {
        name: "Pizza",
        items: [
          { name: "Plain Cheese", price: 144, description: "Loaded with red sauce and cheese blend" },
          { name: "Corn Delight", price: 154, description: "Loaded with red sauce, corns and mozzarella and cheddar cheese" },
          { name: "Veg Paradise", price: 180, description: "Loaded with red sauce, onion, capsicum and mozzarella + cheddar cheese" },
          { name: "Tandoori Paneer", price: 204, description: "Loaded with tandoori sauce, paneer, capsicum and mozzarella + cheddar cheese" },
          { name: "StarBrew Special Pizza", price: 224, description: "Loaded with red sauce, onion, capsicum, corns, paneer, olives, jalapenos, mushrooms and mozzarella + cheddar cheese" },
        ],
      },
      {
        name: "Burger",
        items: [
          { name: "Veg Burger", price: 100, description: "Handcrafted patty with sauces and veggies" },
          { name: "Veg Cheese Burger", price: 120, description: "Handcrafted veg patty with dash of cheese, sauces and veggies" },
          { name: "Chilli Cheese Burger", price: 124, description: "Handcrafted patty with chilli sauces, cheese and veggies" },
          { name: "Paneer Burger", price: 144, description: "Spicy paneer patty with blend of sauces and onion" },
        ],
      },
      {
        name: "Pasta",
        items: [
          { name: "Arrabiata", price: 160, description: "Penne pasta tossed in red sauce and veggies" },
          { name: "White Creamy Paradise", price: 170, description: "Penne pasta tossed in rich creamy white sauce and veggies" },
          { name: "Pink Beauty", price: 170, description: "Penne pasta tossed in red and white sauces along with veggies" },
        ],
      },
      {
        name: "Sandwich",
        items: [
          { name: "Paneer Tikka (Toasted)", price: 164, description: "Brown panini bread loaded with roasted paneer, veggies and signature sauces" },
          { name: "Spinach and Cheese (Grilled)", price: 154, description: "White bread sandwich with fillings of spinach, corn, cheese and garlic" },
          { name: "Corn and Cheese (Grilled)", price: 154, description: "White bread sandwich with fillings of corn, cheese and white sauce" },
          { name: "Spicy Veg (Grilled)", price: 164, description: "White bread sandwich with fillings of tossed veggies" },
        ],
      },
      {
        name: "Bread",
        items: [
          { name: "Garlic Bread Plain", price: 124, description: "Garlic loaf toasted with garlic butter" },
          { name: "Garlic Bread Cheese", price: 148, description: "Toasted garlic loaf loaded with blend of mozzarella and cheddar cheese" },
          { name: "Chilli Cheese Toast", price: 144, description: "A slice of toasted bread topped with green chillies, onion and cheese" },
          { name: "Veggie Toast", price: 164, description: "Garlic toast loaded with cheese, veggies and signature spices" },
        ],
      },
      {
        name: "Small Bites",
        items: [
          { name: "Veg Pizza Pockets (4 pcs)", price: 104, description: "Deep fried pockets loaded with veggies, signature spices and cheese served with mayo and ketchup" },
          { name: "Veg Fingers (4 pcs)", price: 104, description: "Deep fried veg sticks served with mayo and ketchup" },
          { name: "Cheese Shots (8 pcs)", price: 104, description: "Deep fried coated cheese balls served with mayo and ketchup" },
        ],
      },
      {
        name: "Fries",
        items: [
          { name: "Plain Fries", price: 104, description: "Diced potato sticks" },
          { name: "Peri Peri Spicy Fries", price: 124, description: "Fried potato sticks with spicy tangy spices" },
          { name: "Cheese Magic Fries", price: 134, description: "Fried potato sticks topped with cheese blend" },
          { name: "Mexican Salsa Fries", price: 124, description: "Fried potato sticks topped with mexican sauce" },
        ],
      },
      {
        name: "Maggi",
        items: [
          { name: "Plain Maggi", price: 84, description: "Classic maggi noodles" },
          { name: "Vegetable Maggi", price: 94, description: "Plain maggi with veggies" },
          { name: "Masala Maggi", price: 104, description: "Masala maggi with spicy Indian masala" },
        ],
      },
    ],
  },
  {
    name: "Desserts",
    subcategories: [
      {
        name: "Desserts",
        items: [
          { name: "Choco Brownie", price: 114, description: "A dash of cake baked with rich coco topped with chocolate sauce" },
          { name: "Chocolate Fantasy", price: 114, description: "A rich signature truffle cake" },
          { name: "Dark Temptation", price: 179, description: "Rich choco brownie with chocolate ice cream and dash of chocolate sauce" },
          { name: "Sizzling Brownie", price: 199, description: "Brownie served on a sizzling platter topped with vanilla ice cream and chocolate sauce" },
        ],
      },
    ],
  },
  {
    name: "Add-Ons",
    subcategories: [
      {
        name: "Add-Ons",
        items: [
          { name: "Dip", price: 35, description: "Extra dipping sauce" },
          { name: "Flavoured Syrup", price: 40, description: "Add flavoured syrup to any drink" },
          { name: "Ice Cream", price: 50, description: "Scoop of ice cream" },
          { name: "Extra Cheese", price: 50, description: "Extra cheese topping" },
          { name: "Extra Coffee Shot", price: 55, description: "Additional espresso shot" },
        ],
      },
    ],
  },
];
