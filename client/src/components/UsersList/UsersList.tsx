import React from 'react';
import style from "./UsersList.module.css";
import User from './User/User';

function UsersList(props:{connectedUsers: {id:string, username:string}[]}) {
    return (
        <ul className={style.activeUserList}>
            {/* {props.connectedUsers.map(user => (
                <User key={user.id} user={user} />
            ))} */}
        </ul>
    )
}

export default UsersList
