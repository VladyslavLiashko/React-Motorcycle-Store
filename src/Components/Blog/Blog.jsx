import React, { useState } from "react";
import "./Blog.css";
import Comment from "../Comment/Comment";
import icon from "../../assets/img/comment6.png"

import comment from "../../data/blog";



const OurBlog = () => {
    const [comments, SetComments] = useState(comment);

    const [currentComment, setCurrentComment] = useState('');

    const Handler = (e) =>{
        let newValue = e.currentTarget.value
        setCurrentComment(newValue)
        
    }

    const addComment = () =>{
        const newComment ={
                id:7,
                name: localStorage.getItem('name'),
                text: currentComment,
                img: icon
        }
        SetComments([newComment, ...comment])
        setCurrentComment('')
    }
    let item = comments.map(comm => <Comment data={comm} />)
    return (
        <div className="ourBlog">
            <div className="blog-comments">
                <div className="add-comment">
                    <h1>Our Blog</h1>
                    <form action="#">
                        <input type="text" id="comment-inp" placeholder="Enter your text..." onChange={Handler} value={currentComment} />
                        <input type="button" id="comment-btn" value={"Submit"} onClick ={addComment} />
                    </form>
                </div>
                <div className="all-comments">
                    {item}
                </div>
            </div>
        </div>
    )
}

export default OurBlog;