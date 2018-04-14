import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 210px;
    height: 140px;
    margin: 0 auto;
    margin-top: 80px;
    position: relative;
    perspective: 1000px;
`

const Carousel = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 1s;

    transform: translateZ(-288px) rotateY(${props => props.displayedIndex * 40}deg);
`

const Figure = styled.figure`
    margin: 0;
    display: block;
    position: absolute;
    width: 186px;
    height: 116px;
    left: 10px;
    top: 10px;
    border: 2px solid black;
    backface-visibility: hidden;

    transform: rotateY(${props => props.index * 40}deg) translateZ(288px);
`

const Button = styled.button`
    border: none;
    padding: 5px 10px;
    margin: 5px 10px;
`

class Carousel3D extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayedIndex: 0
        }

        this.handlePrevious = this.handlePrevious.bind(this)
        this.handleNext = this.handleNext.bind(this)
    }

    handlePrevious() {
        this.setState(prevState => ({
            displayedIndex: prevState.displayedIndex - 1
        }))
    }

    handleNext() {
        this.setState(prevState => ({
            displayedIndex: prevState.displayedIndex + 1
        }))
    }

    render() {
        return (
            <div>
                <Container>
                    <Carousel displayedIndex={this.state.displayedIndex}>
                        {
                            [...Array(9).keys()].map(index => (
                                <Figure
                                    index={index}
                                >
                                    {index}
                                </Figure>
                            ))
                        }
                    </Carousel>

                </Container>
                <section>
                    <Button onClick={this.handlePrevious}>Previous</Button>
                    <Button onClick={this.handleNext}>Next</Button>
                </section>
            </div>
        )
    }
}

export default Carousel3D
