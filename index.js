const express = require("express");
const app = express();
const port = 3002;
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes/auth");
// app.use(function (req, res) {
//   res.setHeader("Content-Type", "text/plain");
//   res.write("you posted:\n");
//   res.end(JSON.stringify(req.body, null, 2));
// });

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => console.log(`Listening port ${port}`));
  })
  .catch((error) => console.log(error));

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

app.use("/api/auth", authRoute);

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
  const deleteIndex = productWithID.findIndex(
    (p) => p.id === parseInt(req.params.id)
  );
  productWithID.splice(deleteIndex, 1);
  res.json({
    message: `Product ${productWithID[deleteIndex].name} is deleted`,
  });
});
//test
// send content when parameter matches "/"
app.get("/api", (req, res) => {
  res.json(product);
});

app.get("/product/:id", (req, res) => {
  res.json(product[parseInt(req.params.id) - 1]);
});
