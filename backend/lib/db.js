import mongoose from "mongoose";

// Function to connect to the MongoDb database

export const connectDB = async()=>{
  try {

    mongoose.connection.on('connected', ()=> console.log('Database Connected'));
    await mongoose.connect(`${process.env.MONGODB_URI}/chatappdb`)
    
  } catch (error) {
    console.log(error);
    
  }
}