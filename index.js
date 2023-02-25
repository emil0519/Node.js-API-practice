const express = require("express");
const app = express();
const port = 3002;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(function (req, res) {
//   res.setHeader("Content-Type", "text/plain");
//   res.write("you posted:\n");
//   res.end(JSON.stringify(req.body, null, 2));
// });

const product = [
  { name: "洋裝", price: "350", stock: "3" },
  { name: "男裝", price: "350", stock: "3" },
  { name: "女裝", price: "350", stock: "3" },
];

app.post("/product", (req, res) => {
  console.log(req.body);
  res.json({ message: "ok" });
});

app.get("/", (req, res) => {
  res.json(product);
});
// send content when parameter matches "/"

app.get("/product/:id", (req, res) => {
  res.json(product[parseInt(req.params.id) - 1]);
});

app.listen(port, () => console.log(`Listening port ${port}`));
