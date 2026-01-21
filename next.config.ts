/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Aisyah-Syazlin-Portfolio';

const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: { unoptimized: true },
  basePath: isProd ? '/Aisyah-Syazlin-Portfolio' : '',
  assetPrefix: isProd ? '/Aisyah-Syazlin-Portfolio/' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
