/**
 * Compose a function from an array of functions.
 *
 * @module compose
 */

/** To pattern match values. */
import { match } from '~/utils/control-flow/match'

/** Function type that takes a value of type A and returns a value of type B. */
type Fn<A, B> = (a: A) => B

/** Compose type definition. */
export type Compose = {
  <A, B, C, D>(a: Readonly<[Fn<A, B>, Fn<B, C>, Fn<C, D>]>): Fn<A, D>
  <A, B, C>(a: Readonly<[Fn<A, B>, Fn<B, C>]>): Fn<A, C>
  <A, B>(a: Readonly<[Fn<A, B>]>): Fn<A, B>
  <A>(a: Readonly<[]>): Fn<A, A>
  (a: ReadonlyArray<Fn<any, any>>): Fn<any, any>
}

/**
 * Compose a function from an array of functions.
 *
 * @param {Fn<A, B>[]} fx - An array of functions to compose.
 * @returns {Fn<A, B>} - The composed function.
 */
export const compose: Compose = <A, B>(
  fx: ReadonlyArray<Fn<any, any>>
): Fn<A, A | B> => {
  return match(fx.length)
    .with(0, () => (x: A) => x)
    .with(1, () => fx[0])
    .otherwise(() => {
      const [head, ...tail] = fx
      return (x: A) => compose(tail)(head(x))
    })
}
