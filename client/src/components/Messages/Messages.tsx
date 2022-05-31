import React from 'react';
import Message from './Message/Message';
import style from "./Messages.module.css";

function Messages(props: { messages: { username: string; message: string; }[]}) {

    return (
        <ul className={style.chatMessages}>
            {
                props.messages.map((message, index) => (
                    <Message message={message} key={index} />
                ))
            }                             
        </ul>
    )
}

export default Messages
