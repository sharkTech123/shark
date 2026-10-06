const express = require("express");
const router = express.Router();


const enquiryController = require("../controllers/enquiryController");

router.post('/enquiry', enquiryController.submitForm);
module.exports = router;
