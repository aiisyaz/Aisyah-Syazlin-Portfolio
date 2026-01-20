/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/AisyahSyazlin-portfolio' : '',
  assetPrefix: isProd ? '/AisyahSyazlin-portfolio/' : '',
};

module.exports = nextConfig;