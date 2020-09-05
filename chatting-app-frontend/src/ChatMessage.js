import React from "react";
import "./ChatMessage.css";
import dateFormatter from "./DateFormatter"

export default function ChatMessage({ name, message, timestamp, sender }) {
  return (
    <div className={sender ? "chat__reciever" : "chat__message"}>
      <p className="message__name">{name}</p>
      {message}
      <p className="message__timestamp">{dateFormatter(timestamp)}</p>
    </div>
  );
}
