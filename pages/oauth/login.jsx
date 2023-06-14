import React, {useEffect, useState} from "react";
import Navbar from "../../components/Navbar";
import TopScreen from "../../components/TopScreen";
import Footer from "../../components/Footer";
import Popup from "reactjs-popup";
import Link from "next/link";

function OAuth() {
    const url = "http://localhost:8080/dc/redirect?app=mutils"
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    useEffect(() => {
        if (localStorage.getItem("privacy-confirm") === "true") window.location.replace(url)
        else {
            setOpen(true)
        }
    }, []);

    return <>
        <Navbar current="/oauth/login" />
        <TopScreen title="Login"/>
        <div className="main-part">
            <Popup open={open} closeOnDocumentClick={false} closeOnEscape={false} onClose={closeModal}>
                <div>
                    <div style={{textAlign: 'center', fontWeight: 'bold', fontSize: '20px', borderBottom: 'snow 1px solid', paddingBottom: '5px'}}>Accept TOS</div>
                    <div style={{margin: '1rem'}}>
                        <span>• By logging in you accept our </span>
                        <Link href="../legal/privacy" className="text-link" target="_blank">privacy policy</Link><span>{" and our "}</span>
                        <Link href="../legal/tos" className="text-link" target="_blank">terms of service</Link><span>!</span>
                    </div>
                    <div style={{margin: '1rem'}}>• If you don't have a MUtils account yet, we will automatically create one for you</div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <button className="confirm-button button-success" onClick={() => {
                            localStorage.setItem("privacy-confirm", "true")
                            window.location.replace(url)
                        }}>Log In
                        </button>
                    </div>
                </div>
            </Popup>
        </div>
        <Footer/>
    </>
}

export default OAuth