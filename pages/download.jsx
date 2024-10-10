import {scrollEffect} from "../components/Effects";
import Navbar from "../components/Navbar";
import TopScreen from "../components/TopScreen";
import Footer from "../components/Footer";
import {useEffect} from "react";
import ImageButton, {ImageButtonLink} from "../components/ImageButton";
import Link from "next/link";

function Download() {
    useEffect(scrollEffect);

    return <>
        <Navbar current="/download"/>
        <TopScreen title="Download"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <span>
                        {"MUtils is splittet into different modules to optimize it for every purpose!"}<br/>
                        {"By downloading our modifications you agree to "}
                        <a href="https://www.minecraft.net/en-us/eula" className="text-link" target="_blank">Minecraft's EULA</a>
                        {" and to our "}
                        <Link href="/legal/tos" className="text-link">Terms of Service</Link>
                        {"!"}
                    </span>
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/icons/mutils500.png"/>
            </div>
            <div className="display-grid-small">
                {getDownloadGrid("challenge", "MUtils", "MChallenge")}
                {getDownloadGrid("timer", "MUtils", "MTimer")}
                {getDownloadGrid("veinminer", "Veinminer", "Veinminer")}
                {getDownloadGrid("mweb", "MWeb", "MWeb")}
                {getDownloadGrid("mlog", "MLog", "MLog")}
                {getDownloadGrid("maptools", "MapTools", "Map Tools")}
            </div>

        </div>
        <Footer/>
    </>
}

function getDownloadGrid(modrinth, github, title) {
    return <div>
        <div className="section-header scroller scroller-wait">{title}</div>
        <div className="display-grid-small scroller scroller-wait">
            <ImageButtonLink bg="/images/banner/modrinth.webp" to={"https://modrinth.com/project/" + modrinth} target="_blank" name="Modrinth" scratch={true} slim={true}/>
            <ImageButtonLink bg="/images/banner/github.webp" to={"https://github.com/MUtils-MC/" + github} target="_blank" name="Github" scratch={true} slim={true}/>
        </div>
    </div>
}

export default Download