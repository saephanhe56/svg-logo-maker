const triangle = require('../lib/triangle');

describe('triangle', () => {
    test('test for a triangle with green', () => {
        const shape = new triangle();
        shape.setColor("green");
        expect(shape.render()).toEqual(`<polygon height="100" width="100" points="0,200 300,200 150, 0" fill="green" />`);
    });
  });