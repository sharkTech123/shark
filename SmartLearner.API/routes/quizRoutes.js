const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

const quizController = require("../controllers/quizController");
const { requireAuth } = require("../middlewares/authMiddleware");
const {
  imageSaverMiddleware,
  multipleimageSaverMiddleware,
} = require("../middlewares/imageSaverMiddleware");

router.post(
  "/addQuestion",
  multipleimageSaverMiddleware,
  requireAuth,
  quizController.addNewQuiz
);
router.post(
  "/updateQuestion/:id",

  multipleimageSaverMiddleware,
  requireAuth,
  quizController.updateQuiz
);

router.post("/answerQuestion", requireAuth, quizController.answerQuestion);
router.get("/all-quizzes", quizController.getAllQuiz);
router.get(
  "/getQuizResult/:resType",
  requireAuth,
  quizController.getQuizResult
);
router.get(
  "/getQuizResult/:userId/:resType",
  requireAuth,
  quizController.getQuizResult
);
router.get(
  "/getAdminQuizResult/:userReportId/",
  requireAuth,
  quizController.getQuizAdminResult
);

router.get("/quiz/:id", requireAuth, quizController.getOneQuestion);
router.get(
  "/getRandomQuestion/:cid/:id",
  requireAuth,
  quizController.getQuestionId
);
router.get("/getRandomQuestion/:cid", requireAuth, quizController.getQuestion);
router.get(
  "/getRandomQuestionCatName/:cid",
  requireAuth,
  quizController.getQuestionCatName
);
router.get("/restart-quiz/:cid", requireAuth, quizController.restartQuiz);

router.get("/getQuizCategory", requireAuth, quizController.getQuizCategory);
router.get(
  "/quizCategorylist",
  requireAuth,
  quizController.getListQuizCategory
);
router.get("/quizCategory/:id", requireAuth, quizController.oneQuizCategory);
router.get(
  "/quizCategoryModule/:id",
  requireAuth,
  quizController.oneQuizCategoryModule
);
router.post("/addQuizCategory", requireAuth, quizController.addQuizCategory);
router.post(
  "/updateQuizCategory/:id",
  requireAuth,
  quizController.updateQuizCategory
);
router.post(
  "/delete-quizCategory/:id",
  requireAuth,
  quizController.deleteQuizCategory
);

router.post("/delete-quiz/:id", requireAuth, quizController.deleteQuiz);

router.get("/all-quizzesModule", requireAuth, quizController.getAllQuizModule);
router.get("/quizModule/:id", requireAuth, quizController.getOneQuizModule);
router.post(
  "/addquizModule",
  imageSaverMiddleware,
  requireAuth,
  quizController.addQuizModule
);
router.post(
  "/updatequizModule/:id",
  imageSaverMiddleware,
  requireAuth,
  quizController.updateQuizModule
);
router.get(
  "/delete-quizModule/:id",
  requireAuth,
  quizController.deleteQuizModule
);

router.post("/remove-image", quizController.handleRemoveQuizImage);

router.post("/translate", upload.none(), quizController.translator);
module.exports = router;
