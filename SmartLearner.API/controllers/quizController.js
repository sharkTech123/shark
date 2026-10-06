const accountService = require("../services/accountService");
const quizService = require("../services/quizService");
const roleService = require("../services/roleService");
const userRoleServices = require("../services/userRoleService");
const { translate } = require("free-translate");
const QuizQuestion = require("../models/quizQuestionModel");
const axios = require("axios");
const { JSDOM } = require("jsdom");

class QuizController {
  async addNewQuiz(req, res, next) {
    try {
      var quizData = req.body;
      quizData["option"] = quizData.option.split("^");
      quizData["optionImage"] = [
        quizData.option1Image,
        quizData.option2Image,
        quizData.option3Image,
        quizData.option4Image,
      ];
      console.log("2193872103912", quizData);
      delete quizData.option1Image;
      delete quizData.option2Image;
      delete quizData.option3Image;
      delete quizData.option4Image;
      const quiz = await quizService.createQuizAsync(quizData);

      res.status(201).json(quiz);
    } catch (err) {
      next(err);
    }
  }

  async updateQuiz(req, res, next) {
    try {
      var quizData = req.body;

      quizData["option"] = quizData.option.split("^");
      // Fetch the existing quiz
      const existingQuiz = await QuizQuestion.findById(req.params.id);

      // Merge existing images with new ones
      quizData["optionImage"] = [
        quizData.option1Image !== undefined
          ? quizData.option1Image
          : existingQuiz.optionImage[0],
        quizData.option2Image !== undefined
          ? quizData.option2Image
          : existingQuiz.optionImage[1],
        quizData.option3Image !== undefined
          ? quizData.option3Image
          : existingQuiz.optionImage[2],
        quizData.option4Image !== undefined
          ? quizData.option4Image
          : existingQuiz.optionImage[3],
      ];
      quizData["questionImage"] =
        quizData.questionImage !== undefined
          ? quizData.questionImage
          : existingQuiz.questionImage;

      delete quizData.option1Image;
      delete quizData.option2Image;
      delete quizData.option3Image;
      delete quizData.option4Image;
      const quiz = await quizService.updateQuizAsync(req.params.id, quizData);
      console.log("xyz", quizData);
      res.status(201).json(quiz);
    } catch (err) {
      next(err);
    }
  }

  async handleRemoveQuizImage(req, res, next) {
    try {
      const { quizId, imageType, index } = req.body;
      console.log("sdzxcsa", quizId, imageType, index);

      const quiz = await QuizQuestion.findById(quizId);
      if (!quiz) {
        return res.status(404).json({ message: "Quiz not found" });
      }

      if (imageType === "questionImage") {
        quiz.questionImage = "";
      } else if (imageType === "optionImage" && typeof index === "number") {
        quiz.optionImage[index] = null; // Or remove using splice if you prefer
      } else {
        return res.status(400).json({ message: "Invalid imageType or index" });
      }

      await quiz.save();

      res.status(200).json({
        message: "Image removed successfully",
        success: true,
        data: quiz,
      });
    } catch (err) {
      console.error("Image removal error", err);
      res.status(500).json({ message: "Server error", success: false });
    }
  }

