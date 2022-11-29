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
  },
}

module.exports = nextConfig
