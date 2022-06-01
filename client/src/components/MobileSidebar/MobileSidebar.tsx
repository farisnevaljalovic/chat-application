import React from 'react';
import UsersList from '../UsersList/UsersList';
import style from "./MobileSidebar.module.css";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlinePalette, MdGroups } from "react-icons/md";
import User from '../UsersList/User/User';

function MobileSidebar(props: { theme:string, setTheme:Function, connectedUsers: { id: string, username: string }[] }) {
    const allConnectedUsers = props.connectedUsers.map(user => (
        <User key={user.id} user={user} />
    ))
    return (
        <div className={style.sidebar}>
            <div className={style.activeUsers}>
                <h3>Active User</h3>
                {/* <UsersList connectedUsers={props.connectedUsers}/> */}
                <ul className={style.activeUserList}>
                    {allConnectedUsers.length < 1? 'No active users yet' : allConnectedUsers}
                </ul>
            </div>
            <div className={style.actionBtns}>
                <div className={`${style.logout} ${style.actionBtn}`}>
                    <a href='/'><AiOutlineLogout /></a>
                    
                    {/* <span>Logout</span> */}
                </div>
                <div className={`${style.themeSettings} ${style.actionBtn}`} onClick={()=> props.setTheme(props.theme === 'light' ? 'dark': 'light')}>
                    <MdOutlinePalette />
                    {/* <span>Palette</span> */}
                </div>
                {/* <div className={`${style.group} ${style.actionBtn}`}>
                    <MdGroups />
                    
                </div> */}
            </div>
        </div>
    )
}

export default MobileSidebar
