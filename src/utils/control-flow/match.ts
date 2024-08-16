/**
 * Pattern matching utils.
 *
 * @module match
 */

import type { Match as MatchMaybe } from '~/utils/adt/maybe'
import type { Match as MatchResult } from '~/utils/adt/result'

export type Match = MatchMaybe | MatchResult
export { match } from 'ts-pattern'
