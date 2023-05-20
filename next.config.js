/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    appDir: true,
    serverComponentsExternalPackages: [ "mongodb" ],
  },
};

module.exports = nextConfig;
