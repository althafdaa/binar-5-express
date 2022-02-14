const express = require("express");
const {
  getAllUsers,
  createUser,
  deleteUser,
  getUser,
} = require("./../controller/userController");

const router = express.Router();

router.param("id", (req, res, next, val) => {
  next();
});

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).delete(deleteUser);

module.exports = router;
