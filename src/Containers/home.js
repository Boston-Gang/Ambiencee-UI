import React,{useEffect, useState} from "react";
import About from "./about";
import Menu from "./menu";


export default function Home(props){
    const[header1,setHeader1] = useState(["Chinese","Continetal","Desi","Italian"]);
    const[headerIndex,setHeaderIndex] = useState(0)

    useEffect(()=>{
        const interval = setInterval(() => {
            if(headerIndex>=header1.length-1){
                setHeaderIndex(0)
            }
            else{
                setHeaderIndex(headerIndex + 1 )
            }
          }, 10000);
          return () => clearInterval(interval);
    })
   

    return(
        <>
        <div className="home" id ="home">
            <div className="home_header">
                <div>
                We are here to Serve the Best
                </div>
                <div className="changingHeader">
                    <span>
                        {header1[headerIndex]}</span>
                </div>
            </div>
            <div>
            </div>
        </div>
        <About/>
        <Menu/>
        </>
    )
}