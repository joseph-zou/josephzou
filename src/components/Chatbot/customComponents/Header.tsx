import React from "react";
import { HiXMark } from "react-icons/hi2";

type HeaderProps = {
  botName: string;
  handleToggleChatbot: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Header({ botName, handleToggleChatbot }: HeaderProps) {
  return (
    <div className="bg-[#5aac78] to-white rounded-t-lg px-4 py-2 flex justify-between items-center border-b border-gray-200">
      <span className="text-sm text-white  md:text-lg">
        Conversation with {botName}
      </span>
      <button
        className="text-2xl text-black pointer md:text-2xl"
        onClick={handleToggleChatbot}
      >
        <HiXMark className="text-3xl text-white hover:bg-[#4e9668] rounded-full p-1" />
      </button>
    </div>
  );
}
