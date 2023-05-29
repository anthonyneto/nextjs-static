/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    domains: ["rickandmortyapi.com"],
    unoptimized: true,
  }
};

module.exports = nextConfig;
