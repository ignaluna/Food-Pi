const { Router } = require('express');
const router = Router();
const axios = require("axios");
const { Recipe, Diet } = require('../db.js');
const search = require("./foodComplexSearch")
require('dotenv').config();
const { API_KEY } = process.env;

router.get("/", async (req, res) => {
    try {

        const diets = await Diet.findAll();
        if (diets.length) return res.status(200).json(diets);


        // const call = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
        //     .then(response => response.data)
        //     .then(response => response.results)
        const call = search.results;

        const dietsFromApi = [];
        call.forEach(el => el.diets.forEach((nombre) => dietsFromApi.push(nombre)))

        const dietsfinal = new Set(dietsFromApi);

        const array = Array.from(dietsfinal)

        const array2 = [];
        array.forEach(el => array2.push({name: el}));

        const created = await Diet.bulkCreate(array2);

        res.status(200).send(created);

    } catch (err) {
        res.status(404).send( err.message );
    }
});


module.exports = router;
