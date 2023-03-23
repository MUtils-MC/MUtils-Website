import {scrollEffect} from "../Components/Effects";
import Navbar from "../Components/Navbar";
import TopScreen from "../Components/TopScreen";
import React, {useEffect} from "react";
import Footer from "../Components/Footer";

function TimerDesigns() {
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
            <div className="display-grid">

            </div>
            <div className="text-image-box scroller scroller-wait">
                <img className="box-image right" alt="MUtils Logo" src="/images/icons/configure.webp"/>
                <div className="box-text">
                    MTimer adds a fully customizable timer to your game!<br/>
                    Choose between tons of option to create the perfect timer for every moment.
                    Change the direction, toggle goals for automated stops and starts (Player/Boss Death, Empty Server, ...) or even stop the time on milliseconds¹.<br/>
                    Additionally advanced rules can be activated to freeze the world on timer pause, auto spectate players after death, instant respawns and much more!
                </div>
            </div>
        </div>
        <Footer/>
    </>
}
export default TimerDesigns