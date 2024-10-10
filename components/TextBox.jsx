import React from "react";

export function Spoiler(props) {
    return <div className="docs-spoiler-box">
        <details className="docs-spoiler">
            <summary style={{fontWeight: "bold", cursor: 'pointer'}}>
                <span>{"• " + props.title}</span>
            </summary>
        </details>
        <div className="docs-spoiler-element" style={{margin: '.4rem 1rem .2rem 1rem'}}>
            <Select>{props.desc}<br/> <br/></Select>
            {props.cmd != null &&
                <div style={{backgroundColor: '#17171a', padding: '.3rem', borderRadius: '10px', color: '#68B85D'}}>
                    <Select>{props.cmd}</Select><br/>
                </div>
            }
            {props.children}
            {props.perm != null &&
                <div>
                    <span style={{padding: '0 .5rem 0 0'}}><br/> Permission ⇒</span>
                    <Select>{props.perm}</Select>
                </div>
            }
        </div>
    </div>
}

export function CommandPart(props) {
    return <div style={{display: 'flex', padding: '0 0 5px 1rem'}}>
        <span style={{padding: '0 .5rem 0 0'}}>{props.part + " ⇒ "}</span>
        <div style={{display: 'flex', flexDirection: "column"}}>
            {props.children}
        </div>
    </div>
}

export function Select(props) {
    return <span style={{userSelect: 'text', cursor: 'text'}}>{props.children}</span>
}