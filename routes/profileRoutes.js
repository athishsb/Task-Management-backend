const express = require("express");
const router = express.Router();
const { getProfile } = require("../controllers/profileController");
const { verifyAccessToken } = require("../middleware/auth");

// Routes beginning with /api/profile
router.get("/", verifyAccessToken, getProfile);

module.exports = router;