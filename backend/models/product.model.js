import { timeStamp } from "console";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String, 
    required: true,
  },timeStamp: {
    type: Date,
    default: Date.now,
  }
},{timestamps: true});

const Product = mongoose.model("Product", productSchema);

export default Product;