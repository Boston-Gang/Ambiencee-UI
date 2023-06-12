import React,{useState} from "react";
import img1 from "../Assests/images/img1.jpg"
import img7 from "../Assests/images/img7.jpg"
import img5 from "../Assests/images/img5.jpg"
import img6 from "../Assests/images/img6.jpg"
import img2 from "../Assests/images/img2.jpg"
import img3 from "../Assests/images/img3.jpg"
import img4 from "../Assests/images/img4.jpg"


export default function Menu(props){
    return(
        <div className="menu">
            
        <div className="menu-container" id="menu">
        <div className="info">
        <div className="menu-title">
            Menu
            </div>
        Search for an idea
        What do you want to try next? Think of something you’re into—like “easy chicken dinner”—and see what you find.
        Explore
        </div>
        <div className="menu-image-container">
        <div className="menu-images">
            <span>
            <ul>
                <li>
                <img src={img1} className="menu-img1"/>
                </li>
                <li>
                <img src={img2} className="menu-img2"/>
                </li>
                <li>
                <img src={img3} className="menu-img3"/>
                </li>
                <li>
                <img src={img4} className="menu-img4"/>
                </li>
                <li>
                <img src={img5} className="menu-img5"/>
                </li>
                <li>
                <img src={img6} className="menu-img6"/>
                </li>
                <li>
                <img src={img7} className="menu-img7"/>
                </li>
            </ul>
            </span>
        </div>
        <div className="menu-images">
            <span>
            <ul>
                <li>
                <img src={img1} className="menu-img1"/>
                </li>
                <li>
                <img src={img2} className="menu-img2"/>
                </li>
                <li>
                <img src={img3} className="menu-img3"/>
                </li>
                <li>
                <img src={img4} className="menu-img4"/>
                </li>
                <li>
                <img src={img5} className="menu-img5"/>
                </li>
                <li>
                <img src={img6} className="menu-img6"/>
                </li>
                <li>
                <img src={img7} className="menu-img7"/>
                </li>
            </ul>
            </span>
        </div>
        </div>
       </div>
       </div>
    )
}