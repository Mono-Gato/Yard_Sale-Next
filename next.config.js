/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.lorem.space', 'images.pexels.com'],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
});

module.exports = withPWA(nextConfig);