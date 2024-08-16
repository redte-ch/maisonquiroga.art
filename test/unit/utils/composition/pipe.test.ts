import { describe, expect, test } from 'vitest'

import { pipe } from '~/utils/composition/pipe'

describe('pipe/2', () => {
  type Fn<A> = (a: A) => A
  const inc: Fn<number> = (a) => a + 1
  const dec: Fn<number> = (a) => a - 1
  const square: Fn<number> = (a) => a * a

  describe('Given some value', () => {
    const value = 2

    test('When piped with n functions', () => {
      const result = pipe(value, [inc, dec, square])
      expect(result).toBe(4)
    })

    test('When piped with no function', () => {
      const result = pipe(value, [])
      expect(result).toBe(value)
    })
  })
})
