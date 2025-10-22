# Data Model: Web3 Contract Analyzer Platform

**Feature**: 001-web3-contract-analyzer
**Date**: 2025-10-22
**Source**: Extracted from feature specification and technical requirements

## Core Entities

### Contract

**Purpose**: Represents a smart contract retrieved from blockchain explorers

**Attributes**:
- `address: string` - Contract address (42 character hex with 0x prefix)
- `network: NetworkType` - Blockchain network (ethereum | bsc)
- `isVerified: boolean` - Whether contract source code is verified
- `sourceCode: string | null` - Raw contract source code
- `abi: object[] | null` - Contract ABI (Application Binary Interface)
- `compilerVersion: string | null` - Solidity compiler version used
- `contractName: string | null` - Contract name from verification
- `createdAt: Date` - Timestamp when contract was fetched
- `size: number` - Contract source code size in bytes

**Validation Rules**:
- Address must be valid Ethereum address format
- Size must not exceed 50KB (51,200 bytes)
- Network must be supported blockchain
- SourceCode line count must not exceed 1000 lines

**State Transitions**:
```
REQUESTED → FETCHING → VERIFIED | NOT_VERIFIED | ERROR
```

### Analysis Report

**Purpose**: Contains AI-generated analysis of a smart contract

**Attributes**:
- `contractAddress: string` - Reference to analyzed contract
- `functionSummary: string` - AI-generated contract purpose description
- `mainFeatures: string[]` - List of key functionalities identified
- `riskLevel: RiskLevel` - Overall risk assessment (low | medium | high)
- `featureTags: FeatureTag[]` - Categorized feature types
- `disclaimer: string` - Legal disclaimer text
- `generatedAt: Date` - Analysis timestamp
- `analysisVersion: string` - Analysis engine version

**Relationships**:
- Belongs to one Contract (1:1 relationship)
- Contains multiple Feature Tags (1:many)
- Contains multiple Security Issues (1:many)

### Feature Tag

**Purpose**: Categorizes contract features for quick identification

**Attributes**:
- `type: FeatureType` - Category (defi | nft | dao | governance | token)
- `name: string` - Human-readable feature name
- `description: string` - Detailed feature explanation
- `confidence: number` - AI confidence score (0-100)
- `codeReferences: string[]` - Source code line references

**Enumerated Values**:
```typescript
enum FeatureType {
  DEFI = "defi",           // DeFi protocols (AMM, lending, etc.)
  NFT = "nft",             // Non-fungible tokens
  TOKEN = "token",         // ERC-20, ERC-721, ERC-1155
  DAO = "dao",             // Decentralized governance
  GOVERNANCE = "governance", // Voting mechanisms
  STAKING = "staking",     // Token staking systems
  BRIDGE = "bridge",       // Cross-chain bridges
  ORACLE = "oracle",       // Price feed mechanisms
  MULTISIG = "multisig",   // Multi-signature wallets
  PROXY = "proxy"          // Upgradeable proxy patterns
}
```

### Security Issue

**Purpose**: Documents potential security vulnerabilities found in contract

**Attributes**:
- `type: SecurityIssueType` - Vulnerability category
- `severity: Severity` - Risk level (low | medium | high | critical)
- `title: string` - Brief issue description
- `description: string` - Detailed vulnerability explanation
- `recommendation: string` - Suggested remediation
- `codeLocation: string | null` - Source code line reference
- `detectedAt: Date` - Detection timestamp

**Enumerated Values**:
```typescript
enum SecurityIssueType {
  REENTRANCY = "reentrancy",
  INTEGER_OVERFLOW = "integer_overflow",
  ACCESS_CONTROL = "access_control",
  UNCHECKED_EXTERNAL_CALLS = "unchecked_external_calls",
  DOS_ATTACKS = "dos_attacks",
  TIMESTAMP_DEPENDENCE = "timestamp_dependence",
  FRONT_RUNNING = "front_running",
  PRICE_MANIPULATION = "price_manipulation"
}

enum Severity {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  CRITICAL = "critical"
}
```

### User Session

**Purpose**: Manages user interaction state and preferences (browser-based)

**Attributes**:
- `sessionId: string` - Unique session identifier (UUID)
- `preferredNetwork: NetworkType` - Last selected network
- `analysisHistory: ContractAnalysis[]` - Recently analyzed contracts
- `createdAt: Date` - Session start time
- `lastActiveAt: Date` - Last interaction timestamp

**Storage Strategy**:
- Stored in browser localStorage for persistence
- No server-side session management
- Maximum 50 history entries (FIFO rotation)
- Session expires after 30 days of inactivity

## Data Flow Patterns

### Contract Analysis Flow

1. **Input Validation**: Address format → Network selection → Size check
2. **External API Call**: Etherscan API → Contract source retrieval
3. **Analysis Processing**: AI analysis → Feature detection → Risk assessment
4. **Result Storage**: Browser localStorage → Session history update
5. **Display**: Structured report → Error handling → User feedback

### Error Handling Flow

1. **Validation Errors**: Client-side validation → Custom error codes → User guidance
2. **API Errors**: Etherscan failures → Retry logic → Fallback messages
3. **Business Logic Errors**: Contract not verified → Clear explanations → Alternative suggestions

## Performance Considerations

**Caching Strategy**:
- Browser cache: Contract source code (24 hours)
- Session cache: Analysis results (until page refresh)
- No server-side caching for MVP

**Size Limits**:
- Contract source: 50KB maximum
- Analysis history: 50 entries maximum
- Session storage: 5MB browser limit

**Optimization Targets**:
- Address validation: <10ms
- API response handling: <200ms
- UI state updates: <100ms
