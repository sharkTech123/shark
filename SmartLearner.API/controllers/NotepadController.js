const NotepadServices = require("../services/notepad");

class NotepadController {
  // Create a new Notepad Question
  async createNotepadQuestion(req, res) {
    try {
      const { module, notepadQuestion } = req.body;
      const question = await NotepadServices.createNotepadQuestion(
        module,
        notepadQuestion
      );
      res.status(201).json({ success: true, question });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // Get all Notepad Questions for a user
  async getNotepadQuestions(req, res) {
    try {
      const { module } = req.params;
      const questions = await NotepadServices.getNotepadQuestions(module);
      res.status(200).json({ success: true, questions });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // Create a new Notepad Answer
  async createNotepadAnswere(req, res) {
    try {
      const { userId, notepadQuestionId, notepadAnswere } = req.body;
      console.log("12423123dffdfdj", userId);
      console.log("hcdidkhcj", notepadQuestionId);
      console.log("efwhkjfhskj80593495384", notepadAnswere);
      const answer = await NotepadServices.createNotepadAnswere(
        userId,
        notepadQuestionId,
        notepadAnswere
      );
      res.status(201).json({ success: true, answer });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  // Get all answers for a Notepad Question
  async getNotepadAnswers(req, res) {
    try {
      const { userId, notepadQuestionId } = req.body;
      const answers = await NotepadServices.getNotepadAnswers(
        userId,
        notepadQuestionId
      );
      res.status(200).json({ success: true, answers });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  async updateAnswers(req, res, next) {
    try {
      const answers = await NotepadServices.editNotepadAnswers(
        req.params.id,
        req.body
      );
      res.status(200).json({ success: true, answers });
    } catch (err) {
      next(err);
    }
  }

  async deleteAnswers(req, res, next) {
    try {
      const result = await NotepadServices.deleteotepadAnswers(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new NotepadController();
