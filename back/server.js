const express = require("express");
const { json } = require("express/lib/response");
const app = express();
const port = 8080;
var i = 0
app.get("/chat", (req, res) => {
  res.json({message: "hello!", "hi", "i wasn't paying attention"})

  console.log("acccessed!" + i)
  i++
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
