const express = require("express");
const { loginIndex, signIn } = require("../controller/loginController");

const router = express.Router();

router.route("/").get(loginIndex).post(signIn);

module.exports = router;
