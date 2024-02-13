const mongoose = require("mongoose");

const ConnectionString =
  "mongodb+srv://kabitajoshi:lovefamily100@mernbasics.agpflda.mongodb.net/?retryWrites=true&w=majority";

async function connectToDatabase() {
  await mongoose.connect(ConnectionString);
  console.log("connected to DB sucessfully");
}
module.exports = connectToDatabase;
