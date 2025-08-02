import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./styles.css";

import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import configBase from "./config";

// custom components
import Header from "./customComponents/header";
import { BsRobot } from "react-icons/bs";

export default function ChatbotComponent() {
  const [toggleChatbot, setToggleChatbot] = useState<boolean>(false);

  const handleToggleChatbot = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToggleChatbot(!toggleChatbot);
  };

  const config = {
    ...configBase,
    customComponents: {
      ...configBase.customComponents,
      header: () => (
        <Header
          botName={configBase.botName}
          handleToggleChatbot={handleToggleChatbot}
        />
      ),
    },
  };

  return (
    <>
      {toggleChatbot && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      )}
      <div className="w-full flex justify-end">
        <button
          className="flex px-4 py-2 bg-[#5aac78] text-white items-center gap-2 text-2xl rounded-r-full rounded-bl-full hover:bg-[#4e9668]"
          onClick={handleToggleChatbot}
        >
          <BsRobot />
        </button>
      </div>
    </>
  );
}
