'use strict';

/* Expose. */
module.exports = cept;

/**
 * Intercept calls to `name` on `context`.
 *
 * @param {Object} context
 * @param {string} name
 * @param {Function} callback
 * @return {Function} A method to stop intercepting.
 */
function cept(context, name, callback) {
  var original = context[name];

  context[name] = callback;

  return function () {
    context[name] = original;
  };
}
