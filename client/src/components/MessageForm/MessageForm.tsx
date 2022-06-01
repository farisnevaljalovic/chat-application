import React, { ChangeEvent, useState } from 'react';
import style from "./MessageForm.module.css";

function MessageForm(props: {sendMessage:Function}) {
    const [message, setMessage] = useState('');
    return (
        <form className={style.messageForm}
            onSubmit={e => {
                e.preventDefault();
                props.sendMessage(message);
                setMessage('')
            }}
        >
            <textarea placeholder="Write something..." value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
            <button>Send</button>
        </form>
    )
}

export default MessageForm
