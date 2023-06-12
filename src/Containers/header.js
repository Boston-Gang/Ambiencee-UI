import React,{useState} from "react";
import logo from "../Assests/images/logo.png"


export default function Header(props){

    const {isAtTop} = props;

    

    return(
       <div className={isAtTop?"header-top":"header-scroll"}>
        <div className="nav">
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </div>
        <img src = {logo} className="logo"></img>
        <div className="nav">
            <ul>
                <li>Menu</li>
                <li>Contact Us</li>
            </ul>
        </div>
       </div>
    )
}