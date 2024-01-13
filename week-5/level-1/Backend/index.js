const express = require("express");
const bodyParser = require("body-parser");
const { Card } = require("./db");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.post("/createCard", async (req, res) => {
  let username = req.body.username;
  let title = req.body.title;
  let description = req.body.description;
  let linkedin = req.body.linkedin;
  let twitter = req.body.twitter;
  let interests = req.body.interests;

  const newCard = new Card({
    username: username,
    title: title,
    description: description,
    linkedin: linkedin,
    twitter: twitter,
    interests: interests,
  });

  console.log(newCard);

  try {
    let savedCard = await newCard.save();
    res.status(200).json({ message: "Card created successfully" });
  } catch (err) {
    console.log("Error:", err);
    res.status(400).send();
  }
});

app.get("/cards", async (req, res) => {
  let username = req.query.username;
  let cards = [];

  try {
    cards = await Card.find({ username });
  } catch (err) {
    console.error("Error:", err);
    res.status(400).send();
  }

  res.status(200).json({ cards: cards });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
