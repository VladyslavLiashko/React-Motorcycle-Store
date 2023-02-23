import React from "react";
import "./Item.css";

import items from "../../data/motorcycles";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const Item = () => {


    let { productId } = useParams();
    console.log(productId);

    let item = items[productId];
    console.log(item);

    function localItem(elem) {
        localStorage.setItem(`itemImg${productId}`, elem.img)
        localStorage.setItem(`itemName${productId}`, elem.name)
        localStorage.setItem(`itemPrice${productId}`, elem.price)
    }

    // REDUX
    const dispatch = useDispatch()

    const addNum = () => {
        dispatch({ type: "ADD_NUM", payload: 1 })
    }
    const addItem = () =>{
        const product ={
            name: item.name,
            img: item.img,
            color: item.color,
            price: item.price
        }
        dispatch({type: "ADD_ITEM",payload:product} )
        addNum();
    }

    return (
        <div className="itemCard">
            <div className="img-block">
                <div className="main-img">
                    <img src={item.img} alt="" />
                </div>
                <div className="more-img">
                    <img src={item.moreImg.first} alt="" />
                    <img src={item.moreImg.second} alt="" />
                    <img src={item.moreImg.third} alt="" />
                    <img src={item.moreImg.fourth} alt="" />
                </div>
            </div>
            <div className="info-card-block">
                <h1>{item.name}</h1>
                <p className="buy-card-color">{item.color}</p>
                <p className="buy-card-stock">{item.stock}</p>
                <p className="buy-card-price">{item.price}</p>
                <div className="info-card-btns" onClick={localItem(item)}>
                    <button onClick={addItem} > Add to shopping card</button>
                </div>
            </div>
        </div>
    )
}

export default Item;