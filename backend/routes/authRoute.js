const express = require("express");
const {
  resgisterController,
  loginController,
  currentUserController,
} = require("../controllers/authController.js");
const { route } = require("./testRoutes.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

const router = express.Router();

// router
// Register || post
router.post("/register", resgisterController);

// Login || post
router.post("/login", loginController);

// current user
router.get("/current-user", authMiddleware, currentUserController);
module.exports = router;
