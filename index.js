/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer. All rights reserved.
 * @module mdast-util-visit
 * @fileoverview Intercept calls to `name` on `context`.
 */

'use strict';

/**
 * Intercept calls to `name` on `context`.
 *
 * @param {Object} context
 * @param {string} name
 * @param {Function} callback
 * @return {Function} A method to stop intercepting.
 */
function intercept(context, name, callback) {
    var original = context[name];

    context[name] = callback;

    return function () {
        context[name] = original;
    };
}

/*
 * Expose.
 */

module.exports = intercept;
