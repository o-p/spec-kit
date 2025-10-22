// TypeScript type definitions for the Web3 Contract Analyzer Platform

export type NetworkType = 'ethereum' | 'bsc'

export interface NetworkConfig {
  id: NetworkType
  name: string
  chainId: number
  explorerUrl: string
  apiUrl: string
  enabled: boolean
}

export interface Contract {
  address: string
  network: NetworkType
  isVerified: boolean
  sourceCode: string | null
  abi: object[] | null
  compilerVersion: string | null
  contractName: string | null
  createdAt: Date
  size: number
}

export interface AnalysisReport {
  contractAddress: string
  functionSummary: string
  mainFeatures: string[]
  riskLevel: RiskLevel
  featureTags: FeatureTag[]
  securityIssues: SecurityIssue[]
  disclaimer: string
  generatedAt: Date
  analysisVersion: string
}

export type RiskLevel = 'low' | 'medium' | 'high'

export type FeatureType =
  | 'defi'
  | 'nft'
  | 'dao'
  | 'governance'
  | 'token'
  | 'staking'
  | 'bridge'
  | 'oracle'
  | 'multisig'
  | 'proxy'

export interface FeatureTag {
  type: FeatureType
  name: string
  description: string
  confidence: number
  codeReferences?: string[]
}

export type SecurityIssueType =
  | 'reentrancy'
  | 'integer_overflow'
  | 'access_control'
  | 'unchecked_external_calls'
  | 'dos_attacks'
  | 'timestamp_dependence'
  | 'front_running'
  | 'price_manipulation'

export type Severity = 'low' | 'medium' | 'high' | 'critical'

export interface SecurityIssue {
  type: SecurityIssueType
  severity: Severity
  title: string
  description: string
  recommendation: string
  codeLocation?: string
  detectedAt: Date
}

export interface UserSession {
  sessionId: string
  preferredNetwork: NetworkType
  analysisHistory: ContractAnalysis[]
  createdAt: Date
  lastActiveAt: Date
}

export interface ContractAnalysis {
  contract: Contract
  analysis: AnalysisReport
}

// Form and UI types
export interface ContractInputProps {
  value: string
  onChange: (value: string) => void
  error?: string
  disabled?: boolean
}

export interface NetworkSelectorProps {
  value: NetworkType
  onChange: (network: NetworkType) => void
  disabled?: boolean
}

// API request/response types
export interface ContractAnalysisRequest {
  address: string
  network: NetworkType
}

export interface ContractAnalysisResponse {
  contract: Contract
  analysis: AnalysisReport
}

export interface NetworksResponse {
  networks: NetworkConfig[]
}
