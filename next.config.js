/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  output: "standalone",
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  images: {
    domains: [
      "dvd6ljcj7w3pj.cloudfront.net",
      "prod-testvalley.s3.ap-northeast-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
