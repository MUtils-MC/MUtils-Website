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
                    MUtils provides a variety of mods & plugins to improve your Minecraft experience!<br/>
                    From gameplay changing enhancements or challenges to unique developer and admin tools, MUtils has something for everyone.<br/>
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/icons/mutils500.png"/>
            </div>
            <div className="section-header scroller scroller-wait">Gameplay</div>
            <div className="display-grid scroller scroller-wait">
                <ImageButton bg="/images/banner/challenge-banner.webp" to="/ch/info" name="Challenges" scratch={true}/>
                <ImageButton bg="/images/banner/timer-banner.webp" to="/timer" name="Timer" scratch={true}/>
                <ImageButton bg="/images/banner/veinminer.webp" to="/veinminer" name="Veinminer" scratch={true}/>
            </div>
            <div className="section-header scroller scroller-wait">Tools</div>
            <div className="display-grid scroller scroller-wait">
                <ImageButton bg="/images/banner/mweb.webp" to="/mweb" name="MWeb" scratch={true}/>
                <ImageButton bg="/images/banner/maptools.webp" to="/maptools" name="Map Tools" scratch={true}/>
                <ImageButton bg="/images/banner/mweb.webp" to="/mweb" name="MLog" scratch={true}/>
            </div>

            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <span>
                        {"MUtils is split into different modules which can communicate together. Click on a logo to learn more about it!"}<br/>
                        {"If you need help to install a module join our "}
                        <Link href="/discord" className="text-link">Discord Server</Link>
                        {" or check out the "}
                        <Link href="/help" className="text-link">Q&A</Link>
                    </span>
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/mc/command-block-white.webp"/>
            </div>
        </div>
        <Footer/>
    </>
}


export default Overview