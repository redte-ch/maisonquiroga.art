/**
 * Infrastructure ports.
 *
 * @module ports
 */

import type { Just, Maybe } from '$/types.ts'

/** Data read from a database. */
export type Data = {
  [key: Readonly<string>]: {
    [key: Readonly<string>]: {
      [key: Readonly<string>]: Readonly<string>
    }
  }
}

/**
 * Load data from a database.
 *
 * @param {Just<string>} path - The path from which to load the value.
 * @returns {Maybe<Data>} - The value loaded from the database.
 */
export type Load<Data> = (path: Just<string>) => Maybe<Data>
