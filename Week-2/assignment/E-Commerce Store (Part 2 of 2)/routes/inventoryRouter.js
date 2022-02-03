const express = require("express")
const inventoryRouter = express.Router()
const Inventory = require("../models/inventory.js")

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
    .get("/", (req, res, next) =>{
        Inventory.find((err, inventory) =>{
            if(err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(inventory);
        })
    }) //get All

    .get("/:inventoryID", (req, res, next) =>{
        Inventory.find({_id: req.params.inventoryID}, (err, inventory) =>{
            if(err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(inventory);
        })
    }) //get One

    .post("/", (req, res, next) =>{
        const newCar = new Inventory(req.body);
        newCar.save((err, newCar)=>{
            if(err) {
                res.status(500);
                return next(err);
            }
            res.status(201).send(newCar);
        })
    }) //post One

    .put("/:inventoryID", (req, res, next) =>{
        Inventory.findOneAndUpdate({_id: req.params.inventoryID}, req.body, {new: true}, (err, updateInventory) =>{
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(201).send(updateInventory);
        })
    }) //put One

    .delete("/:inventoryID", (req, res, next) =>{
        Inventory.findOneAndDelete({_id: req.params.inventoryID}, (err, deletedInventory) =>{
            if (err) {
                res.status(500);
                return next(err);
            }
            res.status(200).send(`Successfully deleted ${deletedInventory} from the Database`);   
        })
    }) //delete One

module.exports = inventoryRouter