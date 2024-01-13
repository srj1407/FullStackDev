const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://shashwatraj1407:OKU390ZP0wfNBFvM@cluster0.ohsmezb.mongodb.net/"
);

// Define schemas
const CardSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
    required: true,
  },
  interests: [
    {
      type: String,
    },
  ],
});

const Card = mongoose.model("Card", CardSchema);

module.exports = {
  Card,
};
