/**
 * Utilities for type-safe work with success and failure types.
 *
 * @module result
 */

/** To pattern match values. */
import { match as pmatch } from '~/utils/control-flow/match'

/** Data type for values that may succeed or fail. */
export type Result<F, S> = Failure<F> | Success<S>

/** Data type for values that succeed. */
export type Success<S> = Readonly<{
  _tag: 'Success'
  value: S
}>

/**
 * Create a {@link Success} data type.
 *
 * @param {S} s - The {@link success} value.
 * @returns {Result} A {@link Result} containing the {@link Success}.
 */
export const success = <S, F = never>(s: S): Result<F, S> => ({
  _tag: 'Success',
  value: s
})

/** Data type for values that fail. */
export type Failure<F> = Readonly<{
  _tag: 'Failure'
  error: F
}>

/**
 * Create a {@link Failure} data type.
 *
 * @param {F} f - The {@link Failure} value.
 * @returns {Result} A {@link Result} containing the {@link Failure}.
 */
export const failure = <F, S = never>(f: F): Result<F, S> => ({
  _tag: 'Failure',
  error: f
})

/**
 * Check if a value is {@link Success}.
 *
 * @param {Result} x - The value to be checked.
 * @returns {boolean} - True if the value is {@link Success}, false otherwise.
 */
export const succeed = <F, S>(x: Result<F, S>): x is Success<S> =>
  x._tag === 'Success'

/**
 * Check if a value is {@link Failure}.
 *
 * @param {Result} x - The value to be checked.
 * @returns {boolean} - True if the value is {@link Failure}, false otherwise.
 */
export const failed = <F, S>(x: Result<F, S>): x is Failure<F> =>
  x._tag === 'Failure'

/** Callback if a value is {@link Success}. */
type OnSuccess<A, B> = (a: A) => B

/** Callback if a value is {@link Failure}. */
type OnFailure<F, B> = (a: F) => B

/** Matcher over {@link Result} */
export type Matcher<F, A = F, B = A, C = B> = (a: Result<F, A>) => B | C

/**
 * Match a {@link Result} value and apply the appropriate callbacks.
 *
 * @param {OnFailure} a - The function to call when {@link Failure}.
 * @param {OnSuccess} b - The function to call when {@link Success}.
 * @returns {Matcher} - The result of performing the match.
 */
export type Match = <F, A, B, C>(
  a: OnFailure<F, B>,
  b: OnSuccess<A, B>
) => Matcher<F, A, B, C>

/** Match a {@link Result} value and apply the appropriate callbacks. */
export const match: Match = (onFailure, onSuccess) => (x) =>
  pmatch(x)
    .with({ _tag: 'Failure' }, ({ error }) => onFailure(error))
    .with({ _tag: 'Success' }, ({ value }) => onSuccess(value))
    .exhaustive()
