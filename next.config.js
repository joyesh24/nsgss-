/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  i18n: {
    locales: ['bn'],
    defaultLocale: 'bn',
  },
}

module.exports = nextConfig

