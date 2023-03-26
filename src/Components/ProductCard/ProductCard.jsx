import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";


const ProductCard = (props) => {
    const navigate = useNavigate();

    let showItem = () => {
        navigate(`/Motorcycles/${props.data.id}`)
    }
    return (
        <div className="productCard">
            <div className="productCard-wrapper">
                <div className="productCard-img">
                    <img src={props.data.img} alt="" />
                </div>
                <div className="product-info">
                    <p className="product-name">{props.data.name}</p>
                    <p>{props.data.state}</p>
                </div>
                <h1>{props.data.price}</h1>
                <div className="product-info">
                    <p>{props.data.stock}</p>
                    <p>{props.data.color}</p>
                </div>
                <div className="product-btn">
                    <button onClick={showItem}>{props.data.button}</button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;