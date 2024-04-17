import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://pepecep13:Kegopez01@cluster0.rrjb1rd.mongodb.net/";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connect mongoDB");
  } catch (err) {
    console.log(err);
  }
};
