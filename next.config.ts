/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/Aisyah-Syazlin-portfolio' : '',
  assetPrefix: isProd ? '/Aisyah-Syazlin-portfolio/' : '',
};

module.exports = nextConfig;