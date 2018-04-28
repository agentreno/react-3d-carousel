import React from 'react'
import ReactDOM from 'react-dom'

import Carousel3D from '../src/Carousel3D'

const Placeholder = ({ index }) => (
    <h2>Panel {index + 1}</h2>
)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            panels: Array(6).fill().map((_, index) => () => Placeholder({ index }))
        }

        this.addPanel = this.addPanel.bind(this)
        this.removePanel = this.removePanel.bind(this)
    }

    addPanel() {
        this.setState(prevState => {
            let panelCount = prevState.panels.length
            return Object.assign({}, prevState, {
                panels: prevState.panels.concat(() => Placeholder({ index: panelCount }))
            })
        })
    }

    removePanel() {
        this.setState(prevState => {
            return Object.assign({}, prevState, {
                panels: prevState.panels.slice(0, -1)
            })
        })
    }

    render() {
        return (
            <div>
                <Carousel3D
                    panelWidth={500}
                    panelHeight={700}
                    panelRenderers={this.state.panels}
                />
                <button onClick={this.addPanel}>Add Panel</button>
                <button onClick={this.removePanel}>Remove Panel</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
