const fs = require("fs");

fs.readFile("file", "utf-8", function (err, data) {
  console.log(data);
});

var c = 0;

for (let i = 0; i < 5000000000; i++) {
  c++;
}

console.log(c);
