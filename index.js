const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.get("/sum", (req, res) => {
  const num = req.query.num;
  const num2 = req.query.num2;
  const sum = num + num2;
  res.send("The sum is: " + sum);
});


app.get("/mul", (req, res) => {
  const num = req.query.num;
  const num2 = req.query.num2;
  const mul = num + num2;
  res.send("The sum is: " + mul);
});


app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
