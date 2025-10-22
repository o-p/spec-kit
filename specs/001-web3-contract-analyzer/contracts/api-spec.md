# API Contracts: Web3 Contract Analyzer Platform

**Feature**: 001-web3-contract-analyzer
**Date**: 2025-10-22
**API Version**: v1

## Base Configuration

**Base URL**: `/api/v1`
**Content-Type**: `application/json`
**Rate Limiting**: 100 requests per minute per IP
**Authentication**: None (anonymous access)

## Endpoints

### GET /api/v1/health

**Purpose**: Health check endpoint for monitoring

**Request**: No parameters

**Response** (200):
```json
{
  "status": "healthy",
  "timestamp": "2025-10-22T10:30:00Z",
  "version": "1.0.0"
}
```

### POST /api/v1/contract/analyze

**Purpose**: Retrieve and analyze smart contract source code

**Request Body**:
```json
{
  "address": "0x1234567890123456789012345678901234567890",
  "network": "ethereum" | "bsc"
}
```

**Validation Rules**:
- `address`: Must be valid Ethereum address (42 chars, hex, 0x prefix)
- `network`: Must be "ethereum" or "bsc"

**Success Response** (200):
```json
{
  "success": true,
  "data": {
    "contract": {
      "address": "0x1234567890123456789012345678901234567890",
      "network": "ethereum",
      "isVerified": true,
      "contractName": "MyToken",
      "compilerVersion": "v0.8.19+commit.7dd6d404",
      "sourceCode": "pragma solidity ^0.8.19;\n\ncontract MyToken { ... }",
      "abi": [...],
      "size": 15420,
      "createdAt": "2025-10-22T10:30:00Z"
    },
    "analysis": {
      "functionSummary": "This is an ERC-20 token contract with standard transfer functionality...",
      "mainFeatures": [
        "ERC-20 standard compliance",
        "Transfer and approval functions",
        "Supply management"
      ],
      "riskLevel": "low",
      "featureTags": [
        {
          "type": "token",
          "name": "ERC-20 Token",
          "description": "Standard fungible token implementation",
          "confidence": 95
        }
      ],
      "securityIssues": [],
      "disclaimer": "This analysis is for educational purposes only and does not constitute investment advice...",
      "generatedAt": "2025-10-22T10:30:05Z",
      "analysisVersion": "1.0.0"
    }
  }
}
```

**Error Responses**:

**400 - Validation Error**:
```json
{
  "success": false,
  "error": {
    "code": "E1001",
    "type": "INVALID_ADDRESS_FORMAT",
    "message": "Contract address must be a valid Ethereum address",
    "details": {
      "field": "address",
      "provided": "invalid_address"
    }
  }
}
```

**429 - Rate Limit Exceeded**:
```json
{
  "success": false,
  "error": {
    "code": "E2002",
    "type": "ETHERSCAN_RATE_LIMIT",
    "message": "API rate limit exceeded. Please try again later.",
    "details": {
      "retryAfter": 60
    }
  }
}
```

**500 - Contract Not Verified**:
```json
{
  "success": false,
  "error": {
    "code": "E3001",
    "type": "CONTRACT_NOT_VERIFIED",
    "message": "Contract source code is not verified on the blockchain explorer",
    "details": {
      "address": "0x1234567890123456789012345678901234567890",
      "network": "ethereum",
      "suggestion": "Please ensure the contract is verified on Etherscan"
    }
  }
}
```

**500 - Contract Not Found**:
```json
{
  "success": false,
  "error": {
    "code": "E3002",
    "type": "CONTRACT_NOT_FOUND",
    "message": "No contract found at the specified address",
    "details": {
      "address": "0x1234567890123456789012345678901234567890",
      "network": "ethereum"
    }
  }
}
```

### GET /api/v1/networks

**Purpose**: Get list of supported blockchain networks

**Request**: No parameters

**Response** (200):
```json
{
  "success": true,
  "data": {
    "networks": [
      {
        "id": "ethereum",
        "name": "Ethereum Mainnet",
        "chainId": 1,
        "explorerUrl": "https://etherscan.io",
        "apiUrl": "https://api.etherscan.io/api",
        "enabled": true
      },
      {
        "id": "bsc",
        "name": "BNB Smart Chain",
        "chainId": 56,
        "explorerUrl": "https://bscscan.com",
        "apiUrl": "https://api.bscscan.com/api",
        "enabled": true
      }
    ]
  }
}
```

## Error Code Reference

### Validation Errors (E1xxx)

| Code | Type | Description | HTTP Status |
|------|------|-------------|-------------|
| E1001 | INVALID_ADDRESS_FORMAT | Invalid Ethereum address format | 400 |
| E1002 | INVALID_NETWORK_SELECTION | Unsupported network specified | 400 |
| E1003 | CONTRACT_SIZE_EXCEEDED | Contract exceeds size limits | 400 |

### API Errors (E2xxx)

| Code | Type | Description | HTTP Status |
|------|------|-------------|-------------|
| E2001 | ETHERSCAN_API_FAILURE | External API request failed | 502 |
| E2002 | ETHERSCAN_RATE_LIMIT | Rate limit exceeded | 429 |
| E2003 | ETHERSCAN_INVALID_RESPONSE | Unexpected API response format | 502 |

### Contract Errors (E3xxx)

| Code | Type | Description | HTTP Status |
|------|------|-------------|-------------|
| E3001 | CONTRACT_NOT_VERIFIED | Contract source not verified | 422 |
| E3002 | CONTRACT_NOT_FOUND | Contract does not exist | 404 |
| E3003 | CONTRACT_PROXY_DETECTED | Proxy contract requires special handling | 422 |

## Response Patterns

**Success Response Structure**:
```json
{
  "success": true,
  "data": { ... }
}
```

**Error Response Structure**:
```json
{
  "success": false,
  "error": {
    "code": "EXXXX",
    "type": "ERROR_TYPE_NAME",
    "message": "Human-readable error message",
    "details": { ... }
  }
}
```

## API Testing Guidelines

**Test Cases**:
1. Valid contract address with verified source
2. Valid address with unverified contract
3. Invalid address format
4. Non-existent contract address
5. Unsupported network selection
6. Rate limit boundary testing
7. Large contract size edge cases

**Mock Data**:
- Use well-known contracts for testing (USDC, WETH, etc.)
- Include both simple and complex contract examples
- Test with different compiler versions
- Verify error handling for edge cases
