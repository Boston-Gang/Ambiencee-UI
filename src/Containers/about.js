import React,{useState} from "react";
import img1 from "../Assests/images/img1.jpg"
import img2 from "../Assests/images/img7.jpg"
import img3 from "../Assests/images/img5.jpg"
import img4 from "../Assests/images/img6.jpg"

export default function About(props){
    return(
        <div className="about">
            <div className="about-title">
            About Us
            </div>
        <div className="about-container" id="about">
        <div className="info">
        Search for an idea
        What do you want to try next? Think of something you’re into—like “easy chicken dinner”—and see what you find.
        Explore
    </div>
        <div className="about-images">
            <img src={img1} className="about-img1"/>
            <img src={img2} className="about-img2"/>
            <img src={img3} className="about-img3"/>
            <img src={img4} className="about-img4"/>
        </div>
       </div>
       </div>
    )
}