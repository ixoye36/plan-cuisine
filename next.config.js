const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    }
  },
  images: {
    domains: ['cuisineplan.fr'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets-eu-01.kc-usercontent.com',
      },
    ],
  },
}

module.exports = nextConfig
