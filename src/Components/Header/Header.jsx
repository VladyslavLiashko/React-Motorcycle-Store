import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import Login from "../Login/Login";

const Header = (props) => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <div className="header">
            <h1>{props.data.h1}</h1>
            <div className="header-links">
                <NavLink to="/"><p>{props.data.link1}</p></NavLink>
                <NavLink to="/Motorcycles"> <p>{props.data.link2}</p> </NavLink>
                <NavLink to="/Blog"><p>{props.data.link3}</p></NavLink> 
                <NavLink to="/Contacts"><p>{props.data.link4}</p></NavLink> 
                <button onClick={()=> setMenuActive(!menuActive)}>{props.data.btn}</button>
                <Login active={menuActive} setActive={setMenuActive} />
            </div>
        </div>
    )
}

export default Header;