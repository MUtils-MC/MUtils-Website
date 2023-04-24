import {scrollEffect} from "../components/Effects";
import Navbar from "../components/Navbar";
import TopScreen from "../components/TopScreen";
import React, {useEffect} from "react";

function Shop() {
    useEffect(scrollEffect);

    return <>
        <Navbar current="/shop"/>
        <TopScreen title="Support"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    MUtils is 100% community based and only survive through support from you!<br/>
                    Currently, MUtils is in BETA and premium accounts are not implemented yet. Old premium accounts still works and can access unpublished ALPHA content from our Discord.<br/>
                    For now, we hope you enjoy our BETA content and stay tuned for the future of MUtils!
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/icons/mutils500.png" />
            </div>
        </div>
    </>
}

function ShopItem(props) {
    
}

export default Shop