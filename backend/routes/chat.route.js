import express from "express";
import {
  chat,
  deleteThread,
  getAllThreads,
  getSingleThread,
} from "../controllers/chat.controller.js";

const router = express.Router();

router.get("/thread", getAllThreads);
router.get("/thread/:threadId", getSingleThread);
router.delete("/thread/:threadId", deleteThread);
router.post("/chat", chat);

export default router;
