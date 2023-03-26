// import React, {useEffect} from 'react';
// import {Route, Routes} from "react-router-dom"
// import Overview from "../pages/overview";
// import Index from "../pages";
// import Challenges from "../pages/challenges";
// import Callback from "../pages/oauth/callback";
// import LogIn from "../pages/oauth/login";
// import Timer from "../pages/timer";
// import Download from "../pages/downloads";
// import Imprint from "../pages/legal/Imprint";
// import Privacy from "../pages/legal/Privacy";
// import Tos from "../pages/legal/Tos";
// import NotFound from "../pages/404";
// import Shop from "../pages/shop";
//
// function App() {
//     return (
//         <Routes>
//             <Route path="/" element={<Index />} />
//             <Route path="/overview" element={<Overview />} />
//             <Route path="/challenges" element={<Challenges />} />
//             <Route path="/download" element={<Download />} />
//             <Route path="/timer" element={<Timer />} />
//             <Route path="/shop" element={<Shop />} />
//             <Route path="/oauth/login" element={<NotFound />} />
//             <Route path="/oauth/callback" element={<Callback />} />
//
//             <Route path="/legal/imprint" element={<Imprint />} />
//             <Route path="/legal/privacy" element={<Privacy />} />
//             <Route path="/legal/tos" element={<Tos />} />
//
//             <Route path="/discord" element={<Redirect to="https://discord.gg/VEcR8RbnSH" />} />
//
//             <Route path="*" element={<NotFound />} />
//         </Routes>
//     );
// }
//
// function Redirect(props) {
//     useEffect(() => {
//         window.location.replace(props.to)
//         // window.location.href = props.to <- This is what Microsoft do 5 times in a row after you click one single link and be trapped forever
//     })
// }
//
// export default App;