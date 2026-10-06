const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const emailService = require("../services/emailService")
const accountController = require("../controllers/accountController");
const { requireAuth } = require("../middlewares/authMiddleware");

router.post("/register", upload.none(), accountController.registerUser);
router.post("/login", upload.none(), accountController.loginUser);
router.get("/users", requireAuth, accountController.getAllUsers);
router.get('/user/:id', upload.none(), accountController.getOneUsers);
router.post('/update-user/:id', upload.none(), accountController.updateUser);
router.post('/delete-user/:id', upload.none(), accountController.deleteUser);
router.post('/forgot-password',  accountController.forgotPassword);
router.post('/reset-password',  accountController.resetPassword);


module.exports = router;