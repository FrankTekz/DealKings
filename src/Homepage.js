import React from "react";
import homepageImg from './images/homepage.jpg'
import Potw from "./components/Potw";

export default function Homepage(){

    return(       
        <div id="homepage" >
            <div id="intro">
                <div id="intro-text" >
                    <h1>Deals at your fingertips</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt.
                    </p>
                </div>
                <div id="hp-img" >
                    <img src={homepageImg}/>
                </div>
            </div>
            <Potw/>
        </div> 
        
    )
}