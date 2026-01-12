/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: "./",
  },
  experimental: {
    turbo: false,
  },
};
