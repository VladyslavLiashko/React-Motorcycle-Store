import React from "react";
import HomePage from "../HomePage/HomePage";
import SpecialPurchase from "../SpecialPurchase/SpecialPurchase";
import WhyUs from "../WhyUs/WhyUs";

const Main =(props) =>{
    return(
        <div className="main">
            <HomePage data ={props.data.HomePage}/>
            <SpecialPurchase data ={props.data.SpecialPurchase}/>
            <WhyUs data ={props.data.WhyUs}/>
        </div>
    )
}

export default Main;