/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.leonardo.ai',
      'kaporelo.com',
      'facialix.com',
      'images.unsplash.com',
      'picsum.photos',
      'via.placeholder.com',
      'files.oaiusercontent.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig; 