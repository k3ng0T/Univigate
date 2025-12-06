/**
 * Локальный сервер-прокси для Gemini (Google Generative AI).
 * Читает ключ из data/.env (GEMINI_KEY=...).
 * Эндпоинт: POST /api/chat { prompt?: string, messages?: [{role: "user"|"assistant", content: string}] }
 */

const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "data", ".env") });

const GEMINI_KEY = process.env.GEMINI_KEY;
const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.0-flash";

if (!GEMINI_KEY) {
  throw new Error("GEMINI_KEY не найден. Добавьте его в data/.env");
}

const app = express();
const PORT = process.env.PORT || 3001;
const PAGES_DIR = path.join(__dirname);

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.static(PAGES_DIR));

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/", (_req, res) => {
  res.sendFile(path.join(PAGES_DIR, "index.html"));
});

app.post("/api/chat", async (req, res) => {
  try {
    const { prompt, messages } = req.body || {};

    const contents =
      Array.isArray(messages) && messages.length
        ? messages.map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content || "" }],
          }))
        : [
            {
              role: "user",
              parts: [{ text: prompt || "" }],
            },
          ];

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_KEY}`;

    const fetcher =
      typeof fetch === "function"
        ? fetch
        : (await import("node-fetch")).default;

    const response = await fetcher(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents }),
    });

    if (!response.ok) {
      const err = await response.text();
      return res
        .status(response.status)
        .json({ error: "Gemini error", detail: err });
    }

    const data = await response.json();
    const text =
      data?.candidates?.[0]?.content?.parts
        ?.map((p) => p.text || "")
        .join("")
        .trim() || "";

    res.json({ text, raw: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error", detail: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Local AI server running on http://localhost:${PORT}`);
});

