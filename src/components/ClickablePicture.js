import React from 'react';

class ClickablePicture extends React.Component {
    
    state = {
        image: this.props.img,
        clicked: false
    }

    addGlasses = () => {
        
        this.setState({
            clicked: !this.state.clicked
        })
        
    }

    render() {
        const {image, clicked} = this.state
        return (
            <div>
               
                <img onClick={this.addGlasses} src={!clicked ? this.props.img : this.props.imgClicked}/>
            </div>
        )
    }
}




export default ClickablePicture;