/**
 * Number utilities.
 *
 * @module number
 */

import type { Refinement } from '~/types'

/**
 * Check if a value is a {@link number}.
 *
 * @function
 * @param {unknown} x - The value to be checked.
 * @returns {boolean} - True if the value is a {@link number}, false otherwise.
 */
export const isNumber: Refinement<unknown, number> = (
  x: unknown
): x is number => typeof x === 'number'
