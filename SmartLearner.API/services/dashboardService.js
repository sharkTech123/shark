const { ObjectId } = require('mongodb');
const AttemptQuizQuestion = require('../models/attemptQuizQuestionModel');
const QuizQuestion = require('../models/quizQuestionModel');
const Product = require('../models/productModel');
const Category = require('../models/categoryModel');
const roleService = require('./roleService');
const UserRole = require('../models/userRoleModel');
const User = require('../models/userModel');
const { ROLES } = require('../utilities/constatnt');

class dashboardService {
  async getDashboardCards() {
    try {



      const ProducttotalCount = await Product.countDocuments();
      const CategorytotalCount = await Category.countDocuments();
      const UsertotalCount = await User.countDocuments();
      const QuizQuestiontotalCount = await QuizQuestion.countDocuments();



      const resultObject = {
        message: "Dashboard fetched successfully",
        statusCode: 200,
        success: true,
        data: [
          {
            "label": "Product",
            "value": ProducttotalCount,
            "bgColor":"linear-gradient(180deg, #2af598 0%, #009efd 100%)"
          },
          {
            "label": "Category",
            "value": CategorytotalCount,
            "bgColor":"linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"
          },
          {
            "label": "Users",
            "value": UsertotalCount,
            "bgColor":"linear-gradient(120deg, #f6d365 0%, #fda085 100%)"
          },
          {
            "label": "Quiz Question",
            "value": QuizQuestiontotalCount,
            "bgColor":"linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
          }
        ],
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
}

module.exports = new dashboardService();
