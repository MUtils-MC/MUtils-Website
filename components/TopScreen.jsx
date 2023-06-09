import React, {useEffect, useState} from "react";
import Head from "next/head";

export default function TopScreen({title, children}) {
    const [size, setSize] = useState("scale(0.7)");
    const [opacity, setOpacity] = useState("0.1");
    const [filter, setFilter] = useState(null);
    const [height, setHeight] = useState("translate3d(0,0,0)");

    function blurOut() {
        setFilter("blur(4px) brightness(0.8)")
    }

    useEffect(() => {
        setSize("scale(1.0)")
        setOpacity("1.0")

        const onTopScroll = () => {
            const height = window.scrollY / 8
            setHeight(`translate3d(0, -${height}px, 0)`)
        }

        window.addEventListener("scroll", onTopScroll)

        blurOut()

        return () => {
            window.removeEventListener("scroll", onTopScroll)
        }
    }, [])

    return <>
        <Head>
            <title>{"MUtils " + title}</title>
        </Head>
        <div>
            <div className="top-logo-box" style={{transform: size, opacity: opacity}}>
                {title === "Profile" ?
                    children
                    :
                    <>
                        <div className="top-logo">MUtils</div>
                        <div className="top-logo">{title}</div>
                    </>}
            </div>
            <img src="/images/banner/main-bg.jpg" className="top-bg" style={{filter: filter, transform: height}} 
                 onLoad={blurOut} alt="landscape"/>
            <div className="top-transition" onLoad={() => console.log("click")} />
        </div>
    </>
}