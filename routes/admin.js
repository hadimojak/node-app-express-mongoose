const path = require("path");
const express = require("express");
const adminController = require("../controllers/admin");
const isAuth = require("../middleware/is-auth");
const isAdminAuth = require("../middleware/is-admin-auth");

const router = express.Router();
const { check, body } = require("express-validator");

// /admin/add-product => GET
router.get("/add-product", isAuth, isAdminAuth, adminController.getAddProduct);

// /admin/products => GET
router.get("/products", isAuth, isAdminAuth, adminController.getProducts);

// /admin/add-product => POST
router.post(
  "/add-product",
  [
    body("title").isString().isLength({ min: 3 }).trim(),
    body("price").isFloat(),
    body("description").isLength({ min: 5, max: 200 }),
  ],
  isAuth,
  isAdminAuth,
  adminController.postAddProduct
);

router.get(
  "/edit-product/:productId",
  isAuth,
  isAdminAuth,
  adminController.getEditProduct
);

router.post(
  "/edit-product",
  [
    body("title").isString().isLength({ min: 3 }).trim(),
    body("price").isFloat(),
    body("description").isLength({ min: 5, max: 200 }),
  ],
  isAuth,
  isAdminAuth,
  adminController.postEditProduct
);

router.delete(
  "/product/:productId",
  isAuth,
  isAdminAuth,
  adminController.deleteProduct
);

module.exports = router;
