import mongoose from "mongoose";

export async function connectDb(){
  try {
      const connection =  await mongoose.connect(process.env.MONGO_URI)
     console.log("MongoDB is connected Successfully")

  } catch (error) {
     console.log(error.message)
  }
}

