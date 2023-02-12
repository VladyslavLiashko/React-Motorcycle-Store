import React from "react";
import "./WhyUs.css";
import img from "../../assets/img/whyUs.png";

const WhyUs = (props) => {
    return (
        <div className="whyus">
            <div className="whyus-left">
                <img src={img} alt="" />
            </div>
            <div className="whyus-right">
                <h1>{props.data.h1}</h1>
                <p>{props.data.p}</p>
                <p>{props.data.p2}</p>
            </div>
        </div>
    )
}

export default WhyUs;