/*
 * Refinable, aka type guards.
 *
 * @module refinable
 * @note
 *   class Refinable p a b | p a -> b where
 *     narrow :: a -> Maybe b
 */

/**
 * Narrow down a type.
 *
 * @template A - The original type.
 * @template B - The narrowed down type.
 * @param {A} a - The value to be checked.
 * @returns {boolean} - True if the value is of type B, false otherwise.
 * @note narrow :: a -> Maybe b
 */
export type Refinable<A, B extends A> = (a: A) => a is B
