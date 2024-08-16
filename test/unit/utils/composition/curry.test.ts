import { describe, expect, test } from 'vitest'

import { curry } from '~/utils/composition/curry'
import { reduce } from '~/utils/typeclass/foldable'

type Add<A> = (a: A, b: A) => A

describe('curry2/1', () => {
  describe('Given a function/2', () => {
    const f: Add<number> = (a, b) => a + b

    test('When currying and executing it', () => {
      const result = curry(f)(1)(2)
      expect(result).toBe(3)
    })
  })
})

describe('curry3/1', () => {
  describe('Given a function/3', () => {
    const f = reduce
    const fn: Add<number> = (a, b) => a + b
    const init = 1
    const values = [2, 3, 4]

    test('When currying and executing it', () => {
      const result = curry(f)(fn)(init)(values)
      expect(result).toBe(10)
    })
  })
})
