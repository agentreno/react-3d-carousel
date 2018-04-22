import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: ${props => `${props.panelWidth}px`};
    height: ${props => `${props.panelHeight}px`};
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

    transform: translateZ(-${props => props.zValue}px) rotateY(${props => props.displayedIndex * (360 / props.panelCount)}deg);
`

const Figure = styled.figure`
    margin: 0;
    display: block;
    position: absolute;
    width: ${props => `${props.figureWidth}px`};
    height: ${props => `${props.figureHeight}px`};
    left: ${props => `${props.panelPadding}px`};
    top: ${props => `${props.panelPadding}px`};
    border: ${props => `${props.borderSize}px solid black`};
    backface-visibility: hidden;

    transform: rotateY(${props => props.index * (360 / props.panelCount)}deg) translateZ(${props => props.zValue}px);
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

        this.figureWidth = this.props.panelWidth - (this.props.panelPadding * 2) - (this.props.borderSize * 2)
        this.figureHeight = this.props.panelHeight - (this.props.panelPadding * 2) - (this.props.borderSize * 2)
        this.panelCount = this.props.panelRenderers.length
        this.zValue = Math.round(this.props.panelWidth / 2) / Math.tan(Math.PI / this.panelCount)

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
                <Container
                    panelWidth={this.props.panelWidth}
                    panelHeight={this.props.panelHeight}
                >
                    <Carousel
                        displayedIndex={this.state.displayedIndex}
                        zValue={this.zValue}
                        panelCount={this.panelCount}
                    >
                        {
                            this.props.panelRenderers.map((renderer, index) => (
                                <Figure
                                    index={index}
                                    figureWidth={this.figureWidth}
                                    figureHeight={this.figureHeight}
                                    panelPadding={this.props.panelPadding}
                                    borderSize={this.props.borderSize}
                                    zValue={this.zValue}
                                    panelCount={this.panelCount}
                                >
                                    {renderer()}
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

Carousel3D.defaultProps = {
    panelWidth: 210,
    panelHeight: 140,
    panelPadding: 10,
    borderSize: 2
}

export default Carousel3D
