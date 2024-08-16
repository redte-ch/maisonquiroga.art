/**
 * Pipe operator.
 *
 * @module pipe
 */

import type { Fx } from '~/utils/composition/compose'

import { compose } from '~/utils/composition/compose'

/**
 * @template T
 * @param {T} a - The input value.
 * @param {Fx<T>} b - The array of functions to be applied.
 * @returns {T} The output value.
 */
export type Pipe = <T>(a: T, b: Fx<T>) => T

/**
 * Pipe a value through an array of functions.
 *
 * @template T
 * @function
 * @param {T} x - The value to be piped through the functions.
 * @param {Fx<T>} fx - An array of functions to be applied.
 * @returns {T} The final result of applying the functions to the value.
 */
export const pipe: Pipe = <T>(x: T, fx: Fx<T>): T => compose<T>(fx)(x)
