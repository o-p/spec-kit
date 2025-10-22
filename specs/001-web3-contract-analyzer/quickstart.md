# Quick Start Guide: Web3 Contract Analyzer Platform

**Feature**: 001-web3-contract-analyzer
**Date**: 2025-10-22
**Prerequisites**: Bun 1.0+, Node.js 18+ (備援)

## 開發環境設置

### 1. 專案初始化

```bash
# 建立專案目錄
mkdir web3-contract-analyzer
cd web3-contract-analyzer

# 初始化 Bun 專案
bun init

# 安裝 Next.js 和相關依賴
bun add next@latest react@latest react-dom@latest
bun add -d typescript @types/node @types/react @types/react-dom
bun add -d tailwindcss postcss autoprefixer
bun add -d @playwright/test
```

### 2. 核心依賴安裝

```bash
# Web3 和 API 相關
bun add ethers axios

# UI 組件和樣式
bun add @radix-ui/react-select lucide-react

# 測試工具
bun add -d @testing-library/react @testing-library/jest-dom
```

### 3. 設定檔配置

**package.json**:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "bun test",
    "test:e2e": "playwright test",
    "lint": "next lint"
  }
}
```

**next.config.js**:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'edge'
  },
  env: {
    ETHERSCAN_API_KEY: process.env.ETHERSCAN_API_KEY,
    BSC_API_KEY: process.env.BSC_API_KEY
  }
}

module.exports = nextConfig
```

**tailwind.config.js**:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#64748b'
      }
    }
  },
  plugins: []
}
```

### 4. 環境變數設置

建立 `.env.local` 檔案：
```bash
# Blockchain Explorer API Keys
ETHERSCAN_API_KEY=your_etherscan_api_key_here
BSC_API_KEY=your_bscscan_api_key_here

# Development Settings
NEXT_PUBLIC_APP_ENV=development
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api/v1
```

## 專案結構建立

### 1. 基礎目錄結構

```bash
mkdir -p src/{app,components,lib,services}
mkdir -p src/app/api/v1/contract
mkdir -p src/components/ui
mkdir -p tests/{unit,integration,e2e}
```

### 2. 核心檔案建立

**src/app/layout.tsx**:
```typescript
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web3 Contract Analyzer',
  description: 'AI-powered smart contract analysis platform'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}
```

**src/app/page.tsx** (主介面):
```typescript
'use client'

import { useState } from 'react'
import ContractInput from '@/components/ContractInput'
import NetworkSelector from '@/components/NetworkSelector'

export default function HomePage() {
  const [address, setAddress] = useState('')
  const [network, setNetwork] = useState<'ethereum' | 'bsc'>('ethereum')

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Web3 Contract Analyzer
      </h1>

      <div className="max-w-2xl mx-auto space-y-6">
        <ContractInput
          value={address}
          onChange={setAddress}
        />

        <NetworkSelector
          value={network}
          onChange={setNetwork}
        />

        <button
          className="w-full bg-primary text-white py-3 rounded-lg"
          onClick={() => console.log('Analyze:', { address, network })}
        >
          分析合約
        </button>
      </div>
    </main>
  )
}
```

### 3. API 路由實作

**src/app/api/v1/contract/analyze/route.ts**:
```typescript
import { NextRequest, NextResponse } from 'next/server'
import { isAddress } from 'ethers'
import { ContractService } from '@/services/contractService'

export async function POST(request: NextRequest) {
  try {
    const { address, network } = await request.json()

    // 輸入驗證
    if (!isAddress(address)) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'E1001',
            type: 'INVALID_ADDRESS_FORMAT',
            message: 'Invalid contract address format'
          }
        },
        { status: 400 }
      )
    }

    // 呼叫 Etherscan API
    const contractService = new ContractService()
    const result = await contractService.analyzeContract(address, network)

    return NextResponse.json({
      success: true,
      data: result
    })

  } catch (error) {
    console.error('Contract analysis error:', error)

    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'E2001',
          type: 'ETHERSCAN_API_FAILURE',
          message: 'Failed to retrieve contract information'
        }
      },
      { status: 502 }
    )
  }
}
```

## 開發流程

### 1. 啟動開發伺服器

```bash
# 啟動 Next.js 開發伺服器
bun run dev

# 開啟瀏覽器訪問
open http://localhost:3000
```

### 2. 測試執行

```bash
# 執行單元測試
bun test

# 執行 E2E 測試
bun run test:e2e

# 執行特定測試
bun test src/services/contractService.test.ts
```

### 3. 建置部署

```bash
# 建置專案
bun run build

# 啟動生產伺服器
bun run start
```

## 測試資料

### 測試用合約地址

**Ethereum Mainnet**:
- USDC: `0xA0b86a33E6441986A1337C2f73d6F6c3F5f6f0aF`
- WETH: `0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2`
- Uniswap V2 Router: `0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D`

**BSC Mainnet**:
- BUSD: `0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56`
- WBNB: `0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c`
- PancakeSwap Router: `0x10ED43C718714eb63d5aA57B78B54704E256024E`

### API 測試範例

```bash
# 測試合約分析 API
curl -X POST http://localhost:3000/api/v1/contract/analyze \
  -H "Content-Type: application/json" \
  -d '{"address":"0xA0b86a33E6441986A1337C2f73d6F6c3F5f6f0aF","network":"ethereum"}'

# 測試網路列表 API
curl http://localhost:3000/api/v1/networks
```

## 故障排除

### 常見問題

1. **Bun 安裝問題**:
   ```bash
   # 重新安裝 Bun
   curl -fsSL https://bun.sh/install | bash
   ```

2. **API Key 設置**:
   - 確保 `.env.local` 檔案存在
   - 從 Etherscan/BSCScan 取得有效 API key

3. **CORS 問題**:
   - 確保 API 路由正確設置
   - 檢查 Next.js 設定檔

4. **TypeScript 錯誤**:
   ```bash
   # 重新建立 TypeScript 快取
   rm -rf .next
   bun run dev
   ```

## 下一步

完成基礎設置後，請參考：

1. [Data Model](./data-model.md) - 了解資料結構
2. [API Contracts](./contracts/api-spec.md) - API 介面規格
3. [Feature Specification](./spec.md) - 完整功能規格
