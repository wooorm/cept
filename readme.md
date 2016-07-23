# cept [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

<!--lint disable heading-increment-->

Intercept method calls.

## Installation

[npm][npm-install]:

```bash
npm install cept
```

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

### `stop = intercept(context, key, callback)`

Intercept all calls to `context[key]` (e.g., `console.log`).
From now on, when the original method would be invoked, `callback`
is used instead. Invoking `stop` reverts everything back to normal.

###### Parameters

*   `context` (`Object`) — Context object;
*   `key` (`string`) — Property where the original function lives;
*   `callback` (`Function`) - Interceptor.

###### Returns

`Function` — Used to revert back to the previous function.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/cept.svg

[travis]: https://travis-ci.org/wooorm/cept

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/cept.svg

[codecov]: https://codecov.io/github/wooorm/cept

[npm-install]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com
