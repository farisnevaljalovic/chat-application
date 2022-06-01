import React from 'react';
import Message from './Message/Message';
import style from "./Messages.module.css";

function Messages(props: { messages: { username: string; text: string; time:string}[]}) {

    return (
        <ul className={style.chatMessages}>
            {
                props.messages.map((message, index) => (
                    <Message mess={message} key={index} />
                ))
            }                             
        </ul>
    )
}

export default Messages
