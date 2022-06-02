import React from 'react';
import style from "./Message.module.css";

function Message(props: { username: string, mess: { username: string; text: string; time: string } }) {
    const usersMessages = props.mess.username !== props.username;
    
    return (
        <li className={usersMessages ? `${style.message} ${style.usersMessages}` : `${style.message} ${style.userMess}`}>
            <div className={style.messageInfo}>
                <p>{props.mess.username}</p>
                <span>{props.mess.time}</span>
            </div>
            <p className={style.messageText}>{props.mess.text}</p>
        </li>
    )
}

export default Message
