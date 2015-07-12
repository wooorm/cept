'use strict';

/* eslint-env mocha */

/*
 * Dependencies.
 */

var cept = require('./');
var assert = require('assert');

/*
 * Tests.
 */

describe('cept(context, key, callback)', function () {
    it('should work', function () {
        var original = process.cwd();
        var stop = cept(process, 'cwd', function () {
            return '~';
        });

        assert.equal(process.cwd(), '~');

        stop();

        assert.equal(process.cwd(), original);
    });
});
