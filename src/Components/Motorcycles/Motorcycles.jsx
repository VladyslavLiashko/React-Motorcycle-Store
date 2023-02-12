import React, { useState } from "react";
import "./Motorcycles.css";
import cards from "../../data/motorcycles"
import ProductCard from "../ProductCard/ProductCard";

const Motorcycles = () => {
    

    const [value, setValue] = useState("");

    const filtredProduct = cards.filter(product =>{
        return product.name.toLowerCase().includes(value.toLowerCase())
    })

    let card = filtredProduct .map(pr => <ProductCard data={pr} />)
    return (
        <div className="motorcycles">
            <div className="motorcycles-items">
                <div className="search-products">
                    <h1>Search inventory</h1>
                    <form action="#">
                        <input type="text" placeholder="Serch Motorcycle..." onChange={(event) => setValue(event.target.value)} />
                    </form>
                </div>
                <div className="products-block">
                    {card}
                </div>
            </div>
        </div>
    )
}

export default Motorcycles;