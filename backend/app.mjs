import express from "express";
import router from "./routes/index.mjs";
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config();
const app = express();

//middleware
app.use(cors({ credentials:true, origin:"http://localhost:3000" }))
app.use(express.json())
app.use(cookieParser())
app.use(router)

// server
app.listen(5000, ()=> console.log('connected on port 5000...'))