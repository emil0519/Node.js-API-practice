const express = require("express");
const routers = express.Router();

routers.get("/test", (req, res) => res.send("route working"));

module.exports = routers;
