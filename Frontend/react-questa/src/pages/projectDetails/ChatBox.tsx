import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { ChangeEvent, useState } from "react";

const ChatBox = () => {
  const [message, setMessage] = useState<string>("");

  const handleSendMessage = (): void => {
    console.log("Message: ", message);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  return (
    <div className="sticky">
      <div className="border rounded-lg">
        <h1 className="border-b p-5">Chat Box</h1>

        <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">
          {[1, 2, 3, 4].map((item, idx) =>
            idx % 2 == 0 ? (
              <div className="flex gap-2 mb-2 justify-start" key={item}>
                <Avatar>
                  <AvatarFallback>G</AvatarFallback>
                </Avatar>
                <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounder-e-xl">
                  <p>Ginni</p>
                  <p className="text-gray-300">How are you!</p>
                </div>
              </div>
            ) : (
              <div className="flex gap-2 mb-2 justify-end" key={item}>
                <div className="space-y-2 py-2 px-5 border rounded-se-2xl rounder-s-xl">
                  <p>Pinni</p>
                  <p className="text-gray-300">Fine! Wau?</p>
                </div>
                <Avatar>
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
              </div>
            )
          )}
        </ScrollArea>
        <div className="relative p-0">
          <Input
            placeholder="type message..."
            className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
            value={message}
            onChange={handleMessageChange}
            onKeyDown={handleKeyPress}
          />
          <Button
            onClick={handleSendMessage}
            className="absolute right-2 top-3 rounded-full"
            size="icon"
            variant="ghost"
            disabled={!message.trim()} //Disable button when message is empty
          >
            <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
