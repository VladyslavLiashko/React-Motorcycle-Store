import React, { useRef, useState } from "react";
// import CheckIcon from '@mui/icons-material/Check';

import "./Login.css";

const Login = ({ active, setActive }) => {

    const [show, setShow] = useState(true);

    let fr = document.forms[0]
    console.log(fr);
    const SetInfo = () => {
        localStorage.setItem('name', fr.loginName.value);
        localStorage.setItem('mail', fr.loginMail.value);
        localStorage.setItem('pass', fr.loginPass.value);

        console.log(localStorage.getItem('name'));
        console.log(localStorage.getItem('mail'));
        console.log(localStorage.getItem('pass'));

        fr.loginName.value = "";
        fr.loginMail.value = "";
        fr.loginPass.value = "";

        setShow(!show)

    }
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className="menu-wrapper">
                <div className="login-wrapper" onClick={e => e.stopPropagation()}>
                    <div className="login-block">
                        {
                            show ? <div className="login-block-wrapper">
                            <h1>Login</h1>
                            <form action="#">
                                <input type="text" name="loginName" id="login-name" placeholder="Name" />
                                <input type="email" name="loginMail" id="login-mail" placeholder="Email" />
                                <input type="password" name="loginPass" id="login-pass" placeholder="Password" />
                                <input type="button" id="login-btn" value={"Submit"} onClick={SetInfo} />
                            </form>
                        </div> :<h2>Now you are logined!</h2>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;