import React from 'react';

// let carouselImg = [
//     1, 2, 3, 4
// ]



class Carousel extends React.Component {
    state = {
        activeIndex: 0, // activeIndex: carouselImg[0]
        length: 4
    };

    prevSlide = () => {
        let index = this.state.activeIndex;
        let length = this.state.length;
            if (index <1) {
                index= length-1;
            } else {
                index --;
            } this.setState ({
                activeIndex: index
            });
    };

    nextSlide = () => {
        let index = this.state.activeIndex;
        let length = this.state.length;
            if (index === length - 1) {
                index = 0
            } else {
                index ++
            } this.setState({
                activeIndex : index
            })

    }


    render() {
        return (
            <>
            <button onClick={this.prevSlide}> Previous</button>
            {/* <p>{this.state.activeIndex}</p> */}
            <img src={this.props.imgs[this.state.activeIndex]} />
            <button onClick={this.nextSlide}>Next</button>
            </>
        )
    }
}



export default Carousel;