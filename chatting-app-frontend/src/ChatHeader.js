import React from "react";
import "./ChatHeader.css"
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchIcon from "@material-ui/icons/Search";
import Showercoders from "./img/Showercoders.png";
function ChatHeader() {
  return (
    <div className="chat__header">
      <Avatar src={Showercoders} />

      <div className="chat__headerInfo">
        <h3>Showercoders</h3>
        <p>Antoine, Asem, You</p>
      </div>
      <div className="chat__headerRight">
        <IconButton>
          <SearchIcon style={{ transform: " scale(-1, 1)" }} />
        </IconButton>
        <IconButton>
          <AttachFileIcon style={{ transform: " rotate(-40deg)" }} />
        </IconButton>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatHeader;
