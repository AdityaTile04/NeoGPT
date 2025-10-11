import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./utils/dbconnection.js";
import chatRoute from "./routes/chat.route.js";
import authRoute from "./routes/auth.route.js";
dotenv.config();

const PORT = 3000;

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/api", chatRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  dbConnection();
});
