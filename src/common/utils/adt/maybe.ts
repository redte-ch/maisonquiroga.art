/**
 * Utilities for type-safe work with optional values and result types.
 *
 * @module maybe
 */

/** To narrow down value types. */
import type { Refinable } from '$/types.ts'

/** To pattern match values. */
import { match as pmatch } from '$/utils/pat/match.ts'

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
export const isJust: Refinable<Maybe<unknown>, Just<unknown>> = (
  x: Maybe<unknown>
): x is Just<unknown> => x._tag === 'Just'

/**
 * Check if a value is {@link Nothing}.
 *
 * @function
 * @param {unknown} x - The value to be checked.
 * @returns {boolean} - True if the value is {@link Nothing}, false otherwise.
 */
export const isNothing: Refinable<Maybe<unknown>, Nothing> = (
  x: Maybe<unknown>
): x is Nothing => x._tag === 'Nothing'

/** Callback if a value is {@link Just}. */
type OnJust<J, O> = (a: J) => O

/** Callback if a value is {@link Nothing}. */
type OnNothing<N> = () => N

/** Guard over {@link Maybe} */
export type Guard<N, J, O = J> = (a: Maybe<J>) => N | O

/**
 * Match a {@link Maybe} value and apply the appropriate callbacks.
 *
 * @param {OnNothing} a - Function to apply when the value is {@link Nothing}.
 * @param {OnJust} b - Function to apply when the value is {@link Just}.
 * @returns {Guard} The result of performing the match.
 */
export type Match = <N, J, O>(
  a: OnNothing<N>,
  b: OnJust<J, O>
) => Guard<N, J, O>

/** Match a {@link Maybe} value and apply the appropriate callbacks. */
export const match: Match = (onNothing, onJust) => (x) =>
  pmatch(x)
    .with({ _tag: 'Nothing' }, onNothing)
    .with({ _tag: 'Just' }, ({ value }) => onJust(value))
    .exhaustive()

/**
 * Maybe functor to wrap/unwrap a function.
 *
 * @param {Function} f The mapping function that transforms the input value.
 * @returns {Function} A new function that takes a `Maybe` container and applies
 *   the mapping function to its value.
 */
export type Map = <A, B>(f: (x: A) => B) => (Fx: Maybe<A>) => Maybe<B>

/**
 * Maybe functor to wrap/unwrap a function.
 *
 * @note fmap @Maybe :: (a -> b) ->  Maybe a -> Maybe b
 * @todo Add support for curried functions.
 */
export const map: Map = (f) =>
  match(
    () => nothing,
    (a) => just(f(a))
  )
