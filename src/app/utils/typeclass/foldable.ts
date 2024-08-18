/**
 * Foldable typeclass implementing reduce.
 *
 * @module foldable
 */

/** To pattern match values. */
import { match } from '$/utils/control-flow/match'

/** Reduce a function over an array of values. */
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
