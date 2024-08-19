/*
 * Struct "product type".
 *
 * @definition A product type is a collection of types Ti indexed by a set I.
 * @see {@link https://github.com/enricopolanski/functional-programming}
 *
 * @module Struct
 */

/*
 * Struct type.
 *
 * @example
 *   const struct1: Struct<[...number[]]> = [1]
 *   const struct2: Struct<[...string[]]> = ["a"]
 *   const struct3: Struct<[...(number|string|boolean)[]]> = [1, "a", false]
 */
export type Struct<A extends unknown[]> = {
  readonly [K in keyof A]: A[K]
}
