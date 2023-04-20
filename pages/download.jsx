import {scrollEffect} from "../components/Effects";
import Navbar from "../components/Navbar";
import TopScreen from "../components/TopScreen";
import Footer from "../components/Footer";
import {useEffect, useState} from "react";
import ImageButton, {ImageButtonLink} from "../components/ImageButton";
import Link from "next/link";

function Download() {
    useEffect(scrollEffect);

    return <>
        <Navbar current="/download" />
        <TopScreen title="Download"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <span>
                        {"MUtils is splittet into different modules to optimize it for every purpose!"}<br/>
                        {"MChallenges requires MTimer and MWorlds to work properly. By downloading our modifications you agree to "}
                    </span>
                    <a href="https://www.minecraft.net/en-us/eula" className="text-link" target="_blank">Minecraft's EULA</a>
                    <span>{" and to our "}</span>
                    <Link href="/legal/tos" className="text-link">Terms of Service</Link>
                    <span>{"!"}</span><br/>
                    <span>To use Premium content or access private & public workshops you need to install MBridge</span>
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/icons/mutils500.png" />
            </div>
            <div className="section-header scroller scroller-wait">MChallenges</div>
            <div className="text-image-box scroller scroller-wait">
                <ImageButton bg="https://i.imgur.com/nTDDX9F.png" to="https://static.mutils.de/files/latest/MUtils-Challenge.jar" target="_blank" name="Paper Latest"/>
                <ImageButton bg="https://i.imgur.com/wUkAeLo.png" to="/404" name="Fabric Latest"/>
            </div>
            <div className="section-header scroller scroller-wait">MTimer</div>
            <div className="text-image-box scroller scroller-wait">
                <ImageButton bg="https://i.imgur.com/nTDDX9F.png" to="https://modrinth.com/plugin/timer" name="Paper Latest"/>
                <ImageButton bg="https://i.imgur.com/wUkAeLo.png" to="https://modrinth.com/mod/timer" name="Fabric Latest"/>
            </div>
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <b>Note:</b> MTimer and MWorld is not yet released! We will do our best to release them as soon as possible...
                </div>
            </div>
        </div>
        <Footer/>
    </>
}

export default Download