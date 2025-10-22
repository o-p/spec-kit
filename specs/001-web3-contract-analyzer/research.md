# Research: Web3 Contract Analyzer Platform

**Feature**: 001-web3-contract-analyzer
**Date**: 2025-10-22
**Status**: Completed

## Research Tasks & Findings

### 1. Etherscan API Integration Patterns

**Decision**: Use official Etherscan API with axios client and exponential backoff retry logic

**Rationale**:
- Etherscan provides reliable, well-documented APIs for both Ethereum and BSC
- Rate limit: 5 calls/second for free tier, 100 calls/second for paid
- Supports verified contract source code retrieval
- Consistent response format across different networks

**Implementation Details**:
- Ethereum: `https://api.etherscan.io/api`
- BSC: `https://api.bscscan.com/api`
- Required parameters: `module=contract&action=getsourcecode&address={address}&apikey={key}`
- Response format includes contract source, ABI, compiler version, optimization settings

**Alternatives Considered**:
- Direct blockchain node access: Rejected due to complexity and infrastructure requirements
- The Graph Protocol: Rejected as overkill for simple source code retrieval
- Multiple API aggregation: Rejected to maintain MVP simplicity

### 2. Contract Address Validation Best Practices

**Decision**: Implement multi-layer validation using ethers.js utilities with custom business logic

**Rationale**:
- ethers.js provides robust address validation and checksum verification
- Ethereum and BSC use identical address format (42 character hexadecimal with 0x prefix)
- Client-side validation reduces unnecessary API calls
- Server-side validation provides security layer

**Implementation Details**:
- Use `ethers.utils.isAddress()` for format validation
- Implement checksum validation via `ethers.utils.getAddress()`
- Add business rules: reject zero address, contract creation addresses
- Maximum address length validation (42 characters)

**Alternatives Considered**:
- Manual regex validation: Rejected due to checksum complexity
- Web3.js validation: Rejected in favor of ethers.js ecosystem consistency
- No client-side validation: Rejected to improve user experience

### 3. Custom Error Code System Design

**Decision**: Implement structured error code system with E-prefixed codes for client-side handling

**Rationale**:
- HTTP status codes insufficient for granular error handling
- Custom codes enable specific UI feedback and user guidance
- Structured format supports internationalization
- Clear separation between system errors and business logic errors

**Error Code Structure**:
```typescript
enum ContractErrorCodes {
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
```

**Alternatives Considered**:
- HTTP status codes only: Rejected for lack of granularity
- String-based error messages: Rejected for i18n complexity
- Numeric codes without prefixes: Rejected for poor readability

### 4. Bun + Next.js Performance Optimization

**Decision**: Use Bun as package manager and runtime with Next.js App Router and Turbopack

**Rationale**:
- Bun provides ~3x faster package installation vs npm
- Native TypeScript support without compilation step
- Built-in test runner eliminates Jest dependency
- App Router enables better code splitting and performance

**Configuration Details**:
```toml
# bunfig.toml
[install]
cache = true
frozen-lockfile = true

[test]
preload = ["./tests/setup.ts"]
```

**Performance Targets**:
- Bundle size: <1MB initial load
- API response: <200ms including Etherscan call
- UI interactions: <100ms (form validation, network switching)
- Initial page load: <2s (including font loading)

**Alternatives Considered**:
- Node.js with npm: Rejected for slower performance
- Vite instead of Next.js: Rejected for SSR requirements
- Pages Router: Rejected for dated architecture

## Technology Stack Summary

**Frontend**: Next.js 14 + React 18 + TypeScript + Tailwind CSS
**Runtime**: Bun 1.0+
**HTTP Client**: axios with retry logic
**Blockchain**: ethers.js for address validation
**Testing**: Bun test + React Testing Library + Playwright
**Styling**: Tailwind CSS with responsive design
**Deployment**: Static export compatible for various hosting platforms

## Implementation Priorities

1. **Phase 1**: Basic contract address input and Etherscan API integration
2. **Phase 2**: Error handling and custom error code system
3. **Phase 3**: Network switching (Ethereum/BSC)
4. **Phase 4**: UI polish and responsive design
5. **Phase 5**: Performance optimization and caching
