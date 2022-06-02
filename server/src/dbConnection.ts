import mongoose from "mongoose";
import { URL } from "./constants";

const connectToDb = async () => {
  await mongoose.connect(URL);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
};

connectToDb();
