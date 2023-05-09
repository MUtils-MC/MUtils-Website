import React from 'react';

const ConnectionList = ({connections, onDelete}) => {

    console.log(connections)

    function renderConnection(connection) {
        return (
            <div className="connection-card">
                <h2>{connection.name}</h2>
                <p><span>IP ADDRESS</span> {connection.ip} <span className={"spacer"}/>
                    <span>CREATED</span> {new Date(connection.created).toLocaleDateString("de-DE")}</p>
            </div>
        );
    }

    return (
        <>
            <h2 className={"connection-header"}>Servers</h2>

            <table className={"connection-table"}>
                <tbody>
                {connections.map(i =>


                    <tr>
                        <td>
                            {renderConnection(i)}
                        </td>
                        <td>
                            <button className={"connection-button delete-button"}>X</button>
                        </td>
                        <td>
                            <button className={"connection-button edit-button"}>E</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            <div>
                {connections.map(i => renderConnection(i))}
            </div>
        </>
    );
};

export default ConnectionList;
