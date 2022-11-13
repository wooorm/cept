/**
 * Intercept all calls to `context[key]` (e.g., `console.log`).
 * From now on, when the original method would be called, `callback` is used
 * instead.
 * Calling `stop` reverts everything back to normal.
 *
 * @template {object} T
 * @param {T} context Context object
 * @param {string | number} name Field where the original method lives
 * @param {Function} callback Interceptor
 */
export function cept(context, name, callback) {
  /** @type {unknown} */
  const original = context[name]

  context[name] = callback

  return stop

  /**
   * `stop` function that reverts everything back to normal.
   */
  function stop() {
    context[name] = original
  }
}
