// Dependencies.
var cept = require('./index.js');

// No-op:
function noop() {}

// Intercept:
cept(console, 'log', noop);

// From now on `console.log` is ignored:
console.log('foo bar baz');
