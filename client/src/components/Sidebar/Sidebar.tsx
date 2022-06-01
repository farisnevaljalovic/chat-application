import React from 'react';
import style from "./Sidebar.module.css";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlinePalette } from "react-icons/md";
import UsersList from '../UsersList/UsersList';
import User from '../UsersList/User/User';
import { setSyntheticLeadingComments } from 'typescript';


function Sidebar(props: { theme: string, setTheme: Function, username: string, connectedUsers: { id: string, username: string }[] }) {
    const allConnectedUsers = props.connectedUsers.map(user => (
        <User key={user.id} user={user} />
    ))
    
    return (
        <div className={style.sidebar}>
            <div className={style.groupBox}>
                <h2>Group chat</h2>
                <h3>Your name: <span>{props.username}</span></h3>
            </div>
            <div className={style.activeUsers}>
                <h3>Active User</h3>
                {/* <UsersList connectedUsers={props.connectedUsers}/> */}
                <ul className={style.activeUserList}>
                    {allConnectedUsers.length < 1? 'No active users yet' : allConnectedUsers}
                </ul>
            </div>
            <div className={style.actionBtns}>
                <div className={`${style.logout} ${style.actionBtn}`}>
                    <AiOutlineLogout />
                    {/* <span>Logout</span> */}
                </div>
                <div className={`${style.themeSettings} ${style.actionBtn}`} onClick={()=> props.setTheme(props.theme === 'light' ? 'dark': 'light')}>
                    <MdOutlinePalette />
                    {/* <span>Palette</span> */}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
