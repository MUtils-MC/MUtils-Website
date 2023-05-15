import Navbar from "../../components/Navbar";
import TopScreen from "../../components/TopScreen";
import React, {useEffect} from "react";
import Footer from "../../components/Footer";
import {scrollEffect} from "../../components/Effects";



function Addons() {
    useEffect(scrollEffect)

    return <>
        <Navbar current="/ch/addons" highlight="Content "/>
        <TopScreen title="Addons"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <span>Browse through all available MChallenge addons to add new user made challenges or mods to MUtils!<br/>
                    You can create your own addons by using our </span>
                    <a href="https://github.com/MUtils-MC/MChallenge-Addon" className="text-link" target="_blank">MChallenge API template</a>
                    <span> and open a ticket on our </span>
                    <a href="https://dc.mutils.net" className="text-link" target="_blank">Discord server</a>
                    <span>. Using addons come with no warranty to work like expected!</span>
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/icons/mutils500.png"/>
            </div>
        </div>
        <Footer/>
    </>
}

export default Addons