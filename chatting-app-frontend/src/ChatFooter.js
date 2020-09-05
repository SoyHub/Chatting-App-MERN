import React, { useState } from "react";
import "./ChatFooter.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { IconButton } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import axios from "./axios";
function ChatFooter() {
  const [message, setMessage] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("/api/v1/messages/new", {
      name:"Sohayb Hassan",
      message:message,
      timestamp:new Date()
    });
    setMessage("")
  };
  return (
    <div className="chat__footer">
      <IconButton>
        <InsertEmoticonIcon />
      </IconButton>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Type a message"
          value={message}
          type="text"
          onChange={(e) => {setMessage(e.target.value);}}
        />
        <button type="submit">Send</button>
      </form>
      <IconButton>
        <MicIcon />
      </IconButton>
    </div>
  );
}

export default ChatFooter;
