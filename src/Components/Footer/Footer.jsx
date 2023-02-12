import React from "react";
import "./Footer.css";
import instagram from "../../assets/img/instagram.png";
import facebook from "../../assets/img/facebook.png";
import linkedin from "../../assets/img/linkedin.png";
import youtube from "../../assets/img/youtube.png";

const Footer = (props) => {
    return (
        <div className="footer">
            <div className="footer-main">
                <div className="footer-block">
                    <h1>{props.data.logo}</h1>
                    <p>{props.data.adress}</p>
                    <p>{props.data.phone}</p>
                </div>
                <div className="footer-block">
                    <ul>
                        <li>{props.data.link1}</li>
                        <li>{props.data.link2}</li>
                        <li>{props.data.link3}</li>
                        <li>{props.data.link4}</li>
                        <li>{props.data.link5}</li>
                    </ul>
                </div>
                <div className="footer-block">
                    <ul>
                        <li>{props.data.link6}</li>
                        <li>{props.data.link7}</li>
                        <li>{props.data.link8}</li>
                        <li>{props.data.link9}</li>
                        <li>{props.data.link10}</li>
                    </ul>
                </div>
                <div className="footer-block">
                    <h1>{props.data.h1}</h1>
                    <p>{props.data.adress}</p>
                    <p>{props.data.phone}</p>
                    <p>{props.data.open}</p>
                </div>
            </div>
            <div className="footer-last">
                <p>{props.data.last}</p>
                <div className="media">
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={youtube} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer;