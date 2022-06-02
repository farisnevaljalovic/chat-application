import React from "react";
import Message from "./Message/Message";
import style from "./Messages.module.css";
import ScrollableFeed from "react-scrollable-feed";

function Messages(props: {
  username: string;
  messages: { username: string; text: string; time: string }[];
}) {
  return (
    <ul className={style.chatMessages}>
      <ScrollableFeed>
        {props.messages.map((message, index) => (
          <Message mess={message} key={index} username={props.username} />
        ))}
      </ScrollableFeed>
    </ul>
  );
}

export default Messages;
