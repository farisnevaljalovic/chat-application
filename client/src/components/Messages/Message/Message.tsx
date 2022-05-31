import React from 'react';
import style from "./Message.module.css";

function Message(props: { message: { username: string; message: string; } }) {
    return (
        <li className={style.message}>
            <div className={style.messageInfo}>
                <p>{props.message.username}</p>
                <span>2:22 am</span>
            </div>
            <p className={style.messageText}>{props.message.message}</p>
        </li>
    )
}

export default Message
