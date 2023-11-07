require("dotenv").config();
const mongoose = require("mongoose");
async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected!");
  } catch (error) {
    console.log("You got an error, Database isn't connected! ");
    console.error("Error connecting to database:", error.message);
    process.exit(1);
  }
}

// mIAY0a6u1ByJsWWZ

module.exports = connectMongoDB;