const path = require(
    "path"
);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "standalone",
    experimental: {
        typedRoutes: true,
        outputFileTracingRoot: path.join(
            __dirname,
            "../../"
        ),
        appDir: true,
        serverComponentsExternalPackages: [ 'mongodb' ],
    },
};

module.exports = nextConfig;
