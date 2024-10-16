import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import fileRoute from "./routes/fileRoute.js"
import cors from "cors";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: ['https://firestore-peach.vercel.app'], // Replace this with your actual frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
  }));
app.use(express.json());

connectDB();

app.use("/api/files", fileRoute);

app.listen(PORT, () => {
    console.log(`Server is started to running on ${PORT}`);
})