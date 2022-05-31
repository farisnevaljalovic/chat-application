import React from 'react';
import UsersList from '../UsersList/UsersList';
import style from "./MobileSidebar.module.css";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlinePalette, MdGroups } from "react-icons/md";

function MobileSidebar() {
    return (
        <div className={style.sidebar}>
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
                <div className={`${style.group} ${style.actionBtn}`}>
                    <MdGroups />
                    {/* <span>Group</span> */}
                </div>
            </div>
        </div>
    )
}

export default MobileSidebar
