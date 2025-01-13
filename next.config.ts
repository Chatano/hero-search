import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'i.annihil.us',
      },
    ],
  },
  experimental: {
    staleTimes: {
      dynamic: 60 * 5 // 5 min
    }
  }
}

export default nextConfig
