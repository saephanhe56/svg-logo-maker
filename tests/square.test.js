const square = require('../lib/square');

describe('square', () => {
    it("Test for square with blue", () => {
        const shape = new square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(`<rect x="50" width="200" height="200" fill="blue" />`);
    })
})