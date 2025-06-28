    import mongoose from 'mongoose';


 const connectDB = async () => {
  try {

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI,{dbName: "job_portal"});

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit the process with failure
  }
}

export default connectDB;