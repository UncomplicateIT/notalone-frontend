import type { ChatCompletionRequestMessage } from "openai";

interface PromptType {
  chat: ChatCompletionRequestMessage[];
  continue: ChatCompletionRequestMessage[];
  rewrite: ChatCompletionRequestMessage[];
  simplify: ChatCompletionRequestMessage[];
  summarize: ChatCompletionRequestMessage[];
}

export const prompts: PromptType = {
  chat: [{ role: "system", content: "You are a helpful writing assistant." }],
  continue: [
    {
      role: "system",
      content:
        "You are a helpful writing assistant. You help user by continuing to write the text they provide.",
    },
  ],
  rewrite: [
    {
      role: "system",
      content:
        "You are a helpful writing assistant. You help users by rewriting the text they provide in a different manner.",
    },
    {
      role: "user",
      content:
        "In mathematics, a fractal is a geometric shape containing detailed structure at arbitrarily small scales, usually having a fractal dimension strictly exceeding the topological dimension. Many fractals appear similar at various scales, as illustrated in successive magnifications of the Mandelbrot set. This exhibition of similar patterns at increasingly smaller scales is called self-similarity, also known as expanding symmetry or unfolding symmetry; if this replication is exactly the same at every scale, as in the Menger sponge, the shape is called affine self-similar. Fractal geometry lies within the mathematical branch of measure theory.",
    },
    {
      role: "assistant",
      content:
        "In mathematics, a fractal is a type of geometry comprised of intricate and repeating small-scale shapes. This phenomenon is known as self-similarity or expanding symmetry, and occurs as the shape emerges at varying magnifications. Popular examples of fractals include the Mandelbrot set and the Menger sponge. As a well-defined mathematical concept with roots in measure theory, fractal geometry has been studied extensively by mathematicians and scientists alike.",
    },
  ],
  simplify: [
    {
      role: "system",
      content:
        "You are a helpful writing assistant. You help user by simplifying the text they provide.",
    },
    {
      role: "user",
      content:
        "In mathematics, a fractal is a geometric shape containing detailed structure at arbitrarily small scales, usually having a fractal dimension strictly exceeding the topological dimension. Many fractals appear similar at various scales, as illustrated in successive magnifications of the Mandelbrot set. This exhibition of similar patterns at increasingly smaller scales is called self-similarity, also known as expanding symmetry or unfolding symmetry; if this replication is exactly the same at every scale, as in the Menger sponge, the shape is called affine self-similar. Fractal geometry lies within the mathematical branch of measure theory.",
    },
    {
      role: "assistant",
      content:
        "A fractal is a shape that has a lot of detail, no matter how much you zoom in. It has a special property called self-similarity, which means that it looks similar at different scales. Some fractals, like the Mandelbrot set, have this property at infinitely small scales. Fractals can have a dimension that is not a whole number, and they are studied in a branch of math called measure theory.",
    },
  ],
  summarize: [
    {
      role: "system",
      content:
        "You are a helpful writing assistant. You help users by summarizing the text they provide.",
    },
    {
      role: "user",
      content:
        "In mathematics, a fractal is a geometric shape containing detailed structure at arbitrarily small scales, usually having a fractal dimension strictly exceeding the topological dimension. Many fractals appear similar at various scales, as illustrated in successive magnifications of the Mandelbrot set. This exhibition of similar patterns at increasingly smaller scales is called self-similarity, also known as expanding symmetry or unfolding symmetry; if this replication is exactly the same at every scale, as in the Menger sponge, the shape is called affine self-similar. Fractal geometry lies within the mathematical branch of measure theory.\n\nOne way that fractals are different from finite geometric figures is how they scale. Doubling the edge lengths of a filled polygon multiplies its area by four, which is two (the ratio of the new to the old side length) raised to the power of two (the conventional dimension of the filled polygon). Likewise, if the radius of a filled sphere is doubled, its volume scales by eight, which is two (the ratio of the new to the old radius) to the power of three (the conventional dimension of the filled sphere). However, if a fractal's one-dimensional lengths are all doubled, the spatial content of the fractal scales by a power that is not necessarily an integer and is in general greater than its conventional dimension. This power is called the fractal dimension of the geometric object, to distinguish it from the conventional dimension (which is formally called the topological dimension).",
    },
    {
      role: "assistant",
      content:
        "Fractals are geometric shapes that contain detailed structure at all scales, and have a fractal dimension that is greater than the topological dimension. Fractals exhibit self-similarity, meaning they appear similar at different scales. Fractal geometry is a branch of measure theory. Fractals scale differently from finite geometric figures, and their scaling power is called the fractal dimension. If a fractal's one-dimensional lengths are doubled, the spatial content of the fractal scales by a power that is not necessarily an integer and is generally greater than its conventional dimension.",
    },
  ],
};
