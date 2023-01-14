// we have established connection to database in Database folder.The Db contains many collections,so
// for each collection,we have to create a model and can use for each API when needed.

import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: String,
    userid: String,
    quality: Boolean,
    quntity: Number
})
const Product = new mongoose.model("Product", productSchema)
export default Product