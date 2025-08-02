import React, { type ReactNode, type ReactElement } from "react";
interface ActionProviderProps {
  createChatBotMessage: (message: string, options?: any) => any;
  setState: React.Dispatch<React.SetStateAction<any>>;
  children: ReactNode;
}

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
}: ActionProviderProps) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: "dogPicture",
      }
    );

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as ReactElement<any>, {
          actions: {
            handleHello,
            handleDog,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
