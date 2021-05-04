import React from 'react';



function BoxColour ({r, g, b}) {
    const boxStyle = {
        height: 100,
        backgroundColor: `rgb(${r},${g},${b})`,
        textAlign: 'center'
    };

    return (
        <div style={boxStyle}>
            <p>rgb({r},{g},{b})</p>
        </div>
    )
}

export default BoxColour;