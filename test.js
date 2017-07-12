'use strict';

var test = require('tape');
var cept = require('./');

test('cept(context, key, callback)', function (t) {
  var original = process.cwd();
  var stop = cept(process, 'cwd', fake);

  t.equal(process.cwd(), fake());

  stop();

  t.equal(process.cwd(), original);

  t.end();
});

function fake() {
  return '~';
}
