import {scrollEffect} from "../components/Effects";
import Navbar from "../components/Navbar";
import TopScreen from "../components/TopScreen";
import React, {useEffect} from "react";
import Footer from "../components/Footer";

function Timer() {
    useEffect(scrollEffect);

    return <>
        <Navbar current="/timer" highlight="Content "/>
        <TopScreen title="Timer"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    MTimer adds a fully customizable timer to your game!<br/>
                    Choose between tons of option to create the perfect timer for every moment.
                    Change the direction, toggle goals for automated stops and starts (Player/Boss Death, Empty Server, ...) or even stop the time on milliseconds¹.<br/>
                    Additionally advanced rules can be activated to freeze the world on timer pause, auto spectate players after death, instant respawns and much more!
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/icons/Timer.webp"/>
            </div>
            <div className="text-image-box scroller scroller-wait">
                <img className="box-image right" alt="MUtils Logo" src="/images/icons/configure.webp"/>
                <div className="box-text">
                    <span>You want your own custom Timer Design?<br/>
                    MTimer brings a full design editor from simple colors to complex animations and configurations! The creator is powered by </span>
                    <a href={"https://webui.advntr.dev/"} className="text-link" target={"_blank"}>MiniMessage</a>
                    <span> to make styling as easy as possible.
                    Share your own designs in our public Library with all other players or browse through them.</span>
                </div>
            </div>
            <div className="text-image-box scroller scroller-wait">
                {/*<img className="box-image" alt="MUtils Logo" src="/images/icons/red_cmd.png"/>*/}
                <div className="box-text">
                    The Workshop is not implemented yet!<br/>
                    MTimer is in BETA mode and lacks some features to be completed, please be patient!
                </div>
            </div>
            <div className="display-grid">

            </div>
        </div>
        <Footer/>
    </>
}
export default Timer