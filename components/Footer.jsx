import {useEffect, useState} from "react";

function footer() {

    const [moveToTop, setMoveToTop] = useState(null);
    useEffect(() => {
        setMoveToTop(() => window.moveTo(0, 0))
    }, [])

    return <>
        <div className="page-up">
            <a href="#" onClick={moveToTop}>
                <img className="arrow-up" src="/images/icons/arrow-up.png" width="62" sizes="62px"
                     alt="Arrow pointing up"/>
            </a>
            <a href="#" onClick={moveToTop}>
                <img className="arrow-up" src="/images/icons/arrow-up.png" width="62" sizes="62px"
                     alt="Arrow pointing up"/>
            </a>
        </div>
        <div>
            <div className="footer-transition"/>
            <div className="footer">
                <div className="text-block"><strong>MUtils - Copyright 2022 © All rights reserved<br/>⠀</strong></div>
            </div>
        </div>
    </>
}

export default footer;