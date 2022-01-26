const mongoose = require("mongoose")
const schema = mongoose.Schema
const InventorySchema = newSchema({
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