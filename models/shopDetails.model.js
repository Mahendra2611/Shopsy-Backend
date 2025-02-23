import mongoose from "mongoose";

const shopDetailsSchema = new mongoose.Schema({
    shopId: { type: mongoose.Schema.Types.ObjectId, ref: "Shop", required: true },
    itemsCategories: [{ type: String,trim:true }], 
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }], // Items in shop
}, { timestamps: true });

export const ShopDetails =  mongoose.model("ShopDetails", shopDetailsSchema);
