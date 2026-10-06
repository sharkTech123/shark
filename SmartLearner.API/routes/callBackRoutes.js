const express = require("express");
const router = express.Router();

const callBackForm = require("../controllers/callBackController");
router.route("/callback").post(callBackForm);
module.exports = router;
