/**
 * Number utilities.
 *
 * @module number
 */

/** To narrow down value types. */
import type { Refinement } from '~/types'

export type IsNumber = Refinement<unknown, number>

/**
 * Check if a value is a {@link number}.
 *
 * @param {unknown} x - The value to be checked.
 * @returns {boolean} - True if the value is a {@link number}, false otherwise.
 */
export const isNumber: IsNumber = (x: unknown): x is number =>
  typeof x === 'number'
