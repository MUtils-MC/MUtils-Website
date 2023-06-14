import React, {useState} from 'react';
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import Link from "next/link";
import Popup from "reactjs-popup";

const AccountInfo = ({accountInfo, profileManager, update}) => {

    const [hideKey, setHideKey] = useState(true);
    const [error, setError] = useState(false)

    return <>
        {accountInfo.mcUUID == null && <div className="text-image-box">
            <Popup trigger={
                <div className="box-text" style={{border: '2px solid red', boxShadow: '0 0 15px red', marginBottom: '-5rem'}}>
                    <span>
                        {"You didn't link your Minecraft account yet!"}<br/>
                        {"Linking your MUtils-Account to a server only works with the connected Minecraft account. Click on this panel to link your account."}
                    </span>
                    <Link href="/discord" className="text-link"></Link>
                </div>
            } modal nested>
                {close => (<div>
                        <div style={{textAlign: 'center', fontWeight: 'bold', fontSize: '20px', borderBottom: 'snow 1px solid', paddingBottom: '5px'}}>Link Minecraft Account</div>
                        <div style={{margin: '1rem'}}>• Link your Minecraft account to be able to use MUtils in Minecraft. After confirmation you can connect servers with your Minecraft Account with MUtils or use all premium features even in single player (needs Ultimate)</div>
                        <div style={{margin: '1rem'}}>• Enter your Minecraft name<br/>• You can not change it afterwards</div>
                        {error && <div style={{margin: '1rem', color: '#F08080'}}>• Invalid Minecraft Account!</div>}
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <input className="input-box" autoFocus placeholder="Minecraft Name" onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    const input = e.target.value
                                    if (input.length >= 64) return
                                    else profileManager.setMCName(input).then(r => {
                                        if (r) {
                                            close()
                                            update()
                                        } else setError(true)
                                    })
                                }
                            }}/>
                        </div>
                    </div>
                )}
            </Popup>

        </div>
        }
        <div className="account-info-box">
            <div className="header">Account Information</div>
            <table className={"account-info"}>
                <tbody>
                <tr>
                    <td className={"table-name"} >Created</td>
                    <td className={"table-value"}>{new Date(accountInfo.created).toLocaleDateString("de-DE")}</td>
                </tr>
                <tr>
                    <td className={"table-name"}>DCID</td>
                    <td className={"table-value"}>{accountInfo.dcID}</td>
                </tr>
                <tr>
                    <td className={"table-name"}>Email</td>
                    <td className={"table-value"}>{accountInfo.email}</td>
                </tr>
                <tr>
                    <td className={"table-name"}>Key</td>
                    <td className={"table-value"} style={{fontFamily: "monospace"}}>{hideKey ? "*****-*****-*****" : accountInfo.key}<button onClick={() => setHideKey(!hideKey)}>{hideKey ? <AiFillEye style={{fontSize: ".8rem"}}/> : <AiFillEyeInvisible style={{fontSize: ".8rem"}}/>}</button></td>
                </tr>
                <tr>
                    <td className={"table-name"}>MCUUID</td>
                    <td className={"table-value"}>{accountInfo.mcUUID}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </>
};

export default AccountInfo;
