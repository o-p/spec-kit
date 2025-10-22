import { test, expect } from 'bun:test'
import { isValidAddress, validateAndNormalizeAddress } from '@/lib/validation'

test('isValidAddress should validate Ethereum addresses correctly', () => {
  // Valid Ethereum address
  expect(isValidAddress('0xd8da6bf26964af9d7eed9e03e53415d37aa96045')).toBe(true)

  // Invalid addresses
  expect(isValidAddress('')).toBe(false)
  expect(isValidAddress('invalid')).toBe(false)
  expect(isValidAddress('0x123')).toBe(false)
  expect(isValidAddress(null as any)).toBe(false)
  expect(isValidAddress(undefined as any)).toBe(false)
})

test('validateAndNormalizeAddress should normalize addresses correctly', () => {
  const validAddress = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045'
  const result = validateAndNormalizeAddress(validAddress)

  expect(result).not.toBeNull()
  expect(typeof result).toBe('string')
})

test('validateAndNormalizeAddress should handle invalid addresses', () => {
  const result = validateAndNormalizeAddress('invalid')

  expect(result).toBeNull()
})
