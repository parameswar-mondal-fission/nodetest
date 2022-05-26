'use strict';

function add(a, b) { return a + b }

test('string with a single number should result in the number itself', () => {
    expect(add(1, 2)).toBe(3);
});