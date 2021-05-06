import React from 'react';

let dice = [
    '/img/dice1.png',
    '/img/dice2.png',
    '/img/dice3.png',
    '/img/dice4.png',
    '/img/dice5.png',
    '/img/dice6.png',
]

class Dice extends React.Component {
    state = {
        initialDice: dice[Math.floor(Math.random()*dice.length)],
        clicked: false,
        emptyDice: '/img/dice-empty.png',
        newDice: dice[Math.floor(Math.random()*dice.length)]
    };

    clickDice = () => {
        this.setState({
            clicked: !this.state.clicked,
        });
    };
    
    


    render() {
        const { initialDice, clicked, emptyDice, newDice } = this.state
        return (
            <>
               <img onClick={this.clickDice} src={!clicked ? initialDice : emptyDice &&  newDice} className="dice"/>
            </>
        )
    }
}




export default Dice;