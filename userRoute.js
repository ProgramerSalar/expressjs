const express = require("express");
const router = express.Router();
const { registerUser } = require("./usercontroller");

router.route("/api/v1/login").post(registerUser);

module.exports = router;
