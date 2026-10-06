const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const AttemptQuizQuestion = require("../models/attemptQuizQuestionModel");
const QuizQuestion = require("../models/quizQuestionModel");
const QuizCategoryModel = require("../models/quizCategoryModel");
const QuizModuleModel = require("../models/quizModuleModel");
const ResultQuizQuestion = require("../models/ResultQuizModal");
const fs = require("fs");
const path = require("path");

class quizService {
  async createQuizAsync(quizData) {
    try {
      const quiz = await QuizQuestion.create(quizData);

      const totalCount = await QuizQuestion.countDocuments();
      const resultObject = {
        message: "Quiz Added Successfully",
        statusCode: 201,
        success: true,
        data: { quiz, totalCount },
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: "Quiz add failed",
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }

  async getQuizById(quizId) {
    const quiz = await QuizQuestion.findById(quizId);
    if (!quiz) throw new Error("Quiz not found");
    return quiz;
  }

  async updateQuizAsync(quizId, quizData) {
    try {
      const quiz = await QuizQuestion.findByIdAndUpdate(quizId, quizData);

      const totalCount = await QuizQuestion.countDocuments();
      const resultObject = {
        message: "Quiz Updated Successfully",
        statusCode: 201,
        success: true,
        data: { quiz, totalCount },
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: "Quiz update failed",
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }

  async removeQuizImage(id, type, index) {
    const quiz = await QuizQuestion.findById(id);
    if (!quiz) throw new Error("Quiz not found");

    let imagePath = "";

    if (type === "questionImage") {
      imagePath = quiz.questionImage;
      quiz.questionImage = "";
    } else if (type === "optionImage") {
      if (index < 0 || index >= quiz.optionImage.length) {
        throw new Error("Invalid option image index");
      }
      imagePath = quiz.optionImage[index];
      quiz.optionImage[index] = "";
    } else {
      throw new Error("Invalid image type");
    }

    await quiz.save();

    return quiz;
  }
  async getQuizCategoryByQuestionAsync() {
    try {
      let aggr = [
        {
          $lookup: {
            from: "quizquestions",
            localField: "_id",
            foreignField: "category",
            as: "result",
          },
        },
        {
          $addFields: {
            count: {
              $size: "$result",
            },
          },
        },
      ];
      const quiz = await QuizCategoryModel.aggregate(aggr);
      const totalCount = await QuizCategoryModel.countDocuments();
      const resultObject = {
        message: "Quiz Category Fetch Successfully",
        statusCode: 201,
        success: true,
        data: { quiz, totalCount },
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }

  async getQuizCategoryAsync() {
    try {
      let aggr = [
        {
          $lookup: {
            from: "quizmodules",
            localField: "_id",
            foreignField: "category",
            as: "result",
          },
        },
        {
          $addFields: {
            count: {
              $size: "$result",
            },
          },
        },
      ];
      const quiz = await QuizCategoryModel.aggregate(aggr);
      const totalCount = await QuizCategoryModel.countDocuments();
      const resultObject = {
        message: "Quiz Category Fetch Successfully",
        statusCode: 201,
        success: true,
        data: { quiz, totalCount },
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }

  async getQuizModuleAsync(id) {
    try {
      let aggr = [
        {
          $match: {
            category: new ObjectId(id),
          },
        },
        {
          $lookup: {
            from: "quizquestions",
            localField: "_id",
            foreignField: "module",
            as: "result",
          },
        },
        {
          $addFields: {
            count: {
              $size: "$result",
            },
          },
        },
      ];
      const quiz = await QuizModuleModel.aggregate(aggr);
      const totalCount = await QuizModuleModel.countDocuments();
      const resultObject = {
        message: "Quiz Category Fetch Successfully",
        statusCode: 201,
        success: true,
        data: { quiz, totalCount },
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }

  async getListQuizCategoryAsync() {
    try {
      const quiz = await QuizCategoryModel.find();
      const resultObject = {
        message: "Quiz Category Fetch Successfully",
        statusCode: 201,
        success: true,
        data: quiz,
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }

  async getAllQuizAsync(pageNumber, pageSize, query) {
    try {
      const skip = pageNumber - 1;
      let filter = {};
      if (query) {
        const regex = new RegExp(query, "i");
        filter.$or = [{ code: regex }, { area: regex }];
      }

      let aggr = [
        {
          $addFields: {
            uId: {
              $toString: "$_id",
            },
          },
        },
        {
          $lookup: {
            from: "quizcategories",
            localField: "category",
            foreignField: "_id",
            as: "result",
          },
        },
        {
          $unwind: {
            path: "$result",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "quizmodules",
            localField: "module",
            foreignField: "_id",
            as: "moduleresult",
          },
        },
        {
          $unwind: {
            path: "$moduleresult",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $addFields: {
            categoryName: "$result.name",
            moduleName: "$moduleresult.moduleName",
          },
        },
        {
          $skip: skip,
        },
      ];

      const quizzes = await QuizQuestion.aggregate(aggr);
      const totalCount = await QuizQuestion.countDocuments(filter);
      // const quizzes = await QuizQuestion.find(filter).skip(skip).limit(pageSize || 20);

      const resultObject = {
        message: "Fetched successfully",
        statusCode: 200,
        success: true,
        data: { quizzes, totalCount },
      };

      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch Quizzes");
    }
  }

  async getAllQuizModuleAsync(pageNumber, pageSize, query) {
    try {
      const skip = (pageNumber - 1) * (pageSize || 20);
      let filter = {};
      if (query) {
        const regex = new RegExp(query, "i");
        filter.$or = [{ code: regex }, { area: regex }];
      }

      let aggr = [
        {
          $addFields: {
            uId: {
              $toString: "$_id",
            },
          },
        },
        {
          $lookup: {
            from: "quizcategories",
            localField: "category",
            foreignField: "_id",
            as: "result",
          },
        },
        {
          $unwind: {
            path: "$result",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $addFields: {
            categoryName: "$result.name",
          },
        },
        {
          $skip: skip,
        },
        {
          $limit: +pageSize || 20,
        },
      ];

      const quizzes = await QuizModuleModel.aggregate(aggr);
      const totalCount = await QuizModuleModel.countDocuments(filter);
      // const quizzes = await QuizQuestion.find(filter).skip(skip).limit(pageSize || 20);

      const resultObject = {
        message: "Fetched successfully",
        statusCode: 200,
        success: true,
        data: { quizzes, totalCount },
      };

      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch postcodes");
    }
  }

  async getOneQuizModuleAsync(id) {
    try {
      let aggr = [
        {
          $addFields: {
            uId: {
              $toString: "$_id",
            },
          },
        },
        {
          $match: {
            uId: id,
          },
        },
        {
          $lookup: {
            from: "quizcategories",
            localField: "category",
            foreignField: "_id",
            as: "result",
          },
        },
        {
          $unwind: {
            path: "$result",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $addFields: {
            categoryName: "$result.name",
          },
        },
      ];
      const quiz = await QuizModuleModel.aggregate(aggr);
      const totalCount = await QuizModuleModel.countDocuments();
      const resultObject = {
        message: "Quiz Module Fetch Successfully",
        statusCode: 201,
        success: true,
        data: quiz[0],
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }

  async getQuizResultAsync(userId, pageNumber, pageSize, query, resType) {
    try {
      if (!ObjectId.isValid(userId)) {
        throw new Error("Invalid user id");
      }

      const aggr = [
        { $match: { userId: new ObjectId(userId) } },
        { $sort: { createdOn: -1 } }, // moved up — uses the index, sorts small docs
        {
          $lookup: {
            from: "quizquestions",
            localField: "questionId",
            foreignField: "_id",
            as: "question",
          },
        },
        { $unwind: { path: "$question", preserveNullAndEmptyArrays: true } },
        {
          $lookup: {
            from: "quizcategories",
            localField: "question.category",
            foreignField: "_id",
            as: "result",
          },
        },
        { $unwind: { path: "$result", preserveNullAndEmptyArrays: true } },
        {
          $project: {
            answer: 1,
            answerAttempt: 1,
            createdOn: 1,
            "question.question": 1,
            "question.option": 1,
            "question.answer": 1,
            "question.band": 1,
            "result._id": 1,
            "result.name": 1,
          },
        },
      ];

      const quizResult = await ResultQuizQuestion.aggregate(aggr).option({
        maxTimeMS: 20000,
      });

      return {
        message: "Fetched successfully",
        statusCode: 200,
        success: true,
        data: { quizResult },
      };
    } catch (err) {
      console.error("getQuizResultAsync error:", err.message);
      throw new Error("Could not fetch quiz results");
    }
  }

  async getQuizAdminResultAsync(userReportId) {
    try {
      const aggr = [
        {
          $match: {
            userId: new ObjectId(userReportId),
          },
        },
        {
          $lookup: {
            from: "quizquestions",
            localField: "questionId",
            foreignField: "_id",
            as: "question",
          },
        },
        {
          $unwind: {
            path: "$question",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $addFields: {
            questioncategory: "$question.category",
            questionmodule: "$question.module",
          },
        },
        {
          $lookup: {
            from: "quizcategories",
            localField: "questioncategory",
            foreignField: "_id",
            as: "result",
          },
        },
        {
          $unwind: {
            path: "$result",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "quizmodules",
            localField: "questionmodule",
            foreignField: "_id",
            as: "moduleresult",
          },
        },
        {
          $unwind: {
            path: "$moduleresult",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $unwind: {
            path: "$user",
            preserveNullAndEmptyArrays: true,
          },
        },
      ];

      const quizResult = await ResultQuizQuestion.aggregate(aggr);
      const totalCount = quizResult.length;

      return {
        message: "Fetched successfully",
        statusCode: 200,
        success: true,
        data: { quizResult, totalCount },
      };
    } catch (err) {
      throw new Error("Could not fetch quiz results by userId");
    }
  }

  async deleteQuizCategoryAsync(categoryId) {
    try {
      await QuizCategoryModel.findByIdAndDelete(categoryId);
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

  async deleteQuizModuleAsync(categoryId) {
    try {
      await QuizModuleModel.findByIdAndDelete(categoryId);
      const resultObject = {
        message: "Deleted successfully",
        statusCode: 200,
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

  async deleteQuizAsync(categoryId) {
    try {
      await QuizQuestion.findByIdAndDelete(categoryId);
      const resultObject = {
        message: "Deleted successfully",
        statusCode: 200,
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

  async getOneQuizAsync(id) {
    try {
      let aggr = [
        {
          $addFields: {
            uId: {
              $toString: "$_id",
            },
          },
        },
        {
          $match: {
            uId: id,
          },
        },
        {
          $lookup: {
            from: "quizcategories",
            localField: "category",
            foreignField: "_id",
            as: "result",
          },
        },
        {
          $unwind: {
            path: "$result",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $addFields: {
            categoryName: "$result.name",
          },
        },
      ];
      const quiz = await QuizQuestion.aggregate(aggr);
      const totalCount = await QuizQuestion.countDocuments();
      const resultObject = {
        message: "Quiz Category Fetch Successfully",
        statusCode: 201,
        success: true,
        data: quiz[0],
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }

  async getOneQuizCategoryAsync(id) {
    try {
      const quiz = await QuizCategoryModel.findById(id);
      const totalCount = await QuizCategoryModel.countDocuments();
      const resultObject = {
        message: "Quiz Category Fetch Successfully",
        statusCode: 201,
        success: true,
        data: quiz,
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }

  async getOneQuizCategoryModuleAsync(id) {
    try {
      let aggr = [
        {
          $match: {
            category: new ObjectId(id),
          },
        },
        {
          $addFields: {
            uId: {
              $toString: "$_id",
            },
          },
        },
        {
          $lookup: {
            from: "quizcategories",
            localField: "category",
            foreignField: "_id",
            as: "result",
          },
        },
        {
          $unwind: {
            path: "$result",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $addFields: {
            categoryName: "$result.name",
          },
        },
      ];
      const quiz = await QuizModuleModel.aggregate(aggr);
      const totalCount = await QuizModuleModel.countDocuments();
      const resultObject = {
        message: "Quiz Category Fetch Successfully",
        statusCode: 201,
        success: true,
        data: quiz,
      };
      return resultObject;
    } catch (err) {
      throw new Error("Could not fetch role");
    }
  }

  async createQuizCategoryAsync(quizData) {
    try {
      const quiz = await QuizCategoryModel.create(quizData);
      const totalCount = await QuizCategoryModel.countDocuments();
      const resultObject = {
        message: "Quiz Category Added Successfully",
        statusCode: 201,
        success: true,
        data: { quiz, totalCount },
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: "Quiz Category add failed",
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }
  async updateQuizCategoryAsync(uId, quizData) {
    try {
      const quiz = await QuizCategoryModel.findByIdAndUpdate(uId, quizData);
      const totalCount = await QuizCategoryModel.countDocuments();
      const resultObject = {
        message: "Quiz Category Added Successfully",
        statusCode: 201,
        success: true,
        data: quiz,
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: "Quiz Category add failed",
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }

  async createQuizModuleAsync(quizData) {
    try {
      const quiz = await QuizModuleModel.create(quizData);
      const totalCount = await QuizModuleModel.countDocuments();
      const resultObject = {
        message: "Quiz Category Added Successfully",
        statusCode: 201,
        success: true,
        data: { quiz, totalCount },
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: "Quiz Category add failed",
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }
  async updateQuizModuleAsync(uId, quizData) {
    try {
      const quiz = await QuizModuleModel.findByIdAndUpdate(uId, quizData);
      const totalCount = await QuizModuleModel.countDocuments();
      const resultObject = {
        message: "Quiz Module Updated Successfully",
        statusCode: 201,
        success: true,
        data: quiz,
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: "Quiz Module Updated failed",
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }

  async answerQuizAsync(quizData) {
    try {
      // const quiz = await QuizQuestion.create(quizData);
      console.log("qsseseee", quizData);
      const getQuizQuestion = await QuizQuestion.find({
        _id: quizData.questionId,
      });
      if (getQuizQuestion.length == 0) {
        const resultObject = {
          message: "Question Id is not valid",
          statusCode: 400,
          success: false,
          data: null,
        };
        return resultObject;
      }
      if (getQuizQuestion[0]["answer"] == quizData["answer"]) {
        quizData["answerAttempt"] = "Correct";
      } else {
        quizData["answerAttempt"] = "Incorrect";
      }

      quizData["correctAnswer"] = getQuizQuestion[0]["answer"];
      const quiz = await AttemptQuizQuestion.create(quizData);
      const quiz2 = await ResultQuizQuestion.create(quizData);
      const resultObject = {
        message: "Quiz Response Successfully",
        statusCode: 201,
        success: true,
        data: quizData,
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: "Quiz Answer failed",
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }

  async getRandomQuiz(userId, cid, moduleId = null) {
    try {
      let aggr = [];
      if (moduleId != null) {
        aggr.push({
          $match: {
            module: new ObjectId(moduleId),
          },
        });
      }

      aggr.push(
        {
          $match: {
            category: new ObjectId(cid),
          },
        },
        {
          $lookup: {
            from: "attemptquizquestions",
            localField: "_id",
            foreignField: "questionId",
            pipeline: [
              {
                $match: {
                  userId: {
                    $eq: new ObjectId(userId),
                  },
                },
              },
            ],
            as: "result",
          },
        },
        {
          $addFields: {
            sizeRes: {
              $size: "$result",
            },
            questionId: {
              $toString: "$_id",
            },
          },
        },
        {
          $match: {
            sizeRes: 0,
          },
        },
        {
          $lookup: {
            from: "quizcategories",
            localField: "category",
            foreignField: "_id",
            as: "quizcategoriesresult",
          },
        },
        {
          $unwind: {
            path: "$quizcategoriesresult",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $lookup: {
            from: "quizmodules",
            localField: "module",
            foreignField: "_id",
            as: "quizmodulesresult",
          },
        },
        {
          $unwind: {
            path: "$quizmodulesresult",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $addFields: {
            quizCategory: "$quizcategoriesresult.name",
            quizModuleName: "$quizmodulesresult.moduleName",
          },
        },
        {
          $project: {
            result: 0,
            answer: 0,
            sizeRes: 0,
            _id: 0,
          },
        },
      );

      const products = await QuizQuestion.aggregate(aggr);
      const resultObject = {
        message:
          products.length > 0
            ? "Question fetched successfully"
            : "Quiz completed",
        statusCode: products.length > 0 ? 200 : 400,
        success: true,
        data: products.length > 0 ? products[0] : {},
      };
      return resultObject;
    } catch (err) {
      const resultObject = {
        message: "Could not fetch products",
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }

  async getRandomQuizCatName(userId, cid) {
    try {
      if (cid === "Mock--Tests") {
        const bands = ["band 1", "band 2", "band 3", "band 4"];
        const category = await QuizCategoryModel.findOne({
          catUnqName: "Mock--Tests",
        }).select("_id");

        if (!category) {
          return {
            message: "Category not found",
            statusCode: 404,
            success: false,
            data: null,
            canRestart: true,
          };
        }

        const attemptedIds = await AttemptQuizQuestion.find({
          userId: new ObjectId(userId),
        }).distinct("questionId");

        let data = [];

        for (let band of bands) {
          const bandQuestions = await QuizQuestion.aggregate([
            {
              $match: {
                category: category._id,
                band: band,
                _id: { $nin: attemptedIds },
              },
            },
            {
              $lookup: {
                from: "quizcategories",
                localField: "category",
                foreignField: "_id",
                as: "quizcategoriesresult",
              },
            },
            {
              $unwind: {
                path: "$quizcategoriesresult",
                preserveNullAndEmptyArrays: true,
              },
            },
            {
              $match: {
                "quizcategoriesresult.catUnqName": "Mock--Tests",
              },
            },

            {
              $addFields: {
                quizCategory: "$quizcategoriesresult.name",
                questionId: {
                  $convert: {
                    input: "$_id",
                    to: "string",
                    onError: null,
                    onNull: null,
                  },
                },
                randomSort: { $rand: {} },
              },
            },
            {
              $project: {
                result: 0,
                answer: 0,
                sizeRes: 0,
                _id: 0,
              },
            },
            {
              $sort: { randomSort: 1 },
            },
            {
              $limit: 25,
            },
          ]);

          if (bandQuestions.length > 0) {
            data = [...data, ...bandQuestions];
          }
        }
        const totalQuestionsData = 100;
        const attemptedQuestionData = attemptedIds.length;

        if (data.length === 100) {
          return {
            message: "Mock-Test questions fetched successfully",
            statusCode: 200,
            success: true,
            data: {
              data,
              attemptedQuestionData,
              totalQuestionsData,
            },
            canRestart: false,
            attemptedQuestionData,
            totalQuestionsData,
          };
        } else {
          return {
            message: "Could not fetch enough questions",
            statusCode: 400,
            success: false,
            data: [],
            canRestart: true,
          };
        }
      } else if (cid === "Mock-Test") {
        const category = await QuizCategoryModel.findOne({
          catUnqName: "Mock-Test",
        }).select("_id");

        if (!category) {
          return {
            message: "Category not found",
            statusCode: 404,
            success: false,
            data: null,
            canRestart: true,
          };
        }

        // Step 2: Get list of attempted question IDs by user (faster filtering)
        const attemptedIds = await AttemptQuizQuestion.find({
          userId: new ObjectId(userId),
        }).distinct("questionId");

        // Step 3: Query unattempted questions in this category
        const data = await QuizQuestion.aggregate([
          {
            $match: {
              category: category._id,
              _id: { $nin: attemptedIds },
            },
          },
          {
            $lookup: {
              from: "quizcategories",
              localField: "category",
              foreignField: "_id",
              as: "quizcategoriesresult",
            },
          },
          {
            $unwind: {
              path: "$quizcategoriesresult",
              preserveNullAndEmptyArrays: false,
            },
          },
          {
            $match: {
              "quizcategoriesresult.catUnqName": "Mock-Test",
            },
          },
          {
            $lookup: {
              from: "quizmodules",
              localField: "module",
              foreignField: "_id",
              as: "quizmodulesresult",
            },
          },
          {
            $unwind: {
              path: "$quizmodulesresult",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $addFields: {
              quizCategory: "$quizcategoriesresult.name",
              quizModuleName: "$quizmodulesresult.moduleName",
              questionId: {
                $convert: {
                  input: "$_id",
                  to: "string",
                  onError: null,
                  onNull: null,
                },
              },
              randomSort: { $rand: {} },
            },
          },
          {
            $project: {
              result: 0,
              answer: 0,
              sizeRes: 0,
              _id: 0,
            },
          },
          {
            $sort: { randomSort: 1 },
          },
          {
            $limit: 50,
          },
        ]);

        const totalQuestionsData = 50;
        const attemptedQuestionData = attemptedIds.length;

        const resultObject = {
          message:
            data.length > 0
              ? "Mock-Test questions fetched successfully"
              : "No questions available",
          statusCode: data.length > 0 ? 200 : 400,
          success: data.length > 0,
          data: {
            data,
            attemptedQuestionData,
            totalQuestionsData,
          },
          canRestart: data.length === 0,
          attemptedQuestionData,
          totalQuestionsData,
        };

        return resultObject;
      } else if (cid === "band-one-test") {
        const category = await QuizCategoryModel.findOne({
          catUnqName: "band-one-test",
        }).select("_id name");
        if (!category) {
          return {
            message: "Category not found",
            statusCode: 404,
            success: false,
            data: null,
            canRestart: true,
          };
        }

        const attemptedIds = await AttemptQuizQuestion.find({
          userId: new ObjectId(userId),
        }).distinct("questionId");

        const data = await QuizQuestion.aggregate([
          {
            $match: {
              category: category._id,
              _id: { $nin: attemptedIds },
            },
          },
          {
            $lookup: {
              from: "quizmodules",
              localField: "module",
              foreignField: "_id",
              as: "quizmodulesresult",
            },
          },
          {
            $unwind: {
              path: "$quizmodulesresult",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $addFields: {
              questionId: {
                $convert: {
                  input: "$_id",
                  to: "string",
                  onError: null,
                  onNull: null,
                },
              },
              quizCategory: category.name,
              quizModuleName: "$quizmodulesresult.moduleName",
            },
          },
          {
            $project: {
              answer: 0, // Remove this if you want to show answers
              _id: 0,
            },
          },
          {
            $sample: { size: 25 },
          },
        ]);

        const totalQuestionsData = await QuizQuestion.find({
          category: category._id,
        }).distinct("_id");

        const attemptedQuestionData = await AttemptQuizQuestion.find({
          userId: new ObjectId(userId),
          questionId: { $in: totalQuestionsData },
        });

        const attemptedCount = attemptedIds.filter(
          (id) => data.findIndex((q) => q.questionId === id.toString()) === -1,
        ).length;
        const attemptedData = attemptedQuestionData.length;
        const totalQuestiondata = totalQuestionsData.length;
        return {
          message:
            data.length > 0
              ? "Data questions fetched successfully"
              : "No data questions available",
          statusCode: data.length > 0 ? 200 : 400,
          success: data.length > 0,
          data: {
            data,
            attemptedQuestionData: attemptedData,
            totalQuestionsData: 25,
          },
          canRestart: data.length === 0,
        };
      } else if (cid === "band-Two-test") {
        // If the category is "road-procedure", fetch only 50 random questions
        const category = await QuizCategoryModel.findOne({
          catUnqName: "band-Two-test",
        }).select("_id name");
        if (!category) {
          return {
            message: "Category not found",
            statusCode: 404,
            success: false,
            data: null,
            canRestart: true,
          };
        }

        const attemptedIds = await AttemptQuizQuestion.find({
          userId: new ObjectId(userId),
        }).distinct("questionId");

        const data = await QuizQuestion.aggregate([
          {
            $match: {
              category: category._id,
              _id: { $nin: attemptedIds },
            },
          },
          {
            $lookup: {
              from: "quizmodules",
              localField: "module",
              foreignField: "_id",
              as: "quizmodulesresult",
            },
          },
          {
            $unwind: {
              path: "$quizmodulesresult",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $addFields: {
              questionId: {
                $convert: {
                  input: "$_id",
                  to: "string",
                  onError: null,
                  onNull: null,
                },
              },
              quizCategory: category.name,
              quizModuleName: "$quizmodulesresult.moduleName",
            },
          },
          {
            $project: {
              answer: 0, // Remove this if you want to show answers
              _id: 0,
            },
          },
          {
            $sample: { size: 25 },
          },
        ]);

        const totalQuestionsCount = 25;

        const attemptedCount = attemptedIds.filter(
          (id) => data.findIndex((q) => q.questionId === id.toString()) === -1,
        ).length;

        return {
          message:
            data.length > 0
              ? "Data questions fetched successfully"
              : "No data questions available",
          statusCode: data.length > 0 ? 200 : 400,
          success: data.length > 0,
          data: {
            data,
            attemptedQuestionData: attemptedCount,
            totalQuestionsData: totalQuestionsCount,
          },
          canRestart: data.length === 0,
        };
      } else if (cid === "band-three-test") {
        const category = await QuizCategoryModel.findOne({
          catUnqName: "band-three-test",
        }).select("_id name");
        if (!category) {
          return {
            message: "Category not found",
            statusCode: 404,
            success: false,
            data: null,
            canRestart: true,
          };
        }

        const attemptedIds = await AttemptQuizQuestion.find({
          userId: new ObjectId(userId),
        }).distinct("questionId");

        const data = await QuizQuestion.aggregate([
          {
            $match: {
              category: category._id,
              _id: { $nin: attemptedIds },
            },
          },
          {
            $lookup: {
              from: "quizmodules",
              localField: "module",
              foreignField: "_id",
              as: "quizmodulesresult",
            },
          },
          {
            $unwind: {
              path: "$quizmodulesresult",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $addFields: {
              questionId: {
                $convert: {
                  input: "$_id",
                  to: "string",
                  onError: null,
                  onNull: null,
                },
              },
              quizCategory: category.name,
              quizModuleName: "$quizmodulesresult.moduleName",
            },
          },
          {
            $project: {
              answer: 0, // Remove this if you want to show answers
              _id: 0,
            },
          },
          {
            $sample: { size: 25 },
          },
        ]);

        const totalQuestionsCount = 25;

        const attemptedCount = attemptedIds.filter(
          (id) => data.findIndex((q) => q.questionId === id.toString()) === -1,
        ).length;

        return {
          message:
            data.length > 0
              ? "Data questions fetched successfully"
              : "No data questions available",
          statusCode: data.length > 0 ? 200 : 400,
          success: data.length > 0,
          data: {
            data,
            attemptedQuestionData: attemptedCount,
            totalQuestionsData: totalQuestionsCount,
          },
          canRestart: data.length === 0,
        };
      } else if (cid === "band-four-test") {
        const category = await QuizCategoryModel.findOne({
          catUnqName: "band-four-test",
        }).select("_id name");
        if (!category) {
          return {
            message: "Category not found",
            statusCode: 404,
            success: false,
            data: null,
            canRestart: true,
          };
        }

        const attemptedIds = await AttemptQuizQuestion.find({
          userId: new ObjectId(userId),
        }).distinct("questionId");

        const data = await QuizQuestion.aggregate([
          {
            $match: {
              category: category._id,
              _id: { $nin: attemptedIds },
            },
          },
          {
            $lookup: {
              from: "quizmodules",
              localField: "module",
              foreignField: "_id",
              as: "quizmodulesresult",
            },
          },
          {
            $unwind: {
              path: "$quizmodulesresult",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $addFields: {
              questionId: {
                $convert: {
                  input: "$_id",
                  to: "string",
                  onError: null,
                  onNull: null,
                },
              },
              quizCategory: category.name,
              quizModuleName: "$quizmodulesresult.moduleName",
            },
          },
          {
            $project: {
              answer: 0, // Remove this if you want to show answers
              _id: 0,
            },
          },
          {
            $sample: { size: 25 },
          },
        ]);

        const totalQuestionsCount = 25;

        const attemptedCount = attemptedIds.filter(
          (id) => data.findIndex((q) => q.questionId === id.toString()) === -1,
        ).length;

        return {
          message:
            data.length > 0
              ? "Data questions fetched successfully"
              : "No data questions available",
          statusCode: data.length > 0 ? 200 : 400,
          success: data.length > 0,
          data: {
            data,
            attemptedQuestionData: attemptedCount,
            totalQuestionsData: totalQuestionsCount,
          },
          canRestart: data.length === 0,
        };
      } else {
        if (!ObjectId.isValid(userId)) {
          return {
            message: "Invalid user ID",
            statusCode: 400,
            success: false,
            data: null,
          };
        }

        const category = await QuizCategoryModel.findOne({
          catUnqName: cid,
        }).lean();
        if (!category) {
          return {
            message: "Category not found",
            statusCode: 404,
            success: false,
            data: null,
          };
        }

        // Get attempted question IDs
        const attemptedQuestionData = await AttemptQuizQuestion.find({
          userId: new ObjectId(userId),
          questionId: {
            $in: await QuizQuestion.find({
              category: category._id,
            }).distinct("_id"),
          },
        }).distinct("questionId");

        const unattemptedQuestions = await QuizQuestion.aggregate([
          {
            $match: {
              category: category._id,
              _id: { $nin: attemptedQuestionData },
            },
          },
          {
            $lookup: {
              from: "quizcategories", // Ensure this is the correct collection
              localField: "category",
              foreignField: "_id",
              as: "quizcategoriesresult",
            },
          },
          {
            $unwind: {
              path: "$quizcategoriesresult",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $addFields: {
              randomSort: { $rand: {} }, // Add a random field to shuffle the results
            },
          },

          {
            $project: {
              question: 1,
              questionImage: 1,
              description: 1,
              option: 1,
              optionImage: 1,
              category: 1,
              quizCategory: "$quizcategoriesresult.name",
              randomSort: 1,
              questionId: {
                $convert: {
                  input: "$_id",
                  to: "string",
                  onError: null,
                  onNull: null,
                },
              },
            },
          },
          {
            $project: {
              result: 0,
              answer: 0,
              _id: 0,
            },
          },
          {
            $sort: { randomSort: 1 }, // Sort questions randomly
          },
        ]);

        // Step 4: Calculate the total number of questions
        const totalQuestionsData = await QuizQuestion.find({
          category: category._id,
        }).countDocuments();

        // Step 5: Send the response with the unattempted questions
        const resultObject = {
          message:
            unattemptedQuestions.length > 0
              ? "Questions fetched successfully"
              : "No questions available",
          statusCode: unattemptedQuestions.length > 0 ? 200 : 400,
          success: true,
          data: {
            data: unattemptedQuestions,
            attemptedQuestionData: attemptedQuestionData.length,
            totalQuestionsData,
          },
          canRestart: unattemptedQuestions.length === 0,
          attemptedQuestionData: attemptedQuestionData.length,
          totalQuestionsData,
        };

        return resultObject;
      }
    } catch (err) {
      console.error("Error during fetching questions:", err);
      const resultObject = {
        message: "Could not fetch questions",
        statusCode: 400,
        success: false,
        data: null,
      };
      return resultObject;
    }
  }
  async restartQuiz(userId, cid, moduleId = null) {
    try {
      // Clear user's previous attempts for this category
      const category = await QuizCategoryModel.findOne({
        catUnqName: cid,
      }).select("_id");
      if (!category) {
        return {
          message: "Category not found",
          statusCode: 404,
          success: false,
          data: null,
        };
      }

      await AttemptQuizQuestion.deleteMany({
        userId: new ObjectId(userId),
        questionId: {
          $in: await QuizQuestion.find({
            category: category._id,
          }).distinct("_id"),
        },
      });

      // Fetch a new question from the category
      const newQuestion = await this.getRandomQuizCatName(
        userId,
        cid,
        moduleId,
      );
      return newQuestion; // Return the new question or a message if there are no questions
    } catch (err) {
      return {
        message: "Could not restart the quiz",
        statusCode: 400,
        success: false,
        data: null,
      };
    }
  }

  async deleteQuizModuleCategoryAsync(id) {
    try {
      await QuizCategoryModel.findByIdAndDelete(id);
      const resultObject = {
        message: "quiz deleted successfully",
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

  async getCategoryWiseResults(userId) {
    // Step 1: Get all quiz attempts of the user with category info
    const results = await ResultQuizQuestion.aggregate([
      { $match: { userId: new mongoose.Types.ObjectId(userId) } },
      {
        $lookup: {
          from: "quizquestions",
          localField: "questionId",
          foreignField: "_id",
          as: "question",
        },
      },
      { $unwind: "$question" },
      {
        $group: {
          _id: "$question.category",
          attempted: { $sum: 1 },
          correct: {
            $sum: {
              $cond: [{ $eq: ["$answerAttempt", "Correct"] }, 1, 0],
            },
          },
        },
      },
      {
        $lookup: {
          from: "quizcategories",
          localField: "_id",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
      {
        $project: {
          categoryId: "$_id",
          categoryName: "$category.name",
          attempted: 1,
          correct: 1,
        },
      },
    ]);

    // Step 2: Get total question count per category
    const categoryStats = await QuizCategoryModel.aggregate([
      {
        $lookup: {
          from: "quizquestions",
          localField: "_id",
          foreignField: "category",
          as: "questions",
        },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          totalQuestions: { $size: "$questions" },
        },
      },
    ]);

    // Step 3: Merge both
    const merged = results.map((item) => {
      const totalCat = categoryStats.find(
        (c) => c._id.toString() === item.categoryId.toString(),
      );
      const total = totalCat?.totalQuestions || 0;
      const scorePercent =
        total > 0 ? ((item.correct / total) * 100).toFixed(2) : "0.00";

      return {
        category: item.categoryName,
        totalQuestions: total,
        attempted: item.attempted,
        correct: item.correct,
        percentage: scorePercent,
      };
    });

    return merged;
  }
}

module.exports = new quizService();
