import {scrollEffect} from "../components/Effects";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import TopScreen from "../components/TopScreen";
import Footer from "../components/Footer";
import {useEffect} from "react";

function NotFound() {
    useEffect(scrollEffect);

    return <>
        <ScrollToTop />
        <Navbar current="/404" />
        <TopScreen title="404"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    The MUtils website is currently in development. If you think something should be here, just come back in near future and probably you will find some stunning content!<br/>
                    Meanwhile, simply step back or click on another link to come back to the content side.
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/peepers.webp" />
            </div>
        </div>
        <Footer/>
    </>
}

export default NotFound