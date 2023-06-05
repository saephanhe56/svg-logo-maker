
const shapes = require('lib/shapes');

class triangle extends shapes {
    render() {return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`};
};
module.exports = triangle;