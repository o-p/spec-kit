import axios, { AxiosInstance, AxiosError } from 'axios'
import { NetworkType, Contract, NetworkConfig } from './types'

export interface EtherscanResponse {
  status: string
  message: string
  result: any
}

export interface ContractSourceResponse {
  SourceCode: string
  ABI: string
  ContractName: string
  CompilerVersion: string
  OptimizationUsed: string
  Runs: string
  ConstructorArguments: string
  EVMVersion: string
  Library: string
  LicenseType: string
  Proxy: string
  Implementation: string
  SwarmSource: string
}

export class EtherscanClient {
  private clients: Map<NetworkType, AxiosInstance> = new Map()
  private readonly retryAttempts = 3
  private readonly retryDelay = 1000 // 1 second

  constructor() {
    this.initializeClients()
  }

  private initializeClients(): void {
    const networks: Record<NetworkType, NetworkConfig> = {
      ethereum: {
        id: 'ethereum',
        name: 'Ethereum Mainnet',
        chainId: 1,
        explorerUrl: 'https://etherscan.io',
        apiUrl: 'https://api.etherscan.io/api',
        enabled: true
      },
      bsc: {
        id: 'bsc',
        name: 'BNB Smart Chain',
        chainId: 56,
        explorerUrl: 'https://bscscan.com',
        apiUrl: 'https://api.bscscan.com/api',
        enabled: true
      }
    }

    Object.entries(networks).forEach(([network, config]) => {
      const client = axios.create({
        baseURL: config.apiUrl,
        timeout: 10000, // 10 seconds
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Web3ContractAnalyzer/1.0'
        }
      })

      // Add request interceptor for API key
      client.interceptors.request.use((config) => {
        const apiKey = network === 'ethereum'
          ? process.env.ETHERSCAN_API_KEY
          : process.env.BSC_API_KEY

        if (apiKey) {
          config.params = { ...config.params, apikey: apiKey }
        }

        return config
      })

      // Add response interceptor for error handling
      client.interceptors.response.use(
        (response) => response,
        (error: AxiosError) => {
          console.error(`Etherscan API error for ${network}:`, error.message)
          return Promise.reject(error)
        }
      )

      this.clients.set(network as NetworkType, client)
    })
  }

  private async withRetry<T>(
    operation: () => Promise<T>,
    attempts: number = this.retryAttempts
  ): Promise<T> {
    try {
      return await operation()
    } catch (error) {
      if (attempts > 1) {
        await new Promise(resolve => setTimeout(resolve, this.retryDelay))
        return this.withRetry(operation, attempts - 1)
      }
      throw error
    }
  }

  async getContractSource(
    address: string,
    network: NetworkType
  ): Promise<ContractSourceResponse[]> {
    const client = this.clients.get(network)
    if (!client) {
      throw new Error(`Unsupported network: ${network}`)
    }

    return this.withRetry(async () => {
      const response = await client.get<EtherscanResponse>('', {
        params: {
          module: 'contract',
          action: 'getsourcecode',
          address: address
        }
      })

      if (response.data.status !== '1') {
        throw new Error(`Etherscan API error: ${response.data.message}`)
      }

      return response.data.result as ContractSourceResponse[]
    })
  }

  async isContract(address: string, network: NetworkType): Promise<boolean> {
    const client = this.clients.get(network)
    if (!client) {
      throw new Error(`Unsupported network: ${network}`)
    }

    return this.withRetry(async () => {
      const response = await client.get<EtherscanResponse>('', {
        params: {
          module: 'proxy',
          action: 'eth_getCode',
          address: address,
          tag: 'latest'
        }
      })

      if (response.data.status !== '1') {
        return false
      }

      const code = response.data.result
      return code && code !== '0x' && code.length > 2
    })
  }

  getNetworkConfig(network: NetworkType): NetworkConfig {
    const configs: Record<NetworkType, NetworkConfig> = {
      ethereum: {
        id: 'ethereum',
        name: 'Ethereum Mainnet',
        chainId: 1,
        explorerUrl: 'https://etherscan.io',
        apiUrl: 'https://api.etherscan.io/api',
        enabled: true
      },
      bsc: {
        id: 'bsc',
        name: 'BNB Smart Chain',
        chainId: 56,
        explorerUrl: 'https://bscscan.com',
        apiUrl: 'https://api.bscscan.com/api',
        enabled: true
      }
    }

    return configs[network]
  }

  getAllNetworkConfigs(): NetworkConfig[] {
    return [
      this.getNetworkConfig('ethereum'),
      this.getNetworkConfig('bsc')
    ]
  }
}
