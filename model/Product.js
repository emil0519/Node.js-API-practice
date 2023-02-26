const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    stock: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

// export model
const Product = model("Product", ProductSchema);
module.exports = Product;
