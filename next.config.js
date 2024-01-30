/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'media.geeksforgeeks.org',
      'e7.pngegg.com',
      'w7.pngwing.com',
      'cdn.icon-icons.com',
      'horizon-health.org',
      'www.atatus.com',
      'www.freecodecamp.org',
      'res.cloudinary.com',
      'xerosource.com',
      'nextjs.org',
    ],
  },
};

module.exports = nextConfig;
