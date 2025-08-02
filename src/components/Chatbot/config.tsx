import { createChatBotMessage, createCustomMessage } from "react-chatbot-kit";
import DogPicture from "./widgets/DogPicture.js";
import { BsRobot } from "react-icons/bs";

const botName = "JosephGPT";
const config = {
  initialMessages: [
    createChatBotMessage(` Hi! I'm JosephGPT. Ask anything about me.`, {}),
    createCustomMessage("value to input", "custom", {}),
  ],
  botName: botName,

  customStyles: {},

  customComponents: {
    botAvatar: () => (
      <div className="w-10 h-10 flex items-center justify-center bg-gray-400 rounded-full">
        <BsRobot className="text-xl text-white" />
      </div>
    ),
  },

  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;
