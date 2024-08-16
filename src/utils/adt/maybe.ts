/**
 * Utilities for type-safe work with optional values and result types.
 *
 * @module maybe
 */

import type { Refinement } from '~/types'

/** @typeParam A */
export type Maybe<A> = Nothing | Just<A>

/** @typeParam A */
export type Just<A> = Readonly<{
  _tag: 'Just'
  value: A
}>

/** A type that signifies the absence of a value. */
export type Nothing = Readonly<{
  _tag: 'Nothing'
}>

/** A variable indicating the absence of a value. */
export const nothing: Maybe<never> = { _tag: 'Nothing' }

/**
 * A function to wrap a value in a {@link Maybe} monad.
 *
 * @template A
 * @function
 * @param {A} a - The value being wrapped.
 * @returns {Maybe<A>} - The wrapped value.
 */
export const just = <A>(a: A): Maybe<A> => ({ _tag: 'Just', value: a })

/**
 * Check if a value is {@link Nothing}.
 *
 * @function
 * @param {unknown} x - The value to be checked.
 * @returns {boolean} - True if the value is {@link Nothing}, false otherwise.
 */
export const isNothing: Refinement<Maybe<unknown>, Nothing> = (
  x: Maybe<unknown>
): x is Nothing => x && x._tag && x._tag === 'Nothing'

/**
 * Check if a value is {@link Just}.
 *
 * @function
 * @param {unknown} x - The value to be checked.
 * @returns {boolean} - True if the value is {@link Just}, false otherwise.
 */
export const isJust: Refinement<Maybe<unknown>, Just<unknown>> = (
  x: Maybe<unknown>
): x is Just<unknown> => x && x._tag && x._tag === 'Just'

/**
 * @template A
 * @template B
 * @template C
 * @param {() => B} a - Function to apply when the value is {@link Nothing}.
 * @param {(a: A) => C} b - Function to apply when the value is {@link Just}.
 * @returns {(z: Maybe<A>) => B | C} A function that takes a {@link Maybe} value
 *   and returns the result of applying the appropriate function.
 */
export type Match = <A, B, C>(
  a: () => B,
  b: (a: A) => C
) => (a: Maybe<A>) => B | C

/**
 * Function to match a {@link Maybe} value.
 *
 * @function
 * @param {() => B} onNothing - Callback if the value is {@link Nothing}.
 * @param {(a: A) => B} onJust - Callback if the value is {@link Just}.
 * @returns {(x: Maybe<A>) => B} - The matched value.
 */
export const match: Match = (onNothing, onJust) => (x) =>
  isJust(x) ? onJust(x.value) : onNothing()
