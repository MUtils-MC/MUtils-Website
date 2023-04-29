import {scrollEffect} from "../components/Effects";
import Navbar from "../components/Navbar";
import TopScreen from "../components/TopScreen";
import React, {useEffect} from "react";
import Popup from "reactjs-popup";

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
            <div className="center-box">
                <ShopItem name="MUtils Lite" image="/images/icons/mutils500.png">
                    <ShopItemPerk name="Perk" is={true}/>
                    <ShopItemPerk name="No Perk" is={false}/>
                </ShopItem>
                <ShopItem name="MUtils Ultimate" image="/images/icons/mutils500.png">

                </ShopItem>
            </div>
        </div>
    </>
}

function ShopItem(props) {


    return <div className="shop-item scroller scroller-wait">
        <div className="display-title">{props.name}</div>
        <img src={props.image} alt={"MUtils Icon"} className="shop-item-image" />
        <div className="shop-item-splitter">Content & Perks</div>
        <div className="shop-perk-box">
            {props.children}
        </div>
    </div>
}

function ShopItemPerk(props) {
    function getIndicator() {
        if (props.is) return <img src={"/images/svg/checkmark.svg"} alt={"Checkmark"} className="shop-item-indicator" style={{filter: 'invert(60%) sepia(61%) saturate(357%) hue-rotate(66deg) brightness(94%) contrast(89%)'}}/>
        else return <img src={"/images/svg/xmark.svg"} alt={"X-Mark"} className="shop-item-indicator"/>
    }

    return <div className="shop-item-perk">
        {getIndicator()}
        <span>{props.name}</span>
    </div>
}

export default Shop