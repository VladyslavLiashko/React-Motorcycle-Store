import React from "react";

import "./BucketItem.css";

export const BucketItem = (props) =>{
    return(
        <div className="bucketItem">
            <div className="bucket-item-wrapper">
                <div className="bucketImg">
                    <img src={props.data.img} alt="#" />
                </div>
                <div className="bucket-info">
                    <h1>{props.data.name}</h1>
                    <p>{props.data.color}</p>
                    <p className="bucket-price">{props.data.price}</p>
                </div>
            </div>
        </div>
    )
}