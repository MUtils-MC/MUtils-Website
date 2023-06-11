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
                <ImageButton bg="/images/banner/mweb.webp" to="https://modrinth.com/mod/mweb" target="_blank" name="Modrinth"/>
            </div>

            <div className="docs-box">
                <h2>Whitelist Commands & Permissions</h2><br/>
                <Spoiler title="Open Whitelist Manager"
                         desc="Open the whitelist manager GUI. All actions are still permission restricted"
                         cmd="/ws whitelist"
                         perm="mweb.whitelist.list"
                >
                </Spoiler>
                <Spoiler title="Add New Whitelist"
                         desc="Create a new file whitelist with custom propeties"
                         cmd="/ws whitelist add <file> <access> [<restriction>] [<timeout>]"
                         perm="mweb.whitelist.custom"
                >
                    <CommandPart part="<access>">
                        <Select>{"GLOBAL - Everyone can access the link"}</Select>
                        <Select>{"USER_RESTRICTED - Only available for selected user"}</Select>
                        <Select>{"PASSPHRASE_RESTRICTED - Only available with selected passphrase"}</Select>
                    </CommandPart>
                    <CommandPart part="[<restriction>]">
                        <Select>{"User name or passphrase"}</Select>
                    </CommandPart>
                    <CommandPart part="[<timeout>]">
                        <Select>{"Whitelist timeout. Enter a time like 2m5s to deactivate the link after 2:05min"}</Select>
                    </CommandPart>
                </Spoiler>
                <Spoiler title="Remove Whitelist"
                         desc="Remove an existing whitelist. You can disable it instead in the GUI editor"
                         cmd="/ws whitelist remove <id>"
                         perm="mweb.whitelist.delete"
                >
                    <CommandPart part="<id>">
                        <Select>{"The whitelist/download id. Hover over the suggestions to see the path"}</Select>
                    </CommandPart>
                </Spoiler>
                <Spoiler title="Get Whitelist Link"
                         desc="Get the link of an existing whitelist. If a passphrase is needed, it's included in the link!"
                         cmd="/ws whitelist get <id>"
                         perm="mweb.whitelist.info"
                >
                    <CommandPart part="<id>">
                        <Select>{"The whitelist/download id. Hover over the suggestions to see the path"}</Select>
                    </CommandPart>
                </Spoiler>
                <Spoiler title="Send Resourcepack"
                         desc="Send a archive or folder to players as a resourcepack!"
                         cmd="/ws texturepack <path> <target> [<force>]"
                         perm="mweb.texturepack.send"
                >
                    <CommandPart part="<path>">
                        <Select>{"Path to the resource pack that should be send"}</Select>
                    </CommandPart>
                    <CommandPart part="<target>">
                        <Select>{"All target players that should receive the resource pack"}</Select>
                    </CommandPart>
                    <CommandPart part="[<force>]">
                        <Select>{"Force targets to use this resource pack. Players still can quit instead"}</Select>
                    </CommandPart>
                </Spoiler>
                <Spoiler title="GUI Shortcuts"
                         desc="Shortcut permissions used in the whitelist GUI"
                         cmd="none"
                >
                    <CommandPart part="Global Links">
                        <Select>{"mweb.whitelist.global"}</Select>
                    </CommandPart>
                    <CommandPart part="Private Links">
                        <Select>{"mweb.whitelist.privat"}</Select>
                    </CommandPart>
                    <CommandPart part="Edit File Links">
                        <Select>{"mweb.whitelist.edit"}</Select>
                    </CommandPart>
                </Spoiler>
            </div>

            <div className="docs-box">
                <h2>Manager Commands & Permissions</h2><br/>
                <Spoiler title="Open File Manager"
                         desc="Open the file manager GUI. All actions are still permission restricted"
                         cmd="/ws manage"
                         perm="mweb.manage.list"
                >
                </Spoiler>
                <Spoiler title="Rename File"
                         desc="Rename a selected file or folder"
                         cmd="/ws manage rename <file> <new-name>"
                         perm="mweb.manage.rename"
                >
                    <CommandPart part="<file>">
                        <Select>{"Path to the file that should be renamed"}</Select>
                    </CommandPart>
                    <CommandPart part="<new-name>">
                        <Select>{"The new name. It can not contain any file restricted characters!"}</Select>
                    </CommandPart>
                </Spoiler>
                <Spoiler title="Delete File"
                         desc="Delete a selected file or folder (with all content)"
                         cmd="/ws manage rename <file>"
                         perm="mweb.manage.delete"
                >
                    <CommandPart part="<file>">
                        <Select>{"Path to the file that should be deleted"}</Select>
                    </CommandPart>
                </Spoiler>
                <Spoiler title="Zip Folder"
                         desc="Zip a selected folder (with all content) to a new archive"
                         cmd="/ws manage zip <file>"
                         perm="mweb.manage.zip"
                >
                    <CommandPart part="<file>">
                        <Select>{"Path to the folder that should be zipped"}</Select>
                    </CommandPart>
                </Spoiler>
                <Spoiler title="Unzip Folder"
                         desc="Unzip a selected archive (with all content) to a new folder"
                         cmd="/ws manage unzip <file>"
                         perm="mweb.manage.zip"
                >
                    <CommandPart part="<file>">
                        <Select>{"Path to the archive that should be unzipped"}</Select>
                    </CommandPart>
                </Spoiler>
            </div>

            <div className="docs-box">
                <h2>Settings Commands & Permissions</h2><br/>
                <Spoiler title="Get/Set Port"
                         desc="Get or set the access port. The port must be open and unused"
                         cmd="/ws settings port [<port>]"
                         perm="mweb.settings"
                >
                    <CommandPart part="[<port>]">
                        <Select>{"The new port that should be used. Needs a restart!"}</Select>
                    </CommandPart>
                </Spoiler>
                <Spoiler title="Get/Set Logging"
                         desc="Get or set if all requests should be logged"
                         cmd="/ws settings logaccess [<state>]"
                         perm="mweb.settings"
                >
                    <CommandPart part="[<state>]">
                        <Select>{"True or false"}</Select>
                    </CommandPart>
                </Spoiler>
                <Spoiler title="Get/Set Proxy"
                         desc="Get or set the proxy. This instantly changes all links"
                         cmd="/ws settings proxy [<proxy>]"
                         perm="mweb.settings"
                >
                    <CommandPart part="[<proxy>]">
                        <Select>{"The new redirect. Add http:// or https:// at the beginning"}</Select>
                    </CommandPart>
                </Spoiler>
                <Spoiler title="Set Language"
                         desc="Set a language. This will change all messsages and text used by MWeb"
                         cmd="/ws settings language [<lang>]"
                         perm="mweb.settings"
                >
                    <CommandPart part="[<lang>]">
                        <Select>{"The new language code. If custom, use the file name (without ending)"}</Select>
                    </CommandPart>
                </Spoiler>
                <Spoiler title="Get/Set Debug"
                         desc="Enable or disable the debug mode. Should only be used if advised from support"
                         cmd="/ws settings debug [<state>]"
                         perm="mweb.settings"
                >
                    <CommandPart part="[<state>]">
                        <Select>{"True or false"}</Select>
                    </CommandPart>
                </Spoiler>
            </div>
        </div>
        <Footer />
    </>
}



export default Addons