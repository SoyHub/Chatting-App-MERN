import React, { useEffect } from "react";
import SidebarChat from "./SidebarChat";
import Showercoders from "./img/Showercoders.png";
import axios from "./axios";
function SidebarChatList() {
  useEffect(() => {
    axios.get("/api/v1/messages/sync").then((res) => {
      console.log(res);
    });
    return () => {};
  }, []);
  return (
    <div className="sidebar__chats">
      <SidebarChat
        name="Showercoders"
        avatar={Showercoders}
        lastMessage="جايين صحاب البيت يتعرفو علينا"
      />
      <SidebarChat
        name="Haifa Wehbi"
        lastMessage="Why don't you answer me?"
        avatar="https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JD_ArticleMainImage/144947"
      />
    </div>
  );
}

export default SidebarChatList;
