# cept

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Intercept method calls.

## Install

This package is ESM only: Node 12+ is needed to use it and it must be `import`ed
instead of `require`d.

[npm][]:

```sh
npm install cept
```

## Use

```js
import {cept} from 'cept'

// Intercept:
var stop = cept(console, 'log', noop)

// From now on `console.log` is ignored:
console.log('foo bar baz')

// No longer ignored!
stop()

function noop() {}
```

## API

This package exports the following identifiers: `cept`.
There is no default export.

### `stop = cept(context, key, callback)`

Intercept all calls to `context[key]` (e.g., `console.log`).
From now on, when the original method would be invoked, `callback` is used
instead.
Invoking `stop` reverts everything back to normal.

###### Parameters

*   `context` (`Object`) — Context object
*   `key` (`string`) — Property where the original function lives
*   `callback` (`Function`) - Interceptor

###### Returns

`Function` — Used to revert back to the previous function.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/wooorm/cept/workflows/main/badge.svg

[build]: https://github.com/wooorm/cept/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/cept.svg

[coverage]: https://codecov.io/github/wooorm/cept

[downloads-badge]: https://img.shields.io/npm/dm/cept.svg

[downloads]: https://www.npmjs.com/package/cept

[size-badge]: https://img.shields.io/bundlephobia/minzip/cept.svg

[size]: https://bundlephobia.com/result?p=cept

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com
