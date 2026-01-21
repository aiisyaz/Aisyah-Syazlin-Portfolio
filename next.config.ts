/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Aisyah-Syazlin-Portfolio';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: "/Aisyah-Syazlin-Portfolio",
  assetPrefix: "/Aisyah-Syazlin-Portfolio",
  trailingSlash: true
};

module.exports = nextConfig;
