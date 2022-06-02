import React from "react";
import style from "./Logo.module.css";
import { AiOutlineWechat } from "react-icons/ai";

function Logo() {
  return (
    <div className={style.logo}>
      <AiOutlineWechat />
    </div>
  );
}

export default Logo;
