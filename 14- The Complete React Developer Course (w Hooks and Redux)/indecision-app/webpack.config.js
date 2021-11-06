const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/app.js', // input -> file will compile it
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    }
}