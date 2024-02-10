require("dotenv").config();
// console.log(process.env.MARVEL_API_KEY);
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

const apiKey = process.env.MARVEL_API_KEY;
const Marvel_URL = "https://lereacteur-marvel-api.netlify.app/";

app.get("/characters", async (req, res) => {
  try {
    const skip = req.query.skip;
    const name = req.query.name;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${apiKey}&skip=${skip}${
        name ? `&name=${name}` : ""
      }`
    );
    // return res.json("server go");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/character/:id", async (req, res) => {
  try {
    const characterId = req.params.id;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${apiKey}`
    );
    // return res.json("server go");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/comics", async (req, res) => {
  try {
    const skip = req.query.skip;
    const title = req.query.title;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${apiKey}&skip=${skip}${
        title ? `&title=${title}` : ""
      }`
    );
    // return res.json("server go");
    res.json(response.data);
    // console.log("comics", response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/comic/:id", async (req, res) => {
  try {
    const characterId = req.params.id;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${characterId}?apiKey=${apiKey}`
    );
    // return res.json("server go");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/comics/:id", async (req, res) => {
  try {
    const characterId = req.params.id;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${characterId}?apiKey=${apiKey}`
    );
    // return res.json("server go");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.all("*", (req, res) => {
  return res.status(404).json("not found");
});

app.listen(process.env.PORT, () => {
  console.log("server started");
});
