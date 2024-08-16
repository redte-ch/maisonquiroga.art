import type { Result } from '~/types'

import { describe, expect, test } from 'vitest'

import { failed, failure, match, succeed, success } from '~/utils/adt/result'

describe('Either', () => {
  describe('Given a divide function', () => {
    const error = 'Cannot divide by zero'
    const divide = (a: number, b: number): Result<string, number> =>
      b === 0 ? failure(error) : success(a / b)

    test('When it divides by zero', () => {
      const numerator = Math.random()
      const denominator = 0
      const result = divide(numerator, denominator)
      expect(result).toEqual({ _tag: 'Failure', error })
    })

    test('When it does not divede by zero', () => {
      const numerator = Math.random()
      const denominator = Math.random() + 1
      const result = divide(numerator, denominator)
      expect(result).toEqual({
        _tag: 'Success',
        value: numerator / denominator
      })
    })
  })
})

describe('failed/1', () => {
  describe('Given a value', () => {
    describe('of type "Failure"', () => {
      const value: Result<string, number> = {
        _tag: 'Failure',
        error: 'error'
      }

      test('When checked with "failed"', () => {
        const result = failed(value)
        expect(result).toBe(true)
      })
    })

    describe('of type "Success"', () => {
      const value: Result<string, number> = { _tag: 'Success', value: 1 }

      test('When checked with "failed"', () => {
        const result = failed(value)
        expect(result).toBe(false)
      })
    })
  })
})

describe('succeed/1', () => {
  describe('Given a value', () => {
    describe('of type "Success"', () => {
      const value: Result<string, number> = { _tag: 'Success', value: 1 }

      test('When checked with "succeed"', () => {
        const result = succeed(value)
        expect(result).toBe(true)
      })
    })

    describe('of type "Failure"', () => {
      const value: Result<string, number> = {
        _tag: 'Failure',
        error: 'error'
      }

      test('When checked with "succeed"', () => {
        const result = succeed(value)
        expect(result).toBe(false)
      })
    })
  })
})

describe('match/2', () => {
  describe('Given a match function', () => {
    const matchNumber = match(
      (e) => e,
      (a) => a
    )

    test('When it fails', () => {
      const value = 'error'
      const result = matchNumber(failure(value))
      expect(result).toBe(value)
    })

    test('When it suceeds', () => {
      const value = 1
      const result = matchNumber(success(value))
      expect(result).toBe(value)
    })
  })
})
