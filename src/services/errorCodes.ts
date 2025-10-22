// Custom error codes for the Web3 Contract Analyzer platform
// Following the E[Category][Number] pattern defined in the API specification

export enum ContractErrorCodes {
  // Validation Errors (E1xxx)
  E1001 = "INVALID_ADDRESS_FORMAT",
  E1002 = "INVALID_NETWORK_SELECTION",
  E1003 = "CONTRACT_SIZE_EXCEEDED",

  // API Errors (E2xxx)
  E2001 = "ETHERSCAN_API_FAILURE",
  E2002 = "ETHERSCAN_RATE_LIMIT",
  E2003 = "ETHERSCAN_INVALID_RESPONSE",

  // Contract Errors (E3xxx)
  E3001 = "CONTRACT_NOT_VERIFIED",
  E3002 = "CONTRACT_NOT_FOUND",
  E3003 = "CONTRACT_PROXY_DETECTED",
}

export interface ApiError {
  code: ContractErrorCodes
  type: string
  message: string
  details?: Record<string, any>
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: ApiError
}

export const ERROR_MESSAGES: Record<ContractErrorCodes, string> = {
  [ContractErrorCodes.E1001]: "Invalid contract address format",
  [ContractErrorCodes.E1002]: "Unsupported network selection",
  [ContractErrorCodes.E1003]: "Contract size exceeds limit",
  [ContractErrorCodes.E2001]: "External API request failed",
  [ContractErrorCodes.E2002]: "API rate limit exceeded",
  [ContractErrorCodes.E2003]: "Invalid API response format",
  [ContractErrorCodes.E3001]: "Contract source code not verified",
  [ContractErrorCodes.E3002]: "Contract not found at address",
  [ContractErrorCodes.E3003]: "Proxy contract requires special handling",
}

export function createError(
  code: ContractErrorCodes,
  details?: Record<string, any>
): ApiError {
  return {
    code,
    type: code,
    message: ERROR_MESSAGES[code],
    details
  }
}
