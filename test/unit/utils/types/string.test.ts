import type { Maybe } from '~/types'

import { describe, expect, test } from 'vitest'

import { nothing } from '~/utils/adt/maybe'
import { isString } from '~/utils/types/string'

describe('isString/1', () => {
  describe('Given a value', () => {
    describe('of type "string"', () => {
      const value: number | string | Maybe<never> = '1'

      test('When checked with "isString"', () => {
        const result = isString(value)
        expect(result).toBe(true)
      })
    })

    describe('of type "number"', () => {
      const value: number | string | Maybe<never> = 1

      test('When checked with "isString"', () => {
        const result = isString(value)
        expect(result).toBe(false)
      })
    })

    describe('of type "nothing"', () => {
      const value: number | string | Maybe<never> = nothing

      test('When checked with "isString"', () => {
        const result = isString(value)
        expect(result).toBe(false)
      })
    })
  })
})
