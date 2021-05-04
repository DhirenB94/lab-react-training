import React from 'react';

function Greetings ({children, lang}) {
    let greeting = "";
    if (lang === "de") {
        greeting = "Hallo"
    } else if (lang==="fr") {
        greeting="Bonjour"
    }
    else if (lang==="en") {
        greeting="Hello"
    }
    else if (lang==="es") {
        greeting="Ola"
    }


    return (
        <div>
            <p>{greeting} {children}</p>
        </div>
    )
}

export default Greetings;