// loginRoute.js

const express = require("express");
const router = express.Router();
const loginHandler = require("../handlers/loginHandler");

router.post("/login", loginHandler);

module.exports = router;
