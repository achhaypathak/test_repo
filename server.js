const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.get("/sum", (req, res) => {
  const num = req.query.num;
  const num2 = req.query.num2;
  res.send("The sum is: " + (num + num2));
});

app.get("/sub", (req, res) => {
  const num = req.query.num;
  const num2 = req.query.num2;
  res.send("The diff is: " + (num - num2));
});

app.get("/mul", (req, res) => {
  const num = req.query.num;
  const num2 = req.query.num2;
  res.send("The product is: " + (num * num2));
});

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
