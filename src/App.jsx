import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom"
import Overview from "./Pages/Overview";
import Main from "./Pages/Main";
import Challenges from "./Pages/Challenges";
import Callback from "./Pages/authentication/Callback";
import LogIn from "./Pages/authentication/LogIn";
import TimerDesigns from "./Pages/TimerDesigns";
import Downloads from "./Pages/Downloads";
import Imprint from "./Pages/legal/Imprint";
import Privacy from "./Pages/legal/Privacy";
import TOS from "./Pages/legal/TOS";
import NotFound from "./Pages/404";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/download" element={<Downloads />} />
            <Route path="/lib/timer" element={<TimerDesigns />} />
            <Route path="/oauth/login" element={<LogIn />} />
            <Route path="/oauth/callback" element={<Callback />} />

            <Route path="/legal/imprint" element={<Imprint />} />
            <Route path="/legal/privacy" element={<Privacy />} />
            <Route path="/legal/tos" element={<TOS />} />

            <Route path="/discord" element={<Redirect to="https://discord.gg/VEcR8RbnSH" />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

function Redirect(props) {
    useEffect(() => {
        window.location.replace(props.to)
        // window.location.href = props.to <- This is what Microsoft do 5 times in a row after you click one single link and be trapped forever
    })
}

export default App;