import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import style from "./Login.module.css";

function Login(props: { getName: Function }) {
    const createNewName = () => {
        let first = '';
        let char = '';
        let num = '';
        let firstLetter = 'AEIOUaeiou';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let numbers = '1234567890';
        
        first += firstLetter.charAt(Math.floor(Math.random() * firstLetter.length));

        for (let i = 0; i < 4; i++) {
            char += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        for (let i = 0; i < 2; i++) {
            num += numbers.charAt(Math.floor(Math.random() * numbers.length))
        }
        return props.getName(`${first}${char}-${num}`);
    };
    
    
    return (
        <div className="container">
            <div className={style.box}>
                <Logo />
                <h2>Welcome</h2>
                <p>Please click the button and start conversation</p>
                <button className={style.btn} onClick={createNewName}>Get name</button>
            </div>
        </div>
    )
}

export default Login
