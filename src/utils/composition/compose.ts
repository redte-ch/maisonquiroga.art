/**
 * Compose a function from an array of functions.
 *
 * @module compose
 */

import { curry } from '~/utils/composition/curry'
import { reduce } from '~/utils/typeclass/foldable'

/** @typeParam T */
type Fn<T> = (a: T) => T

/** @template T */
export type Fx<T> = ReadonlyArray<Fn<T>>

/**
 * @template T
 * @type Compose
 * @param {Fx<T>} a - The list of functions to compose.
 * @returns {Function} The result of composing the functions.
 */
export type Compose = <T>(a: Fx<T>) => (b: T) => T

/**
 * Compose a function from an array of functions.
 *
 * @template T
 * @param {Fx<T>} fx - An array of functions to be composed.
 * @returns {(x: T) => T} A function that takes an input value of type T and
 *   applies each function in the array to the input in order.
 */
export const compose: Compose = <T>(fx: Fx<T>): ((x: T) => T) => {
  const fn = (g: T, f: Fn<T>) => f(g)
  const reducer = curry(reduce)(fn)
  return (x: T) => reducer(x)(fx)
}
