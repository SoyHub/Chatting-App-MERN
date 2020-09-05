import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const Chat = ({ messages }) => {
  return (
    <div className="chat">
      <ChatHeader />
      <ChatBody messages={messages} />
      <ChatFooter />
    </div>
  );
};

export default Chat;
