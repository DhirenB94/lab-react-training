import React from 'react';

class NumbersTable extends React.Component{
    state = {
        array: this.max(),
    };

    max() {
        let maxArray = Array.from(Array(this.props.limit +1).keys())
        return maxArray
    }

    render () {
        let color;
        return (
            <>
          
                <p>
                    {this.state.array.map(number => {
                    if(number % 2 === 0) {
                        color = 'red'
                    } else {
                        color = 'white'
                    }
                    return (
                        <div style={{backgroundColor: color, height: 50, width: 50}}>
                            <p>{number}</p>
                        </div>
                    )
                    
                    }) }
                </p>
            </>
        )
    }
}
export default NumbersTable; 

// if youre calling a function without a button part - use the () to actually call it



// import React from 'react';
// class NumbersTable extends React.Component {
//     state = {
//         list: this.createList()
//     }
//     createList() {
//         let arr = []
//         for(let i = 1; i<=this.props.limit;i++) {
//             arr.push(i)
//         }
//         return arr;
//     }
//    render() {
//        return (
//            <ul>
//                {this.state.list.map((number)=> {
//                 return <li>{number}</li>
//                })}
//            </ul>
//        )
//    }
// }

// export default NumbersTable