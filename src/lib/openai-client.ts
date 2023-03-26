import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});

export const openai = new OpenAIApi(configuration);
