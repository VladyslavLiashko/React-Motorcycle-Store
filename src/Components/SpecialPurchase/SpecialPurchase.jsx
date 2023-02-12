import React from "react";
import "./SpecialPurchase.css";

const SpecialPurchase = (props) => {
    return (
        <div className="specialPurchase">
            <div className="specialPurchase-wrapper">
                <div className="specialPurchase-text-wrapper">
                    <h1>{props.data.h1}</h1>
                    <h2>{props.data.h2}</h2>
                    <p>{props.data.p}</p>
                </div>
            </div>
        </div>
    )
}

export default SpecialPurchase;