/**
 * Pipe operator.
 *
 * @module pipe
 */

import type { Compose } from '~/types'

import { compose } from '$/utils/composition/compose'

/** Pipe a value through an array of functions. */
export type Pipe = Compose

/** Pipe a value through an array of functions. */
export const pipe: Pipe = compose
