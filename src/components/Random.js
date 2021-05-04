import React from 'react';

function Random ({min, max}) {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

      let random = getRandomIntInclusive(min, max)

    return(
        <div>
            <p>Random number between {min} and {max} ={random} </p>
        </div>
    )
}

export default Random;