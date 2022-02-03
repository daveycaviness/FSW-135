const mongoose = require("mongoose")
const Schema = mongoose.Schema
const InventorySchema = new Schema({
    carPart: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
}) 

module.exports = mongoose.model("PartsModel", InventorySchema)