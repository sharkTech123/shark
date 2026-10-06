const express = require("express");
const router = express.Router();
// const multer = require("multer");
// const upload = multer();

// const accountController = require("../controllers/accountController");
// const { requireAuth } = require("../middlewares/authMiddleware");

// router.post("/register", upload.none(), accountController.registerUser);
// router.post("/login", upload.none(), accountController.loginUser);
// router.get("/users", requireAuth, accountController.getAllUsers);

// module.exports = router;
const serviceForm = require("../controllers/serviceController");
router.route("/service").post(serviceForm);
module.exports = router;
