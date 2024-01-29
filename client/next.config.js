/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['media.geeksforgeeks.org', 'static.vecteezy.com'],
  },
};

module.exports = nextConfig;
