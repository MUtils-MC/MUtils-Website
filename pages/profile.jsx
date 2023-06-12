import {scrollEffect} from "../Components/Effects";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React, {useEffect, useState} from "react";
import StyleList from "../Components/profile/StyleList";
import TopScreen from "../Components/TopScreen";
import {loadData} from "../components/auth/ReceiveData";
import LoginDataCache from "../components/auth/LoginDataCache";
import ProfileManager from "../components/profile/ProfileManager";
import ConnectionList from "../components/profile/ConnectionList";
import AccountInfo from "../components/profile/AccountInfo";


function Downloads() {

    const [loggedIn, setLoggedIn] = useState(undefined);

    const [profileManager, setProfileManager] = useState(undefined);
    const [styles, setStyles] = useState({});
    const [connections, setConnections] = useState({});
    const [accountInfo, setAccountInfo] = useState({});


    useEffect(() => {
        const token = localStorage.getItem("dc_token")
        if (token != null && token !== "null") {
            if (LoginDataCache.avatar != null) setLoggedIn(true)
            else loadData(token, () => {
                setLoggedIn(true)
            })
        } else {
            setLoggedIn(false)
        }
    }, []);

    useEffect(() => {
        if (loggedIn) {
            if (LoginDataCache.id === null) {
                return
            }
            setProfileManager(new ProfileManager("Aquarium20", LoginDataCache.id))
        }
    }, [loggedIn]);

    useEffect(() => {
        if (profileManager === undefined) return

        fetchStyles()
        fetchConnections()
        fetchAccountInfo()
    }, [profileManager]);

    useEffect(scrollEffect);

    async function setStyle(type) {
        const styles = await profileManager.setStyle(type)
        fetchStyles()
    }

    async function fetchStyles() {
        const fetchedStyles = await profileManager.getStyles()
        setStyles(fetchedStyles)
    }

    async function fetchConnections() {
        const fetchedConnections = await profileManager.getConnections()
        setConnections(fetchedConnections)
        console.log(fetchedConnections)
    }

    async function fetchAccountInfo() {
        const fetchedAccountInfo = await profileManager.getAccountInfo()
        setAccountInfo(fetchedAccountInfo)
        console.log(fetchedAccountInfo)
    }

    function loader(value, children) {
        return (
            value ?
                children
                :
                value == undefined ?
                    <h1 style={{color: "white"}}>Loading...</h1>
                    :
                    <h1 style={{color: "white"}}>Please log in</h1>
        )
    }

    return <>
        <Navbar current="/profile"/>
        <TopScreen title="Profile">
            <div className="profile-hero-section">
                {loader(loggedIn,
                    <>
                        <img className="profile-image"
                             src={"https://cdn.discordapp.com/avatars/" + LoginDataCache.id + "/" + LoginDataCache.avatar}
                             style={{boxShadow: '5px 5px 15px 4px #17171a', border: '2px solid snow'}}
                        />

                        <h1 style={{color: "white", fontSize: "2.5rem"}}>Welcome, {LoginDataCache.username}</h1>
                    </>
                )}
            </div>
        </TopScreen>

        <div className="main-part">

            <div className="profile-section">
                {loader(accountInfo.key,
                    <AccountInfo accountInfo={accountInfo}/>
                )}
                {loader(1,
                    <ConnectionList connections={connections} profileManager={profileManager}/>
                )}
                {loader(styles.availableStyles,
                    <StyleList colors={styles} onSelect={(i) => setStyle(i)}/>
                )}
            </div>
        </div>
        <Footer/>
    </>
}

export default Downloads