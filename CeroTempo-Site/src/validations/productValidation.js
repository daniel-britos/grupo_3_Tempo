const { check } = require("express-validator");
const db = require("../database/models");

module.exports = [
  check("name")
    .notEmpty()
    .withMessage("Enter product's name")
    .isLength({ min: 5, max: 20 })
    .withMessage("At least 5 characters")
    .bail(),

  check("price").notEmpty().withMessage("Enter product's price").bail(),

  check("discount").notEmpty().withMessage("Enter product's discount").bail(),

  check("description")
    .notEmpty()
    .withMessage("Enter product's description")
    .bail()
    .isLength({ min: 20 })
    .withMessage("At least 20 characters")
    .bail(),

  check("category").notEmpty().withMessage("Enter a category").bail(),
];
