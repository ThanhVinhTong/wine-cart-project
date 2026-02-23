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

ProductSchema.index({ producer: 1 });
ProductSchema.index({ country: 1 });
ProductSchema.index({ vintage: 1 });
ProductSchema.index({ wine_type: 1 });

const Product = models?.Product || model('Product', ProductSchema, 'wines');

export default Product;