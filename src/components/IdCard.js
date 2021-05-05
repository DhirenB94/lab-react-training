import React from 'react';

function IdCard (props) {
    return (
        <div>
            
            <div className="profile">
                <div className="profile-pic">
                    <img src={props.picture} />
                </div>
                <div className="profile-info">
                    <p>First Name: {props.firstName} </p>
                    <p>Last name: {props.lastName}</p>
                    <p>Gender: {props.gender}</p>
                    <p>Height: {props.height}m</p>
                    <p>Birth: {props.birth.toLocaleDateString()}</p>
                </div>
            </div>
        </div>
        
    )
}

export default IdCard;