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

    transform: translateZ(-288px) rotateY(0deg);
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
    render() {
        return (
            <div>
                <Container>
                    <Carousel>
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
                    <Button>Previous</Button>
                    <Button>Next</Button>
                </section>
            </div>
        )
    }
}

export default Carousel3D
