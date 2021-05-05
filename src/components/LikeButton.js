import React from 'react';

class LikeButton extends React.Component {
    state = {
        count: 0
    }

    addOne = () => {
        this.setState({
            count: this.state.count +1
        })
    }


    render () {
        const {count} = this.state
        return (
                <button onClick={this.addOne}>{count} Likes</button>
        )
    }

}





export default LikeButton;