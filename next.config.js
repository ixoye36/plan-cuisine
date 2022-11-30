const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    }
  },
  images: {
    domains: ['assets-eu-01.kc-usercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cuisineplan.fr',
      },
    ],
  },
}

module.exports = nextConfig
