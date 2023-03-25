import {scrollEffect} from "../Components/Effects";
import ScrollToTop from "../Components/ScrollToTop";
import Navbar from "../Components/Navbar";
import TopScreen from "../Components/TopScreen";
import Footer from "../Components/Footer";
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