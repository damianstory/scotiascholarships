/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@v1/ui"],
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;