// registerRoute.js

const express = require("express");
const router = express.Router();
const registerHandler = require("../handlers/registerHandler");

router.post("/register", registerHandler);

module.exports = router;
