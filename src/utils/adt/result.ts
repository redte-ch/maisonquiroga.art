/**
 * Utilities for type-safe work with success and failure types.
 *
 * @module result
 */

/**
 * @typeParam F
 * @typeParam S
 */
export type Result<F, S> = Failure<F> | Success<S>

/** @typeParam F */
export type Failure<F> = Readonly<{
  _tag: 'Failure'
  error: F
}>

/**
 * Function that creates a {@link Failure} value.
 *
 * @template F
 * @template S
 * @function
 * @param {F} f - The {@link Failure} value.
 * @returns {Result<F, S>} - A {@link Result} containing the {@link Failure}.
 */
export const failure = <F, S = never>(f: F): Result<F, S> => ({
  _tag: 'Failure',
  error: f
})

/** @typeParam S */
export type Success<S> = Readonly<{
  _tag: 'Success'
  value: S
}>

/**
 * Function that creates a {@link Success} value.
 *
 * @template S
 * @template F
 * @function
 * @param {S} s - The success value.
 * @returns {Result<F, S>} - A {@link Result} containing the {@link Success}.
 */
export const success = <S, F = never>(s: S): Result<F, S> => ({
  _tag: 'Success',
  value: s
})

/**
 * A type guard for the {@link Failure} type.
 *
 * @template F
 * @template S
 * @function
 * @param {Result<F, S>} x - The value to be checked.
 */
export const failed = <F, S>(x: Result<F, S>): x is Failure<F> =>
  x && x._tag && x._tag === 'Failure'

/**
 * A type guard for the {@link Success} type.
 *
 * @template F
 * @template S
 * @function
 * @param {Result<F, S>} x - The value to be checked.
 */
export const succeed = <F, S>(x: Result<F, S>): x is Success<S> =>
  x && x._tag && x._tag === 'Success'

/**
 * @typeParam F
 * @typeParam A
 * @typeParam B
 */
export type Match = <F, A, B>(
  a: (a: F) => B,
  b: (a: A) => B
) => (a: Result<F, A>) => B

/**
 * Function to match a {@link Result} value.
 *
 * @function
 * @param {(a: F) => B} onFailure - The function to call when the match fails.
 * @param {(a: A) => B} onSuccess - The function to call when the match
 *   succeeds.
 * @returns {(a: Result<F, A>) => B} - The result of performing the match.
 */
export const match: Match = (onFailure, onSuccess) => (x) =>
  failed(x) ? onFailure(x.error) : onSuccess(x.value)
