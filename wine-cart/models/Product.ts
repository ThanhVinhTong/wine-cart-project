import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
    wine_id: String,
    appellation: String,
    producer: String,
    region: String,
    country: String,
    vintage: Number,
    wine_type: String,
    grape_variety: String,
    alcohol_content: Number,
    volume: String,
    image_filename: String,
    price: Number,
    description: String,
})

const Product = models?.Product || model('Product', ProductSchema);

export default Product;