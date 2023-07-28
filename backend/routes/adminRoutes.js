const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getDonarsListController,
  getHospitalListController,
  getOrgListController,
  deleteDonarController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

// router object
const router = express.Router();
// routes
// Get donar list
router.get(
  "/donar-list",
  authMiddleware,
  adminMiddleware,
  getDonarsListController
);

// Get Hospital list
router.get(
  "/hospital-list",
  authMiddleware,
  adminMiddleware,
  getHospitalListController
);
// Get Organization list
router.get(
  "/org-list",
  authMiddleware,
  adminMiddleware,
  getOrgListController
);

// Get Delete donar list
router.delete(
  "/delete-donar/:id",
  authMiddleware,
  adminMiddleware,
  deleteDonarController
);

// Export
module.exports = router;
