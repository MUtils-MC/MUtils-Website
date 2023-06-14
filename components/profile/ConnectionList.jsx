import React, {useState} from 'react';
import {AiFillDelete, AiFillEdit} from "react-icons/ai";
import Popup from "reactjs-popup";
import Link from "next/link";

const ConnectionList = ({connections, profileManager, update}) => {
    console.debug(connections)

    function getName(connection) {
        if (connection.name == null) return (<span style={{fontStyle: 'italic'}}>Unset</span>)
        else return (<span style={{fontWeight: 'bold'}}>{connection.name}</span>)
    }

    function renderConnection(connection) {
        return (
            <div className="connection-card" key={connection.ip}>
                <div>
                    <h2>{connection.name}</h2>
                    <p><span>IP ADDRESS</span> {connection.ip} <span className={"spacer"}/>
                        <span>CREATED</span> {new Date(connection.created).toLocaleDateString("de-DE")}</p>
                </div>
                <div>
                    <Popup trigger={<button className='connection-card-button'><AiFillEdit/></button>}
                           modal nested
                    >
                        {close => (<div>
                                <div style={{textAlign: 'center', fontWeight: 'bold', fontSize: '20px', borderBottom: 'snow 1px solid', paddingBottom: '5px'}}>Rename Server</div>
                                <div style={{margin: '1rem'}}>• Renaming a server helps to organize your connections.<br/> The name is only visible on your dashboard and not on your server!</div>
                                <div style={{margin: '1rem'}}><span>• Current Name: </span>{getName(connection)}</div>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <input className="input-box" defaultValue={connection.name} onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === "Escape") {
                                            const input = e.target.value
                                            if (input.length >= 64) return
                                            else profileManager.renameConnection(connection.ip, input).then(r => {
                                                close()
                                                update()
                                            })
                                        }
                                    }}/>
                                </div>
                            </div>
                        )}
                    </Popup>

                    <Popup trigger={<button className='connection-card-button'><AiFillDelete/></button>}
                           modal nested
                    >
                        {close => (<div>
                                <div style={{textAlign: 'center', fontWeight: 'bold', fontSize: '20px', borderBottom: 'snow 1px solid', paddingBottom: '5px'}}>Delete Server</div>
                                <div style={{margin: '1rem'}}>• Do you really want to delete the following Server?<br/>
                                    All settings will be resettet and all premium features become unavailable!<br/> Note: You can only delete 3 connections every week!
                                </div>
                                <div style={{margin: '1rem'}}>• {connection.ip} {connection.name && <span>({connection.name})</span>}</div>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <button className="confirm-button" onClick={() => {
                                        profileManager.deleteConnection(connection.ip).then(r => {
                                            close()
                                            update()
                                        })
                                    }}>Confirm
                                    </button>
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
        );
    }

    function renderConnections() {
        if (connections[0] == null) return (<div className="text-image-box" style={{marginTop: '-2rem', marginBottom: '3rem'}}>
            <div className="box-text">
                <span>You don't have any connected Servers! Use </span><span className="code-block">{"/<main-command> login <key>"}</span>
                <span>{" on your server to connected it with MUtils! Look into our "}</span>
                <Link href="/help" className="text-link">Q&A</Link>
                <span>{" if you have troubles finding the right command."}<br/>If you don't have a licence yet to connect a server visit our </span>
                <Link href="/shop" className="text-link">Shop</Link>
                <span>{" to get one!"}</span>
            </div>
        </div>)
        else return connections.map(i => renderConnection(i))
    }

    return (
        <>
            <div className="section-header" style={{marginBottom: '0.5rem'}}>Connections</div>
            {/*<h2 className={"connection-header"}>Servers</h2>*/}
            <div>
                {renderConnections()}
            </div>
        </>
    );
};

export default ConnectionList;
