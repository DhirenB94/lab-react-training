import React from 'react';
import Rating from '../components/Rating'; 

function DriverCard (props) {
    const driver = {
        height: 150,
        backgroundColor: 'blue',
        textAlign: 'center',
        color: 'White',
        marginBottom: 10,
        borderRadius: 20
    }
    return (
        <div style={driver} className="driver-card">
            <div className="div-image">
                <img  className="driver-image" src={props.img} />
            </div>
            <div className="driver-info">
                <h2>{props.name}</h2>
                <p><Rating>{props.rating}</Rating></p>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
            <br/>
        </div>
    )
};

export default DriverCard; 