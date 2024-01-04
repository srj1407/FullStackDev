const { User } = require("../db");
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const authorizationHeader = req.headers["authorization"];

  if (!authorizationHeader) {
    return res
      .status(401)
      .json({ message: "Unauthorized - Missing Authorization header" });
  }

  const token = authorizationHeader.split(" ")[1];
  try {
    jwt.verify(token, jwtPassword);
  } catch (e) {
    res.status(404).json({ error: "Invalid credentials" });
    return;
  }
  next();
}

module.exports = userMiddleware;
