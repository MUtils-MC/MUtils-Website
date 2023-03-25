import "../Styles/profile.css"
import {scrollEffect} from "../Components/Effects";
import ScrollToTop from "../Components/ScrollToTop";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React, {useEffect, useState} from "react";
import LoginDataCache from "../Pages/authentication/LoginDataCache";
import {loadData} from "./authentication/ReceiveData";
import StyleList from "../Components/profile/StyleList";
import TopScreen from "../Components/TopScreen";


function Downloads() {

    const [loggedIn, setLoggedIn] = useState(undefined);


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

    useEffect(scrollEffect);

    async function getConnection(dcID) {
        let res = await fetch("localhost:8080/account/color/get", {
            headers: {
                "User-Agent": "",
                "key": "lkSn7-894tv-69xXl",
                "id": dcID,
            }
        })
        let data = await res.json()
        return data
    }

    function loader(children) {
        return (
            loggedIn ?
                children
                :
                loggedIn == undefined ?
                    <h1 style={{color: "white"}}>Lädt...</h1>
                    :
                    <h1 style={{color: "white"}}>Bitte melde dich in</h1>
        )

    }

    return <>
        <ScrollToTop/>
        <Navbar current="/profile"/>
        <TopScreen title="RAW">
            <div className="profile-hero-section">
                {loader(
                    <>
                        <img className="profile-image"
                             src={"https://cdn.discordapp.com/avatars/" + LoginDataCache.id + "/" + LoginDataCache.avatar}/>

                        <h1 style={{color: "white", fontSize: "2.5rem"}}>Willkommen, {LoginDataCache.username}</h1>
                    </>
                )}
            </div>

        </TopScreen>


        <div className="main-part">

            <div className="profile-section">
                {loader(
                    <>
                        <StyleList colors={getConnection(LoginDataCache.id)}/>
                    </>)
                }
            </div>
        </div>
        <Footer/>
    </>
}

export default Downloads