import React from "react";
import style from "./Sidebar.module.css";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlinePalette } from "react-icons/md";
import User from "../UsersList/User";

function Sidebar(props: {
  theme: string;
  setTheme: Function;
  username: string;
  connectedUsers: { id: string; username: string }[];
}) {
  async function logout() {
    localStorage.removeItem("user");
    window.location.reload();
  }
  return (
    <div className={style.sidebar}>
      <div className={style.groupBox}>
        <h2>Group chat</h2>
        <h3>
          Your name: <span>{props.username}</span>
        </h3>
      </div>
      <div className={style.activeUsers}>
        <h3>Active User</h3>
        <ul className={style.activeUserList}>
          {props.connectedUsers.length < 1
            ? "No active users yet"
            : props.connectedUsers.map((user, index) => (
                <User user={user} key={index} />
              ))}
        </ul>
      </div>
      <div className={style.actionBtns}>
        <div className={`${style.logout} ${style.actionBtn}`} onClick={logout}>
          <AiOutlineLogout />
        </div>
        <div
          className={`${style.themeSettings} ${style.actionBtn}`}
          onClick={() =>
            props.setTheme(props.theme === "light" ? "dark" : "light")
          }>
          <MdOutlinePalette />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
