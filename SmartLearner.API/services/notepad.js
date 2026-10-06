const NotepadUserQuestion = require("../models/notepadQuestion");
const NotepadAnswere = require("../models/notepadAnswere");

// Create a new Notepad User Question

class NotepadServices {
  // Get all Notepad User Questions for a specific user

  async createNotepadQuestion(module, notepadQuestion) {
    try {
      const question = await NotepadUserQuestion.create({
        module,
        notepadQuestion,
      });

      const resultObject = {
        message: "question created successfully",
        statusCode: 201,
        success: true,
        data: question,
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: err.message,
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }

  async getNotepadQuestions(module) {
    try {
      const questions = await NotepadUserQuestion.find({ module });
      const resultObject = {
        message: "Notepad questions fetched successfully",
        statusCode: 200,
        success: true,
        data: { questions },
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: err.message,
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }

  // Create an answer for a specific Notepad User Question
  async createNotepadAnswere(userId, notepadQuestionId, notepadAnswere) {
    try {
      const answer = await NotepadAnswere.create({
        userId,
        notepadQuestionId,
        notepadAnswere,
      });

      const resultObject = {
        message: "Notepad answer created successfully",
        statusCode: 201,
        success: true,
        data: answer,
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: err.message,
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }

  // Get all answers for a specific Notepad User Question
  async getNotepadAnswers(userId, notepadQuestionId) {
    try {
        if (typeof notepadQuestionId === "string") {
            notepadQuestionId = notepadQuestionId.split(",");
          }

      const answers = await NotepadAnswere.find({
        userId,
        notepadQuestionId,
      });

      const groupedAnswers = {};
      notepadQuestionId.forEach((id) => {
        groupedAnswers[id] = answers.filter(
          (ans) => ans.notepadQuestionId._id.toString() === id
        );
      });

      const resultObject = {
        message: "Notepad answers fetched successfully",
        statusCode: 200,
        success: true,
        data: groupedAnswers,
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: err.message,
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }

  async editNotepadAnswers(answereId, notepadAnwere) {
    try {
      const answers = await NotepadAnswere.findByIdAndUpdate(
        answereId,
        notepadAnwere,
        {
          new: true,
        }
      );
      const resultObject = {
        message: "updated successfully",
        statusCode: 200,
        success: true,
        data: { answers },
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: err.message,
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }
  async deleteotepadAnswers(answereId) {
    try {
      await NotepadAnswere.findByIdAndDelete(answereId);
      const resultObject = {
        message: "Deleted successfully",
        statusCode: 201,
        success: true,
        data: null,
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: err.message,
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }
}

module.exports = new NotepadServices();
