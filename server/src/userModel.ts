import mongoose from "mongoose";

let nameSchema = new mongoose.Schema({
  username: String,
  status: {
    type: Boolean,
    default: true,
  },
});

let User = mongoose.model("User", nameSchema);

export { User };
