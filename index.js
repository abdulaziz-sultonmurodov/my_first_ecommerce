const express = require("express");
const Joi = require("joi");
const app = express();
const logger = require("./middleware/logging");
const authentication = require("./middleware/authentication");
const products = require("./routes/products");

app.use(express.json());

app.use(logger);
app.use(authentication);
app.use("/api/products", products);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
