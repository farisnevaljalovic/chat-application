import React, { useState } from 'react';
import style from "./MessageForm.module.css";

function MessageForm(props: {setMessage:Function}) {
    const [message, setMessage] = useState('');
    const handleSubmit = (e:any) => {
        e.prevetDefault();
        props.setMessage(message);
        setMessage('')
    }
    return (
        <form className={style.messageForm} onSubmit={handleSubmit}>
            <textarea placeholder="Write something..." value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
            <button>Send</button>
        </form>
    )
}

export default MessageForm
