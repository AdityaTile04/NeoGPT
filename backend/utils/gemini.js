import dotenv from "dotenv";
dotenv.config();

export const geminiResponse = async (message) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": process.env.GEMINI_API_KEY,
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: message }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 512,
        temperature: 0.7,
      },
    }),
  };

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      options
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};
