import React from 'react';
import style from "./UsersList.module.css";
import User from './User/User';

function UsersList() {
    return (
        <ul className={style.activeUserList}>
            {/* {props.connectedUsers.map(user => (
                // <User key={user.id} user={user} />
                <h1>faris</h1>
            ))} */}
        </ul>
    )
}

export default UsersList
