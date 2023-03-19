import Link from "next/link";

import { Icons } from "@/components/icons";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/Button";

const Home = () => {
  const features = [
    {
      title: "Content summarisation",
      icon: <Icons.clipboardList className="h-5 w-5 shrink-0 text-teal-600" />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptate.",
      link: "/",
    },
    {
      title: "Content simplification",
      icon: <Icons.filePieChart className="h-5 w-5 shrink-0 text-teal-600" />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptate.",
      link: "/",
    },
    {
      title: "Write for me",
      icon: <Icons.scroll className="h-5 w-5 shrink-0 text-teal-600" />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptate.",
      link: "/",
    },
    {
      title: "Content rewriting",
      icon: (
        <Icons.clipboardSignature className="h-5 w-5 shrink-0 text-teal-600" />
      ),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptate.",
      link: "/",
    },
    {
      title: "Text to speech",
      icon: <Icons.volume className="h-5 w-5 shrink-0 text-teal-600" />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptate.",
      link: "/",
    },
    {
      title: "Speech to text (ASR)",
      icon: <Icons.mic className="h-5 w-5 shrink-0 text-teal-600" />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptate.",
      link: "/",
    },
  ];

  return (
    <Layout className="space-y-24 lg:space-y-32">
      <section className="mx-auto max-w-screen-sm space-y-4 text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          <span className="relative pr-2">
            <Icons.rocket className="absolute -top-9 -left-5 h-9 w-9 text-rose-600" />
            <span>Empowering</span>
          </span>
          you to write, read, and connect with{" "}
          <span className="relative">
            <span>ease</span>
            <Icons.underline className="absolute -bottom-6 left-1 h-10 w-20 text-teal-600 lg:left-0 lg:-bottom-9 lg:h-16 lg:w-28" />
          </span>
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          NotAlone is an app with which helps such people write better, read
          better, and most importantly get help when needed the most.
        </p>
        <Button size="lg">
          <span>Get Started</span>
          <Icons.arrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>
      <section className="space-y-8 lg:space-y-16">
        <div className="mx-auto max-w-screen-md text-center">
          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl">
            Things
            <span className="relative px-2">
              <span>
                <span>NotAlone</span>
                <Icons.funUnderline className="absolute left-10 -bottom-6 h-8 w-24 text-teal-600" />
              </span>
            </span>
            can help you
            <span className="relative ml-2">
              <span>with...</span>
              <Icons.star className="absolute -right-6 -top-6 h-8 w-8 text-yellow-400" />
            </span>
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            earum maxime magni obcaecati quaerat reprehenderit voluptas
            necessitatibus aspernatur deleniti quia?
          </p>
        </div>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 justify-items-center gap-4 md:grid-cols-2 md:pl-5 lg:gap-8 lg:pl-16">
          {features.map((feature, index) => (
            <div key={index} className="space-y-2 lg:space-y-4">
              <div className="flex items-center gap-2">
                {feature.icon}
                <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h3>
              </div>
              <p className="max-w-md leading-7">{feature.description}</p>
              <Link
                href={feature.link}
                className="flex max-w-max items-center gap-1 border-b-2 border-transparent pb-0.5 text-sm font-semibold text-teal-600 transition-colors hover:border-teal-600"
              >
                <span>Explore now</span>
                <Icons.arrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
