import React, { useState } from 'react';
import style from "./Dashboard.module.css";
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import Messages from '../../components/Messages/Messages';
import MessageForm from '../../components/MessageForm/MessageForm';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import MobileSidebar from '../../components/MobileSidebar/MobileSidebar';

function Dashboard( props: { theme: string, setTheme: Function, username: string, sendMessage: Function, messages: { username: string; text: string;  time:string}[], connectedUsers: {id: string, username:string}[]}) {
    const [menu, setMenu] = useState(false);
    return (
        <div className="container">
            <div className={style.dashboard}>
                <div className={style.leftBox}>
                    <Header menu={menu} setMenu={setMenu}/>
                    <Sidebar username={props.username} connectedUsers={props.connectedUsers} theme={props.theme} setTheme={props.setTheme}/>
                    {menu ? <MobileSidebar connectedUsers={props.connectedUsers} theme={props.theme} setTheme={props.setTheme}/> : null}
                </div>
                <div className={style.rightBox}>
                    <ChatHeader username={props.username} />
                    <Messages messages={props.messages}/>
                    <MessageForm sendMessage={props.sendMessage}/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
