import React from 'react';
import style from "./User.module.css";
import { AiOutlineUser } from "react-icons/ai";

function User() {
    return (
        <li className={style.user}>
            <AiOutlineUser className={style.userIcon} />
            <p>Faris</p>
            <div className={style.activeBadge}></div>
        </li>
    )
}

export default User
