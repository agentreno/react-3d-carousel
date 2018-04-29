# react-3d-carousel

## Description

React 3D Carousel component which allows any type of child component as part of
the carousel. Inspired by https://github.com/bobiblazeski/react-3d-carousel but
updated to use JSX, ES6 class definitions and allow any child component
instead of just img.

This article also heavily influenced my implementation, much credit to:

http://desandro.github.io/3dtransforms/docs/carousel.html

## Usage

Install in your app via Git (not yet published) using:

`yarn add https://github.com/agentreno/react-3d-carousel.git --save`

Then use it in your React app:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import Carousel3D from 'react-3d-carousel'

const Placeholder = () => (
    <h2>Placeholder</h2>
)
const panels = Array(6).fill(Placeholder)

class App extends React.Component {
    render() {
        return (
            <div>
                <Carousel3D
                    panelWidth={500}
                    panelHeight={700}
                    borderSize={2}
                    panelRenderers={panels}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

See [the example app](example/index.js) that uses the component for a more
complete example.

## TODO

- Find a package name that isn't taken and publish on npm
- Responsive behaviour and grow panel to accomodate contents

## Contributing

Ensure you are running node stable (8.9.4 currently), highly recommend [Node
Version Manager](https://github.com/creationix/nvm) for this.

To get started, run `yarn install`, then `cd example; yarn install` (or use npm
instead of yarn if you want). The example folder contains a small app which
uses the Carousel3D component, and is the best way to work in development.

Run `yarn start` in the example folder to get a development server. Visit the
URL it gives you on the console. Any changes you make to the example app or the
component source should reload the page.

To build a production bundle for the component, run `yarn run build:prod` from
the root of the project.

Feel free to raise issues and make pull requests, I will check in on the
project from time to time but can't guarantee a response. This component is not
production ready.

## Licence

MIT License

Copyright (c) [2018] [Karl Hopkinson-Turrell]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
