import type { Maybe } from '~/types'
import type { Matcher } from '~/utils/adt/maybe'

import { describe, expect, expectTypeOf, test } from 'vitest'

import { isJust, isNothing, just, match, nothing } from '~/utils/adt/maybe'

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
