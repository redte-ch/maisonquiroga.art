/**
 * Utilities for type-safe work with optional values and result types.
 *
 * @module maybe
 */

/** To narrow down value types. */
import type { Refinement } from '~/types'

/** Data type for values that may or may not be present. */
export type Maybe<A> = Nothing | Just<A>

/** Data type for values that are present. */
export type Just<A> = Readonly<{
  _tag: 'Just'
  value: A
}>

/**
 * Wrap a value in a {@link Maybe} monad.
 *
 * @param {A} a - The value being wrapped.
 * @returns {Maybe<A>} - The wrapped value.
 */
export const just = <A>(a: A): Maybe<A> => ({ _tag: 'Just', value: a })

/** Data type for absent values. */
export type Nothing = Readonly<{
  _tag: 'Nothing'
}>

/**
 * No value.
 *
 * @see {@link https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare/}
 */
export const nothing: Maybe<never> = { _tag: 'Nothing' }

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
 * Check if a value is {@link Nothing}.
 *
 * @function
 * @param {unknown} x - The value to be checked.
 * @returns {boolean} - True if the value is {@link Nothing}, false otherwise.
 */
export const isNothing: Refinement<Maybe<unknown>, Nothing> = (
  x: Maybe<unknown>
): x is Nothing => x && x._tag && x._tag === 'Nothing'

/** Callback if a value is {@link Just}. */
type OnJust<A, B> = (a: A) => B

/** Callback if a value is {@link Nothing}. */
type OnNothing<A> = () => A

/** Matcher over {@link Maybe} */
type Matcher<A, B, C> = (a: Maybe<A>) => B | C

/**
 * @param {OnNothing} a - Function to apply when the value is {@link Nothing}.
 * @param {OnJust} b - Function to apply when the value is {@link Just}.
 * @returns {Matcher} A function that takes a {@link Maybe} value and returns the
 *   result of applying the appropriate callback function.
 */
export type Match = <A, B, C>(
  a: OnNothing<B>,
  b: OnJust<A, C>
) => Matcher<A, B, C>

/** Function to match a {@link Maybe} value and apply the appropriate callbacks. */
export const match: Match = (onNothing, onJust) => (x) =>
  isJust(x) ? onJust(x.value) : onNothing()
