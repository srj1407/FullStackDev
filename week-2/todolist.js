const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const port = 3000;

let list = [];

app.get("/", (req, res) => {
  res.send("To Do List App!");
});

app.post("/post", (req, res) => {
  const data = req.body.item;
  list.push(data);
  res.send("Posted successfully");
});

app.get("/posts", (req, res) => {
  res.json({ list });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
