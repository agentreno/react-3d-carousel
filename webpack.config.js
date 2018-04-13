const path = require('path')

module.exports = {
    entry: './src/Carousel3D.js',
    output: {
        filename: 'Carousel3D.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
}
