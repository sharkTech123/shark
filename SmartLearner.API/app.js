const express = require("express");
require("dotenv").config();
const connectDB = require("./config/database");
const errorHandler = require("./middlewares/errorHandler");
const accountRoutes = require("./routes/accountRoutes");
const roleRoutes = require("./routes/roleRoutes");
const productRoutes = require("./routes/productRoutes");
const productSpecialRoutes = require("./routes/productSpecialRoutes");
const quizRoutes = require("./routes/quizRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const serviceRoutes = require("./routes/servicesRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");
const callBackRoutes = require("./routes/callBackRoutes");
const contactRoutes = require("./routes/contactRoutes");
const drivenFormRoutes = require("./routes/drivenFormRoutes");
const orderRoutes = require("./routes/orderRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const blogRoutes = require("./routes/blogRoutes");
const notepadRoutes = require("./routes/notepadRoutes");
const openaiRoutes = require("./routes/openaiRoutes");
const chatRoutes = require("./routes/chatRoutes");
const onboardingRoutes = require('./routes/onboardingRoutes');
const homePageRoutes = require("./routes/homePageRoutes");
const manualCoursePageRoutes = require("./routes/manualCoursePageRoutes");

const http = require("http");
const { Server } = require("socket.io");
const chatSocket = require("./socket/chatSocket");

const path = require("path");

const cors = require("cors");


const app = express();
connectDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());



app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
});
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/uploads", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/static/no_image_found.jpg"));
});
app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/api/account", accountRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/product", productRoutes);
app.use("/api/productSpecial", productSpecialRoutes);
app.use("/api/serviceForm", serviceRoutes);
app.use("/api/enquiryForm", enquiryRoutes);
app.use("/api/callbackForm", callBackRoutes);
app.use("/api/contactForm", contactRoutes);
app.use("/api/drivenForm", drivenFormRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/subscription", subscriptionRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/notepad", notepadRoutes);
app.use('/api/onboarding', onboardingRoutes);


app.use("/api/chatbot", openaiRoutes);
app.use("/api/chat-all", chatRoutes);

app.use("/api/home", homePageRoutes);
app.use("/api/manual-course-page", manualCoursePageRoutes);



app.use(errorHandler);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // Or restrict to your frontend domain
    methods: ["GET", "POST"],
  },
});
chatSocket(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, "127.0.0.1", () => {
  console.log(`server is running ${PORT}`);
});

module.exports = app;
