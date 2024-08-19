/**
 * Guard utils, aka validators.
 *
 * A guard is just a boolean expression that operates on the variables of the
 * pattern. Every function definition can have any number of guards. The variant
 * of the function that gets executed is the first one that has the guard
 * returning true. There is also the otherwise keyword that gets executed in
 * case none of the other guards did.
 *
 * @module guard
 * @see {@link https://www.politesi.polimi.it/retrieve/a81cb05c-c3c0-616b-e053-1605fe0a889a/Tesi.pdf}
 */

import type { Guard as GuardMaybe } from '$/utils/adt/maybe.ts'
import type { Guard as GuardResult } from '$/utils/adt/result.ts'

/**
 * Guard type.
 *
 * @note
 *   guard :: (a -> c) -> (b -> c) -> Either a b -> c
 * @todo Check if this is the correct signature.
 */
export type Guard<N, J, O> = GuardMaybe<N, J, O> | GuardResult<N, J, O>
