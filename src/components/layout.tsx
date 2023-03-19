import * as React from "react";

import { cn } from "@/lib/utils";
import { Nav } from "./nav";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: Props) => {
  return (
    <>
      <Nav />
      <main className={cn("container py-24 lg:py-32", className)}>
        {children}
      </main>
    </>
  );
};
