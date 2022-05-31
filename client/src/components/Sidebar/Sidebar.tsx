import React from 'react';
import style from "./Sidebar.module.css";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlinePalette } from "react-icons/md";
import UsersList from '../UsersList/UsersList';

function Sidebar(props:{username:string}) {
    return (
        <div className={style.sidebar}>
            <div className={style.groupBox}>
                <h2>Group chat</h2>
                <h3>Your name: <span>{props.username}</span></h3>
            </div>
            <div className={style.activeUsers}>
                <h3>Active User</h3>
                <UsersList />
            </div>
            <div className={style.actionBtns}>
                <div className={`${style.logout} ${style.actionBtn}`}>
                    <AiOutlineLogout />
                    {/* <span>Logout</span> */}
                </div>
                <div className={`${style.themeSettings} ${style.actionBtn}`}>
                    <MdOutlinePalette />
                    {/* <span>Palette</span> */}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
