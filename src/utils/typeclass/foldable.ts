/**
 * Foldable typeclass implementing reduce.
 *
 * @module foldable
 */

/** @template A */
export type Reduce = <A>(f: (a: A, b: A) => A, a: A, b: ReadonlyArray<A>) => A

/**
 * Reduce a function over an array of values.
 *
 * @template A
 * @param {(acc: A, current: A) => A} fn - The reducer function.
 * @param {A} init - The initial value of the reduction.
 * @param {A[]} values - The array of values to be reduced.
 * @returns {A} The final reduced value.
 */
export const reduce: Reduce = <A>(
  fn: (acc: A, current: A) => A,
  init: A,
  values: ReadonlyArray<A>
): A => {
  if (values.length === 0) return init
  const [head, ...tail] = values
  return reduce(fn, fn(init, head), tail)
}
