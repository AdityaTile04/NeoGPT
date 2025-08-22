import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./utils/dbconnection.js";
import chatRoute from "./routes/chat.route.js";
dotenv.config();

const PORT = 3000;

const app = express();

app.use(express.json());
app.use("/api", chatRoute);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
