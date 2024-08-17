import type { Maybe } from '~/types'
import type { Matcher } from '~/utils/adt/maybe'

import { describe, expect, expectTypeOf, test } from 'vitest'

import { isJust, isNothing, just, map, match, nothing } from '~/utils/adt/maybe'
import { compose } from '~/utils/composition/compose'

describe('Maybe', () => {
  describe('Given a value or the absence thereof', () => {
    test('When wrapping a value', () => {
      expectTypeOf(just(1)).toEqualTypeOf<Maybe<number>>()
    })

    test('When wrapping the absence of a value', () => {
      expectTypeOf(nothing).toEqualTypeOf<Maybe<never>>()
    })
  })
})

describe('isNothing/1', () => {
  describe('Given a value', () => {
    describe('of type "nothing"', () => {
      const value: Maybe<unknown> = nothing

      test('When checked with "isNothing"', () => {
        const result = isNothing(value)
        expect(result).toBe(true)
      })
    })

    describe('of type "string"', () => {
      const value: Maybe<unknown> = just('1')

      test('When checked with "isNothing"', () => {
        const result = isNothing(value)
        expect(result).toBe(false)
      })
    })

    describe('of type "number"', () => {
      const value: Maybe<unknown> = just(1)

      test('When checked with "isNothing"', () => {
        const result = isNothing(value)
        expect(result).toBe(false)
      })
    })
  })
})

describe('isJust/1', () => {
  describe('Given a value', () => {
    describe('of type "string"', () => {
      const value: Maybe<unknown> = just('1')

      test('When checked with "isJust"', () => {
        const result = isJust(value)
        expect(result).toBe(true)
      })
    })

    describe('of type "number"', () => {
      const value: Maybe<unknown> = just(1)

      test('When checked with "isJust"', () => {
        const result = isJust(value)
        expect(result).toBe(true)
      })
    })

    describe('of type "nothing"', () => {
      const value: Maybe<unknown> = nothing

      test('When checked with "isJust"', () => {
        const result = isJust(value)
        expect(result).toBe(false)
      })
    })
  })
})

describe('match/2', () => {
  describe('Given a match function', () => {
    const matchString: Matcher<number, string> = match(
      () => 1,
      (a) => a
    )

    test('When matching a "string" over it', () => {
      const value = '1'
      const result = matchString(just(value))
      expect(result).toBe(value)
    })

    test('When matching nothing', () => {
      const result = matchString(nothing)
      expect(result).toBe(1)
    })
  })
})

describe('map/1', () => {
  describe('Given a function', () => {
    type Inc<A> = (a: A) => A
    const inc: Inc<number> = (a) => a + 1

    type MaybeInc<A> = (a: Maybe<A>) => Maybe<A>
    const maybeInc: MaybeInc<number> = map(inc)

    test('When lifting it with "just"', () => {
      const result = maybeInc(just(1))
      expect(result).toStrictEqual(just(2))
    })

    test('When lifting it with "nothing"', () => {
      const result = maybeInc(nothing)
      expect(result).toBe(nothing)
    })

    describe('Given another function', () => {
      type Length<A> = (a: A) => number
      const length: Length<string> = (a) => a.length

      type MaybeLength<A> = (a: Maybe<A>) => Maybe<number>
      const maybeLength: MaybeLength<string> = map(length)

      const composed = compose([inc, length])

      describe('Given the composed lifted functions', () => {
        const composedMap = compose([maybeInc, maybeLength])

        test('When evaluating with "just"', () => {
          const result = composedMap(just('7'))
          expect(result).toStrictEqual(just(2))
        })

        test('When evaluating with "nothing"', () => {
          const result = composedMap(nothing)
          expect(result).toBe(nothing)
        })
      })

      describe('Given the lifted composed functions', () => {
        const mappedCompose = map(composed)

        test('When evaluating with "just"', () => {
          const result = mappedCompose(just('777'))
          expect(result).toStrictEqual(just(4))
        })

        test('When evaluating with "nothing"', () => {
          const result = mappedCompose(nothing)
          expect(result).toBe(nothing)
        })
      })

      describe('Given both composed-lifted and lifted-composed', () => {
        const composedMap = compose([maybeInc, maybeLength])
        const mappedCompose = map(composed)

        test('When evaluating with "just"', () => {
          const cm = composedMap(just('¡Hola!'))
          const mc = mappedCompose(just('¡Hola!'))
          expect(cm).toStrictEqual(mc)
        })

        test('When evaluating with "nothing"', () => {
          const cm = composedMap(nothing)
          const mc = composedMap(nothing)
          expect(cm).toBe(mc)
        })
      })
    })
  })
})
