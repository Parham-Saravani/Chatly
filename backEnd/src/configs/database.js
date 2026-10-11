import mongoose from "mongoose";
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Databse Connected");
  } catch (error) {
    console.log("MongoDb Connection Failed!", error);
  }
};

export default connectToDatabase;