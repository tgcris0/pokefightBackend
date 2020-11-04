const express = require("express");
const pokemonsRouter = express.Router();
const pokemonController = require("../controllers/pokemonController");

/* GET pokemons listing. */
pokemonsRouter.get("/", pokemonController.getAllPokemon);
pokemonsRouter.get("/:id", pokemonController.getPokemonById);
pokemonsRouter.get("/:id/:info", pokemonController.getPokemonInfoById);

module.exports = pokemonsRouter;
