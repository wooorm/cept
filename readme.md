# cept

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Intercept method calls.

## Installation

[npm][]:

```bash
npm install cept
```

## Usage

```javascript
var cept = require('cept')

// Intercept:
var stop = cept(console, 'log', noop)

// From now on `console.log` is ignored:
console.log('foo bar baz')

// No longer ignored!
stop()

function noop() {}
```

## API

### `stop = intercept(context, key, callback)`

Intercept all calls to `context[key]` (e.g., `console.log`).
From now on, when the original method would be invoked, `callback`
is used instead.  Invoking `stop` reverts everything back to normal.

###### Parameters

*   `context` (`Object`) — Context object
*   `key` (`string`) — Property where the original function lives
*   `callback` (`Function`) - Interceptor

###### Returns

`Function` — Used to revert back to the previous function.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/wooorm/cept.svg

[build]: https://travis-ci.org/wooorm/cept

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/cept.svg

[coverage]: https://codecov.io/github/wooorm/cept

[downloads-badge]: https://img.shields.io/npm/dm/cept.svg

[downloads]: https://www.npmjs.com/package/cept

[size-badge]: https://img.shields.io/bundlephobia/minzip/cept.svg

[size]: https://bundlephobia.com/result?p=cept

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com
