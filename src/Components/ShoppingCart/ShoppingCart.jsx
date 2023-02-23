import React from 'react';
import { useSelector } from 'react-redux';
import "./ShoppingCart.css";
import { BucketItem } from '../BucketItem/BucketItem';


const ShoppingCart = () =>{
    const item = useSelector(state => state.items.items);
    return(
        <div className="shoppingCart">

            {item.length>0 ? <div className='shopping-products'> {item.map(pr => <BucketItem data ={pr}/>)}</div>
                :
                 <div>Товаров в корзине нет</div>}
        </div>
    )
}

export default ShoppingCart;