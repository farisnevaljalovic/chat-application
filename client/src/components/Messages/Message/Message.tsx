import React from 'react';
import style from "./Message.module.css";

function Message() {
    return (
        <li className={style.message}>
            <div className={style.messageInfo}>
                <p>Admin</p>
                <span>2:22 am</span>
            </div>
            <p className={style.messageText}>Hello</p>
        </li>
    )
}

export default Message
