const express = require("express");
const router = express.Router();

const drivenBeforeForm = require("../controllers/drivenController");
router.route("/driven").post(drivenBeforeForm);
module.exports = router;