import React from 'react'
import "./SidebarChat.css"
import { Avatar } from "@material-ui/core";

function SidebarChat(props) {
    return (
        <div className="sidebarChat">
           <Avatar src={props.avatar}/>
           <div className="sidebarChat__info">
               <h2>{props.name ||"Room name"}</h2>
               <p>{props.lastMessage || "This is the last message"}</p>
           </div>
        </div>
    )
}

export default SidebarChat
