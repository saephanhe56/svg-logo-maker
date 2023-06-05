
const shapes = require('lib/Shapes');

class circle extends shapes {
    render() {return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`}
}
module.exports = circle;