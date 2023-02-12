import React from "react";
import "./HomePage.css";
import { NavLink } from "react-router-dom";

const HomePage = (props) => {
    return (
        <div className="homepage">
            <div className="homepage-wrapper">
                <h1>{props.data.h1}</h1>
                <p>{props.data.p}</p>
                <NavLink to= "/Motorcycles"><div>{props.data.link}</div></NavLink> 
            </div>
        </div>
    )
}

export default HomePage;