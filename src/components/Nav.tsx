import { Icons } from "./icons";
import { Button } from "./ui/Button";

export const Nav = () => {
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
        <nav className="container flex h-16 items-center justify-between">
          <div>
            <span className="text-2xl font-bold">
              <span className="text-teal-600">Not</span>Alone
            </span>
          </div>
          <Button size="default">
            <span>Get Started</span>
            <Icons.arrowRight className="ml-2 h-4 w-4" />
          </Button>
        </nav>
      </header>
    </>
  );
};
