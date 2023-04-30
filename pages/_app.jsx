import "../styles/page-main.css"
import '../styles/navbar.css';
import '../styles/common.css';
import '../styles/popup.css';
import '../styles/profile.css';
// import '../public/Fonts/Minecraft/Minecraft.ttf';
import React from "react";
import Head from "next/head";

export default function App({Component, pageProps}) {

    return <>
        <Head>
            <meta name="description" content="MUtils is an advanced Minecraft plugin/mod that brings a host of powerful modifications to the game. Players can enjoy customizable challenges, a fully customizable timer, and a world creator that can be tailored to their preferences.
            MUtils is an excellent tool for Minecraft players who want to take their experience to the next level and makes sure to provide hours of entertainment for players of all skill levels."/>
        </Head>
        <Component {...pageProps} />
    </>
}