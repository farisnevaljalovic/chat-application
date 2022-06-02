import mongoose from "mongoose";

let nameSchema = new mongoose.Schema({
  username: String,
  text: String,
  time: String,
});

let Message = mongoose.model("Message", nameSchema);

export { Message };
