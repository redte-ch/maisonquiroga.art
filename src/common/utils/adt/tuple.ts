/*
 * Tuple "product type".
 *
 * @definition A product type is a collection of types Ti indexed by a set I.
 * @see {@link https://github.com/enricopolanski/functional-programming}
 *
 * @module Tuple
 */

/*
 * Tuple type.
 *
 * @example
 *   const tuple1: Tuple<number[]> = [1]
 *   const tuple2: Tuple<number[]> = [1, 2]
 *   const tuple3: Tuple<[...(number | string)[]]> = [1, 2, "3"]
 */
export type Tuple<A extends unknown[]> = [...A]
