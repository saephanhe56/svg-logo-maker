const circle = require('../lib/circle');

describe('circle', () => {
    test('Tests for a circle with orange color', () => {
        const shape = new circle();
        shape.setColor("orange");
        expect(shape.render()).toEqual(`<circle cx="150" cy="115" r="80" fill="orange" />`);
    });
});