import React from "react";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ProfilePicture from "./img/ProfilePic.png";
import "./Sidebar.css"
function SidebarHeader() {
  return (
    <div className="sidebar__header">
      <Avatar src={ProfilePicture} />
      <div className="sidebar__headerRight">
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <AddIcon/>
        </IconButton>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default SidebarHeader;
