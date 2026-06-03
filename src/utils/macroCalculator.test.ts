import { describe, expect, it } from 'vitest'
import { calculateBMR, calculateMacros, calculateTDEE, type UserProfile } from './macroCalculator'

describe('calculateBMR', () => {
  it('uses Mifflin-St Jeor for male', () => {
    const bmr = calculateBMR(80, 180, 30, 'male')
    expect(bmr).toBe(10 * 80 + 6.25 * 180 - 5 * 30 + 5)
  })

  it('uses Mifflin-St Jeor for female', () => {
    const bmr = calculateBMR(60, 165, 28, 'female')
    expect(bmr).toBe(10 * 60 + 6.25 * 165 - 5 * 28 - 161)
  })

  it('throws on invalid input', () => {
    expect(() => calculateBMR(0, 170, 30, 'male')).toThrow()
  })
})

describe('calculateTDEE and calculateMacros', () => {
  const baseProfile: UserProfile = {
    weight: 70,
    height: 170,
    age: 30,
    gender: 'female',
    activityLevel: 'sedentary',
    goal: 'maintain',
  }

  it('computes TDEE from BMR and activity multiplier', () => {
    const bmr = calculateBMR(70, 170, 30, 'female')
    const tdee = calculateTDEE(baseProfile)
    expect(tdee).toBeCloseTo(bmr * 1.2, 5)
  })

  it('returns rounded macro targets for maintain goal', () => {
    const result = calculateMacros(baseProfile)
    expect(result.macros.protein).toBeGreaterThanOrEqual(50)
    expect(result.macros.calories).toBeGreaterThan(0)
    expect(result.bmr).toBeGreaterThan(0)
    expect(result.tdee).toBeGreaterThan(0)
  })

  it('applies deficit for cut goal', () => {
    const cut = calculateMacros({ ...baseProfile, goal: 'cut' })
    const maintain = calculateMacros({ ...baseProfile, goal: 'maintain' })
    expect(cut.targetCalories).toBeLessThan(maintain.targetCalories)
  })
})
