/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    experimental: {
        typedRoutes: true,
        serverActions: true,
        appDir: true,
        serverComponentsExternalPackages: [ 'mongodb' ],
    },
};

module.exports = nextConfig;
