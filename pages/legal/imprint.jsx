import React, {useEffect} from "react";
import {scrollEffect} from "../../components/Effects";
import ScrollToTop from "../../components/ScrollToTop";
import Navbar from "../../components/Navbar";
import TopScreen from "../../components/TopScreen";
import Footer from "../../components/Footer";

function Imprint() {
    useEffect(scrollEffect);

    return <>
        <ScrollToTop />
        <Navbar current="/legal/imprint" />
        <TopScreen title="Imprint"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    All information provided only are allowed to use for legal or security concerns!<br/>
                    Any abuse of the following information is strictly forbidden and will result in legal actions.
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/icons/mutils500.png" />
            </div>

            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <b>Contact</b><br/>
                    Telephone: +49 0176/47141969<br/>
                    E-Mail: miraculixxyt@gmail.com<br/>
                    Julius Bartelheim<br/>
                    Schleindener Str. 53842 Cologne<br/><br/>
                    <b>EU-Dispute-Settlement</b><br/>
                    The Europäische Commission owns a platform for Online-Dispute-Settlement (OS): https://ec.europa.eu/consumers/odr/<br />
                    Our E-Mail can be found on top of this document.
                </div>
            </div>
        </div>
        <Footer/>
    </>
}

export default Imprint