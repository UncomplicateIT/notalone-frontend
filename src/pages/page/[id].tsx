import { ref, useRef, useState } from "react";
import { useToast } from "@/hooks/ui/use-toast";

import { chatGPTRequest, type PromptType } from "@/lib/chatgpt-request";
import { cancel, pause, resume, speak } from "@/lib/text-to-speech";
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
  const [ttsSynth, setTtsSynth] = useState<SpeechSynthesis | undefined>(
    undefined
  );
  const [isTtsPaused, setIsTtsPaused] = useState(false);
  const [isMenuItemClicked, setIsMenuItemClicked] = useState(false);
  const [pageText, setPageText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatGPTResponse, setChatGPTResponse] = useState("");

  const { toast } = useToast();

  const textAreaRef = useRef(null);

  const resetStates = () => {
    setShouldShowContextMenu(false);
    setHighlightedText("");
    setTtsSynth(undefined);
    setIsTtsPaused(false);
    setIsMenuItemClicked(false);
    setChatGPTResponse("");
    setIsLoading(false);
  };

  const handleSelectChange = () => {
    resetStates();
    const selectedText = window.getSelection()?.toString();
    if (!selectedText) return;
    setShouldShowContextMenu(true);
    setHighlightedText(selectedText.trim());
  };

  const handleChatGPTResponse = async (
    toastTitle: string,
    toastDescription: string,
    promptType: PromptType
  ) => {
    setIsLoading(true);
    const [data, error] = await chatGPTRequest(highlightedText, promptType);
    if (data.length > 0) {
      setChatGPTResponse(data);
      toast({
        title: toastTitle,
        description: toastDescription,
      });
    } else {
      toast({
        title: "Uh oh! Something went wrong.",
        description: error,
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const features = [
    {
      type: "tts",
      title: "Speak selected text",
      icon: (
        <Icons.volume className="h-4 w-4 shrink-0 text-teal-600 lg:h-5 lg:w-5" />
      ),
      onSelect: async (e: Event) => {
        e.preventDefault();
        setIsMenuItemClicked(true);
        const synth = speak(highlightedText, () => {
          setIsMenuItemClicked(false);
          setTtsSynth(undefined);
        });
        if (!synth) {
          toast({
            title: "Not Supported!",
            description: "Sorry, your browser doesn't support text to speech!",
          });
          return;
        }
        setTtsSynth(synth);
      },
    },
    {
      type: "summarize",
      title: "Summarize selected text",
      icon: (
        <Icons.clipboardList className="h-4 w-4 shrink-0 text-teal-600 lg:h-5 lg:w-5" />
      ),
      onSelect: async (e: Event) => {
        e.preventDefault();
        setIsMenuItemClicked(true);
        await handleChatGPTResponse(
          "Text summarized!",
          "Noicee! You just summarized your text.",
          "summarize"
        );
      },
    },
    {
      type: "simplify",
      title: "Simplify selected text",
      icon: (
        <Icons.filePieChart className="h-4 w-4 shrink-0 text-teal-600 lg:h-5 lg:w-5" />
      ),
      onSelect: async (e: Event) => {
        e.preventDefault();
        setIsMenuItemClicked(true);
        await handleChatGPTResponse(
          "Text simplified!",
          "Noicee! You just simplified your text.",
          "simplify"
        );
      },
    },
    {
      type: "continue",
      title: "Expand selected text",
      icon: (
        <Icons.scroll className="h-4 w-4 shrink-0 text-teal-600 lg:h-5 lg:w-5" />
      ),
      onSelect: async (e: Event) => {
        e.preventDefault();
        setIsMenuItemClicked(true);
        await handleChatGPTResponse(
          "Text expanded!",
          "Noicee! You just expanded your text.",
          "continue"
        );
      },
    },
    {
      type: "rewrite",
      title: "Rewrite selected text",
      icon: (
        <Icons.clipboardSignature className="h-4 w-4 shrink-0 text-teal-600 lg:h-5 lg:w-5" />
      ),
      onSelect: async (e: Event) => {
        e.preventDefault();
        setIsMenuItemClicked(true);
        await handleChatGPTResponse(
          "Text rewroted!",
          "Noicee! You just rewroted your text.",
          "rewrite"
        );
      },
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
                className="w-[16rem]  animate-in fade-in lg:w-[20rem]"
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
                        // disabled={index === 0 && !isWordSelected}
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
                    {ttsSynth ? (
                      <div className="m-2 flex items-center gap-2">
                        <Button
                          onClick={() => {
                            if (isTtsPaused) {
                              resume(ttsSynth);
                              setIsTtsPaused(false);
                            } else {
                              pause(ttsSynth);
                              setIsTtsPaused(true);
                            }
                          }}
                          size="sm"
                        >
                          {isTtsPaused ? (
                            <Icons.play className="mr-2 h-3.5 w-3.5" />
                          ) : (
                            <Icons.pause className="mr-2 h-3.5 w-3.5" />
                          )}
                          <span>{isTtsPaused ? "Resume" : "Pause"}</span>
                        </Button>
                        <Button
                          onClick={() => {
                            cancel(ttsSynth);
                            setTtsSynth(undefined);
                            setIsMenuItemClicked(false);
                          }}
                          size="sm"
                          variant="ghost"
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : null}
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2 p-0.5 lg:p-1">
                        <Icons.loader className="h-5 w-5 animate-spin" />
                        <span className="font-semibold">Loading</span>
                      </div>
                    ) : null}
                    {chatGPTResponse.length > 0 ? (
                      <ScrollArea className="max-h-40 overflow-y-auto p-0.5 lg:p-1">
                        <p>{chatGPTResponse}</p>
                      </ScrollArea>
                    ) : null}
                    {chatGPTResponse.length > 0 ? (
                      <div className="m-2 flex items-center gap-2">
                        <Button
                          onClick={() => {
                            setPageText((pageText) =>
                              pageText.replace(highlightedText, chatGPTResponse)
                            );
                            setIsMenuItemClicked(false);
                          }}
                          size="sm"
                        >
                          Replace text
                        </Button>
                        <Button
                          onClick={() => setIsMenuItemClicked(false)}
                          size="sm"
                          variant="ghost"
                        >
                          Close
                        </Button>
                      </div>
                    ) : null}
                  </>
                )}
                {highlightedText.length > 0 ? (
                  <>
                    <ContextMenuSeparator />
                    <ScrollArea className="mt-2 max-h-40 overflow-y-auto p-0.5 lg:p-1">
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
