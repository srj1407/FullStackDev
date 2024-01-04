const { Admin } = require("../db");
const jwt = require("jsonwebtoken");
const jwtPassword = "secrt";

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
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

module.exports = adminMiddleware;
