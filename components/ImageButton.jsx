import React, {useState} from "react";
import Link from "next/link";

export default function ImageButton(props) {
    const [bg, setBg] = useState("linear-gradient(45deg, rgba(0,0,0,75%), black), url(\""+ props.bg +"\")");
    const onEnter = () => {
        setBg("url(\""+ props.bg +"\")")
    }
    const onLeave = () => {
        setBg("linear-gradient(45deg, rgba(0,0,0,75%), black), url(\""+ props.bg +"\")")
    }

    let classes = "image-button"
    if (props.highlight) classes += " challenge-new"
    if (props.scratch) classes += " image-button-scratch"
    if (props.slim) classes += " image-button-slim"

    return <Link className={classes} href={props.to} style={{backgroundImage: bg}} onPointerEnter={onEnter} onPointerLeave={onLeave} onLoad={() => { window.moveTo(0,0) }} >
        <div className="image-button-text">
            {props.name}
        </div>
    </Link>
}

export function ImageButtonLink(props) {
    const [bg, setBg] = useState("linear-gradient(45deg, rgba(0,0,0,75%), black), url(\""+ props.bg +"\")");
    const onEnter = () => {
        setBg("url(\""+ props.bg +"\")")
    }
    const onLeave = () => {
        setBg("linear-gradient(45deg, rgba(0,0,0,75%), black), url(\""+ props.bg +"\")")
    }
    function getTarget() {
        if (props.target === "_blank") return "noopener noreferrer"
        else return ""
    }

    let classes = "image-button"
    if (props.highlight) classes += " challenge-new"
    if (props.scratch) classes += " image-button-scratch"
    if (props.slim) classes += " image-button-slim"

    return <a className={classes}
              target={props.target}
              rel={getTarget()}
              href={props.to}
              style={{backgroundImage: bg}}
              onPointerEnter={onEnter}
              onPointerLeave={onLeave}
              onLoad={() => { window.moveTo(0,0) }}
    >
        <div className="image-button-text">
            {props.name}
        </div>
    </a>
}