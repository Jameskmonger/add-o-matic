/// <reference path="./modunit.d.ts"/>

import test = require('modunit');

test('(a, b) should return a + b', (t, a, b, expected) => {

}, [
    [ 1, 1, 2 ],
    [ 2, 2, 4 ],
    [ 5, 10, 15 ],
    [ 200, 315, 515 ]
]);
