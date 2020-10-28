'use strict'

module.exports = cept

function cept(context, name, callback) {
  var original = context[name]

  context[name] = callback

  return function () {
    context[name] = original
  }
}
