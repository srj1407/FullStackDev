const fs = require("fs");

let content = "hello";

fs.writeFile("file", content, "utf-8", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("done");
  }
});