  async getQuestion(req, res, next) {
    try {
      const response = await quizService.getRandomQuiz(
        req.userId,
        req.params.cid
      );
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }

  async getQuestionCatName(req, res, next) {
    try {
      const response = await quizService.getRandomQuizCatName(
        req.userId,
        req.params.cid
      );
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }

  async restartQuiz(req, res, next) {
    try {
      const response = await quizService.restartQuiz(
        req.userId,
        req.params.cid
      );
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }
  async getQuestionId(req, res, next) {
    try {
      const { page, pagesize, search } = req.query;

      const response = await quizService.getRandomQuiz(
        req.userId,
        req.params.cid,
        req.params.id
      );
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }

  async getOneQuestion(req, res, next) {
    try {
      const response = await quizService.getOneQuizAsync(req.params.id);
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }

  async answerQuestion(req, res, next) {
    try {
      var quizData = req.body;

      quizData["userId"] = req.userId;
      const response = await quizService.answerQuizAsync(quizData);
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  }

  async getAllQuiz(req, res, next) {
    try {
      const { page, pagesize, search } = req.query;
      const result = await quizService.getAllQuizAsync(page, pagesize, search);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getAllQuizModule(req, res, next) {
    try {
      const { page, pagesize, search } = req.query;
      const result = await quizService.getAllQuizModuleAsync(
        page,
        pagesize,
        search
      );
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getOneQuizModule(req, res, next) {
    try {
      const result = await quizService.getOneQuizModuleAsync(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getQuizResult(req, res, next) {
    try {
      const { page, pagesize, search } = req.query;

      const result = await quizService.getQuizResultAsync(
        req.userId,
        page,
        pagesize,
        search,
        req.params.resType
      );
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
  async getQuizAdminResult(req, res, next) {
    try {
      const { page, pagesize, search } = req.query;

      const result = await quizService.getQuizAdminResultAsync(
        req.params.userReportId,
        page,
        pagesize,
        search
      );
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getQuizCategory(req, res, next) {
    try {
      const { page, pageSize, search } = req.query;
      const result = await quizService.getQuizCategoryAsync(
        page,
        pageSize,
        search
      );
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async getListQuizCategory(req, res, next) {
    try {
      const { page, pageSize, search } = req.query;
      const result = await quizService.getListQuizCategoryAsync();
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async oneQuizCategory(req, res, next) {
    try {
      const result = await quizService.getOneQuizCategoryAsync(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async oneQuizCategoryModule(req, res, next) {
    try {
      const result = await quizService.getOneQuizCategoryModuleAsync(
        req.params.id
      );
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async addQuizCategory(req, res, next) {
    try {
      var quizData = req.body;
      const quiz = await quizService.createQuizCategoryAsync(quizData);

      res.status(201).json(quiz);
    } catch (err) {
      next(err);
    }
  }

  async updateQuizCategory(req, res, next) {
    try {
      var quizData = req.body;
      const quiz = await quizService.updateQuizCategoryAsync(
        req.params.id,
        quizData
      );

      res.status(201).json(quiz);
    } catch (err) {
      next(err);
    }
  }

  async deleteQuizCategory(req, res, next) {
    try {
      const result = await quizService.deleteQuizModuleCategoryAsync(
        req.params.id
      );
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async addQuizModule(req, res, next) {
    try {
      var quizData = req.body;
      const quiz = await quizService.createQuizModuleAsync(quizData);

      res.status(201).json(quiz);
    } catch (err) {
      next(err);
    }
  }

  async updateQuizModule(req, res, next) {
    try {
      var quizData = req.body;
      const quiz = await quizService.updateQuizModuleAsync(
        req.params.id,
        quizData
      );

      res.status(201).json(quiz);
    } catch (err) {
      next(err);
    }
  }

  async deleteQuizModule(req, res, next) {
    try {
      const result = await quizService.deleteQuizModuleAsync(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
  async deleteQuiz(req, res, next) {
    try {
      const result = await quizService.deleteQuizAsync(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async translator(req, res, next) {
    console.log("Received translation request:", req.body);

    try {
      const {
        question,
        description,
        lang,
        option1,
        option2,
        option3,
        option4,
      } = req.body;

      const options = {
        method: "POST",
        url: "https://google-translate113.p.rapidapi.com/api/v1/translator/html",
        headers: {
          "x-rapidapi-key":
            "27c3e98cefmshcfbbe861d4cfc1fp1cdd32jsn06528e2aa53b", // Replace with your actual key
          "x-rapidapi-host": "google-translate113.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        data: {
          from: "en",
          to: lang,
          html: `<ul>
                   <li>${question}</li>
                   <li>${description}</li>
                   <li>${option1 || ""}</li>
                   <li>${option2 || ""}</li>
                   <li>${option3 || ""}</li>
                   <li>${option4 || ""}</li>
                 </ul>`,
        },
      };

      // Send translation request
      try {
        const response = await axios.request(options);
        console.log("dsolkjsoidksjdlskadjsldk", response.data); // Check the response data
      } catch (error) {
        console.error(
          "Error response:",
          error.response ? error.response.data : error.message
        );
      }
      const response = await axios.request(options);
      // Extract translated content from the response
      const translatedHTML = response.data.trans;
      console.log("Translated HTML:", translatedHTML);
      // Parse the translated HTML and extract question and options
      const dom = new JSDOM(translatedHTML);
      const doc = dom.window.document;

      const translatedQuestion = doc.querySelector(
        "ul > li:nth-child(1)"
      ).textContent;
      const translatedOption1 = doc.querySelector(
        "ul > li:nth-child(2)"
      ).textContent;
      const translatedOption2 = doc.querySelector(
        "ul > li:nth-child(3)"
      ).textContent;
      const translatedOption3 = doc.querySelector(
        "ul > li:nth-child(4)"
      ).textContent;
      const translatedOption4 = doc.querySelector(
        "ul > li:nth-child(5)"
      ).textContent;
      const translatedOption5 = doc.querySelector(
        "ul > li:nth-child(6)"
      ).textContent;

      // Send the translated response back
      res.json({
        question: translatedQuestion,
        description: translatedOption1,
        option1: translatedOption2,
        option2: translatedOption3,
        option3: translatedOption4,
        option4: translatedOption5,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new QuizController();
