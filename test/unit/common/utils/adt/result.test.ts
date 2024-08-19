import type { Guard, Result } from '$/types.ts'

import { describe, expect, test } from 'vitest'

import { failed, failure, match, succeed, success } from '$/utils/adt/result.ts'

describe('Either', () => {
  const error = 'Cannot divide by zero'
  const divide = (a: number, b: number): Result<string, number> =>
    b === 0 ? failure(error) : success(a / b)

  test('When it divides by zero', () => {
    const result = divide(Math.random(), 0)
    expect(result).toEqual({ _tag: 'Failure', error })
  })

  test('When it does not divide by zero', () => {
    const numerator = Math.random()
    const denominator = Math.random() + 1
    const result = divide(numerator, denominator)
    expect(result).toEqual({ _tag: 'Success', value: numerator / denominator })
  })
})

describe('failed/1', () => {
  test('When checked with "failed"', () => {
    expect(failed({ _tag: 'Failure', error: 'error' })).toBe(true)
    expect(failed({ _tag: 'Success', value: 1 })).toBe(false)
  })
})

describe('succeed/1', () => {
  test('When checked with "succeed"', () => {
    expect(succeed({ _tag: 'Success', value: 1 })).toBe(true)
    expect(succeed({ _tag: 'Failure', error: 'error' })).toBe(false)
  })
})

describe('match/2', () => {
  const matchNumber: Guard<string, number, string> = match(
    (e) => `${e}`,
    (a) => `${a}`
  )

  test('When it fails', () => {
    expect(matchNumber(failure('error'))).toBe('error')
  })

  test('When it succeeds', () => {
    expect(matchNumber(success(1))).toBe('1')
  })
})
