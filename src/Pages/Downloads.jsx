import {scrollEffect} from "../Components/Effects";
import ScrollToTop from "../Components/ScrollToTop";
import Navbar from "../Components/Navbar";
import TopScreen from "../Components/TopScreen";
import MLogo from "../Images/mutils500.png";
import Footer from "../Components/Footer";
import {useEffect, useState} from "react";
import ImageButton, {ImageButtonLink} from "../Components/ImageButton";
import {Link} from "react-router-dom";

function Downloads() {
    useEffect(scrollEffect);

    return <>
        <ScrollToTop />
        <Navbar current="/download" />
        <TopScreen title="Downloads"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <span>
                        {"MUtils is splittet into different modules to optimize for every purpose!"}<br/>
                        {"MChallenges requires MTimer and MWorlds to work properly. By downloading our modifications you agree to "}
                    </span>
                    <a href="https://www.minecraft.net/en-us/eula" className="text-link" target="_blank">Minecraft's EULA</a>
                    <span>{" and to our "}</span>
                    <Link to="/legal/tos" className="text-link">Terms of Service</Link>
                    <span>{"!"}</span>
                </div>
                <img className="box-image" alt="MUtils Logo" src={MLogo} />
            </div>
            <div className="section-header scroller scroller-wait">MChallenges</div>
            <div className="text-image-box scroller scroller-wait">
                <ImageButton bg="https://i.imgur.com/nTDDX9F.png" to="/challenges" name="Paper Latest"/>
                <ImageButton bg="https://i.imgur.com/wUkAeLo.png" to="/worlds" name="Fabric Latest"/>
            </div>
            <div className="section-header scroller scroller-wait">Modrinth Redirects</div>
            <div className="text-image-box scroller scroller-wait">
                <ImageButtonLink bg="https://i.imgur.com/um777Xw.png" to="https://modrinth.com/mod/timer" name=" MTimer "/>
                <ImageButtonLink bg="https://i.imgur.com/um777Xw.png" to="https://modrinth.com/mod/world" name="MWorlds"/>
            </div>
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <b>Note:</b> MTimer and MWorlds is not yet released! We will do our best to release them as quick as possible...
                </div>
            </div>
        </div>
        <Footer/>
    </>
}

export default Downloads