import {scrollEffect} from "../components/Effects";
import Navbar from "../components/Navbar";
import TopScreen from "../components/TopScreen";
import React, {useEffect} from "react";
import Popup from "reactjs-popup";
import Footer from "../components/Footer";
import {Spoiler} from "../components/TextBox";
import Link from "next/link";

function Shop() {
    useEffect(scrollEffect);

    return <>
        <Navbar current="/shop"/>
        <TopScreen title="Premium"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <div>
                        Why is some content Premium only?<br/>
                        We provide some content that only works with ongoing server costs and maintenance.
                        In server costs we currently come up with about <b>191€/y</b> + <b>13€/y</b> for domains.
                    </div>
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/icons/mutils-extra.png"/>
            </div>

            <div className="docs-box">
                <h3>Q: How does Premium work?</h3><br/>
                <span>
                    <br/>
                    ▪ All offers are <b>lifetime</b> and no subscriptions and grant access to all content.<br/>
                    ▪ MUtils Premium unlocks <b>every</b> project, you don't have to buy something for each project.<br/><br/>
                    ▪ When you log in the first time (<b>More ▾</b> ⇒ <b>Log In</b>), an account is created with a unique key.<br/>
                    This is your password to log in ingame and only works on your Minecraft account!<br/>
                    ▪ If your account has a server slot left, the server will automatically connect to your account<br/><br/>
                    ⇒ Click <Link href={"/help"} className="text-link">here</Link> for a log in guide
                </span>
            </div>

            <div className="docs-box" style={{marginTop: "3rem"}}>
                <h3>Q: What content do i unlock?</h3><br/>
                <span>
                    <br/>
                    We constantly expand all project features, free and for Premium users.
                    To see a full list for each tier, look into the <Link href={"/shop"} className={"text-link"}>shop</Link>!
                    <Spoiler title="MChallenge"
                             desc="In MChallenge Premium unlocks a bunch of fun and complex challenges and more!"
                    >
                        ▪ Over 60 Challenges with ~2 new Challenges per month.<br/>
                        ▪ Play new Challenges 2 weeks earlier then everyone else!<br/>
                        ▪ Download addons directly ingame without restarting the server!<br/>
                        ▪ Upload own addons and get highlighted in our <Link href={"/ch/addons"} className={"text-link"}>addons list</Link>.<br/>
                    </Spoiler>
                    <Spoiler title="MTimer"
                             desc="In MTimer Premium unlocks mostly focus on features requiring an account like content sharing."
                    >
                        ▪ Access the design library ingame and use designs from other users with a single click.<br/>
                        ▪ Like or dislike other designs for a better ranking.<br/>
                        ▪ Upload your own designs to share them with the world!<br/>
                        <br/>
                        Content libraries are currently in testing to avoid abuse and will be released later.
                    </Spoiler>
                    <Spoiler title="Map Tools"
                             desc="Map Tools saves you tons of hours creating new Minecraft maps and buildings. Access even more tools with Premium!"
                    >
                        ▪ Create smooth entity & block animations with the animator tool! Works with only datapacks<br/>
                        ▪ Create fany nametags known from various servers. Generates a resource pack<br/>
                        ▪ Resize your surrounding to any size! Works with block displays so keep the block amount in the ~500 area<br/>
                    </Spoiler>
                    <Spoiler title="MLog (Service)"
                             desc="MLog provides less limits for project owners when using Premium!"
                    >
                        ▪ Add more projects to one guild at the same time.<br/>
                        ▪ Higher bandwith limits. Just don't share your movies :)<br/>
                    </Spoiler>
                </span>
            </div>

            <div className="docs-box">
                <h3>Q: Can i get Premium for free?</h3><br/>
                <span>
                    <br/>
                    Everyone likes free stuff, we too :)<br/>
                    Every once in a while or on events we make a <b>giveaway</b> on our <Link href={"dc"} className={"text-link"}>Discord Server</Link>!<br/><br/>
                    ▪ If you already own Discord Nitro, we also give all our <b>server boosters</b> Premium.
                    Perfect for trying out our projects!<br/>
                    ⇒ We may remove this offer in the future if it's get overused<br/><br/>
                    ▪ All our ambitious translators receive free Premium! Requires crowdin account, read more about it <a className="text-link" href="https://github.com/MUtils-MC/Translations" target="_blank">here</a>.
                </span>
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