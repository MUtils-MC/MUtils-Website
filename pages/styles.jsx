import {scrollEffect} from "../components/Effects";
import Navbar from "../components/Navbar";
import TopScreen from "../components/TopScreen";
import Footer from "../components/Footer";
import React, {useEffect, useState} from "react";
import LoginDataCache from "../components/auth/LoginDataCache";
import DisplayBox from "../components/DisplayBox";

function Styles() {
    useEffect(scrollEffect);
    const [styles, setStyles] = useState([]);

    useEffect(async () => {
        let res = await fetch("https://api.mutils.net/account/color/getall", {
            headers: {
                "API-Version": "MUtils-API-1.1",
                "key": LoginDataCache.key,
                "id": LoginDataCache.id,
            }
        })
        console.log("Styles")
        console.log(LoginDataCache.id)
        setStyles(await res.json())
        console.log(styles)
    }, [])

    function getImg(i) {
        return <div className="style-example" style={{height: "7.5rem"}}>
            <div style={{fontWeight: "bold", fontSize: "1.6em"}}
                 dangerouslySetInnerHTML={{__html: i.color}}/>
            <div style={{fontSize: "1.2rem"}}
                 dangerouslySetInnerHTML={{__html: i.colorSec}}/>
        </div>;
    }

    return <>
        <Navbar current="/styles"/>
        <TopScreen title="Styles"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <span>Styles are unique color schemes that change the way your MUtils look!<br/>
                    You can collect more styles by participate in events on our </span>
                    <a href="https://dc.mutils.net" className="text-link" target="_blank">Discord</a>
                    <span>{" or support us by purchasing a licence or using any donating option."}<br/>{"Click on a style to find out how to get it!"}</span>
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/peepers.webp"/>
            </div>

            {styles.map(i =>
                <div key={i.name}>
                    <DisplayBox
                        key={i.type}
                        name={i.name} desc={i.desc} tags={null}
                        imgType={"RAW"} img={getImg(i)}
                    />
                </div>
            )}
        </div>
        <Footer/>
    </>
}

export default Styles