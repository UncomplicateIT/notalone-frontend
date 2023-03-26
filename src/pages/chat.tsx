import { useEffect, useState } from "react";

import { Icons } from "../components/icons";
import { Layout } from "../components/layout";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useToast } from "../hooks/ui/use-toast";
import { chatGPTRequest } from "../lib/chatgpt-request";
import { cn } from "../lib/utils";

interface ChatBubbleProps {
  message: string;
  isSender?: boolean;
}

const ChatBubble = ({ message, isSender }: ChatBubbleProps) => {
  return (
    <p
      className={cn(
        "w-full max-w-sm rounded-md p-2",
        isSender
          ? "ml-auto bg-slate-800 text-slate-100 dark:bg-slate-100 dark:text-slate-800"
          : "dark:bg-slate-80 bg-slate-100 text-slate-800 dark:text-slate-100"
      )}
    >
      {message}
    </p>
  );
};

const Chat = () => {
  const [chats, setChats] = useState<ChatBubbleProps[]>([]);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(document.body.scrollHeight, document.body.clientHeight);
      if (document.body.scrollHeight - document.body.clientHeight > 0)
        setIsVisible(true);
      else setIsVisible(false);
    };
    document.body.onscroll = () => {
      handleScroll();
    };

    return () => {
      document.body.onscroll = null;
    };
  }, []);

  const { toast } = useToast();

  const scrollToEnd = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const handleChatGPTResponse = async () => {
    setIsLoading(true);
    const [data, error] = await chatGPTRequest(text.trim(), "chat");
    if (data.length > 0) {
      setChats((chats) => [...chats, { message: data }]);
      scrollToEnd();
    } else {
      toast({
        title: "Uh oh! Something went wrong.",
        description: error,
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const handleSend = async () => {
    setIsLoading(true);
    setChats((chats) => [...chats, { message: text, isSender: true }]);
    setText("");
    scrollToEnd();
    await handleChatGPTResponse();
    setIsLoading(false);
  };

  return (
    <>
      <Layout
        title="NotAlone - Chat"
        className="relative max-w-screen-md border-slate-200 dark:border-slate-700 lg:border-x"
      >
        <div className="mb-4 flex min-h-[70vh] flex-col justify-end gap-4">
          {chats.map((chat, index) => (
            <ChatBubble
              key={index}
              message={chat.message}
              isSender={chat.isSender}
            />
          ))}
        </div>
        {isVisible ? (
          <Button
            onClick={() => scrollToEnd()}
            size="sm"
            variant="subtle"
            className="absolute right-4 bottom-12"
          >
            <Icons.down className="h-6 w-6" />
          </Button>
        ) : null}
      </Layout>
      <div className="fixed bottom-0 z-50 flex h-16 w-full items-center justify-center border-t border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
        <form
          className="mx-auto flex w-full max-w-screen-md items-center gap-4 px-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <Input
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Icons.loader className="mr-2 h-4 w-4 animate-spin" />
                <span>Sending</span>
              </>
            ) : (
              <>
                <span>Send</span>
                <Icons.send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </>
  );
};

export default Chat;
