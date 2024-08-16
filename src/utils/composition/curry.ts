/**
 * Currying utils.
 *
 * @module curry
 */

import { nothing } from '~/utils/adt/maybe'
import { match } from '~/utils/control-flow/match'

/**
 * @typeParam P
 * @typeParam R
 */
type Fn<P extends any[], R> = (...args: P) => R

/** @typeParam T */
type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never

/** @typeParam T */
type Tail<T extends any[]> = T extends [any, ...infer U] ? U : never

/**
 * @typeParam P
 * @typeParam R
 */
export type Curry<P extends any[], R> =
  Fn<P, R> extends Fn<infer T, infer U>
    ? T extends []
      ? U
      : (arg: Head<T>) => Curry<Tail<T>, U>
    : never

/**
 * @overload
 * @typeParam P
 * @typeParam R
 * @param {Fn<P, R>} fn - The function to be curried.
 * @returns {Curry<P, R>} - The curried function.
 */

/**
 * Curry a function
 *
 * @param {function} fn - The function to be curried
 * @returns {function} - The curried function
 * @see {@link https://blog.openreplay.com/forever-functional-complex-typing-in-typescript-part-2/}
 */
export const curry = (fn: Fn<any, any>) => {
  return match(fn.length)
    .with(0, () => fn())
    .otherwise(() => {
      return (x: any) => curry(fn.bind(nothing, x))
    })
}
