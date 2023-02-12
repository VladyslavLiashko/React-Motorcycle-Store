import React from "react";
import "./Contacts.css";
import location from "../../assets/img/location.png";
import phone from "../../assets/img/phone.png";
import mail from "../../assets/img/mail.png";

const Contacts = (props) =>{
    return(
        <div className="contacts">
            <div className="iframe-block">
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d222877.06498958878!2d-81.23669529200512!3d29.210193604425246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s2005%20Broken%20Dream%20Blvd%20Daytona%20Beach%2C%20FL%2032122!5e0!3m2!1sru!2sua!4v1676028902334!5m2!1sru!2sua" width="100%" height="100%"  ></iframe>
            </div>
            <div className="contacts-info-block">
                <div className="contacts-info-wrapper">
                    <h1>{props.data.h1}</h1>
                    <div className="contacts-info-block-item">
                        <img src={location} alt="" />
                        <p>{props.data.adress}</p>
                    </div>
                    <div className="contacts-info-block-item">
                        <img src={phone} alt="" />
                        <p>{props.data.phone}</p>
                    </div>
                    <div className="contacts-info-block-item">
                        <img src={mail} alt="" />
                        <p>{props.data.mail}</p>
                    </div>
                    <form action="#">
                        <input type="text" placeholder="Name" className="contacts-inp" />
                        <input type="text" placeholder="Email" className="contacts-inp"/>
                        <input type="text" placeholder="Message" className="message-inp"/>
                        <input type="submit" value={"Send"} className="submit-inp" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts;