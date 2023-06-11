import React, {useEffect, useState} from "react";
import Link from "next/link";
import Head from "next/head";


function Index() {
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
        <Head>
            <title>MUtils</title>
        </Head>
        <div className="main-container">
            <div className="main-bg" style={{transform: offset + " scale(1.1)"}}/>
            <div className="main-content">
                <center>
                    <img src="/images/icons/mutils500.png" alt="MUtils Logo" height="135px"/>
                </center>
                <div className="text-content">
                    <h1 className="main-header">MUtils Home</h1>
                    <p className="main-text">Advanced Minecraft modifications for your server and client!</p>
                    <Link className="main-button" href="/overview">Feature Overview</Link><span> </span>
                    <Link className="main-button" href="/ch/list">Challenge List</Link><span> </span>
                    <Link className="main-button" href="/discord">Discord Support</Link>
                    <br/>
                    <Link className="main-button" href="/download">{"< Download >"}</Link>
                </div>
            </div>
            <div className="main-footer">
                MUtils - Copyright 2022 © All rights reserved<br/>
                <Link className="footer-link" href="/legal/privacy">Privacy </Link>
                -
                <Link className="footer-link" href="/legal/imprint"> Imprint</Link>
            </div>
        </div>
    </>
}

export default Index;