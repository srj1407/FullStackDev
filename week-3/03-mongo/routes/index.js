const express = require("express");
const app = express();

const adminRouter = require("./admin");
const userRouter = require("./user");

app.use(express.json());
app.use("/admin", adminRouter);
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server is running");
});
