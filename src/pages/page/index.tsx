import { useState } from "react";

import { Icons } from "@/components/icons";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuPortal,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

const Pages = () => {
  const [shouldShowContextMenu, setShouldShowContextMenu] = useState(false);
  const [highlightedText, setHighlightedText] = useState("");
  const [isWordSelected, setIsWordSeleted] = useState(false);
  const [isMenuItemClicked, setIsMenuItemClicked] = useState(false);
  const [pageText, setPageText] = useState("");

  const resetStates = () => {
    setShouldShowContextMenu(false);
    setHighlightedText("");
    setIsWordSeleted(false);
    setIsMenuItemClicked(false);
  };

  const handleSelectChange = () => {
    resetStates();
    const selectedText = window.getSelection()?.toString();
    if (!selectedText) return;
    const selectedWords = selectedText.split(" ");
    if (selectedWords.length === 1) setIsWordSeleted(true);
    setShouldShowContextMenu(true);
    setHighlightedText(selectedText.trim());
  };

  const features = [
    {
      title: "Speak selected word",
      icon: (
        <Icons.volume className="h-4 w-4 shrink-0 text-teal-600 lg:h-5 lg:w-5" />
      ),
      onSelect: (e: Event) => {
        e.preventDefault();
        setIsMenuItemClicked(true);
      },
    },
    {
      title: "Summarize selected text",
      icon: (
        <Icons.clipboardList className="h-4 w-4 shrink-0 text-teal-600 lg:h-5 lg:w-5" />
      ),
      onSelect: (e: Event) => {},
    },
    {
      title: "Simplify selected text",
      icon: (
        <Icons.filePieChart className="h-4 w-4 shrink-0 text-teal-600 lg:h-5 lg:w-5" />
      ),
      onSelect: (e: Event) => {},
    },
    {
      title: "Expand selected text",
      icon: (
        <Icons.scroll className="h-4 w-4 shrink-0 text-teal-600 lg:h-5 lg:w-5" />
      ),
      onSelect: (e: Event) => {},
    },
    {
      title: "Rewrite selected text",
      icon: (
        <Icons.clipboardSignature className="h-4 w-4 shrink-0 text-teal-600 lg:h-5 lg:w-5" />
      ),
      onSelect: (e: Event) => {},
    },
  ];

  return (
    <Layout title="NotAlone - Your pages" className="max-w-screen-lg space-y-8">
      <section className="flex items-center gap-4">
        <Button variant="ghost" size="sm">
          <Icons.arrowLeft />
        </Button>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Some cool title
        </h1>
      </section>
      <section>
        <ContextMenu>
          <ContextMenuTrigger
            onContextMenu={(e) => {
              if (!shouldShowContextMenu) e.preventDefault();
            }}
          >
            <textarea
              name="page"
              id="page"
              placeholder="Start typing here..."
              value={pageText}
              onChange={(e) => setPageText(e.target.value)}
              onSelect={handleSelectChange}
              className="flex h-[32rem] w-full resize-none rounded-md bg-slate-100 py-4 px-6 placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-800 dark:text-slate-50"
            />
          </ContextMenuTrigger>
          {shouldShowContextMenu ? (
            <ContextMenuPortal>
              <ContextMenuContent
                collisionPadding={{ top: 20, right: 20, bottom: 20, left: 20 }}
                className="animate-in fade-in"
                onInteractOutside={(e) => {
                  if (isMenuItemClicked) {
                    e.preventDefault();
                    return;
                  }
                  resetStates();
                }}
              >
                {!isMenuItemClicked ? (
                  <>
                    {features.map((feature, index) => (
                      <ContextMenuItem
                        key={index}
                        disabled={index === 0 && !isWordSelected}
                        onSelect={feature.onSelect}
                      >
                        <span className="inline-flex items-center gap-1 p-0.5 text-sm lg:gap-2 lg:p-1 lg:text-base">
                          {feature.icon}
                          <span>{feature.title}</span>
                        </span>
                      </ContextMenuItem>
                    ))}
                  </>
                ) : (
                  <>
                    <ScrollArea className="max-h-36 max-w-[250px] space-y-2 overflow-y-auto p-0.5 lg:p-1">
                      <p>
                        On clicking replace text this will the selected text to:
                        Yess replaced it!
                      </p>
                      <div>
                        <Button
                          onClick={() => {
                            setPageText((pageText) =>
                              pageText.replace(
                                highlightedText,
                                "Yess replaced it!"
                              )
                            );
                            setIsMenuItemClicked(false);
                          }}
                          size="sm"
                          className="m-1"
                        >
                          Replace Text
                        </Button>
                        <Button
                          onClick={() => setIsMenuItemClicked(false)}
                          size="sm"
                          variant="ghost"
                          className="m-1"
                        >
                          Close
                        </Button>
                      </div>
                    </ScrollArea>
                  </>
                )}
                {highlightedText.length > 0 ? (
                  <>
                    <ContextMenuSeparator />
                    <ScrollArea className="mt-2 max-h-36 max-w-[250px] overflow-y-auto p-0.5 lg:p-1">
                      <span className="block text-xs font-semibold lg:text-sm">
                        Selected text
                      </span>
                      <span className="text-sm lg:text-base">
                        {highlightedText}
                      </span>
                    </ScrollArea>
                  </>
                ) : null}
              </ContextMenuContent>
            </ContextMenuPortal>
          ) : null}
        </ContextMenu>
      </section>
    </Layout>
  );
};

export default Pages;
