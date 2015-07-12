# cept [![Build Status](https://img.shields.io/travis/wooorm/cept.svg?style=flat)](https://travis-ci.org/wooorm/cept) [![Coverage Status](https://img.shields.io/coveralls/wooorm/cept.svg?style=flat)](https://coveralls.io/r/wooorm/cept?branch=master)

Intercept method calls.

## Installation

[npm](https://docs.npmjs.com/cli/install):

```bash
npm install cept
```

**cept** is also available for [bower](http://bower.io/#install-packages),
[component](https://github.com/componentjs/component), [duo](http://duojs.org/#getting-started),
and for AMD, CommonJS, and globals ([uncompressed](cept.js) and
[compressed](cept.min.js)).

## Usage

Dependencies.

```javascript
var cept = require('cept');
```

No-op:

```javascript
function noop() {}
```

Intercept:

```javascript
cept(console, 'log', noop);
```

From now on `console.log` is ignored:

```javascript
console.log('foo bar baz');
```

## API

### stop = intercept(context, key, callback)

Intercept all calls to `context[key]` (e.g., `console.log`).
From now on, when the original method would be invoked, `callback`
is used instead. Invoking `stop` reverts everything back to normal.

Parameters:

*   `context` (`Object`) — Context object;
*   `key` (`string`) — Property where the original function lives;
*   `callback` (`Function`) - Interceptor.

Returns: `Function` — Used to revert back to the previous function.

## License

[MIT](LICENSE) @ [Titus Wormer](http://wooorm.com)
