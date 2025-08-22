import express from "express";
import { testController } from "../controllers/chat.controller.js";

const router = express.Router();

router.post("/test", testController);

export default router;
