import Navbar from "../components/Navbar"
import TopScreen from "../components/TopScreen"
import Footer from "../components/Footer"
import React, {useEffect} from "react";
import {scrollEffect} from "../components/Effects";
import {Spoiler} from "../components/TextBox";

function Help() {
    useEffect(scrollEffect);

    return <>
        <Navbar current="/help" highlight="More "/>
        <TopScreen title="Q&A"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <span>We try to cover the most common questions in this section.<br/> If you need further help, please contact us at the </span>
                    <a href="https://dc.mutils.net" className="text-link" target="_blank">MCreate Discord</a>
                    <span>{" or ask the community there."}<br/>{"Click on the boxes below the question to see the answer."}</span>
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/icons/mutils500.png"/>
            </div>


            <div className="docs-box">
                <h3>Q: How do i install the plugins/mods?</h3><br/>
                <Spoiler title="Paper Plugin"
                         desc="First you need a server. Download the jar from papermc.io and put it in any folder. Create a folder named plugins inside your server folder and put all plugins inside. Finaly, you need to create a start script. Create a new txt and print in 'java -server -Xms1G -Xmx4G -jar server.jar'. Replace server.jar with your paper jar name. Now rename the file to start.bat (on Windows) and double click it."
                />
                <Spoiler title="Fabric Mod"
                         desc="Fabric mods can be installed on the client and on a server. On client, open your minecraft folder by open your texturepacks and click on open texturepack folder. Navigate one folder back and enter the mod folder. Now you can dump all mods inside."
                />
            </div>
            <div className="docs-box">
                <h3>Q: How do i enable MUtils-Premium?</h3><br/>
                <Spoiler title="MChallenge"
                         desc="Join your server and enter /ch login <key>. You can find your key in your account panel. NOTE - You need op on your server (/op <your-name>)"
                />
                <Spoiler title="MTimer"
                         desc="Join your server and enter /timer login <key>. You can find your key in your account panel. NOTE - You need op on your server (/op <your-name>)"
                />
            </div>
            <div className="docs-box">
                <h3>Q: Can i contribute to the project?</h3><br/>
                <Spoiler title="GitHub"
                         desc="All MUtils modules are 100% open source! You can contribute features or fixes at any time as long as they follow the code style - github.com/MUtils-MC"
                />
                <Spoiler title="Shop / Donation"
                         desc="We spend countless hours to offer all of this content for your mainly free! You can either buy MUtils-Premium to support us and unlock all premium features or just give us a little donation :) Just click on Premium at the top"
                />
            </div>
        </div>
        <Footer/>
    </>
}



export default Help