import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://pepecep13:kegopez01@cluster0.rrjb1rd.mongodb.net/login";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connect mongoDB");
  } catch (err) {
    console.log(err);
  }
};
