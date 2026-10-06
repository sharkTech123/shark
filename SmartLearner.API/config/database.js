const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://aman262020:aman262020@atlascluster.vtp8b.mongodb.net/SmartLearnerDB?retryWrites=true&w=majority&appName=AtlasCluster"
    );
    console.log("MongoDB is running");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
