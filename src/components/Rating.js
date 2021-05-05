import React from 'react';

function Rating ({children}) {
    
    const style = {
        fontSize: 30
    }


    let nbOfStars = Math.round(children);
    
    if (nbOfStars === 0) {
        return <div style={style}>☆☆☆☆☆</div>
    } else if (nbOfStars===1) {
        return <div style={style}>★☆☆☆☆</div>
    }
    else if (nbOfStars===2) {
        return <div style={style}>★★☆☆☆</div>
    }
    else if (nbOfStars===3) {
        return <div style={style}>★★★☆☆</div>
    } else if (nbOfStars===4) {
        return <div style={style}>★★★★☆</div>

    } else if (nbOfStars===5) {
        return <div style={style}>★★★★★</div>
    }


    return (
        <div>
            <p>{children}</p>
        </div>
    )

    
};

export default Rating; 
