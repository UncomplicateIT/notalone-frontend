import { Icons } from "../components/icons";

export const features = [
  {
    title: "Content summarisation",
    icon: <Icons.clipboardList className="h-5 w-5 shrink-0 text-teal-600" />,
    description:
      "Summarize longer content to get an overview of the paragraph. Too Long, don't want to read? Shorten long paragraph on one click.",
    link: "/page",
  },
  {
    title: "Content simplification",
    icon: <Icons.filePieChart className="h-5 w-5 shrink-0 text-teal-600" />,
    description:
      "Don't understand something? We've got your back! Use this feature to understand a word or simplify a paragraph. Math is tough we get it!",
    link: "/page",
  },
  {
    title: "Proxy writer",
    icon: <Icons.scroll className="h-5 w-5 shrink-0 text-teal-600" />,
    description:
      "I want something to be written can you do it? Tell us what to write and we'll get it done for you.",
    link: "/page",
  },
  {
    title: "Content rewriting",
    icon: (
      <Icons.clipboardSignature className="h-5 w-5 shrink-0 text-teal-600" />
    ),
    description:
      "Want a paragraph to be written in a different way? We have you covered you make your text look clearer and smarter!",
    link: "/page",
  },
  {
    title: "Text to speech",
    icon: <Icons.volume className="h-5 w-5 shrink-0 text-teal-600" />,
    description:
      "Some words are complicated even for us to understand this is where Text-to-Speech service can help them read a word or a paragraph whenever they feel stuck.",
    link: "/page",
  },
  {
    title: "Speech to text",
    icon: <Icons.mic className="h-5 w-5 shrink-0 text-teal-600" />,
    description:
      "Whisper-based STT feature to help them type by speaking. After-all speaking is much faster than writing!",
    link: "/page",
  },
];
