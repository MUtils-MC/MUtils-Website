import React, {useEffect, useState} from "react";
import {scrollEffect} from "../../components/Effects";
import Navbar from "../../components/Navbar";
import TopScreen from "../../components/TopScreen";
import Footer from "../../components/Footer";
import {httpGetAsync} from "../../components/WebAccess";

function Addons() {
    const [infoBody, setInfoBody] = useState({"mchallengePreviewYT": "https://www.youtube.com/embed/dQpM0Lkeh5c"})
    useEffect(scrollEffect)

    const dataUrl = "https://raw.githubusercontent.com/MUtils-MC/MUtils-Website/master/custom-data/content-links.json"
    useEffect(() => {
        httpGetAsync(dataUrl, (response) => {
            try {
                setInfoBody(JSON.parse(response))
                console.log(JSON.parse(response))
            } catch (e) {
                console.error("Failed to fetch data from " + dataUrl + "! Please contact the support")
            }
        })
    }, [])

    return <>
        <Navbar current="/ch/info" highlight="Content "/>
        <TopScreen title="Workshop"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <span>
                        The MTimer workshop is currently in testing and not yet released.
                        We do our bests to get it ready in near future!<br/>
                        <b>Coming Soon™</b>
                    </span>
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/icons/mutils500.png"/>
            </div>
        </div>
        <Footer/>
    </>
}

export default Addons