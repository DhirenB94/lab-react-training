import React from 'react';

function Creditcard (props) {
    const cardStyle = {
        color: `${props.color}`,
        backgroundColor: `${props.bgColor}`
    }
    return(
        <div style={cardStyle} className="card">
            <p>{props.type}</p>
            <p>{props.number}</p>
            <p>
                <span>Expires {props.expirationMonth}/{props.expirationYear}    {props.bank}</span>
            </p>
            <p>{props.owner}</p>
        </div>
    )
};

export default Creditcard;