const { log } = require("console");
const fs = require("fs");
fs.readFile("file.txt", "utf-8", function (err, data) {
  console.log(data);
  const wordsArray = data.split(" ").filter((word) => word !== "");
  let res = "";
  for (let i = 0; i < wordsArray.length; i++) {
    if (i != 0) {
      res += " ";
    }
    res += wordsArray[i];
  }
  console.log(res);
  fs.writeFile("file.txt", res, "utf-8", function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Done");
    }
  });
});
