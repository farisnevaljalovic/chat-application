import React from "react";
import style from "./MobileSidebar.module.css";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlinePalette } from "react-icons/md";
import User from "../UsersList/User";

function MobileSidebar(props: {
  theme: string;
  setTheme: Function;
  connectedUsers: { id: string; username: string }[];
}) {
  const allConnectedUsers = props.connectedUsers.map((user) => (
    <User key={user.id} user={user} />
  ));
  async function logout() {
    localStorage.removeItem("user");
    window.location.reload();
  }
  return (
    <div className={style.sidebar}>
      <div className={style.activeUsers}>
        <h3>Active User</h3>
        <ul className={style.activeUserList}>
          {allConnectedUsers.length < 1
            ? "No active users yet"
            : allConnectedUsers}
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

export default MobileSidebar;
