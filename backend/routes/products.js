const express = require("express");
const router = express.Router();

const products = [
  {
    id: 1,
    name: "GOERS",
    password: "222",
  },
  {
    id: 2,
    name: "John",
    password: "111",
  },
];

// GET ALL PRODUCTS
router.get("/", (req, res) => {
  if (!products) {
    res.status(404).send("Not Found");
    return;
  }
  res.send(products);
});

// GET PRODUCTS BY ID
router.get("/:id", (req, res) => {
  const product = products.find((c) => c.id === parseInt(req.params.id));
  if (!product) {
    res.status(404).send("Not Found");
    return;
  }
  res.send(product);
});

// POST NEW PRODUCT TO PRODUCTS
router.post("/", (req, res) => {
  const productschema = Joi.object({
    name: Joi.string().min(3).required(),

    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });

  const { error } = productschema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const product = {
    id: products.length + 1,
    name: req.body.name,
    password: req.body.password,
  };

  products.push(product);
  res.send(products);
});

// UPDATE PRODUCT BY ID
router.put("/:id", (req, res) => {
  // FIND PRODUCT BY ID
  const product = products.find((c) => c.id === parseInt(req.params.id));
  if (!product) {
    res.status(404).send("Not Found");
    return;
  }

  // VALIDATION
  const productschema = Joi.object({
    name: Joi.string().min(3).required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  });
  const { error } = productschema.validate(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  // UPDATE
  product.name = req.body.name;
  product.password = req.body.password;

  // SEND RESPONSE
  res.send(product);
});

// DELETE product BY ID

router.delete("/:id", (req, res) => {
  const product = products.find((c) => c.id === parseInt(req.params.id));
  if (!product) {
    res.status(404).send("Not Found");
    return;
  }

  const index = products.indexOf(product);
  products.splice(index, 1);

  res.send(product);
});

module.exports = router;
