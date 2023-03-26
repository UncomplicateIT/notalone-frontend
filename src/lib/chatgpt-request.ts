import type { CreateChatCompletionResponse } from "openai";

import { prompts } from "./prompts";

export type PromptType = keyof typeof prompts;

export const chatGPTRequest = async (query: string, type: PromptType) => {
  let data = "";
  let error = "";
  try {
    const response = await fetch("/api/chatgpt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        query,
        type,
      }),
    });
    const responseData: CreateChatCompletionResponse = await response.json();
    data = responseData.choices[0].message?.content ?? "";
  } catch (err) {
    const _e = err as { message: string };
    console.log(err);
    error = _e.message;
  }

  return [data, error] as const;
};
