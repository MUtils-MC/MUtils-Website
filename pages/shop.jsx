import {scrollEffect} from "../components/Effects";
import Navbar from "../components/Navbar";
import TopScreen from "../components/TopScreen";
import React, {useEffect} from "react";
import Popup from "reactjs-popup";
import Footer from "../components/Footer";
import Link from "next/link";

function Shop() {
    useEffect(scrollEffect);

    return <>
        <Navbar current="/shop"/>
        <TopScreen title="Shop"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <div>
                        MUtils is 100% community based and only survive through support from you!<br/>
                        Despite ongoing server costs, we decided against a subscription system. That's why we are happy about every extra support to keep this project alive!<br/>
                        Currently, MUtils is in BETA and some features may not be implemented at the current time. Enjoy!<br/>
                        <b>▪ <Link className={"text-link"} href={"/premium"}>Read more about Premium</Link> ▪</b>
                    </div>
                </div>
            </div>
            <div className="display-grid-small">
                <ShopItem name="MUtils Lite" image="/images/icons/mutils-lite.png" kofi="f018432bf2">
                    <ShopItemPerk name="Lifetime MUtils Lite" is={1} desc="You will recieve a permanent MUtils-Lite licence for your account"/>
                    <ShopItemPerk name="All Challenges" is={1} desc="Access to all Challenges in MChallenge"/>
                    <ShopItemPerk name="All Map Tools" is={1} desc="Access to all commands and tools in MapTools"/>
                    <ShopItemPerk name="Timer-Design Workshop" is={1} desc="Upload & download timer designs from the public workshop (MUtils-Timer)"/>
                    <ShopItemPerk name="Auto Updater" is={1} desc="MUtils automaticly scans for updates and install them on restart"/>
                    <ShopItemPerk name="MLog Upgrade" is={3} desc="More projects & higher traffic limits per guild & project in MLog"/>
                    <ShopItemPerk name="Addon Highlighting" is={3} desc="Your published MUtils addons will be highlighted in the workshop & homepage"/>
                    <ShopItemPerk name="Beta Content" is={3} desc="Use beta content that may or may not be published - Not always available"/>
                    <ShopItemPerk name="Extra Support" is={3} desc="Most of all revenue flows directly in our servers - Thank you for all support!"/>

                    <ShopItemPerk name="2 Servers" is={2} desc="You can activate Premium on two unique servers"/>
                    <ShopItemPerk name="" is={4}/>
                </ShopItem>
                <ShopItem name="MUtils Ultimate" image="/images/icons/mutils500.png" kofi="34a67861f1">
                    <ShopItemPerk name="Lifetime MUtils Lite" is={1} desc="You will recieve a permanent MUtils-Lite licence for your account"/>
                    <ShopItemPerk name="All Challenges" is={1} desc="Access to all Challenges in MChallenge"/>
                    <ShopItemPerk name="All Map Tools" is={1} desc="Access to all commands and tools in MapTools"/>
                    <ShopItemPerk name="Timer-Design Workshop" is={1} desc="Upload & download timer designs from the public workshop (MUtils-Timer)"/>
                    <ShopItemPerk name="Auto Updater" is={1} desc="MUtils automaticly scans for updates and install them on restart"/>
                    <ShopItemPerk name="MLog Upgrade" is={1} desc="More projects & higher traffic limits per guild & project in MLog"/>
                    <ShopItemPerk name="Addon Highlighting" is={1} desc="Your published MUtils addons will be highlighted in the workshop & homepage"/>
                    <ShopItemPerk name="Beta Content" is={1} desc="Use beta content that may or may not be published - Not always available"/>
                    <ShopItemPerk name="Extra Support" is={1} desc="Most of all revenue flows directly in our servers - Thank you for all support!"/>

                    <ShopItemPerk name="5 Servers" is={2} desc="You can activate Premium on five unique servers"/>
                    {/*<ShopItemPerk name="Single Player" is={2} desc="Use some MUtils features in single player via DataPacks or mods. Currently also usable without Premium"/>*/}
                </ShopItem>
                {/*<ShopItem name="Extra Support" image="/images/icons/mutils-extra.png" kofi="34a67861f1" isDono={true}>*/}
                {/*    <ShopItemPerk name="Voluntary Donation" is={1} desc="Donations will not grant any extra perks but we appreciate any support <3"/>*/}
                {/*    <ShopItemPerk name="Extra Support" is={1} desc="Most of all revenue flows directly in our servers - Thank you for all support!"/>*/}
                {/*    <ShopItemPerk name="Leaderboard Entry" is={1} desc="All donations will be added to the supporter leaderboard. It's not a competition!"/>*/}
                {/*    <ShopItemPerk name="" is={4}/>*/}
                {/*    <ShopItemPerk name="" is={4}/>*/}
                {/*    <ShopItemPerk name="" is={4}/>*/}
                {/*    <ShopItemPerk name="" is={4}/>*/}
                {/*    <ShopItemPerk name="" is={4}/>*/}
                {/*    <ShopItemPerk name="" is={4}/>*/}
                {/*    <ShopItemPerk name="" is={4}/>*/}
                {/*    <ShopItemPerk name="" is={4}/>*/}
                {/*    <ShopItemPerk name="" is={4}/>*/}
                {/*</ShopItem>*/}
            </div>
        </div>
        <Footer/>
    </>
}

function ShopItem(props) {
    function getText() {
        if (props.isDono) return "Donation Page"
        else return "Purchase Options"
    }

    function getTip() {
        if (props.isDono) return "https://ko-fi.com/miraculixx/tip"
        else return "https://ko-fi.com/s/" + props.kofi
    }

    return <div className="shop-item scroller scroller-wait">
        <div className="display-title">{props.name}</div>
        <img src={props.image} alt={"MUtils Icon"} className="shop-item-image"/>
        <div className="shop-item-splitter">Content & Perks</div>
        <div className="shop-perk-box">
            {props.children}
        </div>
        <div className="shop-item-splitter">
            <div>{getText()}</div>
            <a href={getTip()} className="shop-item-button" target="_blank">
                <img src={"/images/icons/kofi.svg"} alt="KoFi Icon" className="shop-item-indicator" style={{filter: 'invert(90%)'}}/>
                <div className="shop-button-name">Ko-Fi</div>
            </a>
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