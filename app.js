const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.get("/", (req, res) => res.send("Hello fucking world!!!!!"));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`The server is running on port ${port}`));
