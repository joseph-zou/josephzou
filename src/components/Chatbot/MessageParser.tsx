import React, { type ReactNode, type ReactElement } from "react";

type MessageParserProps = {
  children: React.ReactNode;
  actions: Record<string, (...args: any[]) => void>;
};

const MessageParser = ({ children, actions }: MessageParserProps) => {
  const parse = (message: string) => {
    if (message.includes("hello")) {
      actions.handleHello();
    }

    if (message.includes("dog")) {
      actions.handleDog();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement<any>, {
            parse,
            actions,
          });
        }
        return child; // Leave non-element nodes as-is
      })}
    </div>
  );
};

export default MessageParser;
