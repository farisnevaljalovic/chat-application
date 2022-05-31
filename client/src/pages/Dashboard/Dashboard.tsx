import React, { useState } from 'react';
import style from "./Dashboard.module.css";
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import Messages from '../../components/Messages/Messages';
import MessageForm from '../../components/MessageForm/MessageForm';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import MobileSidebar from '../../components/MobileSidebar/MobileSidebar';

function Dashboard() {
    const [menu, setMenu] = useState(false);
    return (
        <div className="container">
            <div className={style.dashboard}>
                <div className={style.leftBox}>
                    <Header menu={menu} setMenu={setMenu}/>
                    <Sidebar />
                    {menu? <MobileSidebar /> : null}
                </div>
                <div className={style.rightBox}>
                    <ChatHeader />
                    <Messages />
                    <MessageForm />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
