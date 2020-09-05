import React, { useEffect, useState } from "react";
import "./App.css";
import { Sidebar } from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);
  const scrollToBottom = () =>
    document.querySelector(".chat__body").scrollTo(0, 99999);

  useEffect(() => {
    axios
    .get("/api/v1/messages/sync")
    .then((response) => {
      setMessages(response?.data);
      scrollToBottom();
      })
      .catch((err) => console.log(err.response));
  }, []);

  useEffect(() => {
    const pusher = new Pusher("09b1f7189f6425962635", {
      cluster: "eu",
    });
    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      console.log(newMessage);
      setMessages([...messages, newMessage]);
      scrollToBottom();
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
