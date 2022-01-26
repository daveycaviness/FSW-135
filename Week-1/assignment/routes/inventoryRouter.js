const express = require("express")
const inventoryRouter = express.Router()
const {v4: uuid} = require("uuid")

let inventory = [
    {
        carPart: "Brake Rotor",
        price: 69.99,
        inStock: true
    },
    {
        carPart: "Brake Pad",
        price: 59.99,
        inStock: true
    },
    {
        carPart: "Water Pump",
        price: 129.99,
        inStock: true
    },
    {
        carPart: "Timing Belt",
        price: 89.99,
        inStock: true
    }
]

inventoryRouter
    .get("/", (req, res) =>{
        res.status(200).send(inventory)
    })

module.exports = inventoryRouter