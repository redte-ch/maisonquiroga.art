/**
 * String utilities.
 *
 * @module string
 */

/** To narrow down value types. */
import type { Refinement } from '~/types'

export type IsString = Refinement<unknown, string>

/**
 * Check if a value is a {@link string}.
 *
 * @param {unknown} x - The value to be checked.
 * @returns {boolean} - True if the value is a {@link string}, false otherwise.
 */
export const isString: IsString = (x: unknown): x is string =>
  typeof x === 'string'
