const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://crce9896ce:nhiOXJRuDEX4lgWH@cluster0.ab35p.mongodb.net/Sarihar_Sath?retryWrites=true&w=majority&appName=Cluster0";
// nhiOXJRuDEX4lgWH
const mongodb = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    const fetched_data = mongoose.connection.db.collection("items");
    const data = await fetched_data.find({}).toArray();
    console.log();
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongodb;
