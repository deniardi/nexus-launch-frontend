import { Chain } from 'viem'

interface ChainConfig {
  apiBaseUrl: string
  wsBaseUrl: string
  blockscoutUrl: string
  dexTarget: number
  contractAddresses: string[]
}

interface ChainConfigs {
  [chainId: number]: ChainConfig
}

// Nexus Testnet3 Custom Chain Definition
const nexusTestnet: Chain = {
  id: 3945,
  name: 'Nexus Testnet3',
  nativeCurrency: {
    name: 'Nexus',
    symbol: 'NEX',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://testnet.rpc.nexus.xyz'] },
    public: { http: ['https://testnet.rpc.nexus.xyz'] },
  },
  blockExplorers: {
    default: { name: 'Nexus Blockscout', url: 'https://nexus.testnet.blockscout.com' },
  },
  testnet: true,
}

// Nexus Testnet3 Chain Configuration
const nexusTestnetConfig: ChainConfig = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL!,
  wsBaseUrl: process.env.NEXT_PUBLIC_WS_BASE_URL!,
  blockscoutUrl: process.env.NEXT_PUBLIC_BLOCKSCOUT_URL!,
  dexTarget: Number(process.env.NEXT_PUBLIC_DEX_TARGET),
  contractAddresses: [
    process.env.NEXT_PUBLIC_BONDING_CURVE_MANAGER_ADDRESS!,
    process.env.NEXT_PUBLIC_BONDING_CURVE_MANAGER_ADDRESS_OLD!,
    process.env.NEXT_PUBLIC_BONDING_CURVE_MANAGER_ADDRESS_OLD1!,
  ].filter(Boolean)
}

// Chain configurations mapped by chainId
export const chainConfigs: ChainConfigs = {
  [nexusTestnet.id]: nexusTestnetConfig,
}

// Supported chains for the application
export const supportedChains: Chain[] = [nexusTestnet]

// Helper function to get chain configuration by chainId
export const getChainConfig = (chainId: number): ChainConfig | undefined => {
  return chainConfigs[chainId]
}

// Helper function to get current active contract address for a chain
export const getActiveContractAddress = (chainId: number): string | undefined => {
  const config = chainConfigs[chainId]
  return config?.contractAddresses[0] // Returns the most recent contract address
}
