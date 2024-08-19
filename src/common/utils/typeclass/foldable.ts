/**
 * Foldable typeclass implementing reduce.
 *
 * @module foldable
 */

/** To pattern match values. */
import { match } from '$/utils/pat/match.ts'

/**
 * Reduce a function over an array of values.
 *
 * @note foldl :: Foldable t => (b -> a -> b) -> b -> t a -> b
 */
export type Reduce = <A>(
  fn: (acc: A, current: A) => A
) => (init: A) => (values: ReadonlyArray<A>) => A

/** Reduce a function over an array of values. */
export const reduce: Reduce =
  <A>(fn: (acc: A, current: A) => A) =>
  (init: A) =>
  (values: ReadonlyArray<A>): A =>
    match(values.length)
      .with(0, () => init)
      .otherwise(() => {
        const [head, ...tail] = values
        return reduce(fn)(fn(init, head))(tail)
      })
