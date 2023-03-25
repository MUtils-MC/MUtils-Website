import React, {useEffect} from "react";
import {scrollEffect} from "../../Components/Effects";
import ScrollToTop from "../../Components/ScrollToTop";
import Navbar from "../../Components/Navbar";
import TopScreen from "../../Components/TopScreen";
import Footer from "../../Components/Footer";

function TOS() {
    useEffect(scrollEffect);

    return <>
        <ScrollToTop />
        <Navbar current="/legal/tos" />
        <TopScreen title="Terms Of Service"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    By using the MUtils products or API you agree to the following terms of service.<br/>
                    In the following, the term "Minecraft" is equated with the game "Minecraft: Java Edition" and the term "IP" is equated with a IPv4 and IPv6 address. Any content of the MUtils project is only for the game "Minecraft: Java Edition".
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/icons/mutils500.png" />
            </div>

            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <b>Article 1: Distribution</b><br/>
                    The use and modification of the source code of all modifications from the MUtils project is allowed in a personal context. Selling any content of the MUtils project in any form is prohibited. A sale or share of the license keys for MUtils is forbidden.<br/>
                    <br/>
                    <b>Article 2: Disclaimer</b><br/>
                    To the extent permitted by applicable law, we exclude all representations, warranties and conditions with respect to our Service and the use of this Service. The term "Lifetime" refers to lifetime of the MUtils project.<br/>
                    <br/>
                    <b>Article 3: Publishing</b><br/>
                    Publishing the service is prohibited. Use on a Minecraft server is allowed under the condition that not every user can use the service without restrictions. In addition to the product MUtils - MChallenges, only server administrators or the account owner should be able to modify the menu called "Challenges". In case of disregard, the license key or/and the Minecraft-account/Server IP may be temporarily or permanently banned from our service.<br/>
                    <br/>
                    <b>Article 4: Exclusion</b><br/>
                    The administration of the service reserves the right to restrict the use of MUtils by blocking IPv4 addresses, IPv6 addresses or Minecraft accounts. A refund in case of disregard of the terms of use is excluded.<br/>
                    <br/>
                    <b>Article 5: Modifications</b><br/>
                    It is allowed to use the MUtils API to create modifications for MUtils, as long as they do not violate the Terms of Service. Publishing of these modifications is allowed under the same licence and terms of service like MUtils.<br/>
                </div>
            </div>
        </div>
        <Footer/>
    </>
}

export default TOS