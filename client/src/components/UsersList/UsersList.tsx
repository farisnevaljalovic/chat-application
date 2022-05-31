import React from 'react';
import style from "./UsersList.module.css";
import User from './User/User';

function UsersList() {
    return (
        <ul className={style.activeUserList}>
            <User />
        </ul>
    )
}

export default UsersList
