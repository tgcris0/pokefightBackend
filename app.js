const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const pokemonsRouter = require("./src/routes/pokemons");

const app = express();

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/src/pages/homepage.html"));
});
app.use("/pokemons", pokemonsRouter);

app.use((req, res, next) => {
	res.status(404);
	res.sendFile(path.join(__dirname, "/src/pages/404.html"));
});

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
