/**
 * Pipe operator.
 *
 * @module pipe
 */

import type { Fx } from '~/utils/composition/compose'

import { compose } from '~/utils/composition/compose'

/**
 * Pipe a value through an array of functions.
 *
 * @param {Fx<T>} a - The array of functions to be applied.
 * @param {T} b - The input value.
 * @returns {T} The output value.
 */
export type Pipe = <T>(a: Fx<T>) => (a: T) => T

/** Pipe a value through an array of functions. */
export const pipe: Pipe = (fx) => compose(fx)
