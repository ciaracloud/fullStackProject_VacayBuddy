const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const app = express();
const path = require("path");
const db = require("./models");
const { Console } = require("console");
const PORT = 3000;
app.use(express.json());
require("dotenv").config();
const client = require("./elephantsql");
const { createSecretKey } = require("crypto");

app.set("views", path.join(__dirname, "views"));
app.use(express.static("./public"));
app.engine("html", es6Renderer);
app.set("views", "views");
app.set("view engine", "html");

// routes
const routes = require("./routes/routes");

// routes connections
app.use("", routes);

// env passwords
const yel_api_key = process.env.YEL_API_KEY;
const sg_api_key = process.env.SG_API_KEY;

app.listen(PORT, console.log(`LISTENING on http://localhost${PORT}`));
