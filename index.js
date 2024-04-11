const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ msg:"Welcome Jolly!" });
});

app.get("/sum", (req, res) => {
  const num = req.query.num;
  const num2 = req.query.num2;
  const sum = num + num2;
  res.send("The sum is: " + sum);
});

app.get("/diff", (req, res) => {
  const num = req.query.num;
  const num2 = req.query.num2;
  const diff = num - num2;
  res.send("The sum is: " + diff);
});

app.get("/prod", (req, res) => {
  const num = req.query.num;
  const num2 = req.query.num2;
  const prod = num + num2;
  res.send("The sum is: " + prod);
});


app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
