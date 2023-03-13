import {scrollEffect} from "../Components/Effects";
import ScrollToTop from "../Components/ScrollToTop";
import Navbar from "../Components/Navbar";
import TopScreen from "../Components/TopScreen";
import {useEffect} from "react";

function TimerDesigns() {
    useEffect(scrollEffect);

    return <>
        <ScrollToTop />
        <Navbar current="/lib/timer" highlight="Content " />
        <TopScreen title="Overview"/>
        <div className="main-part">

        </div>
    </>
}
export default TimerDesigns