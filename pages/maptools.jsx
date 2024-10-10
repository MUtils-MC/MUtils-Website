import React, {useEffect, useState} from "react";
import {scrollEffect} from "../components/Effects";
import Navbar from "../components/Navbar";
import TopScreen from "../components/TopScreen";
import Footer from "../components/Footer";
import ImageButton, {ImageButtonLink} from "../components/ImageButton";
import {CommandPart, Select, Spoiler} from "../components/TextBox";

function Addons() {
    const [infoBody, setInfoBody] = useState("Unable to load information")
    useEffect(scrollEffect)

    useEffect(() => {

    })

    return <>
        <Navbar current="/maptools" highlight="Content "/>
        <TopScreen title="Map Tools"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    Essential utilities for creating maps or building.
                    Create smooth animations, realistic message printing, resource pack management, block display tools, danger command checker, position saver and much more!
                    Similar to MChallenge, all features are seperated modules that can be toggled off/on at anytime.
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/icons/maptools.webp"/>
            </div>

            <div className="text-image-box scroller scroller-wait">
                <ImageButtonLink bg="/images/banner/maptools.webp" to="https://modrinth.com/mod/mweb" target="_blank" name="Download"/>
                <ImageButton bg="/images/banner/maptools.webp" to="/shop" name="Premium" highlight={true}/>
            </div>

            <div className="docs-box">
                <h2>Permissions (Commands & Tools)</h2><br/>
                <p>The most commands defaults their permissions to:</p>
                <p className="code-block">{"maptools.<command-name>"}</p>
                <p>Permissions for tool commands also counts for the usage of the tool. E.g. the permission for getting the blockify tool also is required for the usage of the tool.
                    All special cases are listed underneath...</p>

                <Spoiler title="Core Command"
                         desc="The command has no head permission but one permission for all sub commands."
                         perm="maptools.maptools"
                         cmd="/maptools <...>"
                />
                <Spoiler title="Hitbox Anything (interaction)"
                         desc="The command has no head permission but a sperated permission for both sub commands."
                         cmd="/interaction <...>"
                >
                    <CommandPart part="... spawn">
                        <Select>{"maptools.interaction"}</Select>
                    </CommandPart>
                    <CommandPart part="... tool">
                        <Select>{"maptools.interaction-tool"}</Select>
                    </CommandPart>
                </Spoiler>
                <Spoiler title="Multi Tool"
                         desc="The command has an extra permission for the execute-as sub command for extra security."
                         perm="maptools.multitool"
                         cmd="/multitool <...>"
                >
                    <CommandPart part="... execute-as">
                        <Select>{"maptools.multitool-execute"}</Select>
                    </CommandPart>
                </Spoiler>
                <Spoiler title="Custom Entity Pathing & Scripting"
                         desc="The command has an extra permission for the execute sub commands for extra security."
                         perm="maptools.pathing"
                         cmd="/pathing <...>"
                >
                    <CommandPart part="... add-script">
                        <Select>{"maptools.pathing-execute"}</Select>
                    </CommandPart>
                    <CommandPart part="... add-repeat">
                        <Select>{"maptools.pathing-execute"}</Select>
                    </CommandPart>
                </Spoiler>
                <Spoiler title="Position Saver"
                         desc="The command has extra permissions for managing positions to allow just teleporting."
                         perm="maptools.position"
                         cmd="/position <...>"
                >
                    <CommandPart part="... new">
                        <Select>{"maptools.position-manage"}</Select>
                    </CommandPart>
                    <CommandPart part="... remove">
                        <Select>{"maptools.position-manage"}</Select>
                    </CommandPart>
                    <CommandPart part="... reset">
                        <Select>{"maptools.position-manage"}</Select>
                    </CommandPart>
                </Spoiler>
                <Spoiler title="Auto Resource Pack"
                         desc="The command has no permission restriction to make it easy usable. If you need restriction please block it by another plugin"
                         perm="<none>"
                         cmd="/resourcepack <...>"
                />
                .<br/>.<br/>.<br/>Missing documentation will follow soon!<br/>
                All modules can be viewed on the Modrinth page.
            </div>

        </div>
        <Footer />
    </>
}



export default Addons