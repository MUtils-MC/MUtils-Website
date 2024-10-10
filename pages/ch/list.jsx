import Navbar from "../../components/Navbar";
import TopScreen from "../../components/TopScreen";
import Footer from "../../components/Footer";
import React, {useEffect, useState} from "react";
import {scrollEffect} from "../../components/Effects"
import DisplayBox from "../../components/DisplayBox";
import Tags from "../../components/Variables/Tags";
import Popup from "reactjs-popup";
import {httpGetAsync} from "../../components/WebAccess";

const yaml = require('js-yaml');
const dataUrl = "https://raw.githubusercontent.com/MUtils-MC/MChallenge/master/data/challenges.json"
const langUrl = "https://raw.githubusercontent.com/MUtils-MC/MChallenge/master/data/language/mchallenge/en.yml"

function List() {
    const [challengePanels, setChallengePanels] = useState([]);
    const [languageData, setLanguageData] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(scrollEffect);

    useEffect(() => {
        console.log(challengePanels)
        if (challengePanels.length < 1) {
            console.info("Request List...")
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

        const url = new URL(window.location.href)
        const params = url.searchParams
        if (params.get("search") != null) {
            setFilter(params.get("search"))
        }
    }, []);

    function getChallengeBoxes(data, lang) {
        if (data == null || data.isEmpty || lang == null || lang["items"] == null)
            return <DisplayBox name="Unknown" desc="Failed to load List!"/>
        const langData = lang["items"]["ch"]
        const dataArray = data.map(function (entry) {
            let image
            let type
            if (entry["item"] != null) {
                image = entry["item"]
                type = "ITEM"
            } else if (entry["block"] != null) {
                image = entry["block"]
                type = "BLOCK"
            } else {
                image = "https://mc-heads.net/head/" + entry["head"]
                type = "URL"
            }
            const key = entry["key"]
            let highlightClass = ""
            if (entry["new"] === true) highlightClass = "challenge-new"
            let langItem = langData[key]
            if (langItem == null) langItem = {"n": key, "l": key}
            const tags = entry["tags"]
            const upperFilter = filter.toUpperCase()
            if (upperFilter != null && (!langItem.n.toUpperCase().includes(upperFilter) && !langItem.l.toUpperCase().includes(upperFilter) && !tags.includes(upperFilter))) return;
            return (<DisplayBox name={langItem["n"]} desc={langItem["l"].replaceAll("<br>", " ")} tags={tags}
                                version={entry["version"]} img={image} imgType={type} key={key} highlight={highlightClass}/>)
        })
        return dataArray
    }

    function updateParams(filter) {
        const url = new URL(window.location.href)
        const params = url.searchParams
        if (filter.length > 0) params.set("search", filter); else params.delete("search")
        history.replaceState({}, '', url)
    }

    return <>
        <Navbar current="/ch/list" highlight="Content "/>
        <TopScreen title="Challenges"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <span>
                        MChallenges is the largest collection of Minecraft Challenges!<br/>
                    Each Challenge is a separated game modification with plenty customization options.<br/>
                    Some modifications can only be used with MUtils Premium but all common challenges from popular
                    plugins are <b>free to use</b>!
                    </span>
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/icons/mutils500.png"/>
            </div>
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <div>
                        <span>Each Challenge has Tags (</span><Tag name="FREE"/><span>) to help you finding the best! Hover over them to get more information.<br/>
                    Modifications have special options to change how the challenge work completely. Check them out!</span>
                    </div>
                </div>
            </div>
            <div className="docs-box">
                <textarea className="text-area text-area-short" placeholder="Search a challenge" maxLength="20" value={filter} onChange={(e) => {
                    let value = e.target.value
                    updateParams(value)
                    setFilter(value)
                }}/>
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
                  contentStyle={{textAlign: "center"}}>
        <span>Tag ⇒ {prop.name}</span>
    </Popup>
}

export default List;