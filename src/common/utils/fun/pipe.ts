/**
 * Pipe operator.
 *
 * @module pipe
 */

import type { Compose } from '$/types.ts'

import { compose } from '$/utils/fun/compose.ts'

/**
 * Pipe a value through an array of functions.
 *
 * @note (&) :: a -> (a -> b) -> b
 * @todo Implement this function correctly.
 */
export type Pipe = Compose

/** Pipe a value through an array of functions. */
export const pipe: Pipe = compose
