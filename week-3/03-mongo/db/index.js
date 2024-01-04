const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://shashwatraj1407:OKU390ZP0wfNBFvM@cluster0.ohsmezb.mongodb.net/"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  courseIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  courseIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  pubished: {
    type: Boolean,
    default: true,
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
