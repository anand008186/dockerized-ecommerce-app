const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Product schema
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stockQuantity: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

// Define the products array
const products = [
  {
    productName: "Laptop Backpack",
    price: 109.95,
    description: "A durable and stylish laptop backpack suitable for daily use.",
    stockQuantity: 50,
    imageURL: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    productName: "Casual T-Shirt for Men",
    price: 22.3,
    description: "Slim-fitting style, comfortable cotton t-shirt for men.",
    stockQuantity: 120,
    imageURL:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    productName: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jacket for spring, autumn, or winter.",
    stockQuantity: 75,
    imageURL: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  },
  {
    productName: "Mens Casual Slim Fit",
    price: 15.99,
    description: "An awesome slim-fit casual shirt for men.",
    stockQuantity: 200,
    imageURL: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  },
  {
    productName: "Women's Gold & Silver Bracelet",
    price: 695,
    description: "A beautiful gold and silver bracelet for women.",
    stockQuantity: 30,
    imageURL: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    productName: "Solid Gold Petite Micropave",
    price: 168,
    description: "An elegant piece of jewelry for women.",
    stockQuantity: 40,
    imageURL: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    productName: "White Gold Plated Princess",
    price: 9.99,
    description: "A beautiful diamond engagement ring.",
    stockQuantity: 100,
    imageURL: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    productName: "Gold-plated Earrings",
    price: 10.99,
    description: "Rose gold-plated double flared tunnel plug earrings.",
    stockQuantity: 150,
    imageURL: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  },
];

// Insert the products into the database
Product.insertMany(products)
  .then(() => {
    console.log('Products inserted successfully!');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error inserting products:', err);
    mongoose.connection.close();
  });
