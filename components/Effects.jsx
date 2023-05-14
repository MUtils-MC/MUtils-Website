import DOMPurify from "dompurify";
import React from "react";

export function scrollEffect() {
    window.moveTo(0, 0)
    const scrollEvent = () => {
        const elements = document.getElementsByClassName("scroller-wait")
        for (let i = 0; i < elements.length; i++) {
            const e = elements[i]
            if (window.scrollY > (e.offsetTop + 50)) e.classList.remove("scroller-wait")
        }
    }
    window.addEventListener("scroll", scrollEvent)
    scrollEvent()
    return () => {
        window.removeEventListener("scroll", scrollEvent)
    }
}

export function renderMC(input) {
    return (
        <div className="mc-like" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(input)}}></div>
    );
}
