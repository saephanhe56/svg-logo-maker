
const shapes = require('lib/shapes');

class square extends shapes {
    render() {return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`}
}
module.exports = square;