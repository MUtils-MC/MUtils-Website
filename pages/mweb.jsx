import React, {useEffect, useState} from "react";
import {scrollEffect} from "../components/Effects";
import Navbar from "../components/Navbar";
import TopScreen from "../components/TopScreen";
import Footer from "../components/Footer";
import ImageButton from "../components/ImageButton";

function Addons() {
    const [infoBody, setInfoBody] = useState("Unable to load information")
    useEffect(scrollEffect)

    useEffect(() => {

    })

    return <>
        <Navbar current="/mweb" highlight="Content "/>
        <TopScreen title="MWeb"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    With MWeb, you can create internet links to files on your server.
                    These links can be public or restricted, with options like user/IP restrictions, time limits, and maximum downloads. <br/>
                    MWeb also zips folders automatically or manually, allowing for easy sending as resource packs to players.
                    With MWeb, server administrators can seamlessly share resources and folders, improving file management.
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/icons/mweb.png"/>
            </div>

            <div className="text-image-box scroller scroller-wait">
                <ImageButton bg="/images/banner/mweb.webp" to="/ch/list" name="Modrinth"/>
            </div>

            <div className="docs-box">
                <h2>MUtils Commands & Utilities</h2><br/>
                <Spoiler title="Challenge Command (main command)"
                         desc="MChallenge main command. Manage, toggle and setup challenges and more"
                         cmd="/challenge [<action>, settings]"
                         perm="mutils.challenge"
                >
                    <CommandPart part="*no action*">
                        <Select>{"Open the setup menu to toggle and modify modifications"}</Select>
                    </CommandPart>
                    <CommandPart part="[<action>]">
                        <Select>{"start - Start all selected modifications"}</Select>
                        <Select>{"stop - Stop all active modifications (remove temp data)"}</Select>
                        <Select>{"pause - Pause all active modifications (keep temp data)"}</Select>
                        <Select>{"resume - Resume all paused modifications"}</Select>
                        <Select>{"login - Connect your account to activate premium features (requires key)"}</Select>
                    </CommandPart>
                    <CommandPart part="settings">
                        <Select>{"language - Change the display language (currently providing 4 langs)"}</Select>
                        <a href="https://translate.mutils.net" className="text-link" target="_blank">Help us translating MUtils</a>
                        <Select>{"debug - If you need support it sometimes help us to toggle on debug mode for more information"}</Select>
                    </CommandPart>
                </Spoiler>

                <Spoiler title="Position Command"
                         desc="Mark certain positions in your worlds to save them for later purpose."
                         cmd="/position <param> [<name>]"
                         perm="global"
                >
                    <CommandPart part="<param>">
                        <Select>{"set - Create a new entry at your current position"}</Select>
                        <Select>{"remove - Remove an entry by name"}</Select>
                        <Select>{"get - Prints an entry in chat by name"}</Select>
                        <Select>{"reset - Removes all entries (mutils.position.reset)"}</Select>
                    </CommandPart>
                    <CommandPart part="[<name>]">
                        <Select>{"Possible argument representing the position name"}</Select>
                        <Select>{"- Used by set, remove, get"}</Select>
                    </CommandPart>
                </Spoiler>

                <Spoiler title="Backpack Command"
                         desc="Save and share items in a global or personal backpack with changeable sizes."
                         cmd="/backpack [<player>, setup]"
                         perm="global"
                >
                    <CommandPart part="[<player>]">
                        <Select>{"Optional argument representing the player targets name"}</Select>
                        <Select>{"- Used to access others personal backpack (command.backpack.other)"}</Select>
                    </CommandPart>
                    <CommandPart part="[setup]">
                        <Select>{"global - Switch between global and personal mode"}</Select>
                        <Select>{"size - Changes the size of all private and the global backpack (items kept saved)"}</Select>
                        <Select>{"reset - Clears all private and the global backpack"}</Select>
                        <Select>{"- Admin setup (mutils.backpack.setup)"}</Select>
                    </CommandPart>
                </Spoiler>

                <Spoiler title="Invsee Command"
                         desc="Look into the live inventory of other players and modify it."
                         cmd="/invsee <player>"
                         perm="mutils.invsee"
                >
                    <CommandPart part="<player>">
                        <Select>{"Argument representing the target players name"}</Select>
                    </CommandPart>
                </Spoiler>

                <Spoiler title="Hide/Show Command"
                         desc="Hide yourself (or others) from other players even outside of the spectator mode. Used in various challenges, you can invert the effect by using /show."
                         cmd="/hide [<players>] & /show [<players>]"
                         perm="mutils.hide"
                >
                    <CommandPart part="[<player>]">
                        <Select>{"Optional argument representing the player target/s"}</Select>
                        <Select>{"The command executor is the target if no target is provided"}</Select>
                    </CommandPart>
                </Spoiler>

                <Spoiler title="Heal Command"
                         desc="A simple command to heal and feed yourself and/or other players."
                         cmd="/heal [<players>]"
                         perm="mutils.heal"
                >
                    <CommandPart part="[<players>]">
                        <Select>{"Optional argument representing the player target/s"}</Select>
                        <Select>{"The command executor is the target if no target is provided"}</Select>
                    </CommandPart>
                </Spoiler>

                <Spoiler title="Reset Command"
                         desc="Deletes all loaded worlds on the server and recreate the three base dimensions randomly. To do so the server will restart once due to minecraft's limitations"
                         cmd="/reset"
                         perm="mutils.reset"
                >
                </Spoiler>
            </div>
            <div className="docs-box">
                <h2>Custom Game Rules</h2><br/>
                <div style={{padding: '0.5rem 0 0.5rem 0'}}>
                    <Select>MChallenge contains some handy game rules to quickly advance your server to your needs! All custom game rules can be toggled with the following command:</Select>
                </div>
                <div style={{backgroundColor: '#1d1f20', padding:  '.3rem', borderRadius: '10px', color: '#68B85D'}}>
                    <Select>{"/rule <rule> <value>"}</Select><br/>
                </div>
                <div style={{padding: '0.5rem 0 0 1rem'}}>
                    <li>Hearts in tab ⇒ Display health of all players in the tablist (hearts or number)</li>
                    <li>Toggle PvP ⇒ Quickly toggle the ability to damage other players</li>
                    <li>Fancy Chat ⇒ Upgrade the boring vanilla join/quit/chat messages with a modern style</li>
                    <li>More coming soon...</li>
                </div>
            </div>
        </div>
        <Footer />
    </>
}

function Spoiler(props) {
    return <details className="docs-spoiler">
        <summary style={{fontWeight: "bold", cursor: 'pointer'}} >{props.title}</summary>
        <div style={{margin: '.4rem 1rem .2rem 1rem'}}>
            <Select>{props.desc}<br/> <br/></Select>
            <div style={{backgroundColor: '#17171a', padding:  '.3rem', borderRadius: '10px', color: '#68B85D'}}>
                <Select>{props.cmd}</Select><br/>
            </div>
            {props.children}
            <div>
                <span style={{padding: '0 .5rem 0 0'}}><br/> Permission ⇒</span>
                <Select>{props.perm}</Select>
            </div>
        </div>
    </details>
}

function CommandPart(props) {
    return <div style={{display: 'flex', padding: '0 0 5px 1rem'}}>
        <span style={{padding: '0 .5rem 0 0'}}>{props.part + " ⇒ "}</span>
        <div style={{display: 'flex', flexDirection: "column"}}>
            {props.children}
        </div>
    </div>
}

function Select(props) {
    return <span style={{userSelect: 'text', cursor: 'text'}}>{props.children}</span>
}

export default Addons