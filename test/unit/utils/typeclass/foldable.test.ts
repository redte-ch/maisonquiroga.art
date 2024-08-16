import { describe, expect, test } from 'vitest'

import { reduce } from '~/utils/typeclass/foldable'

describe('reduce/3', () => {
  describe('Given a function/2', () => {
    const init = -1
    const fn = (acc: number, current: number) => acc + current

    test('When reducing an array', () => {
      const result = reduce(fn, init, [2, 3, 4])
      expect(result).toBe(8)
    })

    test('When reducing an empty array', () => {
      const result = reduce(fn, init, [])
      expect(result).toBe(init)
    })
  })
})
