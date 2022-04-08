import express from "express";
import type { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
const app = express();
const port = 8080;
let viewer = Object.create(null);

type Message = {
  message: string;
  name: string;
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/chat", (req: Request, res: Response) => {
  let id = Math.random();

  console.log(`new viewer ${id}`);

  res.setHeader("Content-Type", "application/json;charset=utf-8");
  res.setHeader("Cache-Control", "no-cache, must-revalidate");

  viewer[id] = res;
});

app.post("/chat", (req: Request, res: Response) => {
  let msg: Message = req.body;

  console.log(msg.name, msg.message);

  if (msg.name.length <= 10 && msg.message.length <= 256) {
    for (let id in viewer) {
      let resp = viewer[id];
      resp.json({ message: msg.message, name: msg.name });
    }
    viewer = Object.create(null); // publish it to everyone
    res.end("OK");
  } else {
    res.end("NOT OK");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
