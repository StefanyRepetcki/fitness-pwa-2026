import { describe, expect, it } from 'vitest'
import { ValidationError, validateAge, validateHeight, validateWeight } from './validation'

describe('validateWeight', () => {
  it('accepts a valid weight', () => {
    expect(() => validateWeight(70)).not.toThrow()
  })

  it('rejects non-positive weight', () => {
    expect(() => validateWeight(0)).toThrow(ValidationError)
  })

  it('rejects weight above maximum', () => {
    expect(() => validateWeight(501)).toThrow(ValidationError)
  })
})

describe('validateHeight', () => {
  it('accepts a valid height in cm', () => {
    expect(() => validateHeight(170)).not.toThrow()
  })

  it('rejects height below minimum', () => {
    expect(() => validateHeight(49)).toThrow(ValidationError)
  })
})

describe('validateAge', () => {
  it('accepts a valid age', () => {
    expect(() => validateAge(25)).not.toThrow()
  })

  it('rejects age below minimum', () => {
    expect(() => validateAge(12)).toThrow(ValidationError)
  })
})
