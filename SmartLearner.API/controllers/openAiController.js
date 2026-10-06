const { OpenAI } = require("openai");
const User = require("../models/userModel");
const Paypalorder = require("../models/paypalOrderModel");
const UserSubscription = require("../models/subscriptionModal");
const Product = require("../models/productModel");
const Category = require("../models/categoryModel");
const Plans = require("../models/planUserModel");
const BotChatMessage = require("../models/botChatMessage");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});
const sessionMemory = {};

const saveMessage = async ({
  sessionId,
  sender,
  joinAs,
  pass,
  login,
  content,
}) => {
  try {
    await BotChatMessage.create({
      sessionId,
      sender,
      joinAs,
      pass,
      login,
      content,
    });
  } catch (err) {
    console.error("Error saving chat message:", err);
  }
};

const chatbot = async (req, res) => {
  const { sessionId, message } = req.body;

  console.log("sduhaiu", sessionId, message);
  await saveMessage({
    sessionId,
    sender: "user",

    content: message,
  });

  if (!sessionMemory[sessionId]) {
    // ✅ Check DB for past email submission in this session
    const prev = await BotChatMessage.find({ sessionId });
    const emailMsg = prev.find((m) => m.sender === "user");

    if (emailMsg) {
      sessionMemory[sessionId] = {
        step: "guest",
        user: emailMsg.content,
      };
      const replyText = `Welcome ${emailMsg.content}! to smartlearner How can I help you`;
      await saveMessage({
        sessionId,
        sender: "admin",

        content: replyText,
      });
      return res.json({
        reply: {
          message: "email submitted successfully",
          statusCode: 200,

          email: emailMsg.content,
          success: true,
          data: replyText,
        },
      });
    }
  }

  if (
    message.toLowerCase().includes("my subscription") ||
    message.toLowerCase().includes("purchased packages")
  ) {
    let data = `You can check your Subscription here:\n🔗<a href="https://smartlearner.com/my-account" target="_blank">Click Here</a>`;

    await saveMessage({ sessionId, sender: "admin", content: data });
    return res.json({
      reply: {
        message: "reply successfully",
        statusCode: 201,
        success: true,

        data: data,
      },
    });
  }

  if (
    message.toLowerCase().includes("my purchases") ||
    message.toLowerCase().includes("my orders") ||
    message.toLowerCase().includes("order history") ||
    message.toLowerCase().includes("purchased products")
  ) {
    let data = `You can check your order here:\n🔗<a href="https://smartlearner.com/my-account" target="_blank">Click Here</a>`;

    await saveMessage({ sessionId, sender: "admin", content: data });
    return res.json({
      reply: {
        message: "reply successfully",
        statusCode: 201,
        success: true,

        data: data,
      },
    });
  }
  // Check if user is asking about products

  if (
    message.toLowerCase().includes("quiz results") ||
    message.toLowerCase().includes("weak")
  ) {
    let data = `You can check your quiz results here:\n🔗<a href="https://smartlearner.com/quizResult" target="_blank">Click Here</a>`;

    await saveMessage({ sessionId, sender: "admin", content: data });
    return res.json({
      reply: {
        message: "reply successfully",
        statusCode: 201,
        success: true,

        data: data,
      },
    });
  }

  if (
    message.toLowerCase().includes("driving instructing") ||
    message.toLowerCase().includes("driving instructor") ||
    message.toLowerCase().includes("pdi portal") ||
    message.toLowerCase().includes("pdi") ||
    message.toLowerCase().includes("Adi")
  ) {
    try {
      const categories = await Plans.find({ subCat: "pdi" });
      let data;
      if (!categories.length) {
        data = "No product categories are available at the moment.";
      } else {
        const categoryList = categories
          .map((cat, index) => {
            let link = "";
            let para = "";
            const planNameLower = cat.planname;

            if (planNameLower.includes("PDI Complete Package")) {
              link =
                "https://smartlearner.com/driving-instructor-training-full-course";
            } else if (planNameLower.includes("PDI Part One")) {
              link =
                "https://smartlearner.com/driving-instructor-training-part-one";
              para =
                "SmartLearners’ Part 1 training module offers in-depth theory training for trainee driving instructors, featuring comprehensive study materials, mock tests, and a bonus quiz with exclusive, never-before-seen questions to boost confidence and readiness for the ADI Part 1 exam. ";
            } else if (planNameLower.includes("PDI Part Two")) {
              link =
                "https://smartlearner.com/driving-instructor-training-part-two";
              para =
                "SmartLearners’ Part 2 training module provides detailed guidance on advanced driving skills, including commentary driving, manoeuvres, and mock tests tricks and more ";
            } else if (planNameLower.includes("PDI Part Three")) {
              link =
                "https://smartlearner.com/driving-instructor-training-part-three";
              para =
                "SmartLearners’ Part 3 training module delivers expert instruction on teaching techniques, lesson planning, and core competencies. With clear guidance and structured support, it helps trainee instructors develop the skills needed to confidently plan and deliver effective driving lessons for the ADI exam.";
            }

            return `\n${index + 1}. <b>${cat.planname} * ${cat.price}</b>
            ${
              link
                ? `\n🔗<a href="${link}" target="_blank">Get Access</a>\n`
                : ""
            }  ${para ? `\n ${para}` : ""}`;
          })
          .join("\n");
        data = `🛍️ SmartLearners' PDI training portal is an online platform offering interactive lessons, resources, and tools to help trainee driving instructors develop their skills. Accessible across devices, it supports self-paced learning with structured modules tailored to prepare for the ADI qualification. You can become a driving instructor by clicking on these links  :\n${categoryList}\n You can also Checkout our premium products here:\n \n<a href="https://smartlearner.com/driving-instructor-packages/instructor-packages" target="_blank">Click here</a>`;
      }

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (err) {
      console.error("Error fetching categories:", err);
      return res.status(500).json({
        reply: {
          message: "Internal server error",
          statusCode: 500,
          success: false,
          data: "Something went wrong while fetching categories. Please try again later.",
        },
      });
    }
  }

  //
  if (
    message.toLowerCase().includes("theory portal") ||
    message.toLowerCase().includes("theory packages") ||
    message.toLowerCase().includes("theory package") ||
    message.toLowerCase().includes("theory training") ||
    message.toLowerCase().includes("theory subscription")
  ) {
    try {
      const categories = await Plans.find({ subCat: "theory" });

      let data;

      if (!categories.length) {
        data = "No packages are available at the moment.";
      } else {
        const categoryList = categories
          .map((cat, index) => {
            let link = "";
            let para = "";
            const planNameLower = cat.planname;

            if (
              planNameLower.includes("Lifetime Theory Portal Access £30.00")
            ) {
              link = "https://smartlearner.com/Theory-subscription";
              para =
                "SmartLearners’ learner theory portal offers comprehensive theory test preparation with interactive lessons, practice questions, and hazard perception clips. It features multilingual voiceovers, making learning accessible and engaging for all learners, regardless of their preferred language or background.";
            }

            return `${index + 1}. ${cat.planname} * ${cat.price}${
              link ? `\n🔗<a href="${link}" target="_blank">Get access</a>` : ""
            } ${para ? `\n ${para}` : ""}`;
          })
          .join("\n");
        data = `🛍️ Here are the available packages categories:\n\n${categoryList}\n\n`;
      }

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (err) {
      console.error("Error fetching categories:", err);
      return res.status(500).json({
        reply: {
          message: "Internal server error",
          statusCode: 500,
          success: false,
          data: "Something went wrong while fetching categories. Please try again later.",
        },
      });
    }
  }

  // CATEGORY-BASED PRODUCT SEARCH

  if (
    message.toLowerCase().includes("offers automatic") ||
    message.toLowerCase().includes("manual") ||
    message.toLowerCase().includes("offers manual") ||
    message.toLowerCase().includes("pass plus") ||
    message.toLowerCase().includes("theory support") ||
    message.toLowerCase().includes("automatic") ||
    message.toLowerCase().includes("intensive") ||
    message.toLowerCase().includes("workshop") ||
    message.toLowerCase().includes("instructor training part one") ||
    message.toLowerCase().includes("instructor training part two")
  ) {
    const categories = await Category.find({ isDeleted: false });

    const matchedCategory = categories.find((cat) =>
      message.toLowerCase().includes(cat.name.toLowerCase())
    );
    let data;

    if (!matchedCategory) {
      data = `Sorry, we couldn't find any category matching "${message}".`;
    } else {
      const products = await Product.find({
        category: matchedCategory._id,
        isDeleted: false,
      });

      if (!products.length) {
        data = `There are no products currently available in the "${matchedCategory.name}" category.`;
      } else {
        const productList = products.map((product, index) => ({
          id: product._id,
          name: product.name,
          price: product.price,
          index,
        }));

        data = {
          type: "productList",
          category: matchedCategory.name,
          products: productList,
        };
      }
    }

    await saveMessage({ sessionId, sender: "admin", content: data });

    return res.json({
      reply: {
        message: "reply successfully",
        statusCode: 201,
        success: true,
        data: data,
      },
    });
  }
  //////////////////////////////////////////////
  // ✅ New block: Show all available products if message includes "products"
  if (
    message.toLowerCase().includes("products") ||
    message.toLowerCase().includes("product") ||
    message.toLowerCase().includes("book lesson") ||
    message.toLowerCase().includes("book a lesson") ||
    message.toLowerCase().includes("driving lesson") ||
    message.toLowerCase().includes("driving lessons") ||
    message.toLowerCase().includes("what do you offer") ||
    message.toLowerCase().includes("what are price") ||
    message.toLowerCase().includes("what are prices") ||
    message.toLowerCase().includes("how much is cost") ||
    message.toLowerCase().includes("how much is price")
  ) {
    try {
      const data = `Here are our available lessons categories please choose and search which lesson you want to book and also you can visit through links also:
\n • Theory support - <a href="https://smartlearner.com/Theory-Support/Theory-package" >visit now</a>
• Automatic - <a href="https://smartlearner.com/automatic-transmisson" >visit now</a>
• Manual - <a href="https://smartlearner.com/manual" >visit now</a>
• Pass plus - <a href="https://smartlearner.com/pass-plus" >visit now</a> 
• Intensive - <a href="https://smartlearner.com/intensive" >visit now</a>
• Instructor training part one - <a href="https://smartlearner.com/driving-instructor-packages" >visit now</a>
• Instructor training part two - <a href="https://smartlearner.com/driving-instructor-packages" >visit now</a>
• Instructor training part three - <a href="https://smartlearner.com/driving-instructor-packages" >visit now</a>
• Workshop - <a href="https://smartlearner.com/driving-instructor-packages" >visit now</a>`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }

  // ////////////////////////////////////////
  // ////////////////////////////////////////////
  if (
    message.toLowerCase().includes("pass my theory before starting lesson") ||
    message.toLowerCase().includes("pass my theory")
  ) {
    try {
      let data = "Yes you have to pass theory before starting lesson";

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }

  // ////////////////////////////////////////////
  if (message.toLowerCase().includes("next availability")) {
    try {
      let data =
        "if you to connect to alive agent they can support you with availability with your local instructor";

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  // ////////////////////////////////////////////
  if (message.toLowerCase().includes("pass theory before")) {
    try {
      let data =
        "No you don’t not need to pass theory first, sometimes doing both together helps your learning process. You will need to pass your theory before you can book your practical test though.";

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  /////////////////////////////////////////

  if (
    message.toLowerCase().includes("corporate responsbilities") ||
    message.toLowerCase().includes("corporate responsbility")
  ) {
    try {
      let data =
        "Here at SmartLearner driving school it is our social responsibility to reducing our carbon footprint! Throughout 2024 and the future we plan to take steps towards becoming a sustainable and eco-friendly company.\n You can visit our page <a href='https://smartlearner.com/Corporate-Responsbilities' target='_blank'>Click Here</a>";

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }

  if (
    message.toLowerCase().includes("electric car scheme") ||
    message.toLowerCase().includes("electric car")
  ) {
    try {
      let data =
        "Here at SmartLearner Driving school we are committed to reducing our carbon footprint! Throughout 2024 and the future, we continuously strive to become an even more sustainable and eco-friendly company.\n You can visit our page <a href='https://smartlearner.com/Electric-Car-Scheme' target='_blank'>Click Here</a>";

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  if (
    message.toLowerCase().includes("going green project") ||
    message.toLowerCase().includes("going green")
  ) {
    try {
      let data =
        "SmartLearner Driving School champions environmental sustainability. Through our Going Green Project, we inspire eco-conscious driving and advocate for environmental preservation through tree planting and education. Committed to reducing our carbon footprint, we continuously strive to become a sustainable and eco-friendly company.\n You can visit our page <a href='https://smartlearner.com/Going-Green-Project' target='_blank'>Click Here</a>";

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  if (
    message.toLowerCase().includes("communities champions") ||
    message.toLowerCase().includes("community champion")
  ) {
    try {
      let data =
        "The local school for local people Winners of Intelligent Instructors Awards 2023 & 2024 'Community Champion Of The Year'\n You can visit our page <a href='https://smartlearner.com/Communities-Champions' target='_blank'>Click Here</a>";

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  if (
    message.toLowerCase().includes("We proudly support") ||
    message.toLowerCase().includes("partnership") ||
    message.toLowerCase().includes("in partnership with") ||
    message.toLowerCase().includes("our partner") ||
    message.toLowerCase().includes("partners") ||
    message.toLowerCase().includes("our partners") ||
    message.toLowerCase().includes("our partnership with") ||
    message.toLowerCase().includes("partnership with") ||
    message.toLowerCase().includes("support with")
  ) {
    try {
      let data =
        " You can visit our page <a href='https://smartlearner.com/We-Proudly-Support' target='_blank'>Click Here</a>";

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  if (
    message.toLowerCase().includes("go cv") ||
    message.toLowerCase().includes("go cv partnership") ||
    message.toLowerCase().includes("cv partnership") ||
    message.toLowerCase().includes("go cv partners") ||
    message.toLowerCase().includes("go cv partner") ||
    message.toLowerCase().includes("in collaboration with")
  ) {
    try {
      let data =
        "SmartLearner Driving School regularly sponsors and partners with GO CV to support events and attractions for underprivileged individuals and families in coventry.\n You can visit our page <a href='https://smartlearner.com/Go-Cv' target='_blank'>Click Here</a>";

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  if (
    message.toLowerCase().includes("our office green") ||
    message.toLowerCase().includes("green efforts") ||
    message.toLowerCase().includes("office green efforts")
  ) {
    try {
      let data =
        "Here at Smart Learner driving school we are committed to reducing our carbon footprint! We plan to take steps towards becoming a more sustainable and eco-friendly company.\n You can visit our page <a href='https://smartlearner.com/Our-Office-Green-Efforts' target='_blank'>Click Here</a>";

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  if (message.toLowerCase().includes("honest truth")) {
    try {
      let data =
        "SmartLearner have teamed up with First car on their 'The Honest Truth' campaign to help deliver their road safety project across the West MidLands and Warwickshire!\n You can visit our page <a href='https://smartlearner.com/The-Honest-Truth' target='_blank'>Click Here</a>";

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }

  if (
    message.toLowerCase().includes("terms and conditions") ||
    message.toLowerCase().includes("term and condition") ||
    message.toLowerCase().includes("term and conditions") ||
    message.toLowerCase().includes("terms and condition") ||
    message.toLowerCase().includes("t&c")
  ) {
    try {
      let data =
        "Welcome to our Terms and Conditions page. \n You can visit our page <a href='https://smartlearner.com/term-and-condition' target='_blank'>Click Here</a>";

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  /////////////////////////////////////////////
  ///////////////////////////////////////////
  /////////////////////////////////

  // =================================================
  if (
    message.toLowerCase().includes("intensive course practical test") ||
    message.toLowerCase().includes("practical test")
  ) {
    try {
      let data = "We offer both options, with and without a practical test!";

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  ////////////////////////////////////////////////
  if (message.toLowerCase().includes("license requirement")) {
    try {
      let data =
        "You must have either a valid provisional licence, a full driving license or an international licence that is valid for UK roads";

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  // ================================================
  if (
    message.toLowerCase().includes("how to make a payment") ||
    message.toLowerCase().includes("payment") ||
    message.toLowerCase().includes("how to pay") ||
    message.toLowerCase().includes("how do i pay") ||
    message.toLowerCase().includes("how do pay") ||
    message.toLowerCase().includes("pay for lesson")
  ) {
    try {
      let data = `Click on any lesson or package to go directly to the checkout page.\n Click “Proceed to Checkout”, enter your billing details, and then click “Checkout”. \n You can complete your payment securely using PayPal or Revolut with your card details. \n Need help? Click the “Live Chat Agent” button.`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  /////////////////////////////////////////////

  if (
    message.toLowerCase().includes("change my lesson") ||
    message.toLowerCase().includes("change lesson")
  ) {
    try {
      let data = `You can contact your instructor directly, call our office on 02475092784 or connect to an agent via live chat `;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }

  ////////////////////////////////////////////
  if (
    message.toLowerCase().includes("book driving test") ||
    message.toLowerCase().includes("help book driving")
  ) {
    try {
      let data = `If you are learning with us we can help you look for a test date `;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  ///////////////////////////////////////////
  if (
    message.toLowerCase().includes("discount") ||
    message.toLowerCase().includes("discounts")
  ) {
    try {
      let data = `We offer bulk buy discounts and beginners discounts. You can view our packages here: \n • Theory support - <a href="https://smartlearner.com/Theory-Support/Theory-package" >visit now</a>
• Automatic - <a href="https://smartlearner.com/automatic-transmisson" >visit now</a>
• Manual - <a href="https://smartlearner.com/manual" >visit now</a>
• Pass plus - <a href="https://smartlearner.com/pass-plus" >visit now</a> 
• Intensive - <a href="https://smartlearner.com/intensive" >visit now</a>
• Instructor training part one - <a href="https://smartlearner.com/driving-instructor-packages" >visit now</a>
• Instructor training part two - <a href="https://smartlearner.com/driving-instructor-packages" >visit now</a>
• Instructor training part three - <a href="https://smartlearner.com/driving-instructor-packages" >visit now</a>
• Workshop - <a href="https://smartlearner.com/driving-instructor-packages" >visit now</a>`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  ////////////////////////////////////////////////
  // if (
  //   message
  //     .toLowerCase()
  //     .includes("What happens after I have paid for my lesson")
  // ) {
  //   try {
  //     let data = `A notice will be sent to our team with your contact details to get in touchwith you as soon as possible. Please look out for any calls or emails.`;

  //     await saveMessage({ sessionId, sender: "admin", content: data });

  //     return res.json({
  //       reply: {
  //         message: "reply successfully",
  //         statusCode: 201,
  //         success: true,
  //         data: data,
  //       },
  //     });
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //     return res.status(500).json({
  //       reply: {
  //         message: "Server error while fetching products.",
  //         statusCode: 500,
  //         success: false,
  //         data: null,
  //       },
  //     });
  //   }
  // }
  ////////////////////////////////////////////////
  if (
    message.toLowerCase().includes("refund policy") ||
    message.toLowerCase().includes("refund") ||
    message.toLowerCase().includes("cancellation policy")
  ) {
    try {
      let data = `If you cancel your lesson within 24 hours to its time, you will be charged at full rate. \n All packages have a 6-month validity period, after this, any unused prepaid hours are invalidated. \n Intensive courses are nonrefundable within 7 days of its start date \n Beginners package is nonrefundable 
 If you are seeking a refund of a block package, the lessons taken will be charged at the full hourly rate and any remainder will be refunded back to the client \n Admin fee for tests and service fee is nonrefundable`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  // ===============================================
  if (
    message.toLowerCase().includes("Cant log in ") ||
    message.toLowerCase().includes("unable to login")
  ) {
    try {
      let data = `We are sorry to hear you are having trouble logging in,\n please email our team at <a href="mailto:admin@smartlearner.com" target="_blank">admin@smartlearner.com</a>  with the email you used to sign up with and any information you can provide and they will look into this for you`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  ///////////////////////////////////////////////
  if (message.toLowerCase().includes("taster session")) {
    try {
      let data = `The taster session is for a student's first lesson only, it is a 1.5 hour lesson to get a feel for driving, the instructor, and the car. \n This can only be used once per person and, only for the first lesson`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  ///////////////////////////////////////////////
  if (message.toLowerCase().includes("Reset Password")) {
    try {
      let data = `We are sorry to hear you are having trouble logging in, \n please email our team at <a href="mailto:admin@smartlearner.com" target="_blank">admin@smartlearner.com</a> with the email you used to sign up with and any information you can provide and they will look into this for you`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  ///////////////////////////////////////////////
  if (message.toLowerCase().includes("beginners package")) {
    try {
      let data = `The beginners package is designed for students with NO previous driving experience. Covering the basics of moving off and stopping.  \n The lesson structure is: \n 2 x 1.5 hours lessons 
\n 2 hours saved for the date of your practical test when you are ready to go. \n The idea is it covers the first two lessons you take and hopefully the last two hours you take.`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  ///////////////////////////////////////////////
  if (
    message.toLowerCase().includes("my instructor has not turned up") ||
    message.toLowerCase().includes("instructor not come")
  ) {
    try {
      let data = `If your instructor has not turned up, please wait 5-10 minutes, they may be stuck in traffic, or may have had their prior lesson overlap onto yours. If they have not turned up after 5-10 minutes after your lesson start time, call or contact them if you have their number. If they have not picked up and are not available, please call us on 02475092784 or email us at <a href="mailto:admin@smartlearner.com" target="_blank">admin@smartlearner.com</a> for us to provide support.`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  ///////////////////////////////////////////////
  if (
    message.toLowerCase().includes("instructor cancelled on me") ||
    message.toLowerCase().includes("instructor cancelled")
  ) {
    try {
      let data = `We are sorry to hear your instructor has cancelled, we assure you this would not be without good reason. You can contact your instructor directly to rebook or contact our office on 02475092784 or email us at <a href="mailto:admin@smartlearner.com" target="_blank">admin@smartlearner.com</a>
`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }

  ////////////////////////////////////////////////////
  if (
    message.toLowerCase().includes("contact you") ||
    message.toLowerCase().includes("how to contact")
  ) {
    try {
      let data = `Please visit our page here: <a href='https://smartlearner.com/Contact-Us' target='_blank'>Click Here</a>`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  ////////////////////////////////////////////////////
  if (message.toLowerCase().includes("join smartlearner")) {
    try {
      let data = `That’s great to hear, visit our franchise page here: <a href='https://smartlearner.com/Driving-Instructor-Franchise' target='_blank'>Click Here</a> or give our office a call on +44 02475092784`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }

  // ///////////////////////////////////////////////
  if (
    message.toLowerCase().includes("contact instructor") ||
    message.toLowerCase().includes("contact my instructor")
  ) {
    try {
      let data = `After booking your first lesson your instructor should be in touch with you directly. If you have any concerns in the meantime, you can contact SmartLearner office on 02475092784`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  // /////////////////////////////////////////////////////
  if (
    message.toLowerCase().includes("help with theory") ||
    message.toLowerCase().includes("help in theory") ||
    message.toLowerCase().includes("theory help")
  ) {
    try {
      let data = `Smartlearner offers a range of support to pass your theory test, whether this be online or one to one sessions`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  // ////////////////////////////////////////////////////////////
  if (
    message.toLowerCase().includes("what is pass plus") ||
    message.toLowerCase().includes("is pass plus")
  ) {
    try {
      let data = `Pass plus is a 6 hour course designed to further improve your road safety and knowledge after passing your practical exam. This includes areas such as motorway driving, night driving, city driving and more`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  // //////////////////////////////////////////////////////
  if (
    message.toLowerCase().includes("make a complaint") ||
    message.toLowerCase().includes("make complaint")
  ) {
    try {
      let data = `We are sorry to hear you want to make a complaint. You can file an official complaint by emailing <a href="mailto:admin@smartlearner.com" target="_blank">admin@smartlearner.com</a>`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }

  // ======================================
  if (
    message.toLowerCase().includes("privilege card") ||
    message.toLowerCase().includes("privilege cards")
  ) {
    try {
      let data = `The SmartLearner privilege card is special to students learning with us giving you discounts at a number of local businesses! Speak to your instructor to ensure you get yours.`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  // ============================================
  if (
    message.toLowerCase().includes("what is franchise") ||
    message.toLowerCase().includes("instructor franchise")
  ) {
    try {
      let data = `Smartlearner offers both a part time and full time franchise. For more information contact us on 02475092784 and vist our page <a href='https://smartlearner.com/Driving-Instructor-Franchise' target='_blank'>Click Here</a> `;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  // ============================================
  if (
    message.toLowerCase().includes("how much is franchise") ||
    message.toLowerCase().includes("much is franchise ")
  ) {
    try {
      let data = `We offer franchise options both part time and full time with car lease or with your own car. Contact us on 02475092784 to discuss your options `;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  // ============================================
  if (
    message.toLowerCase().includes("my instructor charged") ||
    message.toLowerCase().includes("instructor charged")
  ) {
    try {
      let data = `We do have a 24 hour cancellation policy in place for all lessons to help protect our instructors. You can view this policy on our terms and conditions <a href='https://smartlearner.com/term-and-condition' target='_blank'>Click Here</a> `;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  //////////////////////////////////////////////////
  if (
    message.toLowerCase().includes("thanks") ||
    message.toLowerCase().includes("thank you") ||
    message.toLowerCase().includes("thanku") ||
    message.toLowerCase().includes("thankyou")
  ) {
    try {
      let data = `Most welcome We here to help you`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  // =======================================
  if (
    message.toLowerCase().includes("intensive course test") ||
    message.toLowerCase().includes("intensive include test") ||
    message.toLowerCase().includes("intensive course include test") ||
    message.toLowerCase().includes("intensive test")
  ) {
    try {
      let data = `Our intensive courses are priced with a driving exam included. If you already have a test booked, please contact the SmartLearner office on 02475092784 for additional pricing`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  // ==================================
  ///////////////////////////////////////////////
  if (message.toLowerCase().includes("simulator lessons")) {
    try {
      let data = `SmartLearner’s Virtual reality driving simulator is the one of a kind experience in the UK, based in our office in Coventry, learners from across England come to use the simulator whether to improve their skills or boost their confidence. Starting from ONLY £10 per hour, learners can cut prices and develop a plethora of different skills in a safe and controlled environment.`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  // ====================================
  ///////////////////////////////////////////////
  if (message.toLowerCase().includes("cancel my lesson")) {
    try {
      let data = `Please bare in mind that cancelling your scheduled driving lesson outside 24 hours will potential include a lesson cancellation fee for the full price of the lesson you have booked. To avoid this cancellation fee, ensure you have made your instructor aware of the cancellation, before 24 hours. If you do not have your instructor’s contact details, please inform us on 02475092784 or email us at <a href="mailto:admin@smartlearner.com" target="_blank">admin@smartlearner.com</a>.`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  ///////////////////////////////////////////////
  if (message.toLowerCase().includes("apply for a theory test")) {
    try {
      let data = `You must have a valid provisional licence, and must have lived in England, Wales or Scotland for at least 185 days in the last 12 months before the day you take your theory or driving test. Car and motorcycle tests cost £23. You can apply for a theory test by going onto the GOV.UK - ( https://www.gov.uk/book-theory-test ) website and book a date and time that suits you to take the test in your local city.`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  ///////////////////////////////////////////////
  if (message.toLowerCase().includes("practical driving test")) {
    try {
      let data = `The driving test costs £62. Booking during - Evenings, weekends and bank holidays are £75.`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  ///////////////////////////////////////////////
  if (message.toLowerCase().includes("postcode")) {
    try {
      let data = `We cover the following Postcodes: CV1, CV2, CV3, CV4, CV5, CV6, CV7, CV8, CV9, CV10, CV11, CV12, CV21 CV22, CV23, CV31, CV32, CV33, CV34, CV35, B26, LE17. To confirm or for Other postcodes - please call us at 02475092784 or email us at <a href="mailto:admin@smartlearner.com" target="_blank">admin@smartlearner.com</a> .`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  ///////////////////////////////////////////////
  if (message.toLowerCase().includes("driving licence")) {
    try {
      let data = `1. Apply for your provisional licence here. \n
2. Pass your Theory test with us! Learn more.\n
3. Take manual or automatic lessons here. \n
4. Pass your driving test!`;

      await saveMessage({ sessionId, sender: "admin", content: data });

      return res.json({
        reply: {
          message: "reply successfully",
          statusCode: 201,
          success: true,
          data: data,
        },
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      return res.status(500).json({
        reply: {
          message: "Server error while fetching products.",
          statusCode: 500,
          success: false,
          data: null,
        },
      });
    }
  }
  ///////////////////////////////////////////////

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "GPT‑3.5 Turbo", // fallback if no GPT-4 access
    });
    const responseText = completion.choices[0].message.content;

    await saveMessage({ sessionId, sender: "admin", content: responseText });

    res.json({ reply: responseText });
  } catch (err) {
    console.log("Error", err.stack || err);
    if (err.status === 429) {
      const data =
        "You've reached the usage limit for now. Please try again later or check your OpenAI billing settings.";
      await saveMessage({ sessionId, sender: "admin", content: data });
      return res.json({ reply: data });
    }
    console.error(err);

    if (err.status === 500) {
      const data =
        "SmartBot does not have knowledge about it please connect to live chat";
      await saveMessage({ sessionId, sender: "admin", content: data });
      return res.json({ reply: { data } });
    }
    if (err.status === 401) {
      const data =
        "SmartBot does not have knowledge about it please connect to live chat";
      await saveMessage({ sessionId, sender: "admin", content: data });
      return res.json({ reply: { data } });
    }
  }
};

module.exports = { chatbot };
