import { isAddress, getAddress } from 'ethers'
import { NetworkType } from './types'

/**
 * Validates if a string is a valid Ethereum address format
 * Uses ethers.js for robust validation including checksum verification
 */
export function isValidAddress(address: string): boolean {
  try {
    return isAddress(address)
  } catch {
    return false
  }
}

/**
 * Validates and normalizes an Ethereum address
 * Returns the checksummed address or null if invalid
 */
export function validateAndNormalizeAddress(address: string): string | null {
  try {
    if (!isAddress(address)) {
      return null
    }
    return getAddress(address) // Returns checksummed address
  } catch {
    return null
  }
}

/**
 * Checks if an address is the zero address
 */
export function isZeroAddress(address: string): boolean {
  return address === '0x0000000000000000000000000000000000000000'
}

/**
 * Validates network type
 */
export function isValidNetwork(network: string): network is NetworkType {
  return network === 'ethereum' || network === 'bsc'
}

/**
 * Validates contract size constraints
 * @param sourceCode Contract source code
 * @param maxSizeKB Maximum size in KB (default: 50KB)
 * @param maxLines Maximum lines (default: 1000)
 */
export function validateContractSize(
  sourceCode: string,
  maxSizeKB: number = 50,
  maxLines: number = 1000
): { isValid: boolean; sizeKB: number; lineCount: number } {
  const sizeBytes = new TextEncoder().encode(sourceCode).length
  const sizeKB = sizeBytes / 1024
  const lineCount = sourceCode.split('\n').length

  return {
    isValid: sizeKB <= maxSizeKB && lineCount <= maxLines,
    sizeKB: Math.round(sizeKB * 100) / 100, // Round to 2 decimal places
    lineCount
  }
}

/**
 * Validates if a string contains valid Solidity or Vyper code
 * Basic validation to check for common contract patterns
 */
export function isValidContractCode(sourceCode: string): boolean {
  const solidityPattern = /pragma\s+solidity\s+[\d\.\^~>=<\s]+;/i
  const vyperPattern = /^#\s*@version\s+[\d\.\^~>=<\s]+/m
  const contractPattern = /(contract|interface|library)\s+\w+/i

  return (
    (solidityPattern.test(sourceCode) || vyperPattern.test(sourceCode)) &&
    contractPattern.test(sourceCode)
  )
}

/**
 * Sanitizes user input for display
 */
export function sanitizeInput(input: string): string {
  return input.trim().toLowerCase()
}

/**
 * Formats address for display (shows first 6 and last 4 characters)
 */
export function formatAddressForDisplay(address: string): string {
  if (!isValidAddress(address)) return address
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}
