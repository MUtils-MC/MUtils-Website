import React, {useEffect, useState} from "react";
import {scrollEffect} from "../../components/Effects";
import Navbar from "../../components/Navbar";
import TopScreen from "../../components/TopScreen";
import Footer from "../../components/Footer";
import ImageButton from "../../components/ImageButton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Addons() {
    const [infoBody, setInfoBody] = useState("Unable to load information")
    useEffect(scrollEffect)

    useEffect(() => {

    })

    return <>
        <Navbar current="/ch/info" highlight="Content "/>
        <TopScreen title="Challenge"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    MChallenge is an excellent tool for players who want to take their experience to the next level and makes sure to provide hours of entertainment for players of all skill levels.<br/>
                    From fun and easy modifications, over stunning world changes to hard challenges. You can find everything!
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/icons/mutils500.png"/>
            </div>

            <div className="text-image-box scroller scroller-wait">
                <ImageButton bg="/images/banner/challenge-banner.webp" to="/ch/list" name="Challenges"/>
                <ImageButton bg="/images/banner/challenge-banner.webp" to="/ch/addons" name="Addons"/>
            </div>

            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    Watch our feature trailer for more information!<br/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/DMV6GGifsug" title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>

            <div className="docs-box">
                <ReactMarkdown remarkPlugins={[remarkGfm]} children={infoBody}>
                </ReactMarkdown>
            </div>
        </div>
        <Footer />
    </>
}

export default Addons