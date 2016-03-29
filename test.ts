/// <reference path="./modunit.d.ts"/>

declare let require;

import test = require('modunit');

const addomatic = require('./index');

test('(a, b) should return a + b', (t, a, b, expected) => {
    let result = addomatic(a, b);

    t.assert.equal(expected, result);
}, [
    [ 1, 1, 2 ],
    [ 2, 2, 4 ],
    [ 5, 10, 15 ],
    [ 200, 315, 515 ]
]);

test('(a)(b) should return a + b', (t, a, b, expected) => {
    let result = addomatic(a)(b);

    t.assert.equal(expected, result);
}, [
    [ 1, 1, 2 ],
    [ 2, 2, 4 ],
    [ 5, 10, 15 ],
    [ 200, 315, 515 ]
]);
