import React from 'react';
import {AiFillDelete, AiFillEdit} from "react-icons/all";

const ConnectionList = ({connections, onDelete}) => {

    console.log(connections)

    function renderConnection(connection) {
        return (
            <div className="connection-card">
                <div>
                    <h2>{connection.name}</h2>
                    <p><span>IP ADDRESS</span> {connection.ip} <span className={"spacer"}/>
                        <span>CREATED</span> {new Date(connection.created).toLocaleDateString("de-DE")}</p>
                </div>
                <div>
                    <button className='connection-card-button'><AiFillEdit/></button>
                    <button className='connection-card-button'><AiFillDelete/></button>
                </div>
            </div>
        );
    }

    return (
        <>
            <h2 className={"connection-header"}>Servers</h2>
            <div>
                {connections.map(i => renderConnection(i))}
            </div>
        </>
    );
};

export default ConnectionList;
