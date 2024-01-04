const { Router } = require("express");
const { Admin } = require("../db/index");
const { Course } = require("../db/index");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwtPassword = "secrt";

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  let username = req.body.username;
  let password = req.body.password;

  const newAdmin = new Admin({
    username: username,
    password: password,
  });

  console.log(newAdmin);

  try {
    let savedAdmin = await newAdmin.save();
    res.status(200).json({ message: "Admin created successfully" });
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
    const admin = await Admin.findOne({ username });
    if (!admin) {
      res.status(404).json({ error: "Admin not found" });
      return;
    }
    if (admin.password != password) {
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

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const authorizationHeader = req.headers["authorization"];
  const token = authorizationHeader.split(" ")[1];
  const decoded = jwt.decode(token);
  const username = decoded.username;
  let title = req.body.title;
  let description = req.body.description;
  let price = req.body.price;
  let imageLink = req.body.imageLink;
  let savedCourseId;
  const newCourse = new Course({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
  });

  console.log(newCourse);

  try {
    let savedCourse = await newCourse.save();
    savedCourseId = savedCourse._id;
  } catch (err) {
    console.log("Error:", err);
    res.status(400).send();
  }

  try {
    let updatedAdmin = await Admin.findOneAndUpdate(
      { username: username },
      { $push: { courseIds: savedCourseId } }
    );
  } catch (err) {
    console.error("Error:", err);
    res.status(400).send();
  }

  res.status(200).json({
    message: "Course created successfully",
    courseId: savedCourseId,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const authorizationHeader = req.headers["authorization"];
  const token = authorizationHeader.split(" ")[1];
  const decoded = jwt.decode(token);
  const username = decoded.username;
  let courseIds = [];
  let courses = [];
  let admin;

  try {
    admin = await Admin.findOne({ username: username });
  } catch (err) {
    console.error("Error:", err);
    res.status(400).send();
  }

  try {
    courseIds = admin.courseIds;
    for (let i = 0; i < courseIds.length; i++) {
      let course = await Course.findById(courseIds[i]);
      courses.push(course);
      console.log;
    }
  } catch (err) {
    console.error("Error:", err);
    res.status(400).send();
  }

  res.status(200).json({ courses: courses });
});

module.exports = router;
