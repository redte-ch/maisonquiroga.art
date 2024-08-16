import { describe, expect, test } from 'vitest'

import { compose } from '~/utils/composition/compose'

describe('compose/1', () => {
  type Fn<A> = (a: A) => A
  const inc: Fn<number> = (a) => a + 1
  const dec: Fn<number> = (a) => a - 1
  const square: Fn<number> = (a) => a * a

  describe('Given some value', () => {
    const value = 3

    test('When composed with n functions', () => {
      const fx: Fn<number>[] = [inc, dec, square]
      const result = compose(fx)(value)
      expect(result).toBe(9)
    })

    test('When composed with no function', () => {
      const fx: Fn<number>[] = []
      const result = compose(fx)(value)
      expect(result).toBe(value)
    })
  })
})
