import {scrollEffect} from "../components/Effects";
import Navbar from "../components/Navbar";
import TopScreen from "../components/TopScreen";
import React, {useEffect} from "react";
import Footer from "../components/Footer";
import ImageButton, {ImageButtonLink} from "../components/ImageButton";
import {CommandPart, Select, Spoiler} from "../components/TextBox";

function Timer() {
    useEffect(scrollEffect);

    return <>
        <Navbar current="/timer" highlight="Content "/>
        <TopScreen title="Timer"/>
        <div className="main-part">
            <div className="text-image-box scroller scroller-wait">
                <div className="box-text">
                    MTimer adds a fully customizable timer to your game!<br/>
                    Choose between tons of option to create the perfect timer for every moment.
                    Change the direction, toggle goals for automated stops and starts (Player/Boss Death, Empty Server, ...) or even stop the time on milliseconds¹.<br/>
                    Additionally advanced rules can be activated to freeze the world on timer pause, auto spectate players after death, instant respawns and much more!
                </div>
                <img className="box-image" alt="MUtils Logo" src="/images/icons/Timer.webp"/>
            </div>

            <div className="text-image-box scroller scroller-wait">
                <ImageButtonLink bg="/images/banner/timer-banner.webp" to="https://modrinth.com/project/timer" target="_blank" name="Download"/>
                <ImageButton bg="/images/banner/workshop.webp" to="/timer/workshop" name="Workshop"/>
            </div>

            <div className="text-image-box scroller scroller-wait">
                <img className="box-image right" alt="MUtils Logo" src="/images/icons/configure.webp"/>
                <div className="box-text">
                    <div>
                        <span>You want your own custom Timer Design?<br/>
                    MTimer brings a full design editor from simple colors to complex animations and configurations! The creator is powered by </span>
                        <a href={"https://webui.advntr.dev/"} className="text-link" target={"_blank"}>MiniMessage</a>
                        <span> to make styling as easy as possible.
                    Share your own designs in our public Library with all other players or browse through them.</span>
                    </div>
                </div>
            </div>

            <div className="docs-box">
                <h2>Commands & Permissions</h2><br/>
                <span>Every command marked with <b>*</b> is usable for the global timer (/timer ...) and the personal timer (/ptimer ...)</span><br/>
                Each player can have their own personal timer with individual settings. If the global timer is active, all personal timers will be overlayed<br/>
                <Spoiler title="Settings GUI"
                         desc="Opens the GUI to change all timer settings like direction, goals, rules, design and more."
                         cmd="/timer [setup]"
                         perm="mutils.command.timer"
                />
                <Spoiler title="Personal Settings GUI"
                         desc="Opens the GUI to change all personal timer settings like direction, design and more. Personal timers does not have rules and goals."
                         cmd="/ptimer [setup] [target]"
                         perm="mutils.command.ptimer"
                >
                    <CommandPart part="[target]">
                        <Select>{"Access timer from another player"}</Select>
                        <Select>{"Extra permission: mutils.command.ptimer-others"}</Select>
                    </CommandPart>
                </Spoiler>
                <Spoiler title="Change Timer Status *"
                         desc="Resume or pause the timer. Pausing the timer can affect the world depending on the rules."
                         cmd="/(p)timer <resume/pause>"
                         perm="mutils.command.(p)timer"
                />
                <Spoiler title="Reset Time *"
                         desc="Reset the current time to zero. If set to count down, the timer will start counting up afterwards."
                         cmd="/(p)timer reset"
                         perm="mutils.command.(p)timer"
                />
                <Spoiler title="Set Time *"
                         desc="Set the time without needing to access the menu. The format supports suffixes like s, m, h, d and commas like 1.5h."
                         cmd="/ptimer [setup] [target]"
                         perm="mutils.command.ptimer"
                >
                    <CommandPart part="[target]">
                        <Select>{"Access timer from another player"}</Select>
                        <Select>{"Extra permission: mutils.command.ptimer-others"}</Select>
                    </CommandPart>
                </Spoiler>
            </div>
        </div>
        <Footer/>
    </>
}

export default Timer