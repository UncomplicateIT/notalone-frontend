import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { openai } from "../../lib/openai-client";
import { prompts } from "../../lib/prompts";

const inputSchema = z.object({
  query: z.string(),
  type: z.enum([
    "chat",
    "continue",
    "rewrite",
    "simplify",
    "summarize",
    "explain",
    "grammar",
    "synonym",
  ]),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const userInput = inputSchema.safeParse(req.body);

  if (!userInput.success)
    return res.status(400).json({ message: userInput.error.format() });

  const userData = userInput.data;
  const promptData = prompts[userData.type];
  promptData.push({ role: "user", content: userData.query });

  try {
    const openaiRes = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      n: 1,
      max_tokens: 512,
      messages: promptData,
    });

    if (openaiRes.status !== 200) {
      res.status(openaiRes.status).json({ message: openaiRes.statusText });
    }

    res.status(openaiRes.status).json({ ...openaiRes.data });
  } catch (err: any) {
    if (err.response) {
      console.log(err.response.status);
      console.log(err.response.data);
      res.status(500).json({ message: "Internal server error" });
    } else {
      console.log(err.message);
    }
  }
}
