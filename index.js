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

const productWithID = product.map((eachProduct, index) => ({
  ...eachProduct,
  id: index,
}));
console.log(productWithID);

// respond ok to post api
app.post("/product", (req, res) => {
  console.log(req.body);
  res.json({ message: "ok" });
});

app.put("/product/:id", (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  res.json({ message: "ok" });
});

app.delete("/product/:id", (req, res) => {
  // product.findIndex(p=>p.id===)
  console.log(req.params.id);
  res.json({ message: `Product ` });
});

// send content when parameter matches "/"
app.get("/", (req, res) => {
  res.json(product);
});

app.get("/product/:id", (req, res) => {
  res.json(product[parseInt(req.params.id) - 1]);
});

app.listen(port, () => console.log(`Listening port ${port}`));
