import mongoose from "mongoose";
const connectToDatabase = async () => {
  try {
    const dbURI = process.env.DATABASE_URI;
    if (!dbURI) {
      throw new Error("DATABASE_URI is not defined in .env file");
    }
    await mongoose.connect(dbURI);
    console.log("Databse Connected");
  } catch (error) {
    console.log("MongoDb Connection Failed!", error);
  }
};

export default connectToDatabase;
