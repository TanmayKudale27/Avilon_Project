const mongoose = require("mongoose");

const connect_to_db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error", err);
  }
};

module.exports = connect_to_db;
