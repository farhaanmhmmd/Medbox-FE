/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["128.199.129.20"],
  },
};

module.exports = nextConfig;
