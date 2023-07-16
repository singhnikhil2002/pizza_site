const express = require("express")
const router = express.Router();
const pizzaModel = require("../models/pizzaModel")

// Get all pizza || @GET Request

router.get("/getAllPizzas", async(req,res) => {
    try {
        const pizzas = await pizzaModel.find({});
        res.send(pizzas);
    } catch (error) {
        res.json({ message: error});
    }
});

module.exports = router;
