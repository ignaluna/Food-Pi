const { Router } = require('express');
const router = Router();
const { Recipe, Diet } = require("../db.js");
const axios = require("axios");
require('dotenv').config();
const { API_KEY } = process.env;
const search = require("./foodComplexSearch")

router.get("/", async (req, res) => {
    // const {data} = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`);
    const data = search;
    try {
        const bd = await Recipe.findAll({
            include: [
                {
                    model: Diet,
                    attributes: ["name"],
                },
            ],
        });
        const datanombres = data.results.map(ele => {
            return {
                title: ele.title,
                summary: ele.summary,
                healthScore: ele.healthScore,
                analyzedInstructions: ele.analyzedInstructions,
                dishTypes: ele.dishTypes,
                image: ele.image
            }
        }
        )
        const todo = datanombres.concat(bd.map((ele) => {
            return {
                title: ele.title,
                summary: ele.summary,
                healthScore: ele.healthScore,
                analyzedInstructions: ele.analyzedInstructions,
                dishTypes: ele.dishTypes,
                image: ele.image
            }
        }));
        if (!req.query.name) return res.status(200).send(todo);

        const recipeName = req.query.name[0].toUpperCase() + req.query.name.substring(1);
        const recipefinded = todo.filter(ele => ele.title.includes(recipeName));
        recipefinded[0] ? res.status(200).json(recipefinded) : res.status(404).send("There is no recipes like that. I think that you can created")

    } catch (err) {
        res.send(404, { Mensage: err.message })
    }
})
router.get("/:id", async (req, res) => {
    const data = search;
    const { id } = req.params;
    try {
        // const { data } = await axios.get(
        // 	`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
        // );
        if(isNaN(id)){
        const bd = await Recipe.findByPk(id);
        return res.status(200).json(bd);
        }

        const datanombres = data.results.filter(ele => ele.id == id)
        
        const dataMap = datanombres.map((ele) => {
            return {
                id: ele.id,
                title: ele.title,
                summary: ele.summary,
                healthScore: ele.healthScore,
                analyzedInstructions: ele.analyzedInstructions,
                dishTypes: ele.dishTypes,
                image: ele.image
            }
        });
        
        res.status(200).send(dataMap)
        
    } catch (err) {
        res.send(404, { Mensage: err.message })
    }
})

router.post("/", async (req, res) => {
    try {
        const { title, summary, healthScore, analyzedInstructions, diets, dishTypes, image } = req.body;

        if (!title || !summary) return res.status(404).send("Faltan datos obligatorios");

        const titleCap = title[0].toUpperCase() + title.substring(1);

        const newRecipe = await Recipe.create({
            title: titleCap,
            summary,
            healthScore,
            analyzedInstructions,
            dishTypes,
            image
        })

        await newRecipe.addDiet(diets)

        res.status(200).send(newRecipe)
    } catch (err) {
        
        res.status(404).send(err.message)
    
    }
})
module.exports = router;
