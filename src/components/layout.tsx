import * as React from "react";

import { cn } from "@/lib/utils";
import { Head } from "./head";
import { Nav } from "./nav";

interface Props {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export const Layout = ({
  children,
  className,
  title,
  description,
  keywords,
  image,
}: Props) => {
  return (
    <>
      <Head
        title={title}
        description={description}
        keywords={keywords}
        image={image}
      />
      <Nav />
      <main className={cn("container py-12 lg:py-16", className)}>
        {children}
      </main>
    </>
  );
};
