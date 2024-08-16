/*
 * Refinement, aka type guards, for primitives and monadic types.
 *
 * @module guards
 */

/**
 * @typeParam A
 * @typeParam B
 */
export type Refinement<A, B extends A> = (a: A) => a is B
