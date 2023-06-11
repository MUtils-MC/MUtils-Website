import React, {useState} from 'react';
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";

const AccountInfo = ({accountInfo}) => {

    const [hideKey, setHideKey] = useState(true);

    return (
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
    );
};

export default AccountInfo;
