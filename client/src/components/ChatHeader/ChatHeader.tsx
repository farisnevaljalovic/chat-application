import React from 'react';
import style from "./ChatHeader.module.css";

function ChatHeader() {
    return (
        <div className={style.chatHeader}>
            <h3 className={style.chatTitle}>Group chat room</h3>
            <h3 className={style.mobileUsername}>Your name: <span>Faris</span></h3>
        </div>
    )
}

export default ChatHeader
