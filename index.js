'use strict';

module.exports = function addomatic(a, b) {
    if (b) {
        return a + b;
    }
    
    return function (c) {
        return a + c;
    };
};
