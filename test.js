/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module cept
 * @fileoverview Test suite for `cept`.
 */

'use strict';

/* Dependencies. */
var test = require('tape');
var cept = require('./');

/* Tests. */
test('cept(context, key, callback)', function (t) {
  var original = process.cwd();
  var stop = cept(process, 'cwd', function () {
    return '~';
  });

  t.equal(process.cwd(), '~');

  stop();

  t.equal(process.cwd(), original);

  t.end();
});
