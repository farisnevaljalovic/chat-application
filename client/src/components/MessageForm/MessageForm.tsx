import React from 'react';
import style from "./MessageForm.module.css";

function MessageForm() {
    return (
        <form className={style.messageForm}>
            <textarea placeholder="Write something..."></textarea>
            <button>Send</button>
        </form>
    )
}

export default MessageForm
