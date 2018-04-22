import React from 'react'
import ReactDOM from 'react-dom'

import Carousel3D from '../src/Carousel3D'

const Placeholder = () => (
    <h2>Hello</h2>
)

const panels = Array(6).fill(Placeholder)

ReactDOM.render(
    <Carousel3D
        panelWidth={500}
        panelHeight={700}
        panelRenderers={panels}
    />,
    document.getElementById('root')
)

