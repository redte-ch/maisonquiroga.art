/**
 * String utilities.
 *
 * @module string
 */

import type { Refinement } from '~/types'

/**
 * Check if a value is a {@link string}.
 *
 * @function
 * @param {unknown} x - The value to be checked.
 * @returns {boolean} - True if the value is a {@link string}, false otherwise.
 */
export const isString: Refinement<unknown, string> = (
  x: unknown
): x is string => typeof x === 'string'
