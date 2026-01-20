const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/Aisyah-Syazlin-Portfolio' : '',
  assetPrefix: isProd
    ? 'https://aiisyaz.github.io/Aisyah-Syazlin-Portfolio/'
    : '/',
};

module.exports = nextConfig;
