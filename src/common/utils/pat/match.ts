/**
 * Pattern matching utils.
 *
 * Attempting to match a pattern can have one of three results: it fails, it
 * succeeds, returning a binding for each variable in the pattern, or it is
 * undefined. Pattern matching proceeds from left to right, and outside to
 * inside.
 *
 * @module match
 * @see {@link https://www.politesi.polimi.it/retrieve/a81cb05c-c3c0-616b-e053-1605fe0a889a/Tesi.pdf}
 */

import type { Match as MatchMaybe } from '$/utils/adt/maybe.ts'
import type { Match as MatchResult } from '$/utils/adt/result.ts'

/*
 * Generic pattern match.
 *
 * @note
 *   pat => lpat qconop pat (infix constructor)
 *        | lpat
 *   lpat => apat
 *        | - (integer | float) (negative literal)
 *        | gcon apat1 ... apatk (arity gcon = k, k >= 1)
 *   apat => var [ @ apat] (as pattern)
 *        | gcon (arity gcon = 0)
 *        | qcon { fpat1 ... fpatk } (labeled pattern, k >= 0)
 *        | literal
 *        | _ (wildcard)
 *        | ( pat ) (parenthesized pattern)
 *        | ( pat1 ... patk ) (tuple pattern, k >= 2)
 *        | [ pat1 ... patk ] (list pattern, k >= 1)
 *        | ˜ apat (irrefutable pattern)
 *  fpat => qvar = pat
 */
export type Match = MatchMaybe | MatchResult

export { match } from 'ts-pattern'
