import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-001",
    contents: "Best programming language to learn in 2025",
  });
  console.log(response.text);
}

main();
