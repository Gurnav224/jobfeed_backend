import express from "express";
import jobRoutes from "./routes/job.routes.js";
import cors from "cors";
import morgan from "morgan";


const app = express();

app.use(cors({
    origin:"*",
    optionsSuccessStatus: 200
}));


app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/v1", jobRoutes);

export default app;