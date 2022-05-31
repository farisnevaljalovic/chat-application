import React from 'react';
import style from "./User.module.css";
import { AiOutlineUser } from "react-icons/ai";

function User(props:{user:{id:string, username:string}}) {
    return (
        <li className={style.user}>
            <AiOutlineUser className={style.userIcon} />
            <p>{props.user.username}</p>
            <div className={style.activeBadge}></div>
        </li>
    )
}

export default User
