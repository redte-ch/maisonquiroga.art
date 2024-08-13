import type { Guard } from '~/types'

/**
 * Check if a value is a string.
 *
 * @param {unknown} value - The value to be checked.
 * @returns {boolean} - Return true if the value is a string, false otherwise.
 */
export const isString: Guard<string> = (value: unknown): value is string =>
  typeof value === 'string'
