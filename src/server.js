const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routers/router");
require("dotenv").config();

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.listen(process.env.PORT);
