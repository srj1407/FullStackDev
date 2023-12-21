const express = require("express");
const app = express();
app.use(express.json());

let users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  let kidneys = users[0].kidneys.length;
  let healthyKidneys = 0;
  for (let i = 0; i < kidneys; i++) {
    if (users[0].kidneys[i].healthy) {
      healthyKidneys++;
    }
  }
  let unhealthyKidneys = kidneys - healthyKidneys;
  res.json({
    "Kidneys:": kidneys,
    "healthyKidneys:": healthyKidneys,
    "unhealthyKidneys:": unhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  let kidneys = req.body.kidneys;
  users[0].kidneys = [...users[0].kidneys, ...kidneys];
  console.log(users[0].kidneys);
  res.json({ msg: "done" });
});

app.put("/", function (req, res) {
  let count = 0;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      users[0].kidneys[i].healthy = true;
      count++;
    }
  }
  if (count == 0) {
    res.status(411).json({ msg: "All kidneys are healthy" });
  } else {
    res.json({});
  }
});

app.delete("/", function (req, res) {
  let newKidneys = [];
  let count = 0;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push({ healthy: true });
    } else {
      count++;
    }
  }
  if (count == 0) {
    res.status(411).json({ msg: "All kidneys are healthy" });
  } else {
    users[0].kidneys = newKidneys;
    res.json({});
  }
});

app.listen(3000);
