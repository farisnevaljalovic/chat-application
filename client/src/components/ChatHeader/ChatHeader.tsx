import React from 'react';
import style from "./ChatHeader.module.css";

function ChatHeader(props: {username:string}) {
    return (
        <div className={style.chatHeader}>
            <h3 className={style.chatTitle}>Group chat room</h3>
            <h3 className={style.mobileUsername}>Your name: <span>{props.username}</span></h3>
        </div>
    )
}

export default ChatHeader
