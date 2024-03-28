const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.get("/sum", (req, res) => {
  const num = req.query.num;
  res.send("Your number is: " + num);
});

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
