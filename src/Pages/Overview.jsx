import Navbar from "../Components/Navbar"
import TopScreen from "../Components/TopScreen"
import Footer from "../Components/Footer"
import {Link} from "react-router-dom";
import MLogo from '../Images/mutils500.png'
import React, {useEffect, useState} from "react";
import {scrollEffect} from "../Components/Effects";
import ScrollToTop from "../Components/ScrollToTop";
import ImageButton from "../Components/ImageButton";

function Overview() {
    useEffect(scrollEffect);

    return <>
        <ScrollToTop />
        <Navbar current="/overview" />
        <TopScreen title="Overview"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    Welcome to the MUtils Project!<br/>
                    We provide powerful Minecraft modifications for everyone to discover a hole new game. Our main focus is customization and sharing. Try it out yourself!
                </div>
                <img className="box-image" alt="MUtils Logo" src={MLogo} />
            </div>
            <div className="text-image-box scroller scroller-wait">
                <ImageButton bg="https://i.imgur.com/USSO1Q5.png" to="/challenges" name="Challenges"/>
                <ImageButton bg="https://i.imgur.com/USSO1Q5.png" to="/worlds" name="   Worlds   "/>
                <ImageButton bg="https://i.imgur.com/USSO1Q5.png" to="/timer" name="   Timer   "/>
            </div>
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <span>
                        {"MUtils is splittet into different modules. Click on a logo to learn more about it!"}<br/>
                        {"If you need help to install a module join our "}
                    </span>
                    <Link to="/discord" className="text-link">Discord Server</Link>
                    <span>{" or check out the "}</span>
                    <Link to="/qa" className="text-link">Q&A</Link>
                    {renderMC("")}
                </div>
            </div>
        </div>
        <Footer/>
    </>
}



export default Overview