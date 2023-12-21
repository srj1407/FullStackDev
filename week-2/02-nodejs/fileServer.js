/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

function getFiles(directoryPath, res) {
  return new Promise(function (resolve) {
    fs.readdir(directoryPath, async function (err, files) {
      if (err) {
        res.status(500).send();
      } else {
        resolve(files);
      }
    });
  });
}

function getData(res, filePath, call) {
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      res.status(404).send("File not found");
    } else {
      call(data);
    }
  });
}

app.get("/files", async (req, res) => {
  let list = await getFiles(__dirname + "/files", res);
  res.status(200).json(list);
});

app.get("/file/:filename", (req, res) => {
  let filename = req.params.filename;
  const filePath = __dirname + "/files/" + filename;
  getData(res, filePath, function (data) {
    res.status(200).send(data);
  });
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});

module.exports = app;