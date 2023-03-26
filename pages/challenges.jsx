import Navbar from "../components/Navbar";
import TopScreen from "../components/TopScreen";
import Footer from "../components/Footer";
import React, {useEffect, useState} from "react";
import {scrollEffect} from "../components/Effects"
import DisplayBox from "../components/DisplayBox";
import Tags from "../components/Variables/Tags";
import Popup from "reactjs-popup";

const yaml = require('js-yaml');
const dataUrl = "https://raw.githubusercontent.com/MiraculixxT/MUtils/master/challenges/data/challenges.json"
const langUrl = "https://raw.githubusercontent.com/MiraculixxT/MUtils/master/challenges/data/language/en_US.yml"

function Challenges() {
    const [challengePanels, setChallengePanels] = useState([]);
    const [languageData, setLanguageData] = useState([]);

    useEffect(scrollEffect);

    useEffect(() => {
        console.log(challengePanels)
        if (challengePanels.length < 1) {
            console.info("Request Challenges...")
            httpGetAsync(dataUrl, (response) => {
                console.info("Challenge data received! Fetching it...")
                try {
                    setChallengePanels(JSON.parse(response))
                } catch (e) {
                    console.error("Failed to fetch data from " + dataUrl + "! Please contact the support")
                }
            })
        }
        if (languageData.length < 1) {
            console.info("Request language data...")
            httpGetAsync(langUrl, (response) => {
                console.info("Language data received! Fetching it...")
                try {
                    setLanguageData(yaml.load(response))
                } catch (e) {
                    console.error("Failed to fetch language data from " + dataUrl + "! Please contact the support")
                }
            })
        }
    }, []);

    function getChallengeBoxes(data, lang) {
        if (data == null || data.isEmpty || lang == null || lang["items"] == null)
            return <DisplayBox name="Unknown" desc="Failed to load Challenges!"/>
        const langData = lang["items"]["ch"]
        return data.map(function (entry) {
            const icon = entry["icon"]
            let image = icon
            let type = "RENDER"
            if (icon === "player_head") {
                image = "https://mc-heads.net/head/" + entry["texture"]
                type = "URL"
            }
            const key = entry["key"]
            let langItem = langData[key]
            if (langItem == null) langItem = {"n": key, "l": key}
            return (<DisplayBox name={langItem["n"]} desc={langItem["l"].replaceAll("<br>", " ")} tags={entry["tags"]}
                                version={entry["version"]} img={image} imgType={type} key={key}/>)
        })
    }

    return <>
        <Navbar current="/challenges" highlight="Content "/>
        <TopScreen title="Challenge"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    MChallenges is the largest collection of Minecraft Challenges!<br/>
                    Each Challenge is a separated game modification with plenty customization options.<br/>
                    Some modifications can only be used with MUtils Premium but all common challenges from popular
                    plugins are <b>free to use</b>!
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/icons/mutils500.png"/>
            </div>
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <span>Each Challenge has Tags (</span><Tag name="FREE"/><span>) to help you finding the best! Hover over them to get more information.<br/>
                    Challenges have special options to change how the challenge work completely. Check them out!</span>
                </div>
            </div>
            <div className="display-grid">
                {getChallengeBoxes(challengePanels, languageData)}
            </div>
        </div>
        <Footer/>
    </>
}

function Tag(prop) {
    return <Popup trigger={open => (<img src={Tags.tags[prop.name].img} alt={prop.name} style={{borderColor: Tags.tags[prop.name].color}} className="display-tag tag-text"/>)}
                  position="top center"
                  on={['hover', 'focus']}
                  closeOnDocumentClick
                  contentStyle={{textAlign:"center"}}>
        <span >Tag ⇒ {prop.name}</span>
    </Popup>
}

function httpGetAsync(url, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true);
    // xmlHttp.setRequestHeader("User-Agent", "MUtils-API-1.1")
    // xmlHttp.setRequestHeader("MType", "lib/get/pub/timer")
    xmlHttp.send(null);
}

export default Challenges;