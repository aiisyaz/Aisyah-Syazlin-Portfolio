/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/AisyahSyazlin-Portfolio' : '',
  assetPrefix: isProd ? '/AisyahSyazlin-Portfolio/' : '',
  experimental: {
    turbo: false,
  },
};

module.exports = nextConfig;
