import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { features } from "@/lib/common";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Icons } from "./icons";
import { ThemeToggle } from "./theme-toggle";

interface Props {
  removeSticky?: boolean;
}

export const Nav = ({ removeSticky }: Props) => {
  const router = useRouter();

  return (
    <>
      <header
        className={cn(
          !removeSticky &&
            "sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900 print:hidden"
        )}
      >
        <nav className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-bold">
              <span className="text-teal-600">Not</span>Alone
            </span>
            {router.pathname === "/" ? (
              <div className="hidden md:block">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {features.map((feature, index) => (
                            <ListItem
                              key={index}
                              title={feature.title}
                              href={feature.link}
                            >
                              {feature.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            ) : null}
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden items-center gap-8 md:flex">
              <Link
                href="https://github.com/UncomplicateIT/notalone-frontend"
                target="_blank"
                className={buttonVariants({
                  size: "default",
                  variant: "ghost",
                  className: "text-slate-700 dark:text-slate-400",
                })}
              >
                <Icons.gitHub className="mr-2 h-5 w-5" />
                <span>GitHub</span>
              </Link>
              {router.pathname === "/" ? (
                <Link
                  href="/page"
                  className={buttonVariants({ size: "default" })}
                >
                  <span>Get Started</span>
                  <Icons.arrowRight className="ml-2 h-4 w-4" />
                </Link>
              ) : null}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-base hover:bg-transparent focus:ring-0 md:hidden"
                >
                  <Icons.menu className="h-4 w-4" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="mr-6 w-[250px] overflow-auto"
              >
                <DropdownMenuLabel>
                  <Link href="/">Home</Link>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {features.map(
                  (feature, index) =>
                    feature.link && (
                      <DropdownMenuItem key={index} asChild>
                        <Link href={feature.link}>{feature.title}</Link>
                      </DropdownMenuItem>
                    )
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            <ThemeToggle />
          </div>
        </nav>
      </header>
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href ?? "/"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
