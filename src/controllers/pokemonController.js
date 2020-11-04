const pokedex = require("../database/pokedex.json");

exports.getAllPokemon = (req, res, next) => {
	res.send(pokedex);
};

exports.getPokemonById = (req, res, next) => {
	const { id } = req.params;
	const pokemon = pokedex.find((p) => p.id === parseInt(id, 10));
	if (!pokemon)
		return res
			.status(404)
			.sendFile(path.join(__dirname, "/src/pages/404.html"));
	res.send(pokemon);
};

exports.getPokemonInfoById = (req, res, next) => {
	const { id, info } = req.params;
	const pokemon = pokedex.find((p) => p.id === parseInt(id, 10));
	if (!pokemon)
		return res
			.status(404)
			.sendFile(path.join(__dirname, "/src/pages/404.html"));
	res.send(pokemon[info]);
};
