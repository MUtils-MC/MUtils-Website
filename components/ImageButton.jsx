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

    return <Link className="image-button" href={props.to} style={{backgroundImage: bg}} onPointerEnter={onEnter} onPointerLeave={onLeave} onLoad={() => { window.moveTo(0,0) }} >
        {props.name}
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

    return <a className="image-button" href={props.to} style={{backgroundImage: bg}} onPointerEnter={onEnter} onPointerLeave={onLeave} onLoad={() => { window.moveTo(0,0) }} >
        {props.name}
    </a>
}