import express from "express";
import pkg from "express/lib/response.js";
import * as sdk from "matrix-js-sdk";
import bodyParser from "body-parser";
const app = express();
const port = 8080;
let viewer = Object.create(null);

app.get("/chat", (req, res) => {
  let id = Math.random();
  console.log(`new user: ${id}`);

  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  res.setHeader("Cache-Control", "no-cache, must-revalidate");

  viewer[id] = res;
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/chat", (req, res) => {
  let message = req.body.message;

      for (let id in viewer) {
        let resp = viewer[id];
        resp.send(req.body);
        console.log(message);
      }
      viewer = Object.create(null); // publish it to everyone
      res.end("ok");
    });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
