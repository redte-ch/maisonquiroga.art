import type { Maybe } from '~/types'

import { describe, expect, test } from 'vitest'

import { nothing } from '~/utils/adt/maybe'
import { isNumber } from '~/utils/types/number'

describe('isNumber/1', () => {
  describe('Given a value', () => {
    describe('of type "number"', () => {
      const value: number | string | Maybe<never> = 1

      test('When checked with "isNumber"', () => {
        const result = isNumber(value)
        expect(result).toBe(true)
      })
    })

    describe('of type "string"', () => {
      const value: number | string | Maybe<never> = '1'

      test('When checked with "isNumber"', () => {
        const result = isNumber(value)
        expect(result).toBe(false)
      })
    })

    describe('of type "nothing"', () => {
      const value: number | string | Maybe<never> = nothing

      test('When checked with "isNumber"', () => {
        const result = isNumber(value)
        expect(result).toBe(false)
      })
    })
  })
})
