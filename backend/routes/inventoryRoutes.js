const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware.js");
const {
  createInventoryController,
  getInventoryController,
  getDonarsController,
  getHospitalController,
  getOrganizationController,
  getOrganizationForHospitalController,
  getInventoryHospitalController,
  getRecentInventoryController
} = require("../controllers/inventoryController.js");

const router = express.Router();

// route
// Add inventory || post
router.post("/create-inventory", authMiddleware, createInventoryController);

// Get all blood record
router.get("/get-inventory", authMiddleware, getInventoryController);

// Get recent blood records
router.get("/get-recent-inventory", authMiddleware, getRecentInventoryController);

// Get hospital record
router.post("/get-inventory-hospital", authMiddleware, getInventoryHospitalController);

// Get donar records
router.get("/get-donars", authMiddleware, getDonarsController);

// Get hospitals records
router.get("/get-hospitals", authMiddleware, getHospitalController);

// Get Organizations records
router.get("/get-organization", authMiddleware, getOrganizationController);

// Get Organizations records
router.get(
  "/get-organization-for-hospital",
  authMiddleware,
  getOrganizationForHospitalController
);

module.exports = router;
