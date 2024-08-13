import type { Guard, Validator } from '~/types'

import { isString } from '~/utils/guards'

/**
 * Validate a value using a provided guard function.
 *
 * @template T - The type of value being validated.
 * @param {Guard<T>} fn - The guard function used for validation.
 * @returns {Validator<T>} - A validator function.
 */
const validator = <T>(fn: Guard<T>): Validator<T> => {
  return async (value: unknown): Promise<T> => {
    const [result] = await Promise.all([value])
    if (fn(result)) return result as T
    throw new TypeError(`Expected a valid type, got ${typeof result}`)
  }
}

/**
 * Variable a string value.
 *
 * @type {Validator<string>}
 * @param {string} value - The value to be validated.
 * @returns {string} - If the value is a string
 * @throws {TypeError} - If the value is not a string.
 */
export const validateString: Validator<string> = validator(isString)
