/**
 * Lowdb adapter
 *
 * @module lowdb
 * @todo Move types to {@link to &/ports.ts}
 */

import type { Data, Load } from '&/ports.ts'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

import { map } from '$/utils/adt/maybe.ts'
import { compose } from '$/utils/fun/compose.ts'

/** Connection to a database. */
type Conn<A> = Low<A>

/**
 * Generic connect function.
 *
 * @typeParam A
 * @param {string} path - The path used to establish the connection.
 * @returns The connection object of type Conn<A>.
 */
type Connect<A> = (path: string) => Conn<A>

/** Connect to a database. */
const connect: Connect<Data> = (path) => new Low<Data>(new JSONFile(path), {})

/**
 * Read a value from a given connection.
 *
 * @typeParam A
 * @param {Conn<A>} conn - The connection to read the value from.
 * @returns A function that when called, returns a Promise.
 * @todo {@link null} here is an implementation detail leaked from {@link Low}
 */
type Read<A> = (conn: Readonly<Conn<A>>) => () => Promise<A | null>

/** Read a value from a given connection. */
const read: Read<Data> = (conn) => async () => await conn.adapter.read()

/**
 * An indeterminacy, returning a {@link Promise}.
 *
 * @note We may think of a {@link Indet}  as a "fp-ts/Task" or an
 *   "effect-ts/Effect".For us, it is less about what is to be done, as to what
 *   is to be known. That is, how the future unfolds, so to speak.
 * @see {@link https://fr.hegel.net/f111.htm}
 * @todo Make this a generic type.
 *
 * @todo Implement for {@link Maybe}.
 *
 * @todo Implement for {@link Result} (alias Either).
 */
export type Indet<A> = () => Promise<A>

/** A determinacy, resolving an indeterminacy. */
export type Det<A, B, C> = (f: A) => (g: Indet<B>) => Indet<C>

/** A determinacy, resolving an indeterminacy. */
const det: Det<Read<Data>, Conn<Data>, Data | null> = (f) => (g) => {
  return async () => {
    const result = await g()
    return result ? await f(result)() : null
  }
}

/** Load data for the database. */
export const load: Load<Data> = map(compose([det, read, connect]))
