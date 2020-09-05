import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { IconButton } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./ChatBody.css";
function ChatBody({ messages }) {
  const [showScollIcon, setshowScollIcon] = useState(false);
  const scrollToBottom = () =>
    document.querySelector(".chat__body").scrollTo(0, 99999);
  const scrollFunction = () => {
    const element = document.querySelector(".chat__body");
    const totalHeight = element.scrollHeight - element.clientHeight;
    const currentScrollPosition = element.scrollTop;

    if (currentScrollPosition < totalHeight * 0.9) {
      setshowScollIcon(true);
    } else {
      setshowScollIcon(false);
    }
  };
  return (
    <div onScroll={scrollFunction} className="chat__body">
      {/* Map start */}
      {messages.map((e) => (
        <div key={e._id || Math.random() * 213213213}>
          <ChatMessage
            name={e.name}
            message={e.message}
            timestamp={e.timestamp}
            sender={e.name === "Sohayb Hassan" || e.name === undefined}
          />
        </div>
      ))}
      {/* End of map */}
      <div  className={showScollIcon?"appear":"chat__floating__arrow"}>
       
          <IconButton onClick={scrollToBottom}>
            <ExpandMoreIcon />
          </IconButton>
        
      </div>
    </div>
  );
}

export default ChatBody;
