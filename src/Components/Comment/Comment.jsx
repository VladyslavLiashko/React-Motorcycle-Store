import React from "react";
import "./Comment.css";

const Comment = (props) =>{
    return(
        <div className="comment">
            <div className="comment-img">
                <img src={props.data.img} alt="" />
            </div>
            <div className="comment-text-block">
                <h1>{props.data.name}</h1>
                <p>{props.data.text}</p>
            </div>
        </div>
    )
}

export default Comment;