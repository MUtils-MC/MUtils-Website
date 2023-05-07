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
                <img className="box-image" alt="MUtils Logo" src="/images/icons/mutils500.png"/>
            </div>
            <div className="center-box">
                <ShopItem name="MUtils Lite" image="/images/icons/mutils-lite.png" kofi="f018432bf2">
                    <ShopItemPerk name="Lifetime MUtils Premium" is={1} desc="You will recieve a permanent MUtils-Lite licence to use MUtils-Premium content"/>
                    <ShopItemPerk name="All Challenges" is={1} desc="Available Challenges from MUtils-Challenges"/>
                    <ShopItemPerk name="All Utilities" is={1} desc="Variouse utils from all MUtils products"/>
                    <ShopItemPerk name="Timer-Design Workshop" is={1} desc="Upload & download timer designs from the public workshop (MUtils-Timer)"/>
                    <ShopItemPerk name="World-Preset Workshop" is={1} desc="Upload & download world presets from the public workshop (MUtils-Worlds)"/>
                    <ShopItemPerk name="Privat Data Sync" is={1} desc="Upload & download privat configurations like timer designs from your personal MUtils-Cloud"/>
                    <ShopItemPerk name="Auto Updater" is={1} desc="MUtils automaticly scans for updates and install them on restart"/>
                    <ShopItemPerk name="Beta Content" is={3} />
                    <ShopItemPerk name="Extra Support" is={3} />

                    <ShopItemPerk name="2 Servers" is={2} desc="You can activate Premium on two unique servers"/>
                    <ShopItemPerk name="" is={4} />
                </ShopItem>
                <ShopItem name="MUtils Ultimate" image="/images/icons/mutils500.png" kofi="34a67861f1">
                    <ShopItemPerk name="Lifetime MUtils Premium" is={1} desc="You will recieve a permanent MUtils-Lite licence to use MUtils-Premium content"/>
                    <ShopItemPerk name="All Challenges" is={1} desc="Available Challenges from MUtils-Challenges"/>
                    <ShopItemPerk name="All Utilities" is={1} desc="Variouse utils from all MUtils products"/>
                    <ShopItemPerk name="Timer-Design Workshop" is={1} desc="Upload & download timer designs from the public workshop (MUtils-Timer)"/>
                    <ShopItemPerk name="World-Preset Workshop" is={1} desc="Upload & download world presets from the public workshop (MUtils-Worlds)"/>
                    <ShopItemPerk name="Privat Data Sync" is={1} desc="Upload & download privat configurations like timer designs from your personal MUtils-Cloud"/>
                    <ShopItemPerk name="Auto Updater" is={1} desc="MUtils automaticly scans for updates and install them on restart"/>
                    <ShopItemPerk name="Beta Content" is={1} desc="Use beta content that may or may not be published - Not always available"/>
                    <ShopItemPerk name="Extra Support" is={1} desc="Most of all revenue flows directly in our servers - Thank you for all support!"/>

                    <ShopItemPerk name="5 Servers" is={2} desc="You can activate Premium on five unique servers"/>
                    <ShopItemPerk name="Single Player" is={2} desc="You can activate Premium in Single-Player worlds (may not be available for all content)"/>
                </ShopItem>
            </div>
        </div>
    </>
}

function ShopItem(props) {


    return <div className="shop-item scroller scroller-wait">
        <div className="display-title">{props.name}</div>
        <img src={props.image} alt={"MUtils Icon"} className="shop-item-image"/>
        <div className="shop-item-splitter">Content & Perks</div>
        <div className="shop-perk-box">
            {props.children}
        </div>
        <div className="shop-item-splitter">
            <span>Purchase Options<br/></span>
            <a href={`https://ko-fi.com/s/${props.kofi}`} className="shop-item-button">Ko-Fi</a>
        </div>
    </div>
}

function ShopItemPerk(props) {
    function getIndicator() {
        switch (props.is) {
            case 1:
                return <img src={"/images/svg/checkmark.svg"} alt={"Checkmark"} className="shop-item-indicator"
                            style={{filter: 'invert(60%) sepia(61%) saturate(357%) hue-rotate(66deg) brightness(94%) contrast(89%)'}}/>
            case 2:
                return <img src={"/images/tags/Multiplayer.svg"} alt={"Multiplayer"} className="shop-item-indicator"
                     style={{filter: 'invert(90%) sepia(27%) saturate(2686%) hue-rotate(334deg) brightness(92%) contrast(84%)'}}/>
            case 3:
                return <img src={"/images/svg/xmark.svg"} alt={"X-Mark"} className="shop-item-indicator"
                            style={{filter: 'invert(27%) sepia(5%) saturate(442%) hue-rotate(169deg) brightness(93%) contrast(89%)'}}/>
            case 4:
                return <img src={"/images/svg/empty.svg"} alt={"Checkmark"} className="shop-item-indicator"/>
        }
    }

    function getTextBox() {
        if (props.desc == null) {
            return <div>
                <span>{props.name}</span>
            </div>
        } else {
            return <Popup trigger={open => (
                <span>{props.name}</span>
            )}
                          position="top center"
                          on={['hover', 'focus']}
                          closeOnDocumentClick
                          contentStyle={{textAlign: "center"}}>
                <span>{props.desc}</span>
            </Popup>
        }
    }

    return <div className="shop-item-perk">
        {getIndicator()}
        {getTextBox()}
    </div>
}

export default Shop