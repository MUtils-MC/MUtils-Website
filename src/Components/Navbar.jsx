import '../Styles/navbar.css';
import {ReactComponent as ArrowDownIcon} from "../Images/carvet.svg"
import {ReactComponent as CraftingTableIcon} from "../Images/crafting-icon.svg"
import {ReactComponent as WorldCreatorIcon} from "../Images/world-icon.svg"
import {ReactComponent as ClockIcon} from "../Images/clock.svg"
import {ReactComponent as DiscordIcon} from "../Images/discord.svg"
import MLogo from '../Images/mutils500.png'

import React, {useEffect, useRef, useState} from 'react'
import {Link} from "react-router-dom"
import ScrollToTop from "./ScrollToTop";
import LoginDataCache from "../Pages/authentication/LoginDataCache";
import {loadData} from "../Pages/authentication/ReceiveData";

function Navbar(props) {
    const nav = useRef()
    const [hover, setHover] = useState(false)
    const [hidden, isHidden] = useState(false)
    const [opacity, setOpacity] = useState(100)
    const [loggedIn, setLoggedIn] = useState(false);

    function setHidden(state) {
        if (hidden === state) return

        if (state) setOpacity("0.8")
        else setOpacity("1.0")
        isHidden(!hidden)
    }

    useEffect(() => {
        const token = localStorage.getItem("dc_token")
        if (token != null && token !== "null") {
            if (LoginDataCache.avatar != null) setLoggedIn(true)
            else loadData(token, () => { setLoggedIn(true) })
        }

        const onNavScroll = () => {
            if (hover) return
            setHidden(window.scrollY > 150)
        }

        window.addEventListener("scroll", onNavScroll)

        return () => {
            window.removeEventListener("scroll", onNavScroll)
        };
    }, []);

    return <>
        <ScrollToTop />
        <nav className="navbar" style={{opacity: opacity}} ref={nav} onPointerEnter={() => {
            setHover(true)
            setHidden(false)
        }} onPointerLeave={() => {
            setHover(false)
            if (window.scrollY > 150) setHidden(true)
        }}>
            <div>
                <Link to="/">
                    <img className="navbar-icon" src={MLogo} alt="Logo"/>
                </Link>
            </div>
            <div>
                <ul className="navbar-nav">
                    <NavItem title="Overview" to="/overview" current={props.current}/>
                    <NavItem title="Download" to="/download" current={props.current}/>
                    <NavItem title="Shop" to="/etc" current={props.current}/>
                    <NavItem title="Content " iconRight={<ArrowDownIcon/>} current={props.current} highlight={props.highlight} >
                        <DropdownMenu>
                            <DropdownItem leftIcon={<CraftingTableIcon/>} to="/challenges" current={props.current}>Official Challenges</DropdownItem>
                            <DropdownItem leftIcon={<CraftingTableIcon/>} to="/custom" current={props.current}>Custom Challenges</DropdownItem>
                            <DropdownItem leftIcon={<ClockIcon/>} to="/timer" current={props.current}>Custom Timer Designs</DropdownItem>
                            <DropdownItem leftIcon={<WorldCreatorIcon/>} to="/world" current={props.current}>World Presets</DropdownItem>
                        </DropdownMenu>
                    </NavItem>
                    <NavItem title="More " iconRight={<ArrowDownIcon/>} current={props.current} highlight={props.highlight}>
                        <DropdownMenu>
                            <DropdownItem leftIcon={<DiscordIcon/>} to="/discord">Support</DropdownItem>
                            <DropdownItem leftIcon={<DiscordIcon/>} to="/help">Q&A</DropdownItem>
                            <DropdownItem leftIcon={<DiscordIcon/>} to="/oauth/login">Log In</DropdownItem>
                        </DropdownMenu>
                    </NavItem>
                    {loggedIn &&
                        <NavItem title="" img={"https://cdn.discordapp.com/avatars/" + LoginDataCache.id + "/" + LoginDataCache.avatar}>
                            <DropdownMenu>
                                <DropdownItem leftIcon={<DiscordIcon/>} to="/discord">Support</DropdownItem>
                                <DropdownItem leftIcon={<DiscordIcon/>} to="/help">Q&A</DropdownItem>
                                <DropdownItem leftIcon={<DiscordIcon/>} to="/oauth/login">Log Out</DropdownItem>
                            </DropdownMenu>
                        </NavItem>
                    }
                </ul>
            </div>
        </nav>
    </>
}

function NavItem(props) {
    const [open, setOpen] = useState(false);
    const ref = useRef()

    function isActive() {
        if (props.to === props.current || props.title === props.highlight) return "icon-button current"
        else return "icon-button"
    }

    useEffect(() => {
        if (props.children == null) return undefined
        const onClick = (event) => {
            if (ref.current && !ref.current.contains(event.target) && event.target.className !== "menu-item") setOpen(false)
        }
        document.addEventListener("pointerdown", onClick)
        return () => {
            document.removeEventListener("pointerdown", onClick)
        };
    }, [props.children]);


    return <>
        <li className="nav-item">
            <Link to={props.to} className={isActive()} onClick={() => {
                setOpen(!open)
                if (props.children == null) window.scrollTo(0, 0)
            }} ref={ref}>
                {props.iconLeft}
                {props.img && <img className="nav-pb" src={props.img}  alt="PB"/>}
                {props.title}
                {props.iconRight}
            </Link>

            {open && props.children}
        </li>
    </>
}

/**
 * @param props.to Redirect path
 * @param props.leftIcon Icon (left)
 * @param props.rightIcon Icon (right)
 * @param props.children Name
 */
function DropdownItem(props) {
    function isActive() {
        if (props.to === props.current) return "menu-item current"
        else return "menu-item"
    }
    return <>
        <Link to={props.to} className={isActive()}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
        </Link>
    </>
}

/**
 * @param props.id Menu ID
 * @param props.menuType menu-secondary or menu-primary
 * @param props.activeMenu State
 * @param props.children Content Items
 */
function DropdownMenu(props) {
    const [menuHeight, setMenuHeight] = useState(null);
    const [opacity, setOpacity] = useState("0");
    const [zIndex, setZIndex] = useState("auto");
    const dropdownRef = useRef(null);

    useEffect(() => {
        const height = dropdownRef.current?.firstChild?.offsetHeight
        if (height != null) {
            setMenuHeight(height + 35)
            setZIndex("auto")
            setOpacity("100%")
        } else {
            setMenuHeight(0)
            setZIndex("-1")
            setOpacity("0")
        }
    }, [])

    return (
        <div className="dropdown" style={{height: menuHeight, zIndex: zIndex, opacity: opacity}} ref={dropdownRef}>
            <div className="menu">
                {props.children}
            </div>
        </div>
    );
}

export default Navbar;
