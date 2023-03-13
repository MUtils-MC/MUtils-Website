import "../Styles/page-main.css"
import logo from "../Images/mutils500.png"
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import ScrollToTop from "../Components/ScrollToTop";


function Main() {
    const [offset, setOffset] = useState("translate3d(0, 0, 0)");

    useEffect(() => {
        const windowWidth = window.innerWidth / 2
        const windowHeight = window.innerHeight

        const onMove = (e) => {
            const mouseX = e.clientX / windowWidth
            const mouseY = e.clientY / windowHeight
            setOffset(`translate3d(-${mouseX}%, -${mouseY}%, 0)`)
        }
        window.addEventListener("pointermove", onMove)
        
        return () => {
            window.removeEventListener("pointermove", onMove)
        };
    }, []);

    return <>
        <div className="main-container">
            <div className="main-bg" style={{transform: offset + " scale(1.1)"}}/>
            <div className="main-content">
                <center>
                    <img src={logo} alt="MUtils Logo" height="135px"/>
                </center>
                <div className="text-content">
                    <h1 className="main-header">MUtils Home</h1>
                    <p className="main-text">Advanced Minecraft modifications for your server and client!</p>
                    <Link className="main-button" to="/overview">Feature Overview</Link><span> </span>
                    <Link className="main-button" to="/challenges">Challenge List</Link><span> </span>
                    <Link className="main-button" to="/discord">Discord Support</Link>
                    <br/>
                    <Link className="main-button" to="/download">{"< Downloads >"}</Link>
                </div>
            </div>
            <div className="main-footer">
                MUtils - Copyright 2022 © All rights reserved<br/>
                <Link className="footer-link" to="/legal/privacy">Privacy </Link>
                -
                <Link className="footer-link" to="/legal/imprint"> Imprint</Link>
            </div>
        </div>
    </>
}

export default Main;