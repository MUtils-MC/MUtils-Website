import "../styles/page-main.css"
import '../styles/navbar.css';
import '../styles/common.css';
import '../styles/popup.css';
// import '../public/Fonts/Minecraft/Minecraft.ttf';
import React from "react";

export default function App({Component, pageProps}) {

    return <>
        <Component {...pageProps} />
    </>
}