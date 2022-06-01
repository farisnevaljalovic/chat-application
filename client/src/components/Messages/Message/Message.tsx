import React from 'react';
import style from "./Message.module.css";

function Message(props: { mess: { username: string; text: string; time: string } }) {
    
    return (
        <li className={style.message}>
            <div className={style.messageInfo}>
                <p>{props.mess.username}</p>
                <span>{props.mess.time}</span>
            </div>
            <p className={style.messageText}>{props.mess.text}</p>
        </li>
    )
}

export default Message
