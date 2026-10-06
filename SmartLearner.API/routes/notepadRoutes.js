const express = require("express");
const router = express.Router();
const NotepadController = require("../controllers/NotepadController");

// Route to create a Notepad Question
router.get("/question", NotepadController.createNotepadQuestion);

router.get("/questions/:module", NotepadController.getNotepadQuestions);

router.post("/answere", NotepadController.createNotepadAnswere);

router.get("/all-answers", NotepadController.getNotepadAnswers);

router.post("/update-answere/:id", NotepadController.updateAnswers);
router.post("/delete-answere/:id", NotepadController.deleteAnswers);

module.exports = router;
