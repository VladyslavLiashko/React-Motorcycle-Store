import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import Login from "../Login/Login";
import Cart from "../../assets/img/shoppingCart.png"
import { useSelector } from "react-redux";

const Header = (props) => {
    const [menuActive, setMenuActive] = useState(false);
    const num = useSelector(state => state.number.num)
    return (
        <div className="header">
            <h1>{props.data.h1}</h1>
            <div className="header-links">
                <NavLink to="/"style={{textDecoration:'none'}}><p>{props.data.link1}</p></NavLink>
                <NavLink to="/Motorcycles" style={{textDecoration:'none'}}> <p>{props.data.link2}</p> </NavLink>
                <NavLink to="/Blog" style={{textDecoration:'none'}}><p>{props.data.link3}</p></NavLink> 
                <NavLink to="/Contacts" style={{textDecoration:'none'}}><p>{props.data.link4}</p></NavLink> 
                <button onClick={()=> setMenuActive(!menuActive)}>{props.data.btn}</button>
                <div className="shop-card">
                    <NavLink to= "/Shopping-Cart" style={{textDecoration:'none'}}> <img height="40px" src={Cart}alt="" /> </NavLink>
                    <span style={{color: "yellow"}}>{num}</span>
                </div>
                
                <Login active={menuActive} setActive={setMenuActive} />
            </div>
        </div>
    )
}

export default Header;