const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  let username = req.body.username;
  let password = req.body.password;

  const newUser = new User({
    username: username,
    password: password,
  });

  try {
    let savedUser = await newUser.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    console.log("Error:", err);
    res.status(400).send();
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  let username = req.headers["username"];
  let password = req.headers["password"];
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    if (user.password != password) {
      res.status(401).json({ error: "Incorrect password" });
      return;
    }
  } catch (err) {
    console.log(err);
  }
  const token = jwt.sign(
    { username: username, password: password },
    jwtPassword
  );
  res.status(200).json({ "token:": token });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    let courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    console.log("Error:", err);
    res.status(400).send();
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const authorizationHeader = req.headers["authorization"];
  const token = authorizationHeader.split(" ")[1];
  const decoded = jwt.decode(token);
  const username = decoded.username;
  let courseId = req.params.courseId;

  try {
    let updatedUser = await User.findOneAndUpdate(
      { username: username },
      { $push: { courseIds: courseId } }
    );
  } catch (err) {
    console.error("Error:", err);
    res.status(400).send();
  }

  res.status(200).json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const authorizationHeader = req.headers["authorization"];
  const token = authorizationHeader.split(" ")[1];
  const decoded = jwt.decode(token);
  const username = decoded.username;
  let courseIds = [];
  let courses = [];
  let user;

  try {
    user = await User.findOne({ username: username });
  } catch (err) {
    console.error("Error:", err);
    res.status(400).send();
  }

  try {
    courseIds = user.courseIds;
    for (let i = 0; i < courseIds.length; i++) {
      let course = await Course.findById(courseIds[i]);
      courses.push(course);
      console.log;
    }
  } catch (err) {
    console.error("Error:", err);
    res.status(400).send();
  }

  res.status(200).json({ purchasedCourses: courses });
});

module.exports = router;
