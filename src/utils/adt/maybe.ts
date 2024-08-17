/**
 * Utilities for type-safe work with optional values and result types.
 *
 * @module maybe
 */

/** To narrow down value types. */
import type { Refinement } from '~/types'

/** To pattern match values. */
import { match as pmatch } from '~/utils/control-flow/match'

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
): x is Just<unknown> => x._tag === 'Just'

/**
 * Check if a value is {@link Nothing}.
 *
 * @function
 * @param {unknown} x - The value to be checked.
 * @returns {boolean} - True if the value is {@link Nothing}, false otherwise.
 */
export const isNothing: Refinement<Maybe<unknown>, Nothing> = (
  x: Maybe<unknown>
): x is Nothing => x._tag === 'Nothing'

/** Callback if a value is {@link Just}. */
type OnJust<J, O> = (a: J) => O

/** Callback if a value is {@link Nothing}. */
type OnNothing<N> = () => N

/** Matcher over {@link Maybe} */
export type Matcher<N, J, O = J> = (a: Maybe<J>) => N | O

/**
 * Match a {@link Maybe} value and apply the appropriate callbacks.
 *
 * @param {OnNothing} a - Function to apply when the value is {@link Nothing}.
 * @param {OnJust} b - Function to apply when the value is {@link Just}.
 * @returns {Matcher} The result of performing the match.
 */
export type Match = <N, J, O>(
  a: OnNothing<N>,
  b: OnJust<J, O>
) => Matcher<N, J, O>

/** Match a {@link Maybe} value and apply the appropriate callbacks. */
export const match: Match = (onNothing, onJust) => (x) =>
  pmatch(x)
    .with({ _tag: 'Nothing' }, onNothing)
    .with({ _tag: 'Just' }, ({ value }) => onJust(value))
    .exhaustive()
