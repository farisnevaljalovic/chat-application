import React from 'react';
import Logo from '../../components/Logo/Logo';
import style from "./Login.module.css";

function Login(props: { setStatus: Function }) {

    return (
        <div className="container">
            <div className={style.box}>
                <Logo />
                <h2>Welcome</h2>
                <p>Please click the button and start conversation</p>
                <button className={style.btn} onClick={()=>props.setStatus(true)}>Get name</button>
            </div>
        </div>
    )
}

export default Login
