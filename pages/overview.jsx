import Navbar from "../components/Navbar"
import TopScreen from "../components/TopScreen"
import Footer from "../components/Footer"
import React, {useEffect} from "react";
import {scrollEffect} from "../components/Effects";
import ImageButton from "../components/ImageButton";
import Link from "next/link";

function Overview() {
    useEffect(scrollEffect);

    return <>
        <Navbar current="/overview" />
        <TopScreen title="Overview"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    MUtils is an advanced Minecraft plugin & mod that brings a host of powerful modifications to the game.
                    With MUtils, players can enjoy customizable challenges, a fully customizable timer, and a world creator that can be tailored to their preferences.
                    Overall, MUtils is an excellent tool for Minecraft players who want to take their experience to the next level and makes sure to provide hours of entertainment for
                    players of all skill levels.
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/icons/mutils500.png" />
            </div>
            <div className="display-grid scroller scroller-wait">
                <ImageButton bg="/images/banner/challenge-banner.webp" to="/ch/info" name="Challenges"/>
                <ImageButton bg="/images/banner/mweb.webp" to="/mweb" name="Web"/>
                <ImageButton bg="/images/banner/timer-banner.webp" to="/timer" name="Timer"/>
            </div>
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <span>
                        {"MUtils is split into different modules. Click on a logo to learn more about it!"}<br/>
                        {"If you need help to install a module join our "}
                    </span>
                    <Link href="/discord" className="text-link">Discord Server</Link>
                    <span>{" or check out the "}</span>
                    <Link href="/qa" className="text-link">Q&A</Link>
                </div>
            </div>
        </div>
        <Footer/>
    </>
}



export default Overview