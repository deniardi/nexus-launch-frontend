# Nexus Launch - Frontend

Frontend aplikasi Nexus Launch untuk mempermudah launching token dengan bonding curve di Nexus Testnet3.

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Web3**: wagmi, viem, RainbowKit
- **Charts**: Chart.js, Lightweight Charts
- **UI**: Radix UI, Headless UI

## Environment Variables

Copy `.env.local` dan isi dengan:

```env
# API Configuration
NEXT_PUBLIC_API_BASE_URL=https://nexus-launch-backend.onrender.com
NEXT_PUBLIC_BLOCKSCOUT_URL=https://nexus.testnet.blockscout.com

# Contract Addresses (Nexus Testnet3)
NEXT_PUBLIC_BONDING_CURVE_MANAGER_ADDRESS=0x6FEbfa0222E30Bd7B2a8e2d3037bD958dD9a87A7
NEXT_PUBLIC_UNISWAP_ROUTER_ADDRESS=0x4b626265306f5f2AC45054Ac6C64B96716e37211
NEXT_PUBLIC_UNISWAP_FACTORY_ADDRESS=0xE60aD5e463C97F68d5227F7A79769f3f5ac2a531
NEXT_PUBLIC_WNX_ADDRESS=0xf021671f986ff1d07B867CCC4Bb9D39B8336D9b

# DEX Configuration
NEXT_PUBLIC_DEX_TARGET=100

# Domain
NEXT_PUBLIC_DOMAIN=nexus-launch.vercel.app
```

## Installation

```bash
npm install
# atau
bun install
```

## Development

```bash
npm run dev
# atau
bun run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

## Features

- 🚀 Launch token dengan bonding curve
- 📊 Chart harga real-time
- 💰 Trading interface
- 🔍 Token discovery
- 👤 Profile page
- 💬 Chat features

## Deployment

Frontend ini di-deploy di: https://nexus-launch.vercel.app (setelah deploy)

Backend API: https://nexus-launch-backend.onrender.com

## License

MIT
