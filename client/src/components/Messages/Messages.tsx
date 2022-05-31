import React from 'react';
import Message from './Message/Message';
import style from "./Messages.module.css";

function Messages() {
    return (
        <ul className={style.chatMessages}>
            <Message />                              
        </ul>
    )
}

export default Messages
