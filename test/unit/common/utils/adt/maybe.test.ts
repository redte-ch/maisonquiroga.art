import type { Guard, Maybe } from '$/types.ts'

import { describe, expect, expectTypeOf, test } from 'vitest'

import {
  isJust,
  isNothing,
  just,
  map,
  match,
  nothing
} from '$/utils/adt/maybe.ts'
import { compose } from '$/utils/fun/compose.ts'

describe('Maybe', () => {
  test('When wrapping a value', () => {
    expectTypeOf(just(1)).toEqualTypeOf<Maybe<number>>()
  })

  test('When wrapping the absence of a value', () => {
    expectTypeOf(nothing).toEqualTypeOf<Maybe<never>>()
  })
})

describe('isNothing/1', () => {
  test('When checked with "isNothing"', () => {
    expect(isNothing(nothing)).toBe(true)
    expect(isNothing(just('1'))).toBe(false)
    expect(isNothing(just(1))).toBe(false)
  })
})

describe('isJust/1', () => {
  test('When checked with "isJust"', () => {
    expect(isJust(just('1'))).toBe(true)
    expect(isJust(just(1))).toBe(true)
    expect(isJust(nothing)).toBe(false)
  })
})

describe('match/2', () => {
  const matchString: Guard<number, string, string> = match(
    () => 1,
    (a) => a
  )

  test('When matching a "string" over it', () => {
    expect(matchString(just('1'))).toBe('1')
  })

  test('When matching nothing', () => {
    expect(matchString(nothing)).toBe(1)
  })
})

describe('map/1', () => {
  const inc = (a: number) => a + 1
  const maybeInc = map(inc)

  test('When lifting it with "just"', () => {
    expect(maybeInc(just(1))).toStrictEqual(just(2))
  })

  test('When lifting it with "nothing"', () => {
    expect(maybeInc(nothing)).toBe(nothing)
  })

  const length = (a: string) => a.length
  const maybeLength = map(length)
  const composed = compose([inc, length])

  describe('Given the composed lifted functions', () => {
    const composedMap = compose([maybeInc, maybeLength])

    test('When evaluating with "just"', () => {
      expect(composedMap(just('7'))).toStrictEqual(just(2))
    })

    test('When evaluating with "nothing"', () => {
      expect(composedMap(nothing)).toBe(nothing)
    })
  })

  describe('Given the lifted composed functions', () => {
    const mappedCompose = map(composed)

    test('When evaluating with "just"', () => {
      expect(mappedCompose(just('777'))).toStrictEqual(just(4))
    })

    test('When evaluating with "nothing"', () => {
      expect(mappedCompose(nothing)).toBe(nothing)
    })
  })

  describe('Given both composed-lifted and lifted-composed', () => {
    const composedMap = compose([maybeInc, maybeLength])
    const mappedCompose = map(composed)

    test('When evaluating with "just"', () => {
      expect(composedMap(just('¡Hola!'))).toStrictEqual(
        mappedCompose(just('¡Hola!'))
      )
    })

    test('When evaluating with "nothing"', () => {
      expect(composedMap(nothing)).toBe(mappedCompose(nothing))
    })
  })
})
