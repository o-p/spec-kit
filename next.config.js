/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Reserved for future experimental features
  },
  env: {
    ETHERSCAN_API_KEY: process.env.ETHERSCAN_API_KEY,
    BSC_API_KEY: process.env.BSC_API_KEY
  },
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    ignoreDuringBuilds: false
  }
}

module.exports = nextConfig
