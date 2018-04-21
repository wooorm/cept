# cept [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

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

[travis-badge]: https://img.shields.io/travis/wooorm/cept.svg

[travis]: https://travis-ci.org/wooorm/cept

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/cept.svg

[codecov]: https://codecov.io/github/wooorm/cept

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com
