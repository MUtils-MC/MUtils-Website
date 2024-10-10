import React, {useEffect, useState} from "react";
import {scrollEffect} from "../components/Effects";
import Navbar from "../components/Navbar";
import TopScreen from "../components/TopScreen";
import Footer from "../components/Footer";
import ImageButton from "../components/ImageButton";
import {CommandPart, Select, Spoiler} from "../components/TextBox";

function Addons() {
    const [infoBody, setInfoBody] = useState("Unable to load information")
    useEffect(scrollEffect)

    useEffect(() => {

    })

    return <>
        <Navbar current="/veinminer" highlight="Content "/>
        <TopScreen title="Veinminer"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    <span>
                        {"Mine a single ore to break the full vein of the same ore!"}<br/>
                        {"Veinminer is a common feature in various modpacks or survival pvp game modes like UHC to speed up breaking whole veins."}<br/>
                        {"Now you can use this feature as a DataPack too!"}
                    </span>
                </div>
                <img className="box-image" alt="Veinminer Logo" src="/images/icons/veinminer.webp"/>
            </div>

            <div className="text-image-box scroller scroller-wait">
                <ImageButton bg="/images/banner/veinminer.webp" to="https://modrinth.com/project/veinminer" target="_blank" name="Download"/>
            </div>

            <div className="docs-box">
                <h2>V1 - Commands & Permissions</h2><br/>
                <Spoiler title="Pickaxe Limitations"
                         desc="Limit or grant the veinmine effect for certain pickaxes."
                         cmd="/function veinminer:settings/pickaxe"
                         perm="OP/Cheats"
                >
                </Spoiler>
                <Spoiler title="General Settings"
                         desc="Change some general settings to balance veinminer like cooldown, saturation and more."
                         cmd="/function veinminer:settings/general"
                         perm="OP/Cheats"
                >
                </Spoiler>
            </div>

            <div className="docs-box">
                <h2>V2 - Commands & Permissions</h2><br/>
                <Spoiler title="Edit Block List"
                         desc="Add or remove blocks from the veinminer list. Vanilla ores are added by default."
                         cmd="/veinminer blocks <add/remove> <block>"
                         perm="veinminer.blocks"
                >
                    <CommandPart part="<add/remove>">
                        <Select>{"Add or remove the selection"}</Select>
                    </CommandPart>
                    <CommandPart part="<block>">
                        <Select>{"The block id. Varies between versions"}</Select>
                    </CommandPart>
                </Spoiler>
                <Spoiler title="Toggle Veinminer"
                         desc="Completly disable or enable the veinminer effect. This will not reset settings."
                         cmd="/veinminer toggle"
                         perm="veinminer.toggle"
                >
                </Spoiler>
                <Spoiler title="General Settings"
                         desc="Change settings like cooldown, max chained blocks, animation delay or if the correct tool is needed."
                         cmd="/veinminer settings <setting> <value>"
                         perm="veinminer.settings"
                >
                </Spoiler>
            </div>
        </div>
        <Footer/>
    </>
}


export default Addons