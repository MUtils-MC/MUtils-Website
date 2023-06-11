import Navbar from "../../components/Navbar";
import TopScreen from "../../components/TopScreen";
import React, {useEffect, useState} from "react";
import Footer from "../../components/Footer";
import {scrollEffect} from "../../components/Effects";
import {httpGetAsync} from "../../components/WebAccess";
import DisplayBox from "../../components/DisplayBox";
import AddonBox from "../../components/AddonBox";

const addonsData = "https://raw.githubusercontent.com/MUtils-MC/MUtils-Website/master/custom-data/mchallenge-addons.json"

function Addons() {
    const [addonsPanel, setAddonsPanel] = useState([])
    useEffect(scrollEffect)

    useEffect(() => {
        httpGetAsync(addonsData, (body) => {
            setAddonsPanel(JSON.parse(body))
            console.log(JSON.parse(body))
        })
    }, [])

    function generateAddonPanels(data) {
        if (!data) {
            return (<DisplayBox/>)
        }
        return data.map((addon) => {
            const name = addon["name"] || "Unknown Name"
            const desc = addon["description"] || "Unknown Description"
            const image = addon["image"] || ""
            const tags = addon["tags"] || []
            const version = addon["version"] || {"from": "1.18", "to": "1.19.4"}
            const authors = addon["authors"] || "Unknown"

            return (<AddonBox name={name} desc={desc} tags={tags} authors={authors} downloads={addon["downloads"]}
                                version={version} img={image} loader={"Paper"} banner={addon["banner"]}/>)
        })
    }


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
                    <span> to submit it. Using addons come with no warranty to work like expected!</span>
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/mc/Mira_Website_Icon.png"/>
            </div>
            <div className="display-grid">
                {generateAddonPanels(addonsPanel)}
            </div>
        </div>
        <Footer/>
    </>
}

export default Addons