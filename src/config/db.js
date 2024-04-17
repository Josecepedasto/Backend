import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://pepecep113:im_#U3grg4fHG!B@cluster0.weo6nu4.mongodb.net/";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connect mongoDB");
  } catch (err) {
    console.log(err);
  }
};
