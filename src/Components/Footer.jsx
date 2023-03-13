import "../Styles/common.css"

function footer() {
    const moveTop = () => window.moveTo(0, 0)

    return <>
        <div className="page-up">
            <a href="#" onClick={moveTop}>
                <img className="arrow-up" src="https://i.imgur.com/brFWJQu.png" width="62" sizes="62px"
                     alt="Arrow pointing up"/>
            </a>
            <a href="#" onClick={moveTop}>
                <img className="arrow-up" src="https://i.imgur.com/brFWJQu.png" width="62" sizes="62px"
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