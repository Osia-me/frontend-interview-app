import isEmailValid from './is-email-valid'

describe('email validation function test', () => {
  it('should return true for valid email', () => {
    expect(isEmailValid('test@test.com')).toBe(true)
  })

  it('should return false for non valid email', () => {
    expect(isEmailValid('test.test.com')).toBe(false)
  })

  it('should return false for non valid email', () => {
    expect(isEmailValid('test')).toBe(false)
  })

  it('should return false for empty string', () => {
    expect(isEmailValid('')).toBe(false)
  })
})
