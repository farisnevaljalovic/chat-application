import React from "react";
import Logo from "../Logo/Logo";
import style from "./Header.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header(props: { menu: boolean; setMenu: Function }) {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Logo />
        <h1 className={style.logoTitle}>Chat</h1>
      </div>
      <div className={style.menu}>
        {!props.menu ? (
          <AiOutlineMenu onClick={() => props.setMenu(true)} />
        ) : (
          <AiOutlineClose onClick={() => props.setMenu(false)} />
        )}
      </div>
    </div>
  );
}

export default Header;
