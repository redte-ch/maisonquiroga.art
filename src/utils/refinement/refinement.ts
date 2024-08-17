/*
 * Refinement, aka type guards, for primitives and monadic types.
 *
 * @module guards
 */

/**
 * Narrow down a type.
 *
 * @template A - The original type.
 * @template B - The narrowed down type.
 * @param {A} a - The value to be checked.
 * @returns {boolean} - True if the value is of type B, false otherwise.
 */
export type Refinement<A, B extends A> = (a: A) => a is B
