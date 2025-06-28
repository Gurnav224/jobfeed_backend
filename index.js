import app from "./app.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;


async function startServer() {
 try {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
 } catch (error) {
    console.error("Error starting server:", error); 
    process.exit(1); // Exit the process with failure
 }
}

startServer();
